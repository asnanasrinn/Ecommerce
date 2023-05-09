import React from 'react'
import { Routes,Route,Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import ProductDetails from "../pages/ProductDetails"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ="home"/>} />
        <Route path='home' element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='ProductDetails' element={<ProductDetails/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routers
