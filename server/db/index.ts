import Prisma from '@prisma/client'

const { PrismaClient } = Prisma

const prisma = new PrismaClient()

// eslint-disable-next-line import/prefer-default-export
export { prisma }
