// import logo from './logo.svg';
import "./App.css";
// import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import ServiceCards from "./Pages/ServicesCards/ServiceCards";
// import Practice from "./Pages/Practice/Practice";
import { useRef, useState } from "react";
import { DesktopView, MobileView } from "./Components/Menu/Menu";
import { FaBars } from "react-icons/fa";
// import logoProfile from "../src/Assests/logoProfile.png";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const serviceRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const practiceRef = useRef(null);

  // const refs = [homeRef, aboutRef, projectRef, serviceRef, contactRef];

  // const menuItems = ["home", "about", "contact", "projects", "services"];

  const menuItems = [
    { title: "Home", ref: homeRef },
    { title: "About", ref: aboutRef },
    { title: "Contact", ref: contactRef },
    { title: "Projects", ref: projectRef },
    { title: "Services", ref: serviceRef },
    { title: "Skills", ref: skillRef },
    { title: "practice", ref: practiceRef },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="navbar-main">
        <div>
          <logoProfile />
        </div>
        <div className="navigation">
          <DesktopView menuItems={menuItems} className="menu" />
          <div className="bars" onClick={() => setShowMenu(true)}>
            <FaBars className="icon" />
          </div>
        </div>
      </div>
      {showMenu && (
        <MobileView mobItems={menuItems} setShowMenu={setShowMenu} />
      )}

      {/* <Home homeRef={homeRef} /> */}
      <Aboutus aboutRef={aboutRef} />
      <Services serviceRef={serviceRef} />
      <ServiceCards skillRef={skillRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
      {/* <Practice practiceRef={practiceRef} /> */}
    </>
  );
}

export default App;
