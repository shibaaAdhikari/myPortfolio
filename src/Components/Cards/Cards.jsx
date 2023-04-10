import React from "react";
import "./Cards.css";

const Cards = ({image, title ,descriptions}) => {
  return (
    <>
      <div>
        <div className="baseCard">
          <div className="image">{image}</div>
          <div className="title">{title}</div>
          <div className="descriptions">{descriptions}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
