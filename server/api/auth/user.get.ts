import { getUserByUsername } from '~/server/db/users'
import { userTransformer } from '~/server/transformers/user'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { username } = query
  const user = await getUserByUsername(event, username)

  if (user == null) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: 'User does not exist',
      })
    )
  }

  return userTransformer(user)
})
