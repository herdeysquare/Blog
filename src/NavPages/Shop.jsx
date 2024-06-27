import React from "react";
import glow from "../Images/glow.jpg";
import NewArrival from "../Components/NewArrival";
import "../css/shop.css"
import { Navigate, useNavigate } from "react-router-dom";
// import Cards from "../../Components/Cards";

const Shop = () => {
const navigate = useNavigate();


const toggle =()=>{
navigate('/Products')}

  return (
    <>
      <NewArrival />
      <hr />

      <div className="shop-container">
        <div className="left">
          <img src={glow} alt="" id="glow-img" />
        </div>

        <div className="right">
           <ul id="category-list">
          <h3>Categories</h3>
          <li onClick={toggle}>👉 Bath and Body</li>
          <li onClick={toggle}>👉 Face</li>
          <li onClick={toggle}>👉 Hair Care</li>
          <li onClick={toggle}>👉 Nail Care</li>
          <li onClick={toggle}>👉 Sanitary</li>
          <li onClick={toggle}>👉 Supplement</li>
          <li onClick={toggle}>👉 Perfumes</li>
          <li onClick={toggle}>👉 Others</li>
          </ul> 
          
        </div>
      </div>
      <hr />
      <NewArrival />
    </>
  );
};

export default Shop;
