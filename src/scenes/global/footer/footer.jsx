import React from "react";

import { FaFacebookSquare, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__main">
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaTelegramPlane />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaFacebookSquare />
        </a>
      </div>
      <p> &#169; All rights reserved to Darkknight Labs 2023</p>
    </footer>
  );
};

export default Footer;
