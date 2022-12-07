import { getUserByUsername } from "~~/server/db/users";
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt"
import { userTransformer } from "~~/server/transformers/user";
import { createRefreshToken } from "~~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  // Is the User registered
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Username or Password is invalid" })
    );
  }

  // Compare Passwords
  const doesPasswordsMatch = await bcrypt.compare(password, user.password)

  if(!doesPasswordsMatch) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Username or Password is invalid" })
    );
  }


  // Generate Tokens
  // Access Token
  // Refresh Token
  const {accessToken, refreshToken} = generateTokens(user)


  // Save it inside db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id
  })


  // Add cookie
  sendRefreshToken(event, refreshToken)

  return {
    accessToken: accessToken, user: userTransformer(user)
  }
});
