/* eslint-disable no-unused-vars */
import React from "react";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logo2.png";
import logoDark from "../../assets/logoNew.png";
import Container from "../component/Container";
import ClockApi from "../component/ClockApi";
const Footer = () => {
  return (
    <div className="dark:bg-gradient-to-r dark:from-[#000024] dark:to-[#31025C] bg-gradient-to-r from-[#bdbdbd] to-[#e4e4e4]">
      <Container>
        <footer className="bg-none flex items-center p-4  text-neutral-content max-w-full">
          <div className="p-10 z-20 w-4/12/12">
            {/* <img src={logo} className="w-40" alt="" /> */}
            <img src={logo} className="w-24 dark:block hidden" alt="" />
            <img src={logoDark} className="w-24 dark:hidden block" alt="" />
          </div>
          <div className="flex justify-center items-center w-8/12">
            <p className="text-xs dark:text-white text-blue-950">
              Copyright © 2024 - All right reserved
            </p>
          </div>
          <div className="flex justify-center items-center">
            <ClockApi />
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
