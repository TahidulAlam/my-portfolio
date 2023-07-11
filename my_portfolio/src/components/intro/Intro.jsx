// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./style.scss"
// import cloud from "../../images/cloud.png";
// import cloudSoft from "../../images/cloud-soft.png";
// import bgN from "../../images/Untitled-1.png"
import Navigation from './navigation-bar/Index';
// import IntroContent from './intro-content/Index';
// import Skills from '../skills/Index';

// Skills
// Navigation
const Intro = () => {
    return (
        <div className="Intro-section">
            <div className="vector-bg" id="parallax">
            </div>
            {/* <img src={bgN} className='cloud' /> */}
            {/* <img src={cloudSoft} className='cloud-soft' /> */}
            <div className="content">
                <Navigation />
                {/* <IntroContent /> */}
            </div>
        </div>
    )
}

export default Intro