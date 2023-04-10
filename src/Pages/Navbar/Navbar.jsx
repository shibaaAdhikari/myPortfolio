import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <BrowserRouter>
          <nav className="navbar">
            <ul>
              <Link className="navbar-title">Home</Link>
            </ul>
            <ul>
              <Link className="navbar-title">Projects</Link>
            </ul>
            <ul>
              <Link className="navbar-title">Resume</Link>
            </ul>
          </nav>
        </BrowserRouter>
        <div className="navbar-button">
          <Button text="Signin"></Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
