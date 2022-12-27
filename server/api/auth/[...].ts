import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: 'your-secret-here',
  pages: {
    signIn: '/login',
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      id: 'credentials',
      name: 'Credentials',

      async authorize(credentials: any) {
        const payload = {
          username: credentials.username,
          password: credentials.password,
        }

        const res = await fetch(`${config.originUrl}/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const user = await res.json()

        if (res.ok && user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    // Props defined here can be accessed in session callback and will be returned by getToken
    jwt: ({
      token,
      account,
      user,
    }: {
      token: any
      account: any
      user: any
    }) => {
      if (account && user) {
        token.user = user
      }

      return token
    },

    // Session retuned by useSession and getSession
    session: ({ token, session }: { token: any; session: any }) => {
      if (token) {
        session.user = token.user
      }

      return session
    },
  },
})
