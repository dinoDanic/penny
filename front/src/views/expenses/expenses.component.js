import React from "react";
import { useSelector } from "react-redux";

import Expense from "./expense/expense.component";
import NewExpense from "./expense/new-expense/new-expense.component";

const Expenses = () => {
  const expenses = useSelector((state) => state.expenses);
  return (
    <div>
      {expenses?.map((expense) => (
        <Expense expense={expense} />
      ))}
      <NewExpense />
    </div>
  );
};

export default Expenses;
