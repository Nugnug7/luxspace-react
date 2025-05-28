import React from 'react'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage' 
import Details from './pages/Details'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories/:idc"  element={<Details />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App 