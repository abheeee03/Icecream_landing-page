import React from 'react'
import Styles from './App.module.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Seller from './Pages/Seller'
import Categories from './Pages/Categories'
import Brands from './Pages/Brands'
import Login from './Pages/Login'


const App = () => {
  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/"></Route>
      <Route path='/Categories' element={<Categories />}/>  
      <Route path='/BecomeSeller' element={<Seller />}/>  
      <Route path='/Brands' element={<Brands />}/>  
      <Route path='/Login' element={<Login />}/>  
    </Routes>    
    
    
    </>
  )
}

export default App