import React from "react";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";
import Brands from "./NavPages/Brands";
import Products from "./NavPages/Products";
import Shop from "./NavPages/Shop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductInfo from "./Components/ProductInfo";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Refund from "./Pages/Refund";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Trolley from "./NavPages/Trolley";


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
        {/* <Route path="/Products/:category" element={<Products />} /> */}
        <Route path="/Brands/:id" element={<Brands />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop/:id" element={<Shop />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Trolley" element={<Trolley />} />
      </Routes>
      <Footer />
     
    </div>
  );
};

export default App;
