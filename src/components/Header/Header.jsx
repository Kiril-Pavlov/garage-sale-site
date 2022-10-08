import React from 'react'

import "./Header.css"
import kgsLogo from "../../assets/kgs-logo.png"
import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
  return (
    <div className='outer-container'>
      <div className='header-container'>
        <div className='hamburger-menu'>
          <GiHamburgerMenu fill='#CBB26A'/>
        </div>
        <div className='header-left'>
          <img src={kgsLogo} alt="KGS Logo" />
        </div>
        <div className='header-right'>
          <div className='header-language-selection'>
            <ul>
              <li>EN</li>
              <li>MK</li>
            </ul>
          </div>
          <div className='header-search-input'>
            <input type="text" placeholder='Search'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header