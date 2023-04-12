import React from "react";
import "./Services.css";
import Button from "../Button/Button";
const Services = () => {
  return (
    <>
      <div className="services">
        <p className="services_title">MY SERVICES</p>
        <p className="services_descriptiions">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum
          quasi aliquam? Ex quaerat quia voluptates quis consequuntur, nesciunt
          dolores beatae doloribus! heloo hi how are you
        </p>

        <a href="/shibaa.pdf"  download>
          <Button text="Download Resume" />
        </a>
      </div>
    </>
  );
};

export default Services;
