import React from "react";
import PropTypes from 'prop-types';
import "./service.css"

function Services() {
  return (
    <section className="services">
      <h1 className="heading">
        our <span>services</span>
      </h1>

      <div className="box-container">
        <ServiceItem
          title="car selling"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi."
        />
        <ServiceItem
          title="parts repair"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi."
        />
        <ServiceItem
          title="car insurance"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi."
        />
        <ServiceItem
          title="battery replacement"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi."
        />
        <ServiceItem
          title="oil change"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi."
        />
        <ServiceItem
          title="24/7 support"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi."
        />
      </div>
    </section>
  );
}

export default Services;



function ServiceItem({ title, description }) {
  return (
    <div className="box">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn">
        read more
      </button>
    </div>
  );
}

ServiceItem.propTypes = {
    title: PropTypes.string.isRequired, // Title of the service (required)
    description: PropTypes.string.isRequired, // Description of the service (required)
  };
  

