import React from "react";
import "./Services.css";
import Button from "../../Components/Button/Button";
const Services = ({serviceRef}) => {
  return (
    <>
      <div className="services" id="Services" ref={serviceRef}>
        <p className="services_title">MY SERVICES</p>
        <p className="services_descriptiions">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum
          quasi aliquam? Ex quaerat quia voluptates quis consequuntur, nesciunt
          dolores beatae doloribus! 
        </p>
        <a href="/shibaa.pdf"  download>
          <Button text="Download Resume" className="downloadResume"/>
        </a>
      </div>
    </>
  );
};

export default Services;
