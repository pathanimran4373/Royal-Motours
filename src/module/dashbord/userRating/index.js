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
            author="emma"
          />
          <Review
            imageSrc="image/pic-3.png"
            altText="jeep"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="enric"
          />
          <Review
            imageSrc="image/pic-4.png"
            altText="tuk"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="zully"
          />
          <Review
            imageSrc="image/pic-5.png"
            altText="bus"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="harry"
          />
          <Review
            imageSrc="image/pic-6.png"
            altText="car"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe."
            author="maria"
          />
        </div>

      </div>
    </section>
  );
}

export default Rating;

// child component

function Review({ imageSrc, altText, content, author }) {
  return (
    <div className="swiper-slide box">
      <img src={imageSrc} alt={altText} loading="lazy"/>
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


