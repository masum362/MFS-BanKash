import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { commonPostUrl } from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({})

  // const loginUser = async (data) => {
  //   const response = await commonPostUrl("login", data)
  //   try {

  //   } catch (error) {
  //     return
  //   }
  // }
  // const registerUser = async (data) => {

  // }


  useEffect(() => {
    console.log('user changed', user);
  }, [user])

  const values = { user, setUser }


  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider