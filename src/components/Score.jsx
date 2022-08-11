import React from 'react';
import '../styles/Score.css';

function Score(props) {
  return (
    <div className="score">
      <p>
        Score:
        {' '}
        <span>{props.score}</span>
      </p>
      <p>
        High score:
        {' '}
        <span>{props.highscore}</span>
      </p>
    </div>
  );
}

export default Score;
