import express from 'express'
import { getAllUsers, registerUser } from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/users", getAllUsers);

export default userRouter;

