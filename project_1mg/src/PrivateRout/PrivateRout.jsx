import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { Navigate } from 'react-router-dom'


function PrivateRoute({children}) {
    const {isAuth}=useContext(AuthContext)

  return (
    isAuth?(children):(<Navigate to="/Login"/>)
  )
}

export default PrivateRoute