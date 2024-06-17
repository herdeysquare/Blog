import React, { useEffect, useState } from 'react'
import '../css/Content.css'
import { Carousel } from '../JsFiles/Carousel'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Content = () => {

  const navigate = useNavigate()
  const [carousel, setCarousel] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/shop')
  }

  const prevSlide = () => {
    setCarousel(carousel === 0 ? Carousel.length - 1 : carousel - 1)
  }

  const nextSlide = () => {
    setCarousel(carousel === Carousel.length - 1 ? 0 : carousel + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCarousel(prevIndex => (prevIndex + 1) %
        Carousel.length)
    }, 3500)
    return (() => clearInterval(interval))
  }, [])


  return (
    <div className='bg-blue-500' id='board'>
      <h1 className='text-red-500'>Level Up Your Skincare Routine</h1>
      <div id='divide'>
        <div className="animate left">
<BsArrowLeftCircleFill onClick={prevSlide}></BsArrowLeftCircleFill>
          <span className={carousel === Carousel.length ? 'carousel' : 'carousel'} >
            <div id="animation"><img src={Carousel[carousel].image} alt="" id='level-img'/></div>
            {/* <div><h1 id='animation-text'>{Carousel[carousel].text}</h1></div> */}
          </span>

          {/* <h1>SHOP NOW</h1> */}
          <BsArrowRightCircleFill onClick={nextSlide}></BsArrowRightCircleFill>

        </div>
        <div className='right'>
          <span>MID YEAR SALE!!!</span>
          <p>50% OFF ON ALL ONLINE ORDERS </p>
         <p>FROM JUNE 28TH - 4TH JULY</p> 
         <p>⬇</p>
          <button onClick={handleSubmit}>SHOP NOW</button>
        </div>

      </div>
    </div>
  )
}

export default Content