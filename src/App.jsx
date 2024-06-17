import React from 'react'
import Homepage from './Components/Homepage'
import { Route, Routes } from 'react-router-dom'
import Brands from './Pages/NavPages/Brands'
import Products from './Pages/NavPages/Products'
import Shop from './Pages/NavPages/Shop'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductInfo from './Components/ProductInfo'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ProductInfo/:id" element={<ProductInfo />} />
        <Route path='/Brands/:id' element={<Brands/>}/>
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path='/Shop/:id' element={<Shop/>}/>
      </Routes> 
      <Footer />
      
     

    </div>
  )
}

export default App