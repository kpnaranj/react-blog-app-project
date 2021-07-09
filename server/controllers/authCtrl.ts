// Import public libraries
import { Request, Response } from "express";
import Users from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import private libraries
import { generateActiveToken } from "../config/generateToken";
// Import private libraries
const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      // Destructure request body
      const { name, account, password } = req.body;
      // And find if user is already registered
      const user = await Users.findOne({ account });
      // If user is not found, then it already exist
      if (user) {
        return res
          .status(400)
          .json({ message: "Email or Phone number already exist" });
      }
      // otherwise we can create a hash password
      const passwordHash = await bcrypt.hash(password, 12);
      // And create a new user with data
      const newUser = {
        name,
        account,
        password: passwordHash,
      };
      // Obtain active token
      const active_token = generateActiveToken({newUser});

      res.json({
        status: "OK",
        message: "Registered succesfully",
        data: newUser,
        token: active_token,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
// export authentication results
export default authCtrl;
