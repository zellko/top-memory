import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Score from './components/Score';

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

function App() {
  const [cardArray, setCardArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const updateHighScore = () => {
    // Check if high score need to be updated
    if (highScore < score) {
      setHighScore(score);
    }
  };

  const checkIfUserWon = () => {
    if (clickedCards.length === 12) {
      clickedCards = [];
      setHighScore(12);
      resetScore();
    }
  };

  const checkIfUserLoose = (cardid) => {
    if (clickedCards.includes(cardid)) {
      clickedCards = [];
      updateHighScore();
      resetScore();
      return true;
    }
    return false;
  };

  useEffect(() => {
    // Shuffle cards on the first page loading
    if (onFirstLoad) {
      onFirstLoad = false;

      // Shuffles the cards...
      const shuffledArray = shuffleArray(cardArray);
      setCardArray(shuffledArray);
    }
  });

  useEffect(() => {
    const onCardClick = (e) => {
      // Each time user click on a card...

      // Get the card ID...
      const clickedCardId = e.target.parentElement.getAttribute('cardid');

      // Check if user loose (he clicked on a card more than once)
      const isGameOver = checkIfUserLoose(clickedCardId);
      if (!isGameOver) {
        // If user did not loose...

        // Add the card to the clickedCard array
        clickedCards.push(clickedCardId);

        // Increase Score
        increaseScore();

        // Check if user won (he clicked on all the 12 cards,
        //    without clicking on a single card more than once)
        checkIfUserWon();
      }

      // Shuffles the cards...
      const shuffledArray = shuffleArray(cardArray);
      setCardArray(shuffledArray);
    };

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.addEventListener('click', onCardClick));

    return () => {
      cards.forEach((card) => card.removeEventListener('click', onCardClick));
    };
  }, [cardArray]);

  return (
    <div className="App">

      <div className="header">
        <h1>Memory Card</h1>
        <h3>Get points by clicking on an image but don't click on any more than once!</h3>
      </div>

      <Score score={score} highscore={highScore} />

      <Board cardArray={cardArray} />

    </div>
  );
}

export default App;
