import React from "react";
import Banner from "../banner"
import Service from "../service";
import FeaturedCar from "../exploreMore";
import Rating from "../userRating";
import About from "../about";
import Contact from "../contact";
import "./home.css";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <h3>find your car</h3>
        <img src="image/home-img.png" alt="home-image" loading="eager" />
        <a href="#" className="btn home-parallax">
          explore cars
        </a>
      </section>
      <Banner />
      <Service />
      <FeaturedCar />
      <Rating />
      <About />
      <Contact />
    </>
  );
}

export default Home;
