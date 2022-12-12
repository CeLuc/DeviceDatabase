import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from "next-auth/providers/credentials"

// import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
  providers: [
    // GithubProvider({
      //    clientId: 'enter-your-client-id-here',
      //    clientSecret: 'enter-your-client-secret-here'
      // })
    // @ts-ignore Import is exsported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch("/api/auth/login", {
          method: 'POST',
          body: credentials,
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
})
