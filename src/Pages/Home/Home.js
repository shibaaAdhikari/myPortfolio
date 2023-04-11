import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import Aboutus from "../../Components/Aboutus/Aboutus";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (


    <>
     <div className="main-div">
      <Navbar />
      <Aboutus/>
      <Services/>
    </div>
    </>
   
  );
};

export default Home;
