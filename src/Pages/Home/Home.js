import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import Services from "../../Components/Services/Services";
import Aboutus from "../../Components/Aboutus/Aboutus";
import ServiceCards from "../../Components/ServicesCards/ServiceCards";
import ExceptionalWorks from "../../Components/ExceptionalWorks/ExceptionalWorks";
import Footer from "../../Components/Footer/Footer"
const Home = () => {
  return (
    <>
     <div >
      <div className="main-div">
      <Navbar />
      <Aboutus/>  
      </div>  
      <div className="Services">
      <Services/>
      <ServiceCards/>
      </div>
      
      <div className="exceptionalWork">
      <ExceptionalWorks/>
   
      </div>
      <Footer/>
    </div>
    </>
   
  );
};

export default Home;
