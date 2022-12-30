import { getAllUsers } from '~/server/db/users'
import { userTransformer } from '~/server/transformers/user'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const users = await getAllUsers(event)
  const finalUsers = []

  if (users.length >= 1) {
    users.forEach((object) => {
      finalUsers.push(userTransformer(object))
    })
  }

  return finalUsers
})
