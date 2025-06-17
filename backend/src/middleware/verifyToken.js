import jwt from "jsonwebtoken";
import "dotenv/config";
import cookieParser from "cookie-parser";
// Validating JWT
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({
      msg: "Unauthorized",
    });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }
    req.user = decoded;
    next();
  });
};
export default verifyToken;
