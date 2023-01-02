import bcrypt from 'bcrypt'
import { prisma } from '.'

export const createUser = (userData: any) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  }

  return prisma.user.create({
    data: finalUserData,
  })
}

export const getAllUsers = () => prisma.user.findMany()

export const getUserByUsername = (username: any) =>
  prisma.user.findUnique({
    where: {
      username,
    },
  })
