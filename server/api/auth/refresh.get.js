import { getRefreshTokenByToken } from "~~/server/db/refreshTokens"
import { getUserById } from "~~/server/db/users"
import { decodeRefreshToken, generateTokens } from "~~/server/utils/jwt"

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, 'refresh_token')

  if(!refreshToken) {
    return sendError(evet, createError({
      statusCode: 401,
      statusMessage: 'Refresh Token is invalid'
    }))
  }

  const rToken = await getRefreshTokenByToken(refreshToken)

  if(!rToken) {
    return sendError(evet, createError({
      statusCode: 401,
      statusMessage: 'Refresh Token is invalid'
    }))
  }

  const token = decodeRefreshToken(refreshToken)

  try {
    const user = await getUserById(token.userId)

    const {accessToken} = generateTokens(user)

    return {
      access_token: accessToken
    }
  } catch (error) {
    return sendError(evet, createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    }))
  }

  return {
    hello: accessToken
  }
})