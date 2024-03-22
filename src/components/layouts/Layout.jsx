/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarClass(
          "bg-indigo-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10"
        );
      } else {
        setNavbarClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="pt-2 absolute">
        <div
          className={`fixed left-0 right-0 top-0 nav-fixed z-20 ${navbarClass}`}
          ref={navbarRef}
        >
          <Navbar />
        </div>
      </div>
      <div className="font-poppins">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
