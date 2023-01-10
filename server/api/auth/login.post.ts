import bcrypt from 'bcrypt'
import { getUserByUsername } from '~~/server/db/users'
import { userTransformer } from '~~/server/transformers/user'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)

  const { username, password } = body

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    )
  }

  const user = await getUserByUsername(username)
  if (user == null) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'Username or Password is invalid',
      })
    )
  }

  const doesPasswordsMatch = await bcrypt.compare(password, user.password)
  if (!doesPasswordsMatch) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'Username or Password is invalid',
      })
    )
  }

  return userTransformer(user)
})
