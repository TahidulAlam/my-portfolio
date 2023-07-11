// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./style.scss"
import ProfilePIc  from "../../../images/4380744.png";
import CalltoAction from '../../shared/callToAction';

// CalltoAction
const IntroContent = () => {
  return (
    <div className="Intro-content">
        <div className="layout">
            <div className="left-col">
                <h1 className='title'>
                    <span className="small-text">
                        <span className="text">Hello,</span>
                    </span>
                    <span className="big-text">
                         {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm Tahidul Alam
                    </span>
                    <span className='title-text'>(Software Engineer)</span>
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates tempore similique, enim cupiditate libero, aliquam doloribus at quaerat ex culpa harum nihil sunt iusto voluptas autem veritatis placeat dolorem!</p>
            <CalltoAction text={"Connect Me"}/>
            </div>
            <div className="right-col">
            <img className='profile-pic' src={ProfilePIc} alt="" />

            </div>
        </div>
    </div>
  )
}
export default IntroContent