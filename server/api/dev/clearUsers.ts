import { prisma } from '~/server/db'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  const userRes = await fetch(`${config.originUrl}/api/auth/user`, {
    method: 'GET',
  })
  const userList = await userRes.json()
  const idList: any[] = []

  userList.forEach((element: { id: String }) => {
    idList.push(element.id)
  })

  const users = await prisma.user.deleteMany({
    where: {
      id: {
        in: idList,
      },
    },
  })

  return { users }
})
