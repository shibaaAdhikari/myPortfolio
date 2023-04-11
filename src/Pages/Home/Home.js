import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import Aboutus from "../../Components/Aboutus/Aboutus";
import Services from "../../Components/Services/Services";
import ServiceCards from "../../Components/ServicesCards/ServiceCards";
const Home = () => {
  return (


    <>
     <div className="main-div">
      <Navbar />
      <Aboutus/>
      <Services/>
      <ServiceCards/>
    </div>
    </>
   
  );
};

export default Home;
