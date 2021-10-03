import React from "react";
import { Route } from "react-router-dom";

import styles from "./app.module.scss";

import Timeline from "./components/time-line/time-line.component";

const App = () => {
  return (
    <div className={styles.app}>
      <Route path="/" component={Timeline} />
    </div>
  );
};

export default App;
