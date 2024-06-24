import React, { useState } from 'react'
import { others } from '../JsFiles/others'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom'

const Others = () => {
    const navigate = useNavigate()
    const [start, setStart]=useState(0)


 
const toggle = ()=>{
    navigate('/Trolley')
}   
  const btn = () => {
    setStart(start - 1);
  };
  const btn1 = () => {
    setStart(start + 1);
  };
  return (
    <div>
        
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Others</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {others.map((item) => (
            <div key={item.Category}>
              <Cards img={item.image} text={item.price} title={item.name} />
              <p>Quantity</p>
            <button className='btn' onClick={btn}>-</button>{start}
            <button className='btn' onClick={btn1}>+</button>
            <p>Purchase</p>
            <button id='shop-button'onClick={toggle}> Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Others