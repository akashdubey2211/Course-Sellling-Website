import React from "react";
// import logo from "../../images/logo.svg";
import logo from "../../images/logo3.jpeg";
import { Link } from "react-router-dom";
import '../../scss/_footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__page-break" />
      <div className="footer__top">
        <Link className="footer__top--link" to="/auth">
          Join
        </Link>
        <Link className="footer__top--link" to="/all-courses">
          Courses
        </Link>
        
        <Link className="footer__top--link" to="/about">
          About
          
        </Link>
        <Link className="footer__top--link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="footer__lowest">
        <img
          className="footer__lowest--logo"
          src={logo}
          alt="lower-footer-logo"
        />
        <div className="footer__lowest--copyright">
          &#169; Akash Dubey - MERN Stack developer!-
        </div>
      </div>
    </div>
  );
};

export default Footer;