import React from "react";
import Cards from "../../Components/Cards/Cards";
import "./ServiceCards.css";
import CSS from "../../Assests/CSS.png";
import Reactt from "../../Assests/react.png";
import node from "../../Assests/node.png";
import Html from "../../Assests/html.png";
import github from "../../Assests/github.png";
import Data from "../../Data/Skills.json";
const ServiceCards = ({ skillsRef }) => {
  return (
    <>
      <div className="service_cards" ref={skillsRef}>
        {Data.map((items, index) => {
          return <Cards items={items} key={index} />;
        })}
        {/* <Cards
          imageSrc={Html}
          title="HTML"
          descriptions="UI/UX is very impoertant in the aspects of designing"
          className="cardsImage"
        /> */}
      </div>
    </>
  );
};

export default ServiceCards;
