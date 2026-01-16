import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
});



export const User = model("Users", userSchema);
