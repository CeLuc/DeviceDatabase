import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";
const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: "your-secret-here",
  pages: {
    signIn: "/login",
  },
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "(hint: jsmith)",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "(hint: hunter2)",
        },
      },
      // profile(profile, tokens) {
      //   return {
      //     id: String,
      //     username: String,
      //     firstname: String,
      //     lastname: String,
      //     settings: JSON,
      //   }
      // },
      async authorize(credentials: any) {
        const payload = {
          username: credentials.username,
          password: credentials.password,
        };

        const res = await fetch(config.originUrl + "/api/auth/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
      profile(profile, tokens) {
        return {
           profile
        }
      },
    }),
  ],
  callbacks: {
    // Props defined here can be accessed in session callback and will be returned by getToken
     jwt: ({ token, account, user }) => {
       if (account && user) {
         token.user = user
       }
 
       return token
     },
     
     // Session retuned by useSession and getSession
     session: ({ token, session }) => {
       if (token) {
         session.user = token.user
       }
 
       return session
     },
   },
});
