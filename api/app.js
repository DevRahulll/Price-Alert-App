import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";
const app = express();

app.use(express.json());
dotenv.config();

app.use("/api/v1/user", userRouter);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running at port 3000");
});
