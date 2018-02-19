import * as React from "react";
import * as ReactDOM from "react-dom";

import Title from "./components/App";

ReactDOM.render(
  <Title compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);
