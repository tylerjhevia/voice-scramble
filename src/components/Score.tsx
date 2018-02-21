import * as React from "react";
import "../styles/Score.css";

interface IProps {
  score: number;
  scoreMultiplier: number;
}

const Score = (props: IProps) => {
  return (
    <div className="score-container">
      <p>{props.score}</p>
      <p>
        <strong>X</strong> {props.scoreMultiplier}
      </p>
    </div>
  );
};

export default Score;
