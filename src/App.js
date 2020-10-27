import React from "react";
import DivWithCssModule from "./DivWithCssModule";
import DivWithoutCssModule from "./DivWithoutCssModule";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DivWithCssModule />
      <DivWithoutCssModule />
    </div>
  );
}
