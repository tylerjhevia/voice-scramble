import * as React from 'react';
const styles = require('../styles/Player.css');

interface IInternalProps {}

interface IState {}

export default class Player extends React.Component<IInternalProps, IState> {
  constructor(props: IInternalProps) {
    super(props);
  }

  render() {
    return <div className="player">X</div>;
  }
}
