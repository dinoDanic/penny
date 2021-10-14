import React from "react";
import { Route } from "react-router-dom";

import styles from "./app.module.scss";

import Timeline from "./components/time-line/time-line.component";
import CheckAuth from "./components/check-auth/check-auth.component";
import Auth from "./views/auth/auth.view";
import Expenses from "./views/expenses/expenses.component";

const App = () => {
  return (
    <>
      <CheckAuth />
      <div className={styles.app}>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/" component={Timeline} />
        <Route exact path="/" component={Expenses} />
      </div>
    </>
  );
};

export default App;
