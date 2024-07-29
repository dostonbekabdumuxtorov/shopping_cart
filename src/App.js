import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Products from './pages/Products/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cart />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App