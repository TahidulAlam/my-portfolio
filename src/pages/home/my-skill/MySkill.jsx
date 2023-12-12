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
      <div className="lg:w-full w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div className="flex flex-col gap-5">
            <ShowMoreText
              lines={4}
              more="Show more"
              less="Show less"
              className=" text-justify text-sky-300 text-lg"
            >
              <p className="text-justify text-white text-lg">
                Embarking on the digital journey armed with a versatile skill
                set! I'm fluent in the languages of HTML, CSS, and JavaScript,
                with the ability to sculpt captivating interfaces using
                Bootstrap, Tailwind CSS, and Material UI. My coding repertoire
                extends to React JS, Node JS, and Express JS, while MongoDB
                provides the canvas for seamless data management. I design with
                flair using Figma and Adobe Illustrator, and my toolkit isn't
                complete without the version control magic of Git and GitHub. I
                dance in the cloud with Firebase, ensuring dynamic and secure
                applications. Plus, I wield the secret code of JWT for
                authentication sorcery, ensuring a magical user experience.
                Let's craft digital wonders together! ✨🚀
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
                <button className="btn  bg-white px-10 text-blue-700 font-semibold ">
                  Github
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center gap-1">
              <img src={img4} className="w-10" alt="" />
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                  style={{ width: "70%" }}
                >
                  {" "}
                  70%
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={img5} className="w-10" alt="" />
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                  style={{ width: "70%" }}
                >
                  {" "}
                  70%
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={img10} className="w-10" alt="" />
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                  style={{ width: "50%" }}
                >
                  {" "}
                  50%
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1">
              <img src={img11} className="w-10" alt="" />
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                  style={{ width: "55%" }}
                >
                  {" "}
                  55%
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1">
              <img src={img12} className="w-10" alt="" />
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                  style={{ width: "60%" }}
                >
                  {" "}
                  60%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
