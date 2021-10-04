import React, { useEffect, useState } from "react";
import styles from "./bill.module.scss";

const CURRENT_MONTH = 6;

const Bill = ({ bill, startFrom }) => {
  const { value, paid, month } = bill;
  const [visible, setVisible] = useState(1);
  const [state, setState] = useState("");

  useEffect(() => {
    if (CURRENT_MONTH < month) {
      setVisible(0.01);
    }
  }, [month]);

  useEffect(() => {
    if (startFrom > month) {
      setState("neutral");
      return;
    }
    if (!value) {
      setState("neutral");
    }
    if (!paid && value) {
      setState("notPaid");
    }
    if (paid) setState("paid");
  }, [paid, value]);

  return (
    <>
      {visible && (
        <div className="item">
          <div
            className={`${styles.bill} ${styles[state]}`}
            style={{ opacity: visible }}
          >
            {value}
            <div className={styles.line} />
          </div>
        </div>
      )}
    </>
  );
};

export default Bill;
