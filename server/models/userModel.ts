// Public libraries
import mongoose from "mongoose";
// Model Schema of user
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
      trim: true,
      maxLength: [20, "Your name is up to 20 char long"],
    },
    account: {
      type: String,
      required: [true, "Please add your email or phone"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please, add your password"],
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
    },
    role: {
      type: String,
      default: "user", // Admin
    },
    type: {
      type: String,
      default: "normal", //fast
    },
  },
  { timestamps: true }
);
// Export elements
export default mongoose.model("User", userSchema);
