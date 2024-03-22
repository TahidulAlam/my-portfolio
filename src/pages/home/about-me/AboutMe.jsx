/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import image from "../../../assets/56164771.jpg";
const AboutMe = () => {
  return (
    <div>
      {/* <h1 className="text-center lg:p-10 lg:pt-0 text-2xl">About</h1> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-full w-[90%] mx-auto lg:gap-10 gap-3">
        <div data-aos="fade-up">
          <div>
            <img
              src={image}
              className="rounded-full lg:w-96 w-40 mx-auto"
              alt=""
            />
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="text-[#161D2D] flex flex-col gap-5 justify-center items-start">
            <p className="text-justify lg:text-lg text-sm">
              Hello! I'm{" "}
              <span className="font-medium text-sky-600">Md Tahidul Alam</span>{" "}
              , a meticulous Front-End Developer specializing in the enchanting
              realms of React.js, Next.js, Node.js, Express.js, and MongoDB. My
              passion lies in sculpting pixel-perfect user interfaces that
              seamlessly blend creativity with functionality.
            </p>
            <div>
              <p className="lg:text-xl text-sm font-semibold">
                Education :{" "}
                <span className="text-sky-600">
                  BSc in Computer Science & Engineering.
                </span>{" "}
              </p>
              <p className="lg:text-xl text-sm  font-semibold">
                University:{" "}
                <span className="text-sky-600">
                  University of Creative Technology, Chittagong.
                </span>
              </p>
              <p>
                Session : <span>2019-2023</span>
              </p>
            </div>
            <div className="grid grid-cols-4 gap-1 place-items-start">
              <a href="https://www.linkedin.com/in/mdtahidulalam">
                <button className="btn btn-sm bg-slate-800 text-white hover:bg-white font-semibold cursor-pointer hover:text-slate-800">
                  Linkedin
                </button>
              </a>
              <a href="https://github.com/TahidulAlam">
                <button className="btn btn-sm bg-slate-800 text-white hover:bg-white font-semibold cursor-pointer hover:text-slate-800">
                  GitHub
                </button>
              </a>
              <a href="https://facebook.com/mdTahidulAlam.me">
                <button className="btn btn-sm bg-slate-800 text-white hover:bg-white font-semibold cursor-pointer hover:text-slate-800">
                  Facebook
                </button>
              </a>
              <a href="https://twitter.com/MdTahidulAlam">
                <button className="btn btn-sm bg-slate-800 text-white hover:bg-white font-semibold cursor-pointer hover:text-slate-800">
                  Twitter
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
