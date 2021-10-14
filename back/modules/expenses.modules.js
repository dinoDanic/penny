import mongoose from "mongoose";

const expensesSchema = mongoose.Schema({
  name: String,
  startFrom: Number,
  monthlyBills: [],
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
});

export const Expenses = mongoose.model("expenses", expensesSchema);
