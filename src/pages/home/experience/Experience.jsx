/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import Container from "../../../components/component/Container";
import uctc from "../../../assets/download-removebg-preview.png";
import club from "../../../assets/club 22-01-01.png";
const Experience = () => {
  return (
    <div>
      {/* <h1 className="text-center lg:p-10 lg:pt-0 text-2xl">Experience</h1> */}
      <div data-aos="fade-up" data-aos-duration="2000">
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="text-start flex flex-col justify-start lg:w-full w-[90%] mx-auto gap-2">
              <h1 className="text-xl font-semibold text-start text-[#161D2D]">
                Programming Contest Secretary,
              </h1>
              <h1 className="text-[#161D2D]">UCTC Computer CLub, UCTC.</h1>
              <h1 className="text-[#161D2D]">
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
        </Container>
      </div>
      {/* And I also Attend ICPC 2019 Programming
      Contest regional. */}
    </div>
  );
};

export default Experience;
