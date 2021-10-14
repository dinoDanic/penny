import React, { useState } from "react";

const NewExpense = () => {
  const [expense, setExpense] = useState({
    name: "",
    startFrom: 1,
    monthlyBills: [
      { month: 1, value: null, date: null, paid: false },
      { month: 2, value: null, date: null, paid: false },
      { month: 3, value: null, date: null, paid: false },
      { month: 4, value: null, date: null, paid: false },
      { month: 5, value: null, date: null, paid: false },
      { month: 6, value: null, date: null, paid: false },
      { month: 7, value: null, date: null, paid: false },
      { month: 8, value: null, date: null, paid: false },
      { month: 9, value: null, date: null, paid: false },
      { month: 10, value: null, date: null, paid: false },
      { month: 11, value: null, date: null, paid: false },
      { month: 12, value: null, date: null, paid: false },
    ],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      new Expense
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewExpense;
