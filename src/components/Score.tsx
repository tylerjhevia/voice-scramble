import * as React from "react";
import "../styles/Score.css";

interface IProps {
  score: number;
}

const Score = (props: IProps) => {
  return <p>{props.score}</p>;
};

export default Score;
