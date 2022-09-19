import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.css"

const Footer = ({ links }) => {
  return (
    <div className='footer-container'>
      <div className='information-footer-container'>
        <div className='company-info'>
          <h4>Kiril's Garage Sale</h4>
          <div className='company-address'>
            <h5>Main Street XX</h5>
            <h5>Gevgelija, Macedonia</h5>
          </div>
          <h5>+389 70 XXX XXX</h5>
          <h5>doesnt.exist@kgs.com</h5>
        </div>
        <div className='site-map'>
          {links.map((item) => {
            return (
              <Link to={item.linkTo} className='footer-link'>
                <div >
                  {item.linkName}
                </div>
              </Link>
            )
          })}
        </div>
        <div className='payment-methods'>
          <ul>
            <li>VISA</li>
            <li>MAESTRO</li>
            <li>Google Pay</li>
            <li>PayPal</li>
            <li>Apple Pay</li>
          </ul>
        </div>
        <div className='social-networks'>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <div className='copyright-footer-container'>
        <div> Ⓒ Copyright 2022 <a href="https://pavlov.mk">Pavlov Kiril</a>
        </div>
      </div>
    </div>
  )
}

export default Footer