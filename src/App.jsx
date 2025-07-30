import React from 'react'
import Navbar from './componoents/navbar/Navbar'
import Footer from './componoents/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/user/Create'
import About from './pages/about/About'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/users' element={<Home />}></Route>
      <Route path='/add' element={<Create/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}
