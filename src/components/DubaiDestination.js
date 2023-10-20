import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalBooking from "../pages/layouts/ModalBooking";
import { removePrefixFromURL } from "../constants/commonConstants";

const DubaiDestination = (props) => {
  const tour = props.tour;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="col-md-6">
      <article
        className="offer-item"
        style={{
          backgroundImage: `url(${removePrefixFromURL(tour.mainImage)})`,
        }}
      >
        <div className="offer-content">
          <h3>{tour.name}</h3>
          <p>{tour.desc}</p>
          {tour.price && tour.price.length > 0 && (
            <div className="price-list">
              Price:
              <ins>AED {tour.price[0].amount.$numberDecimal}</ins>
            </div>
          )}
          <Link onClick={handleOpenModal} className="round-btn">
            Book Now
          </Link>
          <ModalBooking
            message={`Query Related for ${tour.name}`}
            show={showModal}
            handleClose={handleCloseModal}
          />
        </div>
      </article>
    </div>
  );
};

export default DubaiDestination;
