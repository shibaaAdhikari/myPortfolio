import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import logoI from "../../Assests/logoI.png"
import { useState } from "react";
const Navbar = () => {
  const [showMenu,setShowMenu]= useState(false);

  const toogleMenu=()=>{
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className="navbar-main ">
        <img src={logoI} alt="Logo" className="navbar-logo" />

        <nav className="navbar">
          <div className="navbar-toggle" onClick={toogleMenu}> 
            <span className="navbar-toggle-icon">hello</span>
          </div>
          <ul className={`navbar-menu ${showMenu ? "show-menu" : ""}`} >
            <li>
              <Link to="/" className="navbar-title">Home</Link>
            </li>
            <li>
              <Link to="#Aboutus" className="navbar-title">About us</Link>
            </li>
           
            <li>
              <Link to="" className="navbar-title">Services</Link>
            </li>
            <li>
              <Link className="navbar-title">Projects</Link>
            </li>
            <li>
              <Link className="navbar-title">Blog</Link>
            </li>
          </ul>

          <div className="navbar-button">
            <Button text="Contact us"></Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
