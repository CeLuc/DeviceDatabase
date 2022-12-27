import { usePrisma } from '@sidebase/nuxt-prisma'
import bcrypt from 'bcrypt'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createUser = (event: any, userData: any) => {
  const prisma = usePrisma(event)

  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  }

  return prisma.user.create({
    data: finalUserData,
  })
}

export const getAllUsers = (event: any) => {
  const prisma = usePrisma(event)

  return prisma.user.findMany()
}

export const getUserByUsername = (event: any, username: string) => {
  const prisma = usePrisma(event)

  return prisma.user.findUnique({
    where: {
      username,
    },
  })
}
