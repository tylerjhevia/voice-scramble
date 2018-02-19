import * as React from "react";
import Controls from "./Controls";
const words = require("word-list-json");
import "../styles/Game.css";

interface IProps {}

interface IState {
  answer: string;
  currentGuess: string;
  scrambledAnswer: string;
}

export default class Game extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      answer: "",
      currentGuess: "",
      scrambledAnswer: ""
    };
    this.fiveLetterGame = this.fiveLetterGame.bind(this);
    this.chooseRandomWord = this.chooseRandomWord.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.updateGuess = this.updateGuess.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
    this.checkKey = this.checkKey.bind(this);
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
    this.scrambleWord(randomWord);
    this.setState({ answer: randomWord });
  }

  scrambleWord(word: string) {
    let splitWord = word.split("");
    const length = splitWord.length;
    for (let i = length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      var temp = splitWord[i];
      splitWord[i] = splitWord[j];
      splitWord[j] = temp;
    }
    this.setState({
      scrambledAnswer: splitWord.join("")
    });
  }

  updateGuess(e: any) {
    this.setState({ currentGuess: e.target.value });
  }

  checkKey(e: any): void {
    console.log(e.key);
    if (e.key === "Enter") {
      this.submitGuess();
    }
  }

  submitGuess(): void {
    const currentGuess = this.state.currentGuess;
    const answer = this.state.answer;
    if (currentGuess === answer) {
      alert("Correct!");
      this.resetGame();
    } else {
      alert("Wrong! Guess again.");
      this.setState({ currentGuess: "" });
    }
  }

  resetGame(): void {
    this.fiveLetterGame();
    this.setState({ currentGuess: "" });
  }

  render(): JSX.Element {
    const { currentGuess, scrambledAnswer } = this.state;
    return (
      <section className="game">
        <h3>Unscramble this word!</h3>
        <p className="scrambled">{scrambledAnswer}</p>
        <Controls
          currentGuess={currentGuess}
          resetGame={this.resetGame}
          updateGuess={this.updateGuess}
          submitGuess={this.submitGuess}
          checkKey={this.checkKey}
        />
      </section>
    );
  }
}
