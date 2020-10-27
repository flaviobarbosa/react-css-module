import React from "react";

import classes from "./Styles.module.css";

const DivWithCssModule = (props) => {
  return (
    <div className={classes.Div}>
      <h1>Hello CodeSandbox</h1>
      <h2>Using css module</h2>
    </div>
  );
};

export default DivWithCssModule;
