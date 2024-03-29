export const userTransformer = (user: any) => ({
  id: user.id,
  firstname: user.firstname,
  lastname: user.lastname,
  username: user.username,
  profilepicture: user.profilepicture,
  settings: user.settings,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
})

export default userTransformer
