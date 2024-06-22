import React from "react";
import { info } from "../JsFiles/info.js";
import Cards from "../Components/Cards.jsx";
// import "../css/Products.css";

const Products = () => {
  return (
    <div id="bg" style={{ flexWrap: "wrap", display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Bath and Body</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Face</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Hair Care</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Nail Care</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Sanitary</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Supplement</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Perfumes</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Others</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {info.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
