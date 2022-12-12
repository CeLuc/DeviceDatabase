import { createUser, getUserByUsername } from '~~/server/db/users'
import { userTransformer } from '~~/server/transformers/user'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { username, password } = body

  if(!username|| !password){
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    )
  }

  const user = await getUserByUsername(event, username)
  if(!user) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Username or Password is invalid" })
    )
  }

  const doesPasswordsMatch = await bcrypt.compare(password, user.password)
  if(!doesPasswordsMatch){
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Username or Password is invalid" })
    )
  }

  return {
    body: userTransformer(user)
  }
})
