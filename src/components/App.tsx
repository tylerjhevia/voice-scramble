import * as React from "react";
import Game from "./Game";

interface IProps {
  compiler: string;
  framework: string;
}

class App extends React.Component<IProps, {}> {
  render() {
    return (
      <main>
        <h1>Voice Scramble test</h1>
        <Game />
      </main>
    );
  }
}

export default App;
