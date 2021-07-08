// Import mongose library
import mongoose from "mongoose";
// Store element to connect with mongoose server
const URI = process.env.MONGODB_URL;
// Run mongoose application
mongoose.connect(
  `${URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection");
  }
);
