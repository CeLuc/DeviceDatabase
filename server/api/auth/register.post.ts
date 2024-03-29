import { createUser, getUserByUsername } from '~~/server/db/users'
import { userTransformer } from '~~/server/transformers/user'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  const passwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/

  const { firstname, lastname, username, password, repeatPassword } = body
  let { settings } = body

  if (!username || !firstname || !lastname || !password || !repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    )
  }

  const searchedUsername = await getUserByUsername(username)

  if (searchedUsername != null) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Username already exists' })
    )
  }

  if (!passwdRegex.test(password)) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Password does not match security requirements',
      })
    )
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Passwords do not match' })
    )
  }
  if (!settings) {
    settings = {
      colorTheme: 'system',
      sidebarCollapsed: false,
      lang: 'de',
    }
  }

  const userData = {
    firstname,
    lastname,
    username,
    password,
    settings,
  }

  const user = await createUser(userData)

  return userTransformer(user)
})
