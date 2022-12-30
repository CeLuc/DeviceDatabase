import { usePrisma } from '@sidebase/nuxt-prisma'
import type { H3Event } from 'h3'
import bcrypt from 'bcrypt'

export const createUser = (event: H3Event, userData: any) => {
  const prisma = usePrisma(event)

  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  }

  return prisma.user.create({
    data: finalUserData,
  })
}

export const getAllUsers = (event: H3Event) => {
  const prisma = usePrisma(event)

  return prisma.user.findMany()
}

export const getUserByUsername = (event: H3Event, username: any) => {
  const prisma = usePrisma(event)

  return prisma.user.findUnique({
    where: {
      username,
    },
  })
}
