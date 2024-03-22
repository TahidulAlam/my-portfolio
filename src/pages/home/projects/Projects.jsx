/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/projects/bookNinLogoWhite.png";
import img1 from "../../../assets/projects/garidekhunLight.png";
import img2 from "../../../assets/projects/petadopyWhite.png";
import img3 from "../../../assets/projects/petadopyWhite.png";
import project1 from "../../../assets/projects Image/booknin-project.web.app.png";
import project2 from "../../../assets/projects Image/gari-dekhun.web.app.png";
import project3 from "../../../assets/projects Image/petadopy.web.app.png";
import project4 from "../../../assets/projects Image/chikitshaHub.png";
import { VscGithub } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import "./project.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      {/* <h1 className="text-center lg:p-10 lg:pt-0 text-2xl">Projects</h1> */}
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-1 w-[90%] mx-auto">
          <div className="border-2 group rounded-lg flex flex-col justify-between p-10 pb-10 hover:border-sky-300 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
            <div className="flex flex-col">
              <div className="block group-hover:hidden h-60 my-2">
                {/* <img
                  className="w-72 mx-auto relative mb-10 mt-10"
                  src={img}
                  alt=""
                /> */}
                <h1 className="relative lg:mb-3 mb-2 lg:mt-10 mt-2 text-4xl text-center font-semibold text-[#0B093A]">
                  ChikitshaHub
                </h1>
                <p className="text-[#0B093A] text-center">
                  ChikitshaHub : The Ultimate Health Hub.
                </p>
              </div>
              <div className="scroll-div h-60 my-2 hidden group-hover:block  cursor-pointer">
                <img src={project4} style={{ top: "0px" }} alt="" />
              </div>
            </div>
            <div className="flex justify-around items-center gap-2 mt-1">
              <a
                href="https://hilarious-wisp-3febc2.netlify.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/Abdullah-Al-Mehmud/ChikitshaHub"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/Abdullah-Al-Mehmud/ChikitshaHub-server"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </div>
          <div className="border-2 group rounded-lg flex flex-col justify-between p-10 pb-10 hover:border-sky-300 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
            <div className="flex flex-col">
              <div className="block group-hover:hidden h-60 my-2">
                {/* <img
                  className="w-72 mx-auto relative mb-10 mt-10"
                  src={img}
                  alt=""
                /> */}
                <h1 className="relative lg:mb-3 mb-2 lg:mt-10 mt-2 text-4xl text-center font-semibold text-[#0B093A]">
                  BookNin
                </h1>
                <p className="text-[#0B093A] text-center">
                  BookNin : Where Every Page Tells a Story.
                </p>
              </div>
              <div className="scroll-div h-60 my-2 hidden group-hover:block  cursor-pointer">
                <img src={project1} style={{ top: "0px" }} alt="" />
              </div>
            </div>
            <div className="flex justify-around items-center gap-2 mt-1">
              <a
                href="https://booknin-project.web.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-client-booknin"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-server-booknin"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </div>
          <div className="border-2 group rounded-lg flex flex-col justify-between p-10 pb-10 hover:border-sky-300 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
            <div className="flex flex-col ">
              <div className="block group-hover:hidden h-60 my-2">
                {/* <img
                  className="w-40 mx-auto relative mb-10 mt-10"
                  src={img1}
                  alt=""
                /> */}
                <h1 className="relative lg:mb-3 mb-2 lg:mt-10 mt-2 text-4xl text-center font-semibold text-[#0B093A]">
                  GariDekhun
                </h1>
                <p className="text-[#0B093A] text-center">
                  GariDekhun : Find Your Next Dream Vehicle.
                </p>
              </div>
            </div>
            <div className="scroll-div h-60 my-2 hidden group-hover:block">
              <img src={project2} style={{ top: "0px" }} alt="" />
            </div>
            <div className="flex justify-around items-center gap-2 mt-1">
              <a
                href="https://gari-dekhun.web.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-gariDekhun-client"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-gariDekhun-server"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </div>
          <div className="border-2 group rounded-lg flex flex-col justify-between p-10 pb-10 hover:border-sky-300 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
            <div className="flex flex-col">
              <div className="block group-hover:hidden h-60 my-2">
                {/* <img
                  className="w-40 mx-auto relative mb-10 mt-10"
                  src={img2}
                  alt=""
                /> */}
                <h1 className="relative lg:mb-3 mb-2 lg:mt-10 mt-2 text-4xl text-center font-semibold text-[#0B093A]">
                  Petadopy
                </h1>
                <p className="text-[#0B093A] text-center">
                  Petadopy : Where Every Powprint Tells a Tale of Hope and Home
                </p>
              </div>
            </div>
            <div className="scroll-div h-60 my-2 hidden group-hover:block delay-75">
              <img src={project3} style={{ top: "0px" }} alt="" />
            </div>
            <div className="flex justify-around items-center gap-2 mt-1">
              <a
                href="https://petadopy.web.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-petadopy-client"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-petadopy-server"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="text-[#0B093A] flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center mt-5">
          <Link
            to="projects"
            className="btn bg-slate-800 text-white hover:bg-white font-semibold cursor-pointer hover:text-slate-800"
          >
            Sell All Projects
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
