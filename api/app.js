import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(morgan("dev"));
app.use("/api/v1/user", userRouter);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running at port 3000");
});
