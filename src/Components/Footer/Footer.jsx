import React from "react";
import "./Footer.css";
import InputField from "../ContactButton/Contact";
import Button from "../Button/Button"

const Footer = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div className="contact_left">      
            <p className="footer_title">Let's chat</p>
            <p className="footer_title">Tell me about your</p>
            <p className="footer_title">project.</p>
            <p className="footer_paragraph">Let's create something together</p>
           
          </div>

          <div className="contactForm">
            <p className="contact_title">Send Us Message</p>
            <InputField
              placeholder="Full Name"
              type="text"
              name="name"
             
            />
            <InputField
               placeholder="Email Address"
              type="email"
              name="email"
              
            />
              <InputField
               placeholder="Subject"
              type="email"
              name="email"
              
            />
            {/* <p className="contact_information">Tell us more about your Project</p> */}
            <textarea className="contact_textarea" placeholder="Tell us more about your Project" />
            <Button text="Send Message"/>
          </div>
        </div>

        <p className="copyright">Copyright @ 2023. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
