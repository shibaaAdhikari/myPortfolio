import React from "react";
import "./Services.css";
import Button from "../Button/Button";
import Cards from "../Cards/Cards"

const Services = () => {
  return (
    <>
      <div className="services">
        <p className="services_title">MY SERVICES</p>
        <p className="services_descriptiions">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum
          quasi aliquam? Ex quaerat quia voluptates quis consequuntur, nesciunt
          dolores beatae doloribus!
        </p>
        <Button text="Download Resume" className="services_download"></Button>
      </div>
    </>
  );
};

export default Services;
