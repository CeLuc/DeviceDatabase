import { getAllUsers } from '~/server/db/users'
import { userTransformer } from '~/server/transformers/user'

export default defineEventHandler(async (event) => {
  const users = await getAllUsers(event)
  const finalUsers: any[] | PromiseLike<any[]> = []

  if (users.length >= 1) {
    users.forEach((object) => {
      finalUsers.push(userTransformer(object))
    })
  }

  return finalUsers
})
