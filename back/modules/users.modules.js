import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

export const Users = mongoose.model("users", userSchema);
