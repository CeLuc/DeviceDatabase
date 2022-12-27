declare module 'next-auth' {
  interface Session {
    user: {
      id: String
      username: String
      firstname: String
      lastname: String
      profilePicture: String
      settings: Json
    }
  }
}
