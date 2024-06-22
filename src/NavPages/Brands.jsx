import React, { useEffect, useState } from "react";
import { BrandNames } from "../JsFiles/BrandNames.js";
import { Link, useParams } from "react-router-dom";
import { BrandList } from "../JsFiles/BrandList";
import "../css/Brands.css";
import Cards from "../Components/Cards.jsx";

const Brands = () => {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedLetter = BrandList.find((item) => item.id === parseInt(id));
      if (selectedLetter) {
        setLetter(selectedLetter);
      } else {
        setLetter(null);
      }
    }
  }, [id]);

  return (
    <div id="bg">
      <div className="click">Select an alphabet to see the details.</div>
      <div className="container">
        {BrandNames.map((item) => (
          <div key={item.id}>
            <Link to={`/Brands/${item.id}`}>
              <button id="alphabets">{item.name}</button>
            </Link>
          </div>
        ))}
      </div>

      {letter ? (
        <div className="animate__animated animate__fadeIn" id="brand-page">
          <Link to={`/ProductInfo/${letter.id}`}>
            <h1>{letter.name}</h1>
          </Link>
          <h3>{letter.list}</h3>
          <div className="brand-details">
            {letter.image && (
              <Link to={`/ProductInfo/${letter.id}`}>
                <Cards
                  img={letter.image}
                  alt={`${letter.name} image 1`}
                  className="brand-card"
                />
              </Link>
            )}
            {letter.img && (
              <Link to={`/ProductInfo/${letter.id}`}>
                <Cards
                  img={letter.img}
                  alt={`${letter.name} image 2`}
                  className="brand-card"
                />
              </Link>
            )}
          </div>
          <Link to={`/shop/${letter.id}`}>
            <button id="shop-button" className="sh-button">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        id && <div style={{ color: "red" }}>Product not found</div>
      )}
    </div>
  );
};

export default Brands;
