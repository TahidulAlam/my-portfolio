// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './style.scss'

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Products",
        id: "product",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
    {
        name: "UI UX",
        id: "Ui-ux",
    },
];


// eslint-disable-next-line react/prop-types
const Filters = ({filterProjects}) => {
    const [active, setActive] =useState("")

    const clickHandeler =(id) =>{
        setActive(id);
        filterProjects(id)
    }
  return (
    <ul className="filter-menu">
        {filtersData.map((item)=>{
            return (
                <li 
                key={item.id} 
                className={`filter-items ${
                    active === item.id ? "active" : ""
                }`}
                onClick={() => clickHandeler(item.id)}>
                {item.name}</li>
            )
        })}
        
    </ul>
  )
}

export default Filters