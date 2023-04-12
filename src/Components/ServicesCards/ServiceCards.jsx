import React from "react";
import Cards from "../Cards/Cards";
import "./ServiceCards.css";
// import UI from "../../Assests/UI.png"
import UI from "../../Assests/uiUX.png"
import Design from "../../Assests/design.png"
import Developer from "../../Assests/developer.png"
const ServiceCards = () => {
  return (
    <>
      <div className="service_cards">
        <Cards  imageSrc={UI}  title="UI/UX" descriptions="UI/UX is very impoertant in the aspects of designing"/>
        <Cards imageSrc={Design} title="Design" descriptions="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
        <Cards imageSrc={Developer} title="Developer" descriptions="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
        
      </div>
    </>
  );
};

export default ServiceCards;
