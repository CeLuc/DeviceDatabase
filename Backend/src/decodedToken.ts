const jwt = require("jsonwebtoken");
const decodedToken = (req: any, requireAuth = true) => {
  const header = req.req.headers.authorization;

  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded = jwt.verify(
      token,
      "K6yhWTXMgPUYUBVACZUqQm4OjV6qOf9e4WcsmuColvGOqMNaSFHGvji69ngKpA"
    );
    return decoded;
  }
  if (requireAuth) {
    throw new Error("Login in to access resource");
  }
  return null;
};
module.exports = { decodedToken };
