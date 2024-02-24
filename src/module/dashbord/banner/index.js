import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./banner.css"
function Vehicles() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      content: (
        <div className="swiper-slide-box">
          <img src="image/vehicle-1.png" alt="Audy" />
          <div className="content">
            <h3>new model</h3>
            <div className="price">
              <span>price : </span> $61,000/-
            </div>
            <p>
              new
              <FaCircle className="bullet-col " /> 2019
              <FaCircle className="bullet-col " /> automatic
              <FaCircle className="bullet-col " /> petrol
              <FaCircle className="bullet-col " /> 123mph
            </p>
            <Link className="btn">check out</Link>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="swiper-slide-box">
          <img src="image/vehicle-2.png" alt="Sumo" />
          <div className="content">
            <h3>new model</h3>
            <div className="price">
              <span>price : </span> $88,000/-
            </div>
            <p>
              new
              <FaCircle className="bullet-col " /> 2016
              <FaCircle className="bullet-col " /> automatic
              <FaCircle className="bullet-col " /> petrol
              <FaCircle className="bullet-col " /> 100mph
            </p>
            <Link className="btn">check out</Link>
          </div>
        </div>
      ),
    },
  ];
  // Function to handle auto slideshow effect

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    // Clear interval when component unmounts

    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
    <>
      <div className="Row">
        <h1 className="heading hed">popular <span>vehicles</span></h1>
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          const slideClass = `row-container ${isActive ? "active" : ""}`;
          return (
            <div className={slideClass} key={item.id}>
              {item.content}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Vehicles;



