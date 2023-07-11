// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaFacebook,
} from 'react-icons/fa';
import './style.scss'
import Section from'../../components/shared/section/Index'
import SocialIcon from './social-icon/Index'

// eslint-disable-next-line no-unused-vars
import {scrollToSection} from "../../components/utils/helpers.js"

const Footer = () => {
  return (
    <Section
    className={"footer"}>
        <div className="footer-content">
            <div className="footer-logo">
            </div>
            <ul className="footer-menu">
                {/* eslint-disable-next-line no-unused-vars */}
                <li className="footer-menu-item" onClick={()=> scrollToSection("skills")}>
                    Skills
                </li>
                {/* eslint-disable-next-line no-unused-vars */}
                <li className="footer-menu-item" onClick={()=> scrollToSection("portfolio")}>
                Portfolio
                </li>
                {/* eslint-disable-next-line no-unused-vars */}
                <li className="footer-menu-item" onClick={()=> scrollToSection("blogs")}>
                Blog
                </li>
                {/* eslint-disable-next-line no-unused-vars */}
                <li className="footer-menu-item" onClick={()=> scrollToSection("contact")}>
                Contact
                </li>
            </ul>
            <div className="social-icons">
                <SocialIcon 
                // color="#FF0000"
                icon={<FaYoutube />}
                link= "https://www.youtube.com"
                />
                <SocialIcon 
                // color="#034ED8"
                icon={<FaGithub />}
                link= "https://www.Github.com"
                />
                <SocialIcon 
                // color="#FF0000"
                icon={<FaLinkedinIn />}
                link= "https://www.linkedin.com"
                />
                <SocialIcon 
                // color="#FF0000"
                icon={<FaStackOverflow />}
                link= "https://www.StackOverFlow.com"
                />
                <SocialIcon 
                // color="#FF0000"
                icon={<FaFacebook />}
                link= "https://www.Facebook.com"
                />
                
            </div>
            <div className="bottom-bar">
                <div className="copyright-text">
                    Copyright by Tahidul Alam
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Footer