/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../../assets/banner.png";
import banner2 from "../../../assets/4884784.png";
import Container from "../../../components/component/Container";

const HeroBanner = () => {
  return (
    <div>
      <div className="relative -mt-28 h-screen">
        <img src={banner} className="w-full  h-[100vh]" alt="" />
        <div className="absolute lg:top-40 top-28 w-full">
          <Container>
            <div className="grid lg:grid-cols-2 grid-cols-1 py-20 z-50 lg:w-full w-[90%] mx-auto">
              <div className=" flex flex-col gap-5">
                <h1 className="text-2xl font-medium text-white">
                  Hello, I'm ,
                </h1>
                <h1 className="text-6xl font-medium text-white">
                  Md Tahidul Alam
                </h1>
                <p className="text-white">
                  Passionate junior web developer specializing in the MERN
                  stack, constantly exploring and rewriting code to embrace the
                  latest technologies.
                </p>
                <div>
                  {/* <a href="../../../assets/myResume.pdf" download> */}
                  {/* <a
                    href="https://drive.google.com/file/d/1XQY_KmsaCsnWKlgYu4ZVcH37Aw0h1cOz/view?usp=sharing"
                    download="tahidul_resume.pdf"
                  > */}
                  <a
                    href="https://drive.google.com/uc?export=download&id=1XQY_KmsaCsnWKlgYu4ZVcH37Aw0h1cOz"
                    download="tahidul_resume.pdf"
                  >
                    <button className="btn bg-white text-blue-700 font-semibold cursor-pointer">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
              <div className="-mt-16 animate-pulse lg:block hidden">
                <img
                  src={banner2}
                  className="opacity-50 w-[80%] mx-auto"
                  alt=""
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
