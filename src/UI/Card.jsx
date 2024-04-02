import React, { useState } from "react";
import "./Card.css";

const Card = ({ src, text }) => {
  const [selected, setSelected] = useState(false);
  const [radioChecked, setRadioChecked] = useState(false);

  const handleCardClick = () => {
    setSelected(!selected);
    setRadioChecked(!radioChecked);
  };

  return (
    <div
      className={`Card ${selected ? "selected" : ""} card`}
      onClick={handleCardClick}
    >
      <img src={src} alt="illustration" />
      <p>{text}</p>
      <input type="radio" checked={radioChecked} onChange={() => {}} />
    </div>
  );
};

export default Card;
