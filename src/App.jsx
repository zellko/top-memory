import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board';

let clickedCards = [];
let onFirstLoad = true;

function shuffleArray(array, shuffledArray = []) {
  // Shuffle cardArray in a random order...
  // ... to render the cards at random  position on the screen
  if (array.length === 0) return shuffledArray;

  const randomNumber = Math.floor((Math.random() * array.length));

  shuffledArray.push(array[randomNumber]);
  array.splice(randomNumber, 1);

  shuffleArray(array, shuffledArray);

  return shuffledArray;
}

function checkIfUserWon() {
  if (clickedCards.length === 12) {
    console.log('You Won !');
    clickedCards = [];
    return true;
  }
  return false;
}

function checkIfUserLoose(cardid) {
  if (clickedCards.includes(cardid)) {
    console.log('You Loose !');
    clickedCards = [];
    return true;
  }
  return false;
}

function App() {
  const [cardArray, setCardArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  useEffect(() => {
    if (onFirstLoad) {
      onFirstLoad = false;

      // Shuffles the cards...
      const shuffledArray = shuffleArray(cardArray);
      setCardArray(shuffledArray);
    }
  });

  useEffect(() => {
    // Shuffles the cards...

    const onCardClick = (e) => {
      // Each time user click on a card...

      // Get the card ID...
      const clickedCardId = e.target.parentElement.getAttribute('cardid');
      console.log(clickedCardId);

      // Check if user loose (he clicked on a card more than once)
      const isGameOver = checkIfUserLoose(clickedCardId);
      if (!isGameOver) {
        // If user did not loose...

        // Add the card to the clickedCard array
        clickedCards.push(clickedCardId);

        // Check if user won (he clicked on all the 12 cards,
        //    without clicking on a single card more than once)
        checkIfUserWon();
      }

      // Shuffles the cards...
      const shuffledArray = shuffleArray(cardArray);
      setCardArray(shuffledArray);

      console.log(clickedCards);
    };

    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => card.addEventListener('click', onCardClick));

    return () => {
      cards.forEach((card) => card.removeEventListener('click', onCardClick));
    };
  }, [cardArray]);

  return (
    <div className="App">
      <h1>ToDo Header</h1>
      <h2>ToDo Score</h2>
      <Board cardArray={cardArray} />
    </div>
  );
}

export default App;
