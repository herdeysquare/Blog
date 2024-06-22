import React, { useEffect, useState } from "react";
import { NewArrivals } from "../JsFiles/NewArrivals";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const NewArrival= () => {
  const [arrive, setArrive] = useState(0);

  const leftSlide = () => {
    setArrive(arrive === 0 ? Math.max(NewArrivals.length - 4, 0) : arrive - 4);
  };

  const rightSlide = () => {
    setArrive((arrive + 4) % NewArrivals.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setArrive((prevIndex) => (prevIndex + 4) % NewArrivals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>
        New Arrivals
        <hr />
      </h1>

      <div
        id="newarrive"
        className={arrive === NewArrivals.length ? "arrive" : "arrive"}
      >
        <BsArrowLeftCircleFill
          id="left-arrow"
          className="slide-arrow"
          onClick={leftSlide}
        ></BsArrowLeftCircleFill>
        {NewArrivals.slice(arrive, arrive + 4).map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt=""
              id="new-arrivals-img"
              style={{ width: "20vw", height: "45vh" }}
            />
            <h3>{item.name}</h3>
            <h5>{item.price}</h5>
          </div>
        ))}
        <BsArrowRightCircleFill
          id="right-arrow"
          className="slide-arrow"
          onClick={rightSlide}
        ></BsArrowRightCircleFill>
      </div>
    </div>
  );
};

export default NewArrival;
