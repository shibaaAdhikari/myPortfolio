import React from "react";
import "./Cards.css";

const Cards = ({ items, className }) => {
  return (
    <>
      <div>
        <div className={`baseCard ${className}`}>
          <div>
            <img src={items.image} alt={""} className="image" />
          </div>
          <div className="cards_title">{items.title}</div>
          <div className="cards_descriptions">{items.descriptions}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
