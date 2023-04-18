import React from "react";
import "./Aboutus.css";
import Profile from "../../Assests/profile.png";
import Button from "../Button/Button";
// import UI from "../../Assests/developer.png";
// import Trophy from "../../Assests/trophy.jpg";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
const Aboutus = () => {
  return (
    <>
      <div className="AboutUs" id="Aboutus">
        <div className="left_about">
          <p>Hello!</p>
          <p>I am <span >Shibaa</span></p> 
          <p className="aboutDescription">

          Greetings to all! I am excited to be a member of the EnglightInfo. My
           goal is to pursue a career in software engineering, and outside of
           work, I enjoy traveling, watching movies, and exploring the mysteries
           of the universe.The idea of tactile reading was not entirely new, but
           existing methods based on sighted systems were difficult to learn and
           use. 
          </p>
         <div>
          <Button text="HIRE ME" className="hireme"/>
         </div>
       
        </div>

        <div className="right_about">
        <div class="image-container">
       <img src={Profile} alt="Your Image" className="profileImage"/>
       </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
