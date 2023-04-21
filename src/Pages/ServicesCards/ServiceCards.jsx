import React from "react";
import Cards from "../../Components/Cards/Cards";
import "./ServiceCards.css";
import Data from "../../Data/Skills.json";
const ServiceCards = ({ skillRef }) => {
  return (
    <>
      <div className="service_cards" ref={skillRef}>
        {Data.map((items, index) => {
          return <Cards items={items} key={index} />;
        })}
      </div>
    </>
  );
};

export default ServiceCards;
