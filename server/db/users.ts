import { usePrisma } from '@sidebase/nuxt-prisma'
import bcrypt from 'bcrypt'

export const createUser = (event, userData) => {
  const prisma = usePrisma(event)

  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10)
  }

  return prisma.user.create({
    data: finalUserData
  })
}

export const getAllUsers = (event) => {
  const prisma = usePrisma(event)

  return prisma.user.findMany()
}

export const getUserByUsername = (event, username) => {
  const prisma = usePrisma(event)

  return prisma.user.findUnique({
    where: {
      username
    }
  })
}
