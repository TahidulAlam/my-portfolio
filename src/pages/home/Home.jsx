/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HeroBanner from "./hero-banner/HeroBanner";
import Container from "../../components/component/Container";
import AboutMe from "./about-me/AboutMe";
import MySkill from "./my-skill/MySkill";
import ScrollToTop from "react-scroll-to-top";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
// import about from "../../assets/button/about.png";
// import home from "../../assets/button/home.png";
// import experience from "../../assets/button/experience.png";
// import contact from "../../assets/button/location.png";
// import projects from "../../assets/button/projects.png";
// import skill from "../../assets/button/skill.png";
// import bgImage from "../../assets/bgImage.jpg";
import bgImageDark from "../../assets/banner-box3.png";
import bgImageWhite from "../../assets/banner-white.png";
import { Link } from "react-router-dom";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// 010026
const Home = () => {
  // const [tabIndex, setTabIndex] = useState(0);
  // bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
  return (
    <div className=" dark:bg-gradient-to-r dark:from-[#000024] dark:to-[#31025C] w-[100%] h-[100] bg-gradient-to-r from-[#bdbdbd] to-[#e4e4e4]">
      <img
        src={bgImageDark}
        alt=""
        className="w-[100%] h-[100%] opacity-40 fixed dark:block hidden"
      />
      <img
        src={bgImageWhite}
        alt=""
        className="w-[100%] h-[100%] opacity-40 fixed block dark:hidden"
      />
      <div>
        <HeroBanner />
      </div>
      {/* bg-white */}
      <div className=" w-full">
        <Container newClass={"mt-20 pt-20"}>
          <div className="flex items-center gap-2 my-10">
            <h1
              id="about"
              className="text-4xl font-semibold dark:text-white text-blue-950"
            >
              About
            </h1>
            <hr className="flex-grow border-t-2 dark:border-white border-blue-950" />
          </div>
          <div className="mt-2">
            <AboutMe />
          </div>
        </Container>
        <Container newClass={"mt-20 pt-20"}>
          <div className="flex items-center gap-2 my-10">
            <h1
              id="about"
              className="text-4xl font-semibold dark:text-white text-blue-950"
            >
              Experience
            </h1>
            <hr className="flex-grow border-t-2 dark:border-white border-blue-950" />
          </div>
          <div className="mt-2">
            <Experience />
          </div>
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <div className="flex items-center gap-2 my-10">
            <h1
              id="about"
              className="text-4xl font-semibold dark:text-white text-blue-950"
            >
              Skill
            </h1>
            <hr className="flex-grow border-t-2 dark:border-white border-blue-950" />
          </div>
          <MySkill />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <div className="flex items-center gap-2 my-10">
            <h1
              id="about"
              className="text-4xl font-semibold dark:text-white text-blue-950"
            >
              Projects
            </h1>
            <hr className="flex-grow border-t-2 dark:border-white border-blue-950" />
          </div>
          <Projects />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <div className="flex items-center gap-2 my-10">
            <h1
              id="about"
              className="text-4xl font-semibold dark:text-white text-blue-950"
            >
              Contact
            </h1>
            <hr className="flex-grow border-t-2 dark:border-white border-blue-950" />
          </div>
          <Contact />
        </Container>
      </div>
      {/* <ScrollToTop
        style={{
          width: "40px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "2px solid white",
          // color: "none",
        }}
        smooth
      />
      {/* <div className="">
        <img
          src={bgImage}
          alt=""
          className="w-[100%] absolute h-[100%] opacity-40"
        />
        <div className="">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabPanel>
              <HeroBanner />
            </TabPanel>
            <TabPanel>
              <div className="grid h-screen place-items-center lg:w-[90%] w-[95%] mx-auto">
                <AboutMe />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid h-screen place-items-center lg:w-[90%] w-[95%] mx-auto">
                <MySkill />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid h-screen place-items-center lg:w-[90%] w-[95%] mx-auto">
                <Experience />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid h-screen place-items-center lg:w-[90%] w-[95%] mx-auto">
                <Projects />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid h-screen place-items-center lg:w-[90%] w-[95%] mx-auto">
                <Contact />
              </div>
            </TabPanel>
            <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center">
              <TabList className="flex lg:gap-4 gap-2 lg:mb-5 mb-2">
                <Tab selectedClassName="bg-blue-950 rounded-full">
                  <img
                    src={home}
                    className="w-10 h-10 p-2 rounded-full cursor-pointer border-spacing-3 border-2 border-y-blue-950 border-x-white"
                    alt=""
                  />
                </Tab>
                <Tab selectedClassName="bg-blue-950 rounded-full">
                  <img
                    src={about}
                    className="w-10 h-10  p-2 rounded-full cursor-pointer border-spacing-3 border-2 border-y-blue-950 border-x-white"
                    alt=""
                  />
                </Tab>
                <Tab selectedClassName="bg-blue-950 rounded-full">
                  <img
                    src={skill}
                    className="w-10 h-10  p-2 rounded-full cursor-pointer border-spacing-3 border-2 border-y-blue-950 border-x-white"
                    alt=""
                  />
                </Tab>
                <Tab selectedClassName="bg-blue-950 rounded-full">
                  <img
                    src={experience}
                    className="w-10 h-10  p-2 rounded-full cursor-pointer border-spacing-3 border-2 border-y-blue-950 border-x-white"
                    alt=""
                  />
                </Tab>
                <Tab selectedClassName="bg-blue-950 rounded-full">
                  <img
                    src={projects}
                    className="w-10 h-10  p-2 rounded-full cursor-pointer border-spacing-3 border-2 border-y-blue-950 border-x-white"
                    alt=""
                  />
                </Tab>
                <Tab selectedClassName="bg-blue-950 rounded-full">
                  <img
                    src={contact}
                    className="w-10 h-10  p-2 rounded-full cursor-pointer border-spacing-3 border-2 border-y-blue-950 border-x-white"
                    alt=""
                  />
                </Tab>
              </TabList>
            </div>
          </Tabs>
        </div>
      </div> */}
      <ScrollToTop
        style={{
          width: "40px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "2px solid white",
          // color: "none",
        }}
        className="dark:bg-white bg-blue-950"
        smooth
      />
    </div>
  );
};

export default Home;
