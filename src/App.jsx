import React from 'react'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage' 
import Details from './pages/Details'
import Cart from './pages/Cart'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories/:idc"  element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App