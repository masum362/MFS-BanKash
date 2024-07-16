import axios from 'axios';
import React, { createContext, useState } from 'react'
import { commonPostUrl } from '../utils/api';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({})

  const loginUser = async (data) => {
    const response = await commonPostUrl("login", data)
    try {
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const registerUser = async (data) => {
    const response = await commonPostUrl("register", data)
    try {
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  const values = { loginUser, registerUser, user }


  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider