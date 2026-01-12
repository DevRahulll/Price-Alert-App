import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
const app = express();

app.use(express.json());
dotenv.config();

app.listen(3000, () => {
  connectDB();
  console.log("Server is running at port 3000");
});
