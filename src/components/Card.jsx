import React from 'react';
import '../styles/Card.css';
import img1 from '../img/1.svg';
import img2 from '../img/2.svg';
import img3 from '../img/3.svg';
import img4 from '../img/4.svg';
import img5 from '../img/5.svg';
import img6 from '../img/6.svg';
import img7 from '../img/7.svg';
import img8 from '../img/8.svg';
import img9 from '../img/9.svg';
import img10 from '../img/10.svg';
import img11 from '../img/11.svg';
import img12 from '../img/12.svg';

const imgArray = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
];

const altArray = [
  'sega controller', 'retro TV', 'gameboy', 'laptop',
  'mouse', 'camera', 'tape', 'floppy disk',
  'rocket', 'radio', 'old computer', 'Tablet',
];

function Card(props) {
  return (
    <div className="card" cardid={props.cardId}>
      <img src={imgArray[props.cardId - 1]} alt={altArray[props.cardId - 1]} />
    </div>
  );
}

export default Card;
