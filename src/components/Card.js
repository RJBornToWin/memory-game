import React from "react";
import { TILE } from './Images';

const Card = ({ card, flipped, disabled, handleChoice }) => {  
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          onClick={handleClick}
          src={TILE}
          alt="card back"
          className="back"
        />
      </div>
    </div>
  );
};

export default Card;