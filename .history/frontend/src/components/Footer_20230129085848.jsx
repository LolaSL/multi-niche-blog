import React from "react";
import Logo from "../img/logo.PNG";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt=""  className="logo-image"/>
      <span>
        <b>Multi Nishe Blog</b>.
      </span>
    </footer>
  );
};

export default Footer;