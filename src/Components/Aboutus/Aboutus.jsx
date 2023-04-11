import React from "react";
import "./Aboutus.css";
import Profile from "../../Assests/profile.png";
import Button from "../Button/Button";
// import ProfileCards from "../ProfileCards/ProfileCards";

const Aboutus = () => {
  return (
    <div className="aboutDiv" id="aboutus">
      <div className="left_div">
        <p className="title">
          {" "}
          Hello ! I am <br />
          <span className="title_name">Shibaa</span>
        </p>
        <p className="descriptions">
          Greetings to all! I am excited to be a member of the Optimum Futurist
          team. My goal is to pursue a career in software engineering, and
          outside of work, I enjoy traveling, watching movies, and exploring the
          mysteries of the universe.
        </p>
        <Button text="Hire Me"></Button>
      </div>
      <div className="right_div">
      
        <div className="backgroundImage">
          <img src={Profile} alt="Logo" className="backgroudImage_logo" />
          <div className="backgroundButton">
           <p>Developer</p>
          </div>
        </div>     
      </div>
    </div>
  );
};

export default Aboutus;
