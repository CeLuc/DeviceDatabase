import { prisma } from '~/server/db'

const startupTime = new Date()

const handler = eventHandler(async () => {
  try {
    await prisma.$queryRaw`SELECT 1;`
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'DB failed initialization check',
    })
  }

  return {
    status: 'healthy',
    time: new Date(),
    startupTime,
    nuxtAppVersion: useRuntimeConfig().version || 'unknown',
  }
})

export type HealthCheckData = Awaited<ReturnType<typeof handler>>
export default handler
