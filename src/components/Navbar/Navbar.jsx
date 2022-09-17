import React from 'react'
import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = ({links}) => {
  return (
    <div className='navbar-container'>
      {links.map((item) => {
        return (
          <Link to={item.linkTo} className='navbar-link'>
            <div >
              {item.linkName}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar