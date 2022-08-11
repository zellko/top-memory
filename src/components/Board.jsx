import React, { useState } from 'react';
import Card from './Card';
import '../styles/Board.css';

function Board(props) {
  return (
    <div className="board">
      { props.cardArray.map((cardId) => (
        <Card cardId={cardId} key={cardId} />
      ))}
    </div>
  );
}

export default Board;
