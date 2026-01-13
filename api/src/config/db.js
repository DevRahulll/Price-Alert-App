import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    if (db) {
      console.log("Database connection Successful");
    }
  } catch (error) {
    console.log("Error :" + error.message);
  }
};
