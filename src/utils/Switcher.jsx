/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./useDarkMode";
import { MdLightMode, MdModeNight, MdOutlineNightsStay } from "react-icons/md";
const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode("light");
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  const getIcon = () => {
    return colorTheme === "light" ? (
      <MdModeNight className="text-xl font-semibold transition-transform duration-500 ease-in-out transform hover:scale-110" />
    ) : (
      <MdLightMode className="text-xl font-semibold transition-transform duration-500 ease-in-out transform hover:scale-110" />
    );
  };
  return (
    <>
      {/* <DarkModeSwitch
        style={{ margin: "0px", color: "white" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
        // size={30}
      /> */}
      <button
        // onClick={toggleTheme}
        onClick={toggleDarkMode}
        className={`w-14 p-1 rounded-2xl font-semibold flex dark:justify-start justify-end dark:bg-white bg-blue-950 text-white dark:text-blue-950 transition-colors duration-300 ease-in-out border-none toggleButton`}
      >
        {getIcon()}
      </button>
    </>
  );
};

export default Switcher;
