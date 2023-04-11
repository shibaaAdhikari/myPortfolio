import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import Logo from "../../Assests/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <img src={Logo} alt="Logo" className="navbar-logo" />

        <nav className="navbar">
          <ul >
            <li>
              <Link className="navbar-title">Home</Link>
            </li>
            <li>
              <Link className="navbar-title">About us</Link>
            </li>
           
            <li>
              <Link className="navbar-title">Services</Link>
            </li>
            <li>
              <Link className="navbar-title">Projects</Link>
            </li>
            <li>
              <Link className="navbar-title">Blog</Link>
            </li>
          </ul>

          <div className="navbar-button">
            <Button text="Signin"></Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
