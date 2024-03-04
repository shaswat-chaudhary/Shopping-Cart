import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import { Cart } from './pages/Cart'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div>
      <div className='bg-slate-900 sticky top-0 z-50 px-3 shadow-md'>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

