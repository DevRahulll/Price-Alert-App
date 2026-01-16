import { User } from "../models/user.js";
import { hashPassword, validatePassword } from "../lib/hash.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getJwt } from "../lib/token.js";

const cookiesOption = {
  maxAge: 3 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: true,
};

export async function registerUser(req, res) {
  const { firstName, lastName, email, password, mobileNumber } = req.body;

  try {
    if (!firstName || !lastName || !email || !password || !mobileNumber) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }
    const passwordHash = await hashPassword(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
      mobileNumber,
    });
    await user.save();

    return res.status(200).json({
      success: true,
      message: "User Registered successfully!",
      user,
    });
  } catch (error) {
    throw new Error("Cannot register a user");
  }
}

export async function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(404).send("All fileds are required");
  }

  const user = await User.findOne({email});
  if (!user) {
    return res.status(400).send("User doesn't exist!");
  }
  const userPassword = validatePassword(password, user.password);

  if (!userPassword) {
    return res.status(400).send("Invalid Credentials");
  }
  const token = getJwt(user._id);
  res.cookie("token", token, cookiesOption);
  return res.status(201).json({
    success: true,
    message: "User LoggedIn Successfully!!",
    user,
  });
}
