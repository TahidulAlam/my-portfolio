// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./style.scss"
import Arrow from '../arrow'
// Arrow
// eslint-disable-next-line react/prop-types
const CalltoAction = ({ text,icon }) => {
  return (
    <div className="call-to-action">
        <span className="text">{text}</span>
        {icon ? <div className='icon'>{icon}</div> : <Arrow />}
    </div>
  )
  }

export default CalltoAction