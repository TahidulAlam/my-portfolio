// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import "./style.scss";
import CalltoAction from "../../shared/callToAction";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
// import logo from "../../images/logo.png"
// import CalltoAction from '../../shared/callToAction'
import { scrollToSection } from "../../utils/helpers.js";

const Navigation = () => {
  const [mobileMenu, setMoblieMenu] = useState(false);

  const menuItemClickHandler = (section) => {
    setMoblieMenu(!mobileMenu);
    scrollToSection(section);
  };

  return (
    <div className="top-navigation-bar">
      <div className="app-logo">{/* <img src={logo} alt="Tahid" /> */}</div>
      <div className="mobileMenu" onClick={() => setMoblieMenu(!mobileMenu)}>
        {mobileMenu ? <IoMdClose size={24} color="#fff" /> : <CgMenuRight />}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("blogs")}
        >
          Blog
        </span>
        <CalltoAction text={"Contact Me"} />
      </div>
    </div>
  );
};

export default Navigation;
