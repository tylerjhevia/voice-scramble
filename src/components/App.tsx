import * as React from 'react';
import Game from './Game';
import '../styles/App.css';

interface IProps {}

class App extends React.Component<IProps, {}> {
  render() {
    return (
      <main>
        <h1>Scramble</h1>
        <Game />{' '}
      </main>
    );
  }
}

export default App;
