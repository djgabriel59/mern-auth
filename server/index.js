import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
