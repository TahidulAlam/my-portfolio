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
import bgImage from "../../assets/bgImage.jpg";
import { Link } from "react-router-dom";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Home = () => {
  // const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <img
        src={bgImage}
        alt=""
        className="w-[100%] h-[100%] opacity-40 fixed"
      />
      <div>
        <HeroBanner />
      </div>
      {/* bg-white */}
      <div className="bg-white w-full">
        <Container newClass={"bg-white pt-20"}>
          <hr className="pb-2 pt-5" />
          <h1 id="about" className="pb-5 text-4xl font-semibold text-[#161D2D]">
            About
          </h1>
          <AboutMe />
        </Container>
        <Container newClass={"bg-white pt-20"}>
          <hr className="pb-2 pt-5" />
          <h1 id="about" className="pb-5 text-4xl font-semibold text-[#161D2D]">
            Experience
          </h1>
          <Experience />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <hr className="pb-2 pt-5" />
          <h1 id="skill" className="pb-5 text-4xl font-semibold text-[#161D2D]">
            Skill
          </h1>
          <MySkill />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <hr className="pb-2 pt-5" />
          <h1
            id="projects"
            className="pb-5 text-4xl font-semibold text-[#161D2D]"
          >
            Projects
          </h1>
          <Projects />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <hr className="pb-2 pt-5" />
          <h1
            id="contact"
            className="pb-5 text-4xl font-semibold text-[#161D2D]"
          >
            Contact
          </h1>
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
    </div>
  );
};

export default Home;
