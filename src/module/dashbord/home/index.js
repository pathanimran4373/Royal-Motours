import React from "react";
import Services from "../service";
import Vehicles from "../banner";
import FeaturedCar from "../exploreMore";
import Rating from "../userRating";
import About from "../about"
import Contact from "../contact";
import "./home.css"
function Home() {
  return (
    <>
      <section className="home" id="home">
        <h3>find your car</h3>

        <img src="image/home-img.png" alt="home-image" />

        <a href="#" className="btn home-parallax">
          explore cars
        </a>
      </section>
      <Vehicles/>
      <Services/>
      <FeaturedCar/>
      <Rating/>
      <About/>
      <Contact/>
    </>
  );
}

export default Home;
