import React from "react";
import "./Services.css";
import Button from "../../Components/Button/Button";
const Services = ({ serviceRef }) => {
  return (
    <>
      <div className="services" id="Services" ref={serviceRef}>
        <p className="services_title">MY SERVICES</p>
        <p className="services_descriptiions">
          I enjoy traveling, watching movies, and exploring the mysteries of the
          universe.The idea of tactile reading was not entirely new, but
          existing methods based on sighted systems were difficult to learn and
          use
        </p>
        <a href="/shibaa.pdf" download>
          <Button text="Download Resume" className="downloadResume" />
        </a>
      </div>
    </>
  );
};

export default Services;
