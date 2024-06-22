import React, { useEffect, useState } from "react";
import "../css/Content.css";
import { Carousel } from "../JsFiles/Carousel";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import NewArrival from "./NewArrival";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Content = () => {
  const navigate = useNavigate();
  const [carousel, setCarousel] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/shop");
  };

  const prevSlide = () => {
    setCarousel(carousel === 0 ? Carousel.length - 1 : carousel - 1);
  };

  const nextSlide = () => {
    setCarousel(carousel === Carousel.length - 1 ? 0 : carousel + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarousel((prevIndex) => (prevIndex + 1) % Carousel.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NewArrival />

      <div id="bg">
        <h1 className="text-red-500">Level Up Your Skincare Routine</h1>
        <hr />
        <div id="divide">
          <div className="animate left">
            <BsArrowLeftCircleFill
              id="left-arrow"
              onClick={prevSlide}
            ></BsArrowLeftCircleFill>
            <span
              className={carousel === Carousel.length ? "carousel" : "carousel"}
            >
              <div id="animation">
                <img src={Carousel[carousel].image} alt="" id="level-img" />
              </div>
            </span>

            <BsArrowRightCircleFill
              id="right-arrow"
              onClick={nextSlide}
            ></BsArrowRightCircleFill>
          </div>

          <div className="right">
            <div id="head">CountDown!!!</div>
            <CountdownTimer hours={48} minutes={0} seconds={0} id="timer" />
            <span id="midyear">MID YEAR SALE!!!</span>
            <p id="online">50% OFF ON ALL ONLINE ORDERS </p>
            <p id="online">FROM JUNE 28TH - 4TH JULY</p>
            <p className="shop-arrow">⬇</p>
            <button onClick={handleSubmit} id="shop-button">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
