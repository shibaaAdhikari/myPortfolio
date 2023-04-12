import React from "react";
import  "./Footer.css"

const Footer = () => {
  return (
    <>
      <div >
        <div className="footer">
        <div>
          <p>Personal</p>
        </div>
        <div>
          <p>123 Markrt St.#22B</p>
          <p>Charlottesville,California</p>
          <p>44635</p>
          <p>(434)546-4356</p>
          <p>contact@lift.agency</p>
        </div>
        <div>
          <p>About</p>
          <p>Growers</p>
          <p>Merchants</p>
          <p>Partners</p>
          <p>Contact</p>
        </div>
        <div>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Instagam</p>
        </div>
        </div>
       
        <p className="copyright">Copyright @ 2023. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
