import React from "react";
import Logo from "../img/logo.PNG";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>Mult</b>.
      </span>
    </footer>
  );
};

export default Footer;