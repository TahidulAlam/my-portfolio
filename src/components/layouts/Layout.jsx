/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="pt-2">
        <Navbar />
      </div>
      <div className="font-poppins">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
