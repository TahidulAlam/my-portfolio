/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import bannerWhite from "../../../assets/bgImage.jpg";
import bannerDark from "../../../assets/banner-bg3.png";
import Container from "../../../components/component/Container";
import LottieAnimation from "../../../components/animation/LottieAnimation";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ClockApi from "../../../components/component/ClockApi";

const HeroBanner = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src={bannerDark}
        className="w-full h-[100vh] dark:block hidden"
        alt="Background"
      />
      <img
        src={bannerWhite}
        className="w-full h-[100vh] block dark:hidden"
        alt="Background"
      />
      <div className="absolute inset-0 bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm dark:bg-opacity-25 bg-opacity-0">
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 z-50 lg:w-full w-[90%] mx-auto py-10 ">
            <div className="flex flex-col gap-5 mt-28">
              <h1 className="text-2xl font-extrabold dark:text-white text-blue-950">
                Hello, I'm
              </h1>
              <h1 className="text-6xl font-extrabold dark:text-white text-blue-950">
                Md Tahidul Alam
              </h1>
              <TypeAnimation
                className="dark:text-white text-blue-950 text-base"
                sequence={[
                  "JavaScript Developer",
                  500,
                  "MERN Developer",
                  500,
                  "Frontend Enthusiast",
                  500,
                  "App Developer",
                  500,
                ]}
                // style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
              {/* <p className="dark:text-white text-blue-950">
                JavaScript Developer | Frontend Enthusiast
              </p> */}
              <div className="mt-2 ">
                <a
                  href="https://drive.google.com/uc?export=download&id=11goXXvNO2RpqrQNlHXGWM4V_H56Pblkd"
                  download="tahidul_resume.pdf"
                >
                  <button className="btn border-none dark:bg-gradient-to-r dark:from-[#000024] dark:to-[#002fb1] dark:text-white text-blue-950 font-semibold cursor-pointer hover:dark:from-[#002fb1] dark:hover:to-[#000024] hover:bg-blue-950 hover:text-white">
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:block hidden text-center w-[90%] mx-auto">
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
                <LottieAnimation />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroBanner;
