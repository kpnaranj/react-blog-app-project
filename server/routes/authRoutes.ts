// Import private libraries
import express from "express";
// Import public libraries
import authCtrl from "../controllers/authCtrl";
import { validRegister } from "../middleware/validators";
// From express obtain the router of the element
const router = express.Router();
// Routes CRUD
router.post("/register", validRegister, authCtrl.register);
//export routes
export default router;
