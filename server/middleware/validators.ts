// Import req, res, next from express
import { Request, Response, NextFunction } from "express";
// obtain validator registration
export const validRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Destructure elements of registration
  const { name, account, password } = req.body;
  // check if there is name
  if (!name) {
    return res.status(400).json({ message: "Please, add your name" });
  }
  // check if there is email
  if (!account) {
    return res
      .status(400)
      .json({ message: "Please, add your email or phone number" });
  } else if (!validatePhone(account) && !validateEmail(account)) {
    return res
      .status(400)
      .json({ message: "Email or phone number formal is incorrect " });
  }
  // check if password length is lower than 6 characters
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 chars." });
  }
  // Now if validator is correct go to next function
  next();
};
// Validate phone number
function validatePhone(phone: String) {
  const re = /^[+]/g;
  return re.test(String(phone));
}
// Validate email address
function validateEmail(email: String) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
