import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import logoI from "../../Assests/logoI.png";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState("close");

  function onCLickhandler() {
    toggle === "close" ? setToggle("open") : setToggle("close");
    console.log(toggle);
  }

  return (
    <>
      <div className="navbar-main ">
        <img src={logoI} alt="Logo" className="navbar-logo" />

        <nav className="navigation">
          <div className="navigation-menu">
            <ul>
              <li>
                <Link to="/" className="navbar-title">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#Aboutus" className="navbar-title">
                  About us
                </Link>
              </li>

              <li>
                <Link to="" className="navbar-title">
                  Services
                </Link>
              </li>
              <li>
                <Link className="navbar-title">Projects</Link>
              </li>
              <li>
                <Link className="navbar-title">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-button">
            <Button text="Contact us" className="contact"></Button>
          </div>
        </nav>
      </div>

      <div className="mobileNav">
        <nav className="mobile-navigation">
          <div className={`navigation-menu ${toggle}`}>
            <ul>
              <li>
                <Link to="/" className="navbar-title">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#Aboutus" className="navbar-title">
                  About us
                </Link>
              </li>

              <li>
                <Link to="" className="navbar-title">
                  Services
                </Link>
              </li>
              <li>
                <Link className="navbar-title">Projects</Link>
              </li>
              <li>
                <Link className="navbar-title">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-button">
            <Button text="Contact us" className="contact"></Button>
          </div>

          
        </nav>
        <div className="hamburgerButton">
            <button className="hamburger" onClick={onCLickhandler}>
              <AiOutlineBars />
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
