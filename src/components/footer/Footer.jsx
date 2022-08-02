import React from "react";
import { FaFacebookF, FaFacebookMessenger, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 by Hoang Duy.</p>
      <div className="contact">
        <div className="box">
          <p>Call</p>
          <span>098606****</span>
        </div>
        <div className="box">
          <p>Email</p>
          <span>hoangn****@gmail.com</span>
        </div>
        <div className="box">
          <p>Follow</p>
          <div>
            <a href="https://www.facebook.com/duy.pipi.9/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com/duy.pipi.9/" target="_blank">
              <FaFacebookMessenger />
            </a>
            <a href="https://github.com/duyhoang1908" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/duy.pipi.9/" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
