// import logo from './logo.svg';
import "./App.css";
// import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import { useRef, useState } from "react";
import { DesktopView } from "./Components/Menu/Menu";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  // const refs = [homeRef, aboutRef, projectRef, serviceRef, contactRef];

  // const menuItems = ["home", "about", "contact", "projects", "services"];

  const menuItems = [
    { title: "Home", ref: homeRef },
    { title: "About", ref: aboutRef },
    { title: "Contact", ref: contactRef },
    { title: "Projects", ref: projectRef },
    { title: "Services", ref: serviceRef },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="navbar-main">
        <div className="navigation">
          <DesktopView menuItems={menuItems} className="menu" />
          {/* <div onClick={() => setShowMenu(true)}></div> */}
        </div>
      </div>
      {/* {showMenu && <MobileView {...refs} setShowMenu={setShowMenu} />} */}

      {/* <Home homeRef={homeRef} /> */}
      <Aboutus aboutRef={aboutRef} />
      <Services serviceRef={serviceRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default App;
