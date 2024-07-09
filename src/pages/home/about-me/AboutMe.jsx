/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import image from "../../../assets/profile.jpg";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-full w-[90%] mx-auto lg:gap-10 gap-3">
        <div data-aos="fade-up">
          <div>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <img
                src={image}
                className="rounded-full lg:w-96 w-40 mx-auto"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="dark:text-white text-blue-950 flex flex-col gap-5 justify-center items-start">
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
            <div className="flex lg:gap-4 gap-2">
              <div>
                <a href="https://www.linkedin.com/in/mdtahidulalam">
                  <button className="btn btn-sm">Linkedin</button>
                </a>
              </div>
              <div>
                <a href="https://github.com/TahidulAlam">
                  <button className="btn btn-sm">GitHub</button>
                </a>
              </div>
              <div>
                <a href="https://facebook.com/mdTahidulAlam.me">
                  <button className="btn btn-sm">
                    {/* <IoLogoFacebook className="w-5" /> */} Facebook
                  </button>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/MdTahidulAlam">
                  <button className="btn btn-sm">Twitter</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
