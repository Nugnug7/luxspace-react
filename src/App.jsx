import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/showcase" element={<div>Showcase Page</div>} />
      <Route path="/catalog" element={<div>Catalog Page</div>} />
      <Route path="/delivery" element={<div>Delivery Page</div>} />
      <Route path="/rewards" element={<div>Rewards Page</div>} />
    </Routes>
  )
}

export default App