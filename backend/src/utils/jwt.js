import jwt from "jsonwebtoken";
export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "24h",
  });
};
