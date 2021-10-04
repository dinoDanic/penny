import React from "react";
import { Route } from "react-router-dom";

import styles from "./app.module.scss";

import Timeline from "./components/time-line/time-line.component";
import Expenses from "./views/expenses/expenses.component";

const App = () => {
  return (
    <div className={styles.app}>
      <Route path="/" component={Timeline} />
      <Route path="/" component={Expenses} />
    </div>
  );
};

export default App;
