import React from 'react';
import './Box.css';
import { useGameContext } from '../../context/GameContext.js';

export default function Box({ box, index }) {
  const { handleBoxClick } = useGameContext();
  return (
    <div
      className="box"
      onClick={() => {
        handleBoxClick(index);
      }}
    >
      {box}
    </div>
  );
}
