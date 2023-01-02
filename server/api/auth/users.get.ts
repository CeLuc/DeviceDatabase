import { getAllUsers } from '~/server/db/users'
import { userTransformer } from '~/server/transformers/user'

export default defineEventHandler(async () => {
  const users = await getAllUsers()
  const finalUsers: any[] | PromiseLike<any[]> = []

  if (users.length >= 1) {
    users.forEach((object) => {
      finalUsers.push(userTransformer(object))
    })
  }

  return finalUsers
})
