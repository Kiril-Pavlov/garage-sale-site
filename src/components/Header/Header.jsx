import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"
import kgsLogo from "../../assets/kgs-logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const Header = ({ links }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleHamburgerState = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }
  return (
    <div className='outer-container'>
      <div className='header-container'>
        <div className='hamburger-menu'>
          {isHamburgerOpen === false ? (
            <GiHamburgerMenu fill='#CBB26A' onClick={handleHamburgerState} />
          ) : (
            <AiOutlineClose fill='#CBB26A' onClick={handleHamburgerState} />
          )}
        </div>
        <div className='header-left'>
          <img src={kgsLogo} alt="KGS Logo" onClick={handleHamburgerState} />
        </div>
        <div className='header-right'>
          <div className='header-language-selection'>
            <ul>
              <li>EN</li>
              <li>MK</li>
            </ul>
          </div>
          <div className='header-search-input'>
            <input type="text" placeholder='Search' />
          </div>
        </div>
      </div>
      <div className={isHamburgerOpen === false ? "navbar-list" : "navbar-list active"}>
        <div className='navbar-list-close-button'>
          <AiOutlineClose fill='#CBB26A' onClick={handleHamburgerState} />
        </div>
        {links.map((item) => {
          return (
            <Link to={item.linkTo} className="link-style" key={item.linkName}>
              <div  className='navbar-link-list-item'>
                {item.linkName}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Header