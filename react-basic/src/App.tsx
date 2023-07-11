import React from 'react'
import SighIn from './views/Authentication/SighIn'
import { Route, Routes } from 'react-router-dom';
import SignUp from './views/Authentication/SighUp';

export default function App() {
  return (
    <div>
      App
      <Routes> 
        <Route path='/sign-in' element={<SighIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
    
  )
}
