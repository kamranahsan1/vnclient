import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DubaiDestination = (props) => {
  const tour = props.tour;

  return (
    <div className="col-md-6">
      <article
        className="offer-item"
        style={{
          backgroundImage: `url(${tour.mainImage})`,
        }}
      >
        <div className="offer-content">
          <h3>{tour.name}</h3>
          <p>{tour.desc}</p>
          <div className="price-list">
            Price:
            <ins>AED {tour.price[0].amount.$numberDecimal}</ins>
          </div>
          <Link to="/contact" className="round-btn">
            Book Now
          </Link>
        </div>
      </article>
    </div>
  );
};

export default DubaiDestination;
