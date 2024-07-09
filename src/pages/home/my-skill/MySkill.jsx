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
      <div className="lg:w-full w-[90%] mx-auto ">
        <div className="grid grid-cols-7 gap-10 w-full my-10">
          <img
            src={img1}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img2}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img3}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img4}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img5}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img6}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img7}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <div className="col-span-1"></div> {/* Empty span for centering */}
          <img
            src={img8}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img9}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img10}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img11}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <img
            src={img12}
            className="w-24 p-3 dark:bg-white bg-black bg-blend-hue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 rounded-2xl"
            alt=""
          />
          <div className="col-span-1"></div> {/* Empty span for centering */}
        </div>
      </div>
    </div>
  );
};

export default MySkill;
