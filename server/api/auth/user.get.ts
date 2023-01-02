import { getUserByUsername } from '~/server/db/users'
import { userTransformer } from '~/server/transformers/user'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event)
  const { username } = query
  const user = await getUserByUsername(username)

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
