import React from 'react'

import "./Hero.css"

import logoImg from "../../../../assets/kgs-logo.png"

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-logo-left'>
        <img src={logoImg} alt="Logo" />
      </div>
      <div className='hero-content-right'>
        <h1>Garage Sale site</h1>
        <h2>Garbage to one. Treasure to another.</h2>
        <p>Get rid of the things that only take space and don't use them. Also browse for some usefull items in our Products section</p>
        <div className='hero-button-container'>
          <button>Browse here ...</button>
        </div>
      </div>
    </div>
  )
}

export default Hero