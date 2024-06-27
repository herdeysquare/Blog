import React, { useState } from "react";
import Search from "../Components/Search.jsx";
import Face from "../Components/ProductFace.jsx";
import BathandBody from "../Components/BathandBody.jsx";
import HairCare from "../Components/HairCare.jsx";
import NailCare from "../Components/NailCare.jsx";
import Sanitary from "../Components/SanitaryCare.jsx";
import Supplement from "../Components/Supplement.jsx";
import Perfumes from "../Components/Perfumes.jsx";
import Others from "../Components/Others.jsx";
import { useParams } from "react-router-dom";
import { BrandList } from "../JsFiles/BrandList.js";
import Cards from "../Components/Cards.jsx";
import { info } from "../JsFiles/info.js";

const Products = ({search}) => {
  const { category } = useParams();
 

  const filteredProducts = info.filter(
    (item) =>
      item.Category === category &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  

  return (
    <div
      id="bg"
      style={{
        flexWrap: "wrap",
        display: "flex",
        paddingInline: "5vw",
        flexDirection: "column",
       
      }}
    >
      <h2>{category}</h2>
      <div className="product-container">
        
          {filteredProducts.map((item) => (
            <div key={item.id} className="card-wrapper">
              <Cards img={item.image} title={item.name} text={item.description} />
            </div>
          ))}
        
        
      </div>
      
      <BathandBody />
      <Face />
      <HairCare />
      <NailCare />
      <Sanitary />
      <Supplement />
      <Perfumes />
      <Others />
    </div>
  );
};

export default Products;
