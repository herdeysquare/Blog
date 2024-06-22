import React from "react";
import glow from "../Images/glow.jpg";
import NewArrival from "../Components/NewArrival";
import "../css/shop.css"
// import Cards from "../../Components/Cards";

const Shop = () => {
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
          <li>👉 Bath and Body</li>
          <li>👉 Face</li>
          <li>👉 Hair Care</li>
          <li>👉 Nail Care</li>
          <li>👉 Sanitary</li>
          <li>👉 Supplement</li>
          <li>👉 Perfumes</li>
          <li>👉 Others</li>
          </ul> 
          
        </div>
      </div>
      <hr />
      <NewArrival />
    </>
  );
};

export default Shop;
