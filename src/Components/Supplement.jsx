import React, { useState } from 'react'
import Cards from './Cards'
import { supplement } from '../JsFiles/supplement'
import { useNavigate } from 'react-router-dom'

const Supplement = () => {
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
        <h2>Supplement</h2>
        <hr />
        <div
          className="card-container"
          style={{ flexWrap: "wrap", display: "flex" }}
        >
          {supplement.map((item) => (
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

export default Supplement