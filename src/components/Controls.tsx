import * as React from "react";
import "../styles/Controls.css";

interface IProps {
  resetGame: Function;
  updateGuess: Function;
  submitGuess: Function;
}

export default class Controls extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    const { resetGame, updateGuess, submitGuess } = this.props;

    return (
      <section className="controls">
        <input
          placeholder="Enter guess"
          className="current-guess"
          onChange={(e: any) => updateGuess(e)}
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
