import { createUser, getUserByUsername } from '~~/server/db/users'
import { userTransformer } from '~~/server/transformers/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { firstname, lastname, username, password, repeatPassword } = body

  if(!username || !firstname || !lastname || !password || !repeatPassword){
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    )
  }

  if(password !== repeatPassword){
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    )
  }

  const searchedUsername = await getUserByUsername(event, username)

  if(searchedUsername) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Username already exists" })
    )
  }

  const userData = {
    firstname,
    lastname,
    username,
    password
  }

  const user = await createUser(event, userData)

  return {
    body: userTransformer(user)
  }
})
