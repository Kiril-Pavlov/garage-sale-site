import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.css"

const Footer = ({ links }) => {
  return (
    <div className='footer-container'>
      <div className='information-footer-sontainer'>
        <div className='company-info'>
          <h4>Kiril's Garage Sale</h4>
          <div className='company-address'>
            <h5>Street</h5>
            <h5>City, Country</h5>
          </div>
          <h5>phone number</h5>
          <h5>mail</h5>
        </div>
        <div className='siteMap'>
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
        <div className='social networks'>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      @copyright 2022 Pavlov Kiril
    </div>
  )
}

export default Footer