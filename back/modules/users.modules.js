import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expenses" }],
});

export const Users = mongoose.model("users", userSchema);
