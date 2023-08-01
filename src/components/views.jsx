import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login/Login';
import SignUp from './login/SignUp';

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<SignUp/>} />      
      <Route path='*' element={<Login/>} />
    </Routes>
  )
}

export default Views;