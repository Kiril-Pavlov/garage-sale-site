import { useState } from "react";
import { createContext } from "react"

import {productList} from "../testData/productList"


// console.log(productList)
const CartContext=createContext();

const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState({});

    const value = { productList };
    console.log(value)
    return <CartContext.Provider value={productList.productList}>{children}</CartContext.Provider>;
}

export {CartContext, CartProvider}