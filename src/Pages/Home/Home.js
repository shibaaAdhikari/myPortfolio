import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import Services from "../../Components/Services/Services";
import Aboutus from "../../Components/Aboutus/Aboutus";


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
