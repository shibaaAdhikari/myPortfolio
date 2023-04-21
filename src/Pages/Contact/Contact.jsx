import React from "react";
import "./Contact.css";
// import InputField from "../Inputfield/Inputfield";
import InputField from "../../Components/Inputfield/Inputfield";
import Button from "../../Components/Button/Button";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Contact = ({ contactRef }) => {
  return (
    <>
      <div className="footer_div" ref={contactRef}>
        <div className="footer">
          <div className="contact_left">
            <p className="footer_title">Let's chat</p>
            <p className="footer_title">Tell me about your</p>
            <p className="footer_title">project.</p>
            <p className="footer_paragraph">Let's create something together</p>
          </div>

          <div className="contactForm">
            <form
              id="submitButton"
              action="mailto:shibaaadhikari0@gmail.com"
              method="POST"
            >
              <p className="contact_title">Send Us Message</p>
              <InputField placeholder="Full Name" type="text" name="name" />
              <InputField
                placeholder="Email Address"
                type="email"
                name="email"
              />
              <InputField placeholder="Subject" type="email" name="email" />

              <textarea
                className="contact_textarea"
                placeholder="Tell us more about your Project"
              />
              <Button text="Send Message" />
            </form>
          </div>
        </div>

        <div className="socialMedia">
          <p className="copyright">Copyright @ 2023. All rights reserved</p>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/shibaa-adhikari-54bb88204/"
              alt="linkdin"
            >
              <AiOutlineLinkedin className="icon1" />
            </a>

            <a
              href="https://www.linkedin.com/in/shibaa-adhikari-54bb88204/"
              alt="linkdin"
            >
              <AiOutlineFacebook className="icon1" />
            </a>
            <a href="https://www.instagram.com/i.m.shibaa/" alt="linkdin">
              <AiOutlineInstagram className="icon1" />
            </a>
            <a href="https://github.com/evilcba" alt="linkdin">
              <AiFillGithub className="icon1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
