// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line no-unused-vars, react/prop-types
const SocialIcon = ({color, icon,link}) => {
  return (
    <div
    className='social-icon'
    style={{backgroundColor: color}}
    onClick={()=>{
        window.open(link, "_blank")
    }}
    >{icon}</div>
  )
}

export default SocialIcon