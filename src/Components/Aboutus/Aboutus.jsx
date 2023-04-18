import React from "react";
import "./Aboutus.css";
import Profile from "../../Assests/profile.png";
import Button from "../Button/Button";
import UI from "../../Assests/developer.png";
import Trophy from "../../Assests/trophy.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Aboutus = () => {
  return (
    // <div className="aboutDiv" id="aboutus">
    //   <div className="left_div">
    //     <p className="title">
    //       Hello ! I am <br />
    //       <span className="title_name">Shibaa</span>
    //     </p>
    //     <p className="descriptions">
    //       Greetings to all! I am excited to be a member of the EnglightInfo. My
    //       goal is to pursue a career in software engineering, and outside of
    //       work, I enjoy traveling, watching movies, and exploring the mysteries
    //       of the universe.The idea of tactile reading was not entirely new, but
    //       existing methods based on sighted systems were difficult to learn and
    //       use. As the first writing system designed for blind people’s needs,
    //       Braille was a groundbreaking new accessibility tool. It not only
    //       provided practical benefits, but also helped change the cultural
    //       status of blindness.
    //     </p>
    //     <Button text="Hire Me" className="aboutButton"></Button>
    //     {/* <p>Hello</p> */}

    //     <div>
    //       <p className="socialMedia">Checkout my</p>
    //       <a href="https://www.facebook.com/shibaa.adhikari.1/">
    //         <BsFacebook  className="socailMedia_icon"/>
    //       </a>
    //       <a href="https://www.linkedin.com/in/shibaa-adhikari-54bb88204/">
    //         <AiFillLinkedin className="socailMedia_icon"/>
    //       </a>
    //       <a href="https://github.com/evilcba">
    //         <AiFillGithub className="socailMedia_icon"/>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="right_div">
    //     <div className="backgroundImage">
    //       <div className="backgroundImge2"></div>
    //       <img src={Profile} alt="Logo" className="backgroudImage_logo" />
    //       <div className="backgroundButton">
    //         <div className="backgroundCard">
    //           <img src={UI} alt="ui" className="topImage" />
    //           <p className="about_parag">hello!</p>
    //         </div>
    //       </div>
    //       <div className="backgroundButton2">
    //         <div className="backgroundCard">
    //           <img src={Trophy} alt="ui" className="topImage" />
    //           <p className="about_parag">Digital Exhibition</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="AboutUs">
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
