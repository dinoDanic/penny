import React from "react";

import { months } from "./months";

import styles from "./time-line.module.scss";

import Month from "./month/month.component";
// import Container from "../../theme/ui-components/container.component";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.months}>
        {months.map((month) => (
          <Month month={month} key={month.id} />
        ))}
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default Timeline;
