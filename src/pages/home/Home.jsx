/* eslint-disable no-unused-vars */
import React from "react";
import HeroBanner from "./hero-banner/HeroBanner";
import Container from "../../components/component/Container";
import AboutMe from "./about-me/AboutMe";
import MySkill from "./my-skill/MySkill";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <div className="bg-[#161D2D] w-full">
        <Container newClass={"bg-[#161D2D] pt-20"}>
          <hr className="pb-2 pt-5" />
          <h1 id="about" className="pb-5 text-4xl font-semibold text-white">
            About
          </h1>
          <AboutMe />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <hr className="pb-2 pt-5" />
          <h1 id="skill" className="pb-5 text-4xl font-semibold text-white">
            Skill
          </h1>
          <MySkill />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <hr className="pb-2 pt-5" />
          <h1 id="projects" className="pb-5 text-4xl font-semibold text-white">
            Projects
          </h1>
          <Projects />
        </Container>
        <Container newClass={"mt-20 pb-20"}>
          <hr className="pb-2 pt-5" />
          <h1 id="contact" className="pb-5 text-4xl font-semibold text-white">
            Contact
          </h1>
          <Contact />
        </Container>
      </div>
    </div>
  );
};

export default Home;
