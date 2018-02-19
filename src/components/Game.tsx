import * as React from "react";
import Controls from "./Controls";
const words = require("word-list-json");
import "../styles/Game.css";

interface IProps {}

interface IState {
  answer: string;
  currentGuess: string;
}

export default class Game extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      answer: "",
      currentGuess: ""
    };
    this.fiveLetterGame = this.fiveLetterGame.bind(this);
    this.chooseRandomWord = this.chooseRandomWord.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.updateGuess = this.updateGuess.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
  }
  componentDidMount() {
    this.fiveLetterGame();
  }

  fiveLetterGame(): void {
    const wordPool = words.filter((word: string) => word.length === 5);
    this.chooseRandomWord(wordPool);
  }

  chooseRandomWord(words: string[]): void {
    const randomIndex = Math.round(Math.random() * words.length);
    const randomWord = words[randomIndex];

    console.log("random word: ", randomWord);
    this.setState({ answer: randomWord });
  }

  // add method to display jumbled word

  updateGuess(e: any) {
    this.setState({ currentGuess: e.target.value });
  }

  submitGuess() {
    const currentGuess = this.state.currentGuess;
    const answer = this.state.answer;
    if (currentGuess === answer) {
      alert("Correct!");
      this.resetGame();
    } else {
      alert("Wrong! Guess again.");
    }
  }

  resetGame() {
    this.fiveLetterGame();
  }

  render(): JSX.Element {
    return (
      <section className="game">
        <h3>Unscramble this word!</h3>
        <Controls
          resetGame={this.resetGame}
          updateGuess={this.updateGuess}
          submitGuess={this.submitGuess}
        />
      </section>
    );
  }
}
