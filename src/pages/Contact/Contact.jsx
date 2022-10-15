import React from 'react'

import "./Contact.css"



const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Contact</h2>
      <div className='form-info-container'>
        <div className='contact-form'>
          <form action="">
            <div className='form-row'>
              <label htmlFor="">Enter your name</label>
              <input type="text" placeholder='ex. Jonh Doe' />
            </div>
            <div className='form-row'>
              <label htmlFor="">Enter your email</label>
              <input type="text" placeholder='ex. john.doe@gmail.com' />
            </div>
            <div className='form-textarea'>
              <label htmlFor="">Enter your message here</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message here ...'></textarea>
            </div>
            <div className='form-btn'>
              <button onClick={()=>alert("Nothing sent. Just testing.")}>Submit</button>
            </div>
          </form>
        </div>
        <div className='contact-info'>
          <h4>Kiril's Garage Sale</h4>
          <div className='company-address'>
            <h5>Main Street XX</h5>
            <h5>Gevgelija, Macedonia</h5>
          </div>
          <h5>+389 70 XXX XXX</h5>
          <h5>doesnt.exist@kgs.com</h5>
        </div>
      </div>
      <div className='google-maps-location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40639121.22750176!2d-5.5396051622426015!3d51.560623173267295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smk!4v1665762902090!5m2!1sen!2smk" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact