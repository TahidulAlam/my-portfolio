// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.scss'
import Section from '../shared/section/Index'
import Filters from './filters/Index'
import Showcase from './showcase/Index'
import thumb1 from "../../images/portfolio/thumb-1.jpg"
import thumb2 from "../../images/portfolio/thumb-2.jpg"
import thumb3 from "../../images/portfolio/thumb-3.jpg"
import thumb4 from "../../images/portfolio/thumb-4.jpg"
import thumb5 from "../../images/portfolio/thumb-5.jpg"
import thumb6 from "../../images/portfolio/thumb-6.jpg"
import thumb7 from "../../images/portfolio/thumb-7.jpg"
import thumb8 from "../../images/portfolio/thumb-8.jpg"


const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: thumb1,
        },
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: thumb2,
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: thumb3,
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: thumb4,
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: thumb5,
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: thumb6,
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: thumb7,
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: thumb8,
        },
    },
];


const Portfolio = () => {
    const [projects, setProjects] =useState(projectsData)
    const [transition, setTransition] =useState(false)


    const filterProjects =(tag)=>{
        setTransition("zoomout");

        setTimeout(()=>{
            if(tag !== "all"){
                const filterdProjects = projectsData.filter((f)=> f.tags.includes(tag)); setProjects(filterdProjects);
            }else{
                setProjects(projectsData)
            }
            setTransition("zoomin")
        },200);
        setTimeout(()=>{
            setTransition(false)
        }, 600)
    }
  return (
    <Section
    id={'portfolio'}
    title={'Check my Portfolio'}
    background={"dark"}>
        <div className="portfolio-content">
        <Filters filterProjects={(tag)=> filterProjects(tag)} /> 
        <Showcase 
        data={projects} 
        transition={transition}
         />
        </div>
    </Section>
  )
}

export default Portfolio