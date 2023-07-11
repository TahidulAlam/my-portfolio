// eslint-disable-next-line no-unused-vars
import React from 'react'

import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"


// npm i emailjs-com react-hook-form react react 
// react-toastify


// publicKey
// LyeAN-TelrbzPufAT 
import './style.scss'
const ContactInfo = () => {
  return (
    <div className='contact-info-box'>
      <h4>Thank you</h4>
      <div className="contact-option">
        <FaPhoneAlt />
        <span className='text'> +88 0188888811</span>
      </div>
      <div className="contact-option">
        <MdEmail />
        <span className='text'>Tahid.cse.uctc@gmail.com</span>
      </div>
    </div>
  )
}

export default ContactInfo