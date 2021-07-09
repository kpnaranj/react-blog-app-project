// import public libraries
import jwt from "jsonwebtoken";
// Export active token
export const generateActiveToken = (payload: object) => {
  return jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SECRET}`, {
    expiresIn: "5m",
  });
};
// Export access token
export const generateAccessToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {
      expiresIn: "15m",
    });
  };
// Export refresh token
export const generateRefreshToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {
      expiresIn: "30d",
    });
  }