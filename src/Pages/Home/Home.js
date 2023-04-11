import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import Aboutus from "../../Components/Aboutus/Aboutus";
import Services from "../../Components/Services/Services";
import ServiceCards from "../../Components/ServicesCards/ServiceCards";
import ExceptionalWorks from "../../Components/ExceptionalWorks/ExceptionalWorks";
const Home = () => {
  return (


    <>
     <div >
      <div className="main-div">
      <Navbar />
      <Aboutus/>
      <Services/>
      </div>  
      <ServiceCards/>
      <div className="exceptionalWork">
      <ExceptionalWorks/>
      </div>
      
    </div>
    </>
   
  );
};

export default Home;
