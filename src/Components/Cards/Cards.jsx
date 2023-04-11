import React from "react";
import "./Cards.css";

const Cards = ({imageSrc, title ,descriptions}) => {
  return (
    <>
      <div>
        <div className="baseCard">
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
