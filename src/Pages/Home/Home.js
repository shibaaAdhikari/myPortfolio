import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import Aboutus from "../../Components/Aboutus/Aboutus";


const Home = () => {
  return (


    <>
     <div className="main-div">
      <Navbar />
      <Aboutus/>
    </div>
    </>
   
  );
};

export default Home;
