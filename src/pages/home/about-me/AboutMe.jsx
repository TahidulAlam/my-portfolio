/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import image from "../../../assets/56164771.jpg";
const AboutMe = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-full w-[90%] mx-auto">
        <div>
          <img src={image} className="rounded-full w-96 mx-auto" alt="" />
        </div>
        <div className="text-white flex flex-col gap-5 justify-center items-start">
          <p className="text-justify text-lg">
            Hello! I'm{" "}
            <span className="font-medium text-sky-600">Md Tahidul Alam</span> ,
            a meticulous Front-End Developer specializing in the enchanting
            realms of React.js, Next.js, Node.js, Express.js, and MongoDB. My
            passion lies in sculpting pixel-perfect user interfaces that
            seamlessly blend creativity with functionality.
          </p>
          <div>
            <p className="text-xl font-semibold">
              Education :{" "}
              <span className="text-sky-600">
                BSc in Computer Science & Engineering.
              </span>{" "}
            </p>
            <p className="text-xl font-semibold">
              University:{" "}
              <span className="text-sky-600">
                University of Creative Technology, Chittagong.
              </span>
            </p>
            <p>
              Session : <span>2019-2022</span>
            </p>
          </div>
          <div className="flex gap-5 flex-wrap">
            <a href="https://www.linkedin.com/in/mdtahidulalam">
              <button className="btn bg-white px-10 text-blue-700 font-semibold ">
                Linkedin
              </button>
            </a>
            <a href="https://facebook.com/mdTahidulAlam.me">
              <button className="btn bg-white px-10 text-blue-700 font-semibold ">
                Facebook
              </button>
            </a>
            <a href="https://twitter.com/MdTahidulAlam">
              <button className="btn bg-white px-10 text-blue-700 font-semibold ">
                Twitter
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
