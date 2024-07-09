/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/projects/bookNinLogoWhite.png";
import img1 from "../../../assets/projects/garidekhunLight.png";
import img2 from "../../../assets/projects/petadopyWhite.png";
import img3 from "../../../assets/projects/petadopyWhite.png";
import { Tilt } from "react-tilt";
import project1 from "../../../assets/projects Image/booknin-project.web.app.png";
import project2 from "../../../assets/projects Image/gari-dekhun.web.app.png";
import project3 from "../../../assets/projects Image/petadopy.web.app.png";
import project4 from "../../../assets/projects Image/chikitshaHub.png";
import { VscGithub } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import "./project.css";
import { Link } from "react-router-dom";
const Projects = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div>
      {/* <h1 className="text-center lg:p-10 lg:pt-0 text-2xl">Projects</h1> */}
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-5 gap-1 w-[90%] mx-auto">
          <Tilt
            options={defaultOptions}
            className="group rounded-lg flex flex-col justify-between p-10 pb-10  dark:bg-blue-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 bg-zinc-200"
          >
            <div className="flex flex-col">
              <div className="block group-hover:hidden h-52 my-2">
                <h1 className="relative text-xl text-center font-semibold dark:text-white text-blue-950">
                  ChikitshaHub
                </h1>
                <p className="dark:text-white text-blue-950 text-center">
                  ChikitshaHub : The Ultimate Health Hub.
                </p>
              </div>
              <div className="scroll-div h-52 my-2 hidden group-hover:block  cursor-pointer">
                <img src={project4} style={{ top: "0px" }} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-1">
              <a
                href="https://hilarious-wisp-3febc2.netlify.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/Abdullah-Al-Mehmud/ChikitshaHub"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/Abdullah-Al-Mehmud/ChikitshaHub-server"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            className="group rounded-lg flex flex-col justify-between p-10 pb-10  dark:bg-blue-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 bg-zinc-200  "
          >
            <div className="flex flex-col">
              <div className="block group-hover:hidden h-52 my-2">
                <h1 className="relative text-xl text-center font-semibold dark:text-white text-blue-950">
                  BookNin
                </h1>
                <p className="dark:text-white text-blue-950 text-center">
                  BookNin : Where Every Page Tells a Story.
                </p>
              </div>
              <div className="scroll-div h-52 my-2 hidden group-hover:block  cursor-pointer">
                <img src={project1} style={{ top: "0px" }} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-1">
              <a
                href="https://booknin-project.web.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-client-booknin"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-server-booknin"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            className="group rounded-lg flex flex-col justify-between p-10 pb-10  dark:bg-blue-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 bg-zinc-200  "
          >
            <div className="flex flex-col ">
              <div className="block group-hover:hidden h-52 my-2">
                <h1 className="relative text-xl text-center font-semibold dark:text-white text-blue-950">
                  GariDekhun
                </h1>
                <p className="dark:text-white text-blue-950 text-center">
                  GariDekhun : Find Your Next Dream Vehicle.
                </p>
              </div>
            </div>
            <div className="scroll-div h-52 my-2 hidden group-hover:block">
              <img src={project2} style={{ top: "0px" }} alt="" />
            </div>
            <div className="flex justify-center items-center gap-2 mt-1">
              <a
                href="https://gari-dekhun.web.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-gariDekhun-client"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-gariDekhun-server"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            className="group rounded-lg flex flex-col justify-between p-10 pb-10  dark:bg-blue-200 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 bg-zinc-200  "
          >
            <div className="flex flex-col">
              <div className="block group-hover:hidden h-52 my-2">
                <h1 className="relative text-xl text-center font-semibold dark:text-white text-blue-950">
                  Petadopy
                </h1>
                <p className="dark:text-white text-blue-950 text-center">
                  Petadopy : Where Every Powprint Tells a Tale of Hope and Home
                </p>
              </div>
            </div>
            <div className="scroll-div h-52 my-2 hidden group-hover:block delay-75">
              <img src={project3} style={{ top: "0px" }} alt="" />
            </div>
            <div className="flex justify-center items-center gap-2 mt-1">
              <a
                href="https://petadopy.web.app"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Live <CgWebsite />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-petadopy-client"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Client <VscGithub />
              </a>
              <a
                href="https://github.com/TahidulAlam/mern-project-petadopy-server"
                // className="py-3 bg-white text-blue-700 font-semibold cursor-pointer rounded-lg w-full text-center"
                className="dark:text-white text-blue-950 flex justify-center gap-2 items-center hover:text-sky-400 hover:outline-1 rounded-lg"
              >
                Server <VscGithub />
              </a>
            </div>
          </Tilt>
        </div>
        {/* <div className="my-5">
          <Link to={"/projects"} className="dark:text-white text-blue-950 text-center my-5">
            <h1>see more</h1>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
