// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.scss'
import Section from '../shared/section'
import ContactInfo from './contact-info/Index'
import Form from './form/Index'

// Form
const Contact = () => {
  return (
    <Section id="contact"
    title="Any Question?"
    background="dark"
    >
        <div className="contact-content-wrapper">
            <ContactInfo />
            <Form />
        </div>
    </Section>
  )
}

export default Contact