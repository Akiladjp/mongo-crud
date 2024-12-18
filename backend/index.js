import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import user  from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// const PORT = process.env.PORT || 8080;
// const MONGO_URL = process.env.MONGO_URL;

const PORT = 3000;
const MONGO_URL = "mongodb+srv://akilapiyumal11:akilapiyumal11@vehicle-hire.bvih3.mongodb.net/vehicle-hire?retryWrites=true&w=majority&appName=Vehicle-hire";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  app.use('/api', user);