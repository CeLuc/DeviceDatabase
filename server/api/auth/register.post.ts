import { createUser, getUserByUsername } from '~~/server/db/users'
import { userTransformer } from '~~/server/transformers/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { firstname, lastname, username, password, repeatPassword } = body
  let { settings } = body

  if (!username || !firstname || !lastname || !password || !repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    )
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Passwords do not match' })
    )
  }

  const searchedUsername = await getUserByUsername(event, username)

  if (searchedUsername != null) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Username already exists' })
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

  const user = await createUser(event, userData)

  return {
    body: userTransformer(user),
  }
})
