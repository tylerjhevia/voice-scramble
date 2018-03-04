import * as React from 'react';
import Game from './Game';
import Board from './Board';
import '../styles/App.css';

interface IProps {
  compiler: string;
  framework: string;
}

class App extends React.Component<IProps, {}> {
  render() {
    return (
      <main>
        <h1>Voice Scramble</h1>
        <Board boardSize={5} />
      </main>
    );
  }
}

export default App;
