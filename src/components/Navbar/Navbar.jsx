import React from 'react'
import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {
  const linksList = [
    {linkTo: "/",linkName: "Home"},
    {linkTo: "/about",linkName: "About"},
    {linkTo: "/products",linkName: "Products"},
    {linkTo: "/cartpage",linkName: "Cart"},
    {linkTo: "/contact",linkName: "Contact"},
  ];
  return (
    <div className='navbar-container'>
      {linksList.map((item) => {
        return (
          <Link to={item.linkTo}>
            {item.linkName}
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar