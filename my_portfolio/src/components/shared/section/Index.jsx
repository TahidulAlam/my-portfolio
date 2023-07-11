// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.scss'

// eslint-disable-next-line react/prop-types
const Section = ({ children, id, className, title, background}) => {
  return (
    <div
    id={id || ""}
    className={`section ${className ? className : ""} ${background === "dark" ? "dark" : "light"}`}
    > 
    <div className="content">
        {
            title &&(
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
            )
        }
        {children}
    </div>
    </div>
  )
}

export default Section