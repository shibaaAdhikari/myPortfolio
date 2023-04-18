import React from "react";
import Cards from "../../Components/Cards/Cards";
import "./ServiceCards.css";
import CSS from "../../Assests/CSS.png"
import Reactt from "../../Assests/react.png"
import node from "../../Assests/node.png"
import Html from "../../Assests/html.png"
import github from "../../Assests/github.png"
const ServiceCards = () => {
  return (
    <>
      <div className="service_cards">
        <Cards  imageSrc={Html}  title="HTML" descriptions="UI/UX is very impoertant in the aspects of designing" className="cardsImage"/>
        <Cards imageSrc={CSS} title="CSS" descriptions="Lorem ipsum dolor, sit amet consectetur adipisicing elit."  className="cardsImage"/>
        <Cards imageSrc={Reactt} title="React" descriptions="Lorem ipsum dolor, sit amet consectetur adipisicing elit." className="cardsImage"/>
        <Cards imageSrc={node} title="Node.js" descriptions="Lorem ipsum dolor, sit amet consectetur adipisicing elit."className="cardsImage"/>
        <Cards imageSrc={github} title="Github" descriptions="Lorem ipsum dolor, sit amet consectetur adipisicing elit."className="cardsImage"/>
      </div>
    </>
  );
};

export default ServiceCards;
