import React from 'react'

import "./About.css"

import section1Img from "../../assets/section-one-image.jfif"
import section2Img from "../../assets/section-two-image.jfif"

const About = () => {
  return (
    <div className='about-container'>
      <h2 className='about-title'>About</h2>
      <div className='about-content'>
        <div className='about-section-one'>
          <div className='section-img'>
            <img src={section1Img} alt="slika 1" />
          </div>
          <div className='section-text'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente 
              voluptatibus fugit labore assumenda porro. Reprehenderit accusantium 
              iusto ipsum cum aliquam rerum delectus neque? Veniam quod ad tempore 
              consequatur amet. Ipsa fuga sintnon officiis dignissimos perspiciatis 
              numquam consequatur cumque?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente 
              voluptatibus fugit labore assumenda porro. Reprehenderit accusantium 
              iusto ipsum cum aliquam rerum delectus neque? Veniam quod ad tempore 
              consequatur amet. Ipsa fuga sintnon officiis dignissimos perspiciatis 
              numquam consequatur cumque?
            </p>
          </div>
        </div>
        <div className='about-section-one'>
          <div className='section-text'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente 
              voluptatibus fugit labore assumenda porro. Reprehenderit accusantium 
              iusto ipsum cum aliquam rerum delectus neque? Veniam quod ad tempore 
              consequatur amet. Ipsa fuga sintnon officiis dignissimos perspiciatis 
              numquam consequatur cumque?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente 
              voluptatibus fugit labore assumenda porro. Reprehenderit accusantium 
              iusto ipsum cum aliquam rerum delectus neque? Veniam quod ad tempore 
              consequatur amet. Ipsa fuga sintnon officiis dignissimos perspiciatis 
              numquam consequatur cumque?
            </p>
          </div>
          <div className='section-img'>
            <img src={section2Img} alt="slika 2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About