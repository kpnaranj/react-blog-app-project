// Setting up dotenv config
import dotenv from "dotenv";
dotenv.config();
// Import public libraries
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// Set up the application and variables
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
// Database 
import "./config/database"
// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello Kevin Narsh" });
});
// Server listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
