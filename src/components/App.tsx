import * as React from "react";

interface IProps {
  compiler: string;
  framework: string;
}

class App extends React.Component<IProps, {}> {
  render() {
    return <h1>Voice Scramble test </h1>;
  }
}

export default App;
