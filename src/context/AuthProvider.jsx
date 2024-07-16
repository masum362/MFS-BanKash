import axios from 'axios';
import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user ,setUser] = useState({})

  const loginUser = async() => {
    const response = await axios.post('/login')
  }



  return (
    <AuthContext.Provider value={''}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider