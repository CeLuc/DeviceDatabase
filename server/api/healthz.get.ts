import { usePrisma } from '@sidebase/nuxt-prisma'

const runtimeConfig = useRuntimeConfig()
const startupTime = new Date()

const handler = eventHandler(async (event) => {
  const prisma = usePrisma(event)
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
    nuxtAppVersion: runtimeConfig.version || 'unknown',
  }
})

export type HealthCheckData = Awaited<ReturnType<typeof handler>>
export default handler
