import React from "react";
import { AiFillYoutube,AiOutlineGlobal, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import '../../scss/_contact.scss'

const Contact = (props) => {
    const navContact =()=>{
        props.history.push('/contact')
    }
  return (
    <div className="contact">
      <div className="contact__title">Contact</div>
      <div className="contact__message">
        Please contact me through email or social media:
      </div>
      <a className="contact__email" href="mailto: emailpapasanto@gmail.com">
        <span className="contact__email--black">Email:</span>{" "}
      dubeyakash145@gmail.com
      </a>
      <div className="contact__social">
     
        <a
          className="contact__social--facebook"
          href="https://www.facebook.com/profile.php?id=100025704156015"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          className="contact__social--linkedin"
          href="https://www.linkedin.com/in/akash-dubey-1040791a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="contact__social--facebook"
          href="https://akash-dubey-portfolio-websites.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGlobal />
        </a>
        <a
          className="contact__social--linkedin"
          href="https://www.linkedin.com/in/anthonyjsanto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};

export default Contact;
