import React, { useEffect, useState } from 'react'
import './Contact.css'
import contactBG from './contact-bg.jpg'

function Contact() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])



  return (
    <section className='contact-section'>
      <div className="container">
      <div className="contact-main-container">
            <div className="heading">
                <span>Get in Touch</span>
            </div>
            <div className="main-container">
                <div className="up">
                <div className="left">
                    <img src={contactBG} alt="" />
                </div>
                <form action="">
                    <div className="name same-field">
                    <input type="text" placeholder='Name' name='Name'  required />
                    </div>
                    <div className="name same-field">
                    <input type="email" placeholder='Email'  name='Email'  required />
                    </div>
                    <div className="name same-field">
                    <input type="text" placeholder='Phone No.' name='PhoneNumber' required />
                    </div>
                    <div className="textarea same-field">
                    <textarea placeholder='Message'  name='Message'  required></textarea>
                    </div>
                    <button className='contact-btn' type='submit'>Submit</button>
                </form>
                </div>
            </div>
        </div>
      </div>
      <div className="map-parent">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59517.73534181859!2d72.83062125549353!3d21.197780982304558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa373bb598d%3A0x65b1389cb7c2070f!2sSurat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1712947677263!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    </section>
  )
}

export default Contact
