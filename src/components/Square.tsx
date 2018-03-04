import * as React from 'react';
import '../styles/Square.css';

interface IProps {
  random: number;
}

const Square = (props: any) => {
  return (
    <div className="square">
      {props.random}
    </div>
  );
};

export default Square;
