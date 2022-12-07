export const userTransformer = (user) => {
  return {
    id: user.id,
    fistname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    username: user.username,
    profileImage: user.profileImage
  }
}