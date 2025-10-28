import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sumit Singh Rana</h4>
      <h4>Copyright &copy; 2025</h4>
      <div className="footerLinks">
        <a href="https://github.com/SumitsinghRana" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-singh-rana007/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:sumitsrana007@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/Sumit_SinghRana/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
