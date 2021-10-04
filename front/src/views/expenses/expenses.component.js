import React from "react";

import { userData } from "../../mock/user.data";
import Expense from "./expense/expense.component";

const Expenses = () => {
  const { expenseType } = userData;
  return (
    <div>
      {expenseType.map((expense) => (
        <Expense expense={expense} />
      ))}
    </div>
  );
};

export default Expenses;
