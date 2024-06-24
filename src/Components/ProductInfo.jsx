import React, { useEffect } from 'react'
import { info } from '../JsFiles/info'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
// import Button from './Button'

const ProductInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [start, setStart] = useState(0);
const [open, setOpen]= useState()


const changeState=() =>{
    setOpen(!open);
    navigate('/Brands')
}

    const btn = () => {
      setStart(start - 1);
    };
    const btn1 = () => {
      setStart(start + 1);
    };
  

    useEffect(() => {
        const selectedProduct = info.find(item => item.id === parseInt(id));
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [id]);

    if (!product) {
        return <div style={{ color: "red" }}>Product not found</div>;
    }



    return (
        <>
        <button onClick={changeState} id='shop-button'>Back</button>
        <div style={{ color: "red" }}>
           
            <img src={product.image} alt={product.name} style={{width:"35vw", height:"80vh"}}/>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.description1}</p>
            <p>{product.description2}</p>
            <p>Quantity</p>
            <button className='btn' onClick={btn}>-</button>{start}
            <button className='btn' onClick={btn1}>+</button>
            <p>Purchase</p>
            <button id='shop-button'> Add To Cart</button>
        </div>
        </>
    )
}

export default ProductInfo

