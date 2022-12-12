export const userTransformer = (user: any) => {
  return {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    profilepicture: user.profilepicture
  }
}