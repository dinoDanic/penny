import React from "react";
import styles from "./month.module.scss";

const Months = ({ month }) => {
  const { code } = month;
  return (
    <div className={`item ${styles.month}`}>
      <div className={styles.name}>{code}</div>
      <div className={styles.bullet} />
    </div>
  );
};

export default Months;
