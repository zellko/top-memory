import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board';

function App() {
  const [cardArray, setCardArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  function shuffleArray() {
    // Shuffle cardArray in a random order...
    // ... to render the cards at random  position on the screen

    // TEST: For now, push first array element to the end.
    const cardArrayCopy = [...cardArray];
    const firstElement = cardArrayCopy.shift();
    cardArrayCopy.push(firstElement);

    setCardArray(cardArrayCopy);
  }

  function checkIfUserWon() {

  }

  function checkIfUserLoose() {

  }

  useEffect(() => () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => card.addEventListener('click', (e) => {
      // When a card is clicked...
      // Get the card id...
      const clickedCardId = card.getAttribute('cardid');
      console.log(clickedCardId);
      // Check if user clicked all the cards.

      // Check if card was already clicked by user.

      // Stop propagation to only record one click
      e.stopImmediatePropagation();
    }));

    return () => {
      cards.forEach((card) => card.removeEventListener('click', () => {}));
    };
  });

  return (
    <div className="App">
      <h1>ToDo Header</h1>
      <h2>ToDo Score</h2>
      <Board cardArray={cardArray} />
      <button type="button" onClick={shuffleArray}>Shuffle</button>
    </div>
  );
}

export default App;
