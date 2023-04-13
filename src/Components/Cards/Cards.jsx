import React from "react";
import "./Cards.css";

const Cards = ({imageSrc, title ,descriptions,className}) => {
  return (
    <>
      <div>
        <div className={`baseCard ${className}`}>
          <div >
          <img src={imageSrc} alt={""} className="image" />
          </div>
          <div className="cards_title">{title}</div>
          <div className="cards_descriptions">{descriptions}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
