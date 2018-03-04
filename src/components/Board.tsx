import * as React from 'react';
import '../styles/Board.css';

import Square from './Square';

interface IState {
  boardSize: number;
}

interface IProps {
  boardSize: number;
}

export default class Board extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      boardSize: this.props.boardSize
    };
  }

  randomNumber() {
    return Math.round(Math.random() * (10 - 1) + 1);
  }

  randomizeContent() {
    const amount = this.state.boardSize * this.state.boardSize;
    const randoms = [];
    while (randoms.length < amount) {
      randoms.push(this.randomNumber());
    }
    return this.renderSquares(randoms);
  }

  renderSquares(randomContent: Array<number>): Array<JSX.Element> {
    return randomContent.map((item: number, i: number) =>
      <Square random={item} key={i} />
    );
  }

  render(): JSX.Element {
    return (
      <div className="board">
        {this.randomizeContent()}
      </div>
    );
  }
}
