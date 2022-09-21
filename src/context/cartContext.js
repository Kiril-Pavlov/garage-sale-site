import { useState } from "react";
import { createContext } from "react"

import {garageSaleItems} from "../testData/productList"



const CartContext=createContext();

const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState({});

    const value = { garageSaleItems, cartItems, addToCart, removeFromCart, emptyCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export {CartContext, CartProvider}