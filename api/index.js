import express from "express";
import authRoutes from "./routes/auth.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/auth/user", authRoutes);

app.listen(3000, () => {
  console.log("server is running");
});
