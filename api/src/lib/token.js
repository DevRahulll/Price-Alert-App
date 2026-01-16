import jwt from "jsonwebtoken";



export function getJwt(userId) {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });
  return token;
}
