import React from 'react';
import './style.css';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <p>
          <a href="https://github.com/rslfilho" target="_blank" rel="noreferrer"><AiOutlineGithub /></a><br />
          <a href="https://www.linkedin.com/in/rslfilho/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
        </p>
    </div>
    <div className="sign">
      <p>v4.0</p>
    </div>
    </footer>
  );
};

export default Footer;
