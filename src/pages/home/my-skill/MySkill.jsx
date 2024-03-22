/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ShowMoreText from "react-show-more-text";
import img1 from "../../../assets/skillsIcon/Bootstrap.svg";
import img2 from "../../../assets/skillsIcon/HTML.svg";
import img3 from "../../../assets/skillsIcon/CSS.svg";
import img4 from "../../../assets/skillsIcon/JavaScript.svg";
import img5 from "../../../assets/skillsIcon/React-Light.svg";
import img6 from "../../../assets/skillsIcon/Git.svg";
import img7 from "../../../assets/skillsIcon/Github-Light.svg";
import img8 from "../../../assets/skillsIcon/NextJS-Light.svg";
import img9 from "../../../assets/skillsIcon/Firebase-Light.svg";
import img10 from "../../../assets/skillsIcon/MongoDB.svg";
import img11 from "../../../assets/skillsIcon/NodeJS-Light.svg";
import img12 from "../../../assets/skillsIcon/ExpressJS-Light.svg";
const MySkill = () => {
  return (
    <div>
      {/* <h1 className="text-center lg:p-10 lg:pt-0 text-2xl">Skill</h1> */}
      <div className="lg:w-full w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div data-aos="fade-up">
            <div className="w-full mx-auto flex justify-center items-center">
              <div className="grid grid-cols-4 gap-2 w-60">
                <img src={img1} className="w-10" alt="" />
                <img src={img2} className="w-10" alt="" />
                <img src={img3} className="w-10" alt="" />
                <img src={img4} className="w-10" alt="" />
                <img src={img5} className="w-10" alt="" />
                <img src={img6} className="w-10" alt="" />
                <img src={img7} className="w-10" alt="" />
                <img src={img8} className="w-10" alt="" />
                <img src={img9} className="w-10" alt="" />
                <img src={img10} className="w-10" alt="" />
                <img src={img11} className="w-10" alt="" />
                <img src={img12} className="w-10" alt="" />
              </div>
            </div>
          </div>
          <div data-aos="fade-down">
            <div className="flex flex-col gap-5">
              <ShowMoreText
                lines={4}
                more="Show more"
                less="Show less"
                className=" text-justify text-[#161D2D] text-lg"
              >
                <p className="text-justify text-[#161D2D] text-lg">
                  Embarking on the digital journey armed with a versatile skill
                  set! I'm fluent in the languages of HTML, CSS, and JavaScript,
                  with the ability to sculpt captivating interfaces using
                  Bootstrap, Tailwind CSS, and Material UI. My coding repertoire
                  extends to React JS, Node JS, and Express JS, while MongoDB
                  provides the canvas for seamless data management. I design
                  with flair using Figma and Adobe Illustrator, and my toolkit
                  isn't complete without the version control magic of Git and
                  GitHub. I dance in the cloud with Firebase, ensuring dynamic
                  and secure applications. Plus, I wield the secret code of JWT
                  for authentication sorcery, ensuring a magical user
                  experience. Let's craft digital wonders together! ✨🚀
                  {/* Front-end developer fluent in HTML, CSS, JS, Bootstrap, Tailwind,
              Material UI, React, Node, Express, MongoDB. Skilled in Figma,
              Illustrator, Git, GitHub, and Firebase. Passionate about crafting
              dynamic, secure, and user-friendly applications. Let's build magic
              together! ✨ */}
                </p>
              </ShowMoreText>
              <div>
                <a
                  href="https://github.com/TahidulAlam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn  bg-slate-500 px-10 text-white font-semibold ">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
