// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.scss'


import firstImage from '../../images/tech-icons.png'
import Section from '../shared/section/Index'
import CalltoAction from '../shared/callToAction'
const Skills = () => {
  return (
    <Section
    background="dark"
    id="skills"
    >
    <div className="full-section">
    <div className="left-section">
        <img className='newImg' src={firstImage} alt="" />
    </div>
    <div className="right-section">
      <h2 className='right-section-h2'>Skills</h2>
      <p className='right-section-p'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nobis ducimus placeat, quis odit incidunt possimus et. Nobis necessitatibus quo nesciunt obcaecati, voluptates omnis unde adipisci consequatur labore, placeat a?
      </p>
      <CalltoAction text={"Download RESUME"}  />
    </div>
    </div>
    </Section> 
  )
}

export default Skills