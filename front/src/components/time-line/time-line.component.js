import React from "react";

import { months } from "./month/months";

import styles from "./time-line.module.scss";

import Month from "./month/month.component";
// import Container from "../../theme/ui-components/container.component";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <div className="grid">
        <div className="left" />
        <div className="middle">
          {months.map((month) => (
            <Month month={month} key={month.id} />
          ))}
          <div className={styles.line} />
        </div>
        <div className="right" />
      </div>
    </div>
  );
};

export default Timeline;
