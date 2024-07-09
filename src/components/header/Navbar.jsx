/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../component/Container";
import logo from "../../assets/logo2.png";
import logoDark from "../../assets/logoNew.png";
import Switcher from "../../utils/Switcher";
const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="navbar bg-none dark:text-white text-blue-950 z-50 relative">
          <div className="navbar-start  dark:text-white text-blue-950 ">
            <div className="dropdown text-2xl">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  font-medium font-poppins text-xl"
              >
                <li>
                  <a className="dark:text-white text-blue-950" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dark:text-white text-blue-950" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="dark:text-white text-blue-950" href="#skill">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="dark:text-white text-blue-950" href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="dark:text-white text-blue-950" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <a className="text-xl">tahidul</a> */}
            <img src={logo} className="w-24 dark:block hidden" alt="" />
            <img src={logoDark} className="w-24 dark:hidden block" alt="" />
          </div>
          <div className="navbar-end hidden lg:flex justify-end font-medium font-poppins ">
            <ul className="menu menu-horizontal px-1 text-base">
              {/* <li>
                <a className="dark:text-white text-blue-950" href="/">
                  Home
                </a>
              </li> */}
              <li>
                <a className="dark:text-white text-blue-950" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="dark:text-white text-blue-950" href="#skill">
                  Skills
                </a>
              </li>
              <li>
                <a className="dark:text-white text-blue-950" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="dark:text-white text-blue-950" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Switcher />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
