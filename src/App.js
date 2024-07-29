import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App