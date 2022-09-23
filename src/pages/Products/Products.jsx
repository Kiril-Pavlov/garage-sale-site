import React,{useContext} from 'react'
import {CartContext} from "../../context/cartContext"

import "./Products.css"

const Products = () => {
  const {productList} = useContext(CartContext);

  return (
    <div>Products</div>
  )
}

export default Products