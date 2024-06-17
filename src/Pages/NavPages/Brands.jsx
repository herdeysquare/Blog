import React, { useEffect, useState } from 'react';
import { BrandNames } from '../../JsFiles/BrandNames';
import { Link, useParams } from 'react-router-dom';
import { BrandList } from '../../JsFiles/BrandList';
import '../../css/Brands.css';

const Brands = () => {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedLetter = BrandList.find(item => item.id === parseInt(id));
      if (selectedLetter) {
        setLetter(selectedLetter);
      } else {
        setLetter(null);
      }
    }
  }, [id]);

  return (
    <>
      <div className='click'>Select an alphabet to see the details.</div>
      <div className='container'>
        {BrandNames.map((item) => (
          <div key={item.id}>
            <Link to={`/Brands/${item.id}`}>
              <button id='alphabets'>{item.name}</button>
            </Link>
          </div>
        ))}
      </div>

      {letter ? (
        <div className="brand-details animate__animated animate__fadeIn">
          <Link to={`/shop/${letter.id}`}>
            <h1>{letter.name}</h1>
          </Link>
          <h3>{letter.list}</h3>
          {letter.image && (
            <Link to={`/shop/${letter.id}`}>
              <img src={letter.image} alt={`${letter.name} image 1`} style={{width:"15vw", height:'45vh'}} />
            </Link>
          )}
          {letter.img && (
            <Link to={`/shop/${letter.id}`}>
              <img src={letter.img} alt={`${letter.name} image 2`} style={{width:"15vw", height:'45vh'}}/>
            </Link>
          )}
        </div>
      ) : (
        id && <div style={{ color: 'red' }}>
          Product not found
        </div>
      )}
    </>
  );
};

export default Brands;
