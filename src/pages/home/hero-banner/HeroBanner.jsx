/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../../assets/banner.png";
import banner2 from "../../../assets/4884784.png";
import Container from "../../../components/component/Container";
import LottieAnimation from "../../../components/animation/LottieAnimation";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
  return (
    <div>
      <div className="relative h-screen">
        {/* <img src={banner} className="w-full  h-[100vh]" alt="" /> */}

        <div className="absolute lg:top-40 top-28 w-full">
          <Container>
            <div className="grid lg:grid-cols-2 grid-cols-1 z-50 lg:w-full w-[90%] mx-auto">
              <div className=" flex flex-col gap-5">
                <h1 className="text-2xl font-medium text-[#161D2D]">
                  Hello, I'm ,
                </h1>
                <h1 className="text-6xl font-medium text-[#161D2D]">
                  Md Tahidul Alam
                </h1>
                <p className="text-[#161D2D]">
                  Passionate junior web developer specializing in the MERN
                  stack, constantly exploring and rewriting code to embrace the
                  latest technologies.
                </p>
                {/* <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "75px",
                    display: "block",
                    color: "#161D2D",
                  }}
                  sequence={[
                    //                     `Line one\nLine Two\nLine Three\nLine Four\nLine Five

                    // Line Seven`
                    `Passionate junior web developer specializing in the MERN stack, constantly exploring and rewriting code to embrace  the latest technologies.`,
                    1000,
                    "",
                  ]}
                  // repeat={Infinity}
                  repeat={Infinity}
                /> */}
                <div className="mt-2">
                  {/* <a href="../../../assets/myResume.pdf" download> */}
                  {/* <a
                    href="https://drive.google.com/file/d/1XQY_KmsaCsnWKlgYu4ZVcH37Aw0h1cOz/view?usp=sharing"
                    download="tahidul_resume.pdf"
                  > */}
                  {/* https://drive.google.com/file/d/11goXXvNO2RpqrQNlHXGWM4V_H56Pblkd/view?usp=sharing */}
                  <a
                    // href="https://drive.google.com/uc?export=download&id=1XQY_KmsaCsnWKlgYu4ZVcH37Aw0h1cOz"
                    href="https://drive.google.com/uc?export=download&id=11goXXvNO2RpqrQNlHXGWM4V_H56Pblkd"
                    download="tahidul_resume.pdf"
                  >
                    <button className="btn bg-slate-800 text-white hover:bg-white font-semibold cursor-pointer hover:text-slate-800">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
              <div className="-mt-36 lg:block hidden text-center w-[90%] mx-auto">
                {/* <img
                  src={banner2}
                  className="opacity-50 w-[80%] mx-auto"
                  alt=""
                /> */}
                <LottieAnimation />
              </div>
            </div>
          </Container>
          {/* <div data-aos="zoom-in">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
