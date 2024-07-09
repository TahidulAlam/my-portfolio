/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import Container from "../../../components/component/Container";
import uctc from "../../../assets/download-removebg-preview.png";
import club from "../../../assets/club 22-01-01.png";
import abm from "../../../assets/AbmLogo2-FAg7Z0w2.png";
const Experience = () => {
  return (
    <div>
      {/* <h1 className="text-center lg:p-10 lg:pt-0 text-2xl">Experience</h1> */}
      <div data-aos="fade-up" data-aos-duration="2000">
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
            <div className="text-start flex flex-col justify-start lg:w-full w-[90%] mx-auto gap-2">
              <h1 className="text-xl font-semibold text-start dark:text-white text-blue-950">
                Programming Contest Secretary,
              </h1>
              <h1 className="dark:text-white text-blue-950">
                UCTC Computer CLub, UCTC.
              </h1>
              <h1 className="dark:text-white text-blue-950">
                I've had the privilege of coordinating university programming
                contests and CSE fest <br /> in my capacity as the Contest
                Secretary for the UCTC Computer Club.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={uctc} className="w-32" alt="" />
              <img src={club} className="w-44" alt="" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
            <div className="text-start flex flex-col justify-start lg:w-full w-[90%] mx-auto gap-2">
              <h1 className="text-xl font-semibold text-start dark:text-white text-blue-950">
                Junior Web Developer
              </h1>
              <h1 className="dark:text-white text-blue-950">ABM Global Ltd.</h1>
              <h1 className="dark:text-white text-blue-950">
                Feb.24 - July.24
              </h1>
              <h1 className="dark:text-white text-blue-950">
                I've had an incredible journey with an amazing team and mentor.
                As a junior web developer, I've learned various programming
                languages, mastered front-end and back-end techniques, and honed
                my skills in frameworks like React and Tailwind CSS. This
                experience has greatly shaped my development career.
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2 flex-col">
              <img src={abm} className="w-32" alt="" />
              <h1 className="text-center dark:text-white text-blue-950">
                Abm Global LTD
              </h1>
            </div>
          </div>
        </Container>
      </div>
      {/* And I also Attend ICPC 2019 Programming
      Contest regional. */}
    </div>
  );
};

export default Experience;
