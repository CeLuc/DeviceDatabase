import UrlPattern from "url-pattern"
import { getUserById } from "../db/users"
import { decodeAccessToken } from "../utils/jwt"

export default defineEventHandler(async (event) =>{
  const endpoints = [
      '/api/auth/user'
  ]

  const isHandledByThisMiddleware = endpoints.some(endpoint => {
    const pattern = new UrlPattern(endpoint)

    return pattern.match(event.node.req.url)
  })

  if(!isHandledByThisMiddleware){
    return
  }

  const token = event.node.req.headers['authorization']?.split(' ')[1]
  
  const decoded = decodeAccessToken(token)

  if(!decoded){
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    }))
  }

  try {
    const userId = decoded.userId

    const user = await getUserById(userId)

    event.context.auth = { user }
  } catch (error) {
    return
  }
})