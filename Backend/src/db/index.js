// src/db/index.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants";

dotenv.config();

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI not found in .env");
    }

    const connectionInstance = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
