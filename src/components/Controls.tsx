import * as React from "react";
import "../styles/Controls.css";

interface IProps {
  resetGame: Function;
  updateGuess: Function;
  submitGuess: Function;
  checkKey: Function;
  currentGuess: string;
}

export default class Controls extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    const {
      resetGame,
      updateGuess,
      submitGuess,
      currentGuess,
      checkKey
    } = this.props;

    return (
      <section className="controls">
        <input
          placeholder="Enter guess"
          className="current-guess"
          onChange={(e: any) => updateGuess(e)}
          onKeyPress={e => checkKey(e)}
          value={currentGuess}
        />

        <button className="reset" onClick={() => resetGame()}>
          Reset
        </button>

        <button className="submit" onClick={() => submitGuess()}>
          Submit Guess
        </button>
      </section>
    );
  }
}
