import React from "react";
import PropTypes from 'prop-types';
import "./rating.css"

function Rating() {
  return (
    <section className="reviews">
      <h1 className="heading">
        client's <span>review</span>
      </h1>

      <div className="review-slide">
        <div className="swiper-wrapper">
          <Review
            imageSrc="image/pic-1.png"
            altText="bike"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="John Deo"
          />
          <Review
            imageSrc="image/pic-2.png"
            altText="auto"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="John Deo"
          />
          <Review
            imageSrc="image/pic-3.png"
            altText="jeep"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="John Deo"
          />
          <Review
            imageSrc="image/pic-4.png"
            altText="tuk"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="John Deo"
          />
          <Review
            imageSrc="image/pic-5.png"
            altText="bus"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="John Deo"
          />
          <Review
            imageSrc="image/pic-6.png"
            altText="car"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="John Deo"
          />
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Rating;

// child component

function Review({ imageSrc, altText, content, author }) {
  return (
    <div className="swiper-slide box">
      <img src={imageSrc} alt={altText} />
      <div className="content">
        <p>{content}</p>
        <h3>{author}</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
      </div>
    </div>
  );
}

// prototypes of props

Review.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Source of the image (required)
  altText: PropTypes.string.isRequired, // Alternate text for the image (required)
  content: PropTypes.string.isRequired, // Content of the review (required)
  author: PropTypes.string.isRequired, // Author of the review (required)
};


// import React from "react";

// function Rating() {
//   return (
//     <>
//       <section className="reviews" id="reviews">
//         <h1 className="heading">
//           client's <span>review</span>{" "}
//         </h1>

//         <div className="swiper review-slider">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide box">
//               <img src="image/pic-1.png" alt="bike" />
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                   Ipsam incidunt quod praesentium iusto id autem possimus
//                   assumenda at ut saepe.
//                 </p>
//                 <h3>john deo</h3>
//                 <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide box">
//               <img src="image/pic-2.png" alt="auto" />
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                   Ipsam incidunt quod praesentium iusto id autem possimus
//                   assumenda at ut saepe.
//                 </p>
//                 <h3>john deo</h3>
//                 <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide box">
//               <img src="image/pic-3.png" alt="jeep" />
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                   Ipsam incidunt quod praesentium iusto id autem possimus
//                   assumenda at ut saepe.
//                 </p>
//                 <h3>john deo</h3>
//                 <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide box">
//               <img src="image/pic-4.png" alt="tuk" />
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                   Ipsam incidunt quod praesentium iusto id autem possimus
//                   assumenda at ut saepe.
//                 </p>
//                 <h3>john deo</h3>
//                 <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide box">
//               <img src="image/pic-5.png" alt="bus" />
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                   Ipsam incidunt quod praesentium iusto id autem possimus
//                   assumenda at ut saepe.
//                 </p>
//                 <h3>john deo</h3>
//                 <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide box">
//               <img src="image/pic-6.png" alt="car" />
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                   Ipsam incidunt quod praesentium iusto id autem possimus
//                   assumenda at ut saepe.
//                 </p>
//                 <h3>john deo</h3>
//                 <div className="stars">
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star"></i>
//                   <i className="fas fa-star-half-alt"></i>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="swiper-pagination"></div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Rating;
