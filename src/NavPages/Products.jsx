import React from "react";
import { info } from "../JsFiles/info.js";
import Cards from "../Components/Cards.jsx";
import Face from "../Components/ProductFace.jsx";
import BathandBody from "../Components/BathandBody.jsx";
import HairCare from "../Components/HairCare.jsx";
import NailCare from "../Components/NailCare.jsx";
import Sanitary from "../Components/SanitaryCare.jsx";
import Supplement from "../Components/Supplement.jsx";
import Perfumes from "../Components/Perfumes.jsx";
import Others from "../Components/Others.jsx";

const Products = () => {
  return (
    <div
      id="bg"
      style={{ flexWrap: "wrap", display: "flex", paddingInline: "5vw",flexDirection: "column", }}
    >
      <BathandBody />
      <Face />
<HairCare/>
     <NailCare/>
<Sanitary/>
<Supplement/>
  <Perfumes/> 
  <Others/> 

      

      

    </div>
  );
};

export default Products;
