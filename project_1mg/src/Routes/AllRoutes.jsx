import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
// import Cart from '../Components/Cart'
import PrivateRout from '../PrivateRout/PrivateRout'
import SignUp from '../Components/SignUp'
import Products from '../Components/Products'
const AllRoutes = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cart" element={
            <PrivateRout>
                <Products/>
             </PrivateRout>
            }/>
            <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes