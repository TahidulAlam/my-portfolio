/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/projects/bookNinLogoWhite.png";
import img1 from "../../../assets/projects/garidekhunLight.png";
import img2 from "../../../assets/projects/petadopyWhite.png";
const Projects = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-[90%] mx-auto">
        <div className=" border-2  rounded-lg flex flex-col justify-between p-10 pb-2">
          <div className="flex flex-col justify-between">
            <img className="w-72 mx-auto p-10" src={img} alt="" />
            <p className="text-white">
              BookNin : Where Every Page Tells a Story.
            </p>
          </div>
          <div className="flex justify-around items-center gap-2">
            <a
              href="https://booknin-project.web.app"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/TahidulAlam/mern-project-client-booknin"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Client
            </a>
            <a
              href="https://github.com/TahidulAlam/mern-project-server-booknin"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Server
            </a>
          </div>
        </div>
        <div className=" border-2  rounded-lg flex flex-col justify-between p-10 pb-2">
          <div className="flex flex-col justify-between">
            <img className="w-60 mx-auto p-10" src={img1} alt="" />
            <p className="text-white">
              GariDekhun : Find Your Next Dream Vehicle.
            </p>
          </div>
          <div className="flex justify-around items-center gap-2">
            <a
              href="https://gari-dekhun.web.app"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/TahidulAlam/mern-project-gariDekhun-client"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Client
            </a>
            <a
              href="https://github.com/TahidulAlam/mern-project-gariDekhun-server"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Server
            </a>
          </div>
        </div>
        <div className=" border-2  rounded-lg flex flex-col justify-between p-10 pb-2">
          <div className="flex flex-col justify-between">
            <img className="w-72 mx-auto p-10" src={img2} alt="" />
            <p className="text-white">
              Petadopy : Where Every Powprint Tells a Tale of Hope and Home
            </p>
          </div>
          <div className="flex justify-around items-center gap-2">
            <a
              href="https://petadopy.web.app"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/TahidulAlam/mern-project-petadopy-client"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Client
            </a>
            <a
              href="https://github.com/TahidulAlam/mern-project-petadopy-server"
              className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
            >
              Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
