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



// import React, { useState, useEffect } from "react";
// import { FaCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Vehicles() {
//   const [CurrentIndex, SetCurrentIndex] = useState(0);

//   // const [IntervalId, SetIntervalId] = useState(null);

//   const item = [
//     {
//       id: 1,
//       content: (
//         <div className="swiper-slide-box">
//           <img src="image/vehicle-1.png" alt="audy" />
//           <div className="content">
//             <h3>new model</h3>
//             <div className="price">
//               {" "}
//               <span>price : </span> $61,000/-{" "}
//             </div>
//             <p>
//               new
//               <FaCircle className="bullet-col " /> 2019
//               <FaCircle className="bullet-col " /> automatic
//               <FaCircle className="bullet-col " /> petrol
//               <FaCircle className="bullet-col " /> 123mph
//             </p>
//             <Link className="btn">chek out</Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       content: (
//         <div className="swiper-slide-box">
//           <img src="image/vehicle-2.png" alt="sumo" />
//           <div className="content">
//             <h3>new model</h3>
//             <div className="price">
//               {" "}
//               <span>price : </span> $88,000/-{" "}
//             </div>
//             <p>
//               new
//               <FaCircle className="bullet-col " /> 2016
//               <FaCircle className="bullet-col " /> automatic
//               <FaCircle className="bullet-col " /> petrol
//               <FaCircle className="bullet-col " /> 100mph
//             </p>
//             <Link className="btn">chek out</Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       content: (
//         <div className="swiper-slide-box">
//           <img src="image/vehicle-3.png" alt="maruti" />
//           <div className="content">
//             <h3>new model</h3>
//             <div className="price">
//               {" "}
//               <span>price : </span> $80,000/-{" "}
//             </div>
//             <p>
//               new
//               <FaCircle className="bullet-col " /> 2023
//               <FaCircle className="bullet-col " /> automatic
//               <FaCircle className="bullet-col " /> desel
//               <FaCircle className="bullet-col " /> 190mph
//             </p>
//             <Link className="btn">chek out</Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 4,
//       content: (
//         <div className="swiper-slide-box">
//           <img src="image/vehicle-4.png" alt="maruti" />
//           <div className="content">
//             <h3>new model</h3>
//             <div className="price">
//               {" "}
//               <span>price : </span> $67,000/-{" "}
//             </div>
//             <p>
//               new
//               <FaCircle className="bullet-col " /> 2022
//               <FaCircle className="bullet-col " /> automatic
//               <FaCircle className="bullet-col " /> petrol
//               <FaCircle className="bullet-col " /> 188mph
//             </p>
//             <Link className="btn">chek out</Link>
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 5,
//       content: (
//         <div className="swiper-slide-box">
//           <img src="image/vehicle-3.png" alt="maruti" />
//           <div className="content">
//             <h3>new model</h3>
//             <div className="price">
//               {" "}
//               <span>price : </span> $67,000/-{" "}
//             </div>
//             <p>
//               new
//               <FaCircle className="bullet-col " /> 2020
//               <FaCircle className="bullet-col " /> automatic
//               <FaCircle className="bullet-col " /> disel
//               <FaCircle className="bullet-col " /> 189mph
//             </p>
//             <Link className="btn">chek out</Link>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const id = setInterval(() => {
//       SetCurrentIndex((CurrentIndex + 1) % item.length);
//     }, 3000);

//     setInterval(id);
//     return () => clearInterval(id);
//   }, [CurrentIndex, item.length]);

//   return (
//     <>
//       <div className="Row">
//         <h1 class="heading hed">
//           popular <span>vehicles</span>
//         </h1>
//         {item.map((itemContent, index) => {
//           const isActive = index === CurrentIndex;
//           const slide = `row-container ${isActive ? "active" : ""}`;
//           return (
//             <div className={slide} key={itemContent.id}>
//               {itemContent.content}
//             </div>
//           );
//         })}
//         ;
//       </div>
//     </>
//   );
// }

// export default Vehicles;
