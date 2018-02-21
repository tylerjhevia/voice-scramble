import * as React from "react";
import Controls from "./Controls";
import Score from "./Score";
const words = require("word-list-json");
import "../styles/Game.css";

interface IProps {}

interface IState {
  answer: string;
  currentGuess: string;
  feedback: string;
  scrambledAnswer: string;
  wordLength: number;
  score: number;
}

export default class Game extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      answer: "",
      currentGuess: "",
      feedback: null,
      scrambledAnswer: "",
      score: null,
      wordLength: null
    };
    this.startGame = this.startGame.bind(this);
    this.chooseRandomWord = this.chooseRandomWord.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.updateGuess = this.updateGuess.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
    this.checkKey = this.checkKey.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  componentDidMount() {
    this.startGame(5);
  }

  startGame(length: number): void {
    const wordPool = words.filter((word: string) => word.length === length);
    this.chooseRandomWord(wordPool);
    this.setState({ wordLength: length });
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
    if (e.key === "Enter") {
      this.submitGuess();
    }
    // Figure out a hotkey for resetting the game.
  }

  submitGuess(): void {
    const { currentGuess, score, answer } = this.state;
    let newScore = score;

    if (currentGuess === answer) {
      newScore++;
      this.setState({ score: newScore, feedback: "You got it!" });
      this.resetGame();
    } else {
      newScore--;
      this.setState({
        currentGuess: "",
        score: newScore,
        feedback: "Wrong! Guess again."
      });
    }
  }

  resetGame(): void {
    this.startGame(this.state.wordLength);
    this.setState({ currentGuess: "" });
  }

  render(): JSX.Element {
    const { currentGuess, scrambledAnswer, score, feedback } = this.state;

    return (
      <section className="game">
        <h3>Unscramble this word!</h3>
        <p className="scrambled">{scrambledAnswer}</p>
        <p className="feedback">{feedback}</p>
        <Controls
          currentGuess={currentGuess}
          resetGame={this.resetGame}
          updateGuess={this.updateGuess}
          submitGuess={this.submitGuess}
          checkKey={this.checkKey}
          startGame={this.startGame}
        />
        <Score score={score} />
      </section>
    );
  }
}
