import React from "react";
import styles from "./expense.module.scss";

import Bill from "./bill/bill.component";

const Expense = ({ expense }) => {
  const { name, monthlyBills, startFrom } = expense;
  return (
    <div className="grid">
      <div className="left">
        <div className={styles.name}>{name}</div>
      </div>
      <div className={`middle ${styles.expenses}`}>
        {monthlyBills.map((bill) => (
          <Bill bill={bill} startFrom={startFrom} />
        ))}
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Expense;
