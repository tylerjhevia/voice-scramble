import * as React from 'react';
import '../styles/Score.css';

interface IProps {
  score: number;
  scoreMultiplier: number;
}

const Score = (props: IProps) => {
  console.log('props: ', props);
  return (
    <div className="score-container">
      <p>
        {props.score}
      </p>
      <p>
        <strong>Score Multiplier:</strong> {props.scoreMultiplier}
      </p>
    </div>
  );
};

export default Score;
