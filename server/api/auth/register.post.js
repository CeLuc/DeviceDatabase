import { createUser } from "../../db/users";
import { userTransformer } from "~~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, email, firstname, lastname, password, repeatPassword } = body;

  if (!username || !email || !firstname || !lastname || !password || !repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  if(password !== repeatPassword){
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    ); 
  }

  const userData = {
    username,
    email,
    password,
    firstname,
    lastname,
    profileImage: 'https://picsum.photos/400/400'
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
