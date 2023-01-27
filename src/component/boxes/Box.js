import React from 'react';
import './Box.css';
import { handleBoxClick } from '../../context/GameContext.js';

export default function Box({ box }) {
  return (
    <div className="box" onClick={handleBoxClick}>
      {box}
    </div>
  );
}
