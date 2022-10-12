import React from 'react'

import "./Contact.css"



const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div>
        <div className='contact-form'>
          <form action="">
            <label htmlFor="">Enter your name</label>
            <input type="text" placeholder='ex. Jonh Doe' />
            <label htmlFor="">Enter your email</label>
            <input type="text" placeholder='ex. john.doe@gmail.com' />
            <label htmlFor="">Enter your message here</label>
            <textarea name="" id="" cols="30" rows="10">Message here ...</textarea>
            <button>Submit</button>
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

      </div>
    </div>
  )
}

export default Contact