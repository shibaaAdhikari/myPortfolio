import React from "react";
import "./Aboutus.css";
import Profile from "../../Assests/profile.png";
import Button from "../Button/Button";

const Aboutus = () => {
  return (
    <div className="aboutDiv">
      <div>
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
      <div className="backgroundImage">
        <img src={Profile} alt="Logo" className="navbar-logo" />
      </div>
    </div>
  );
};

export default Aboutus;
