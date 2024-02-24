import React from "react";
import "./about.css";
import { FaCar } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { FaShop } from "react-icons/fa6";

function About() {
  return (
    <>
      <section class="icons-container">
        <div className="icons">
          <i className="fas fa-home">
            <FaShop />
          </i>
          <div className="content">
            <h3>150+</h3>
            <p>branches</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-car">
            <FaCar />
          </i>
          <div className="content">
            <h3>4770+</h3>
            <p>cars sold</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-users">
            <ImMan/>
          </i>
          <div className="content">
            <h3>320+</h3>
            <p>happy clients</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
