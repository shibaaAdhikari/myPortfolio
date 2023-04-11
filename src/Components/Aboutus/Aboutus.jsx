import React from "react";
import "./Aboutus.css";
import Profile from "../../Assests/profile.png";
import Button from "../Button/Button";
// import ProfileCards from "../ProfileCards/ProfileCards";
import UI from "../../Assests/developer.png"
import Trophy from "../../Assests/trophy.jpg"
const Aboutus = () => {
  return (
    <div className="aboutDiv" id="aboutus">
      <div className="left_div">
        <p className="title">
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
          <div className="backgroundImge2"></div>
          <img src={Profile} alt="Logo" className="backgroudImage_logo" />
          <div className="backgroundButton">
            <div className="backgroundCard">
           
           <img src={UI} alt="ui" className="topImage" />
           <p >Developer</p>
            </div>
           
          </div>
          <div className="backgroundButton2">
          <div className="backgroundCard">
           
           <img src={Trophy} alt="ui" className="topImage" />
           <p >Digital Exhibition winner 2022</p>
            </div>
          </div>
        </div>     
      </div>
    </div>
  );
};

export default Aboutus;
