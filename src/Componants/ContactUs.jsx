import React from 'react'
import { useState } from 'react';
import './ContactUs.css';
const ContactUs = () => {
  const[isSubmitted,setIsSubmitted]=useState(false);
  const submitHandler=event=>{
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  }
  return (
    <div id='contactUs'>
      <div className="contactHeading"><span>Contact</span> Us</div>
      {
        isSubmitted && (
          <div className="connectUs">
            Thanks For Reaching Us.
          </div>
        )
      }

      <div className="contactUsForm">
        <section className="img">
            <img src="https://www.shutterstock.com/image-illustration/contact-us-text-written-over-600nw-1080340454.jpg" alt="" srcset="" />
        </section>
        <section className="contactForm">
        <label htmlFor="name">NAME</label>
          <br />
          <input type="text" placeholder='Your name'/>
          <br />
          <label htmlFor="email">EMAIL ID</label>
          <br />
          <input type="text" placeholder='Your Email-Id'/>
          <br />
          <label htmlFor="query">YOUR QUERY</label>
          <br />
          <input type="text" placeholder='Your Query'/>
          <br />
          <button className='submitFormButton' onClick={submitHandler}>Submit</button>
        </section>
      </div>
    </div>
  )
}

export default ContactUs
