import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layouts/MetaData";
import Banner from "./layouts/Banner";
import UaePackage from "../components/UaePackage";
import ModalBooking from "./layouts/ModalBooking";
import axios from "axios";
import { API_LINK } from "../constants/commonConstants";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SinglePackage = () => {
  const params = useParams();
  const slug = params.slug;
  const [ModalName, setModalName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tour, setTour] = useState({});

  useEffect(() => {
    const loadTour = async () => {
      try {
        const response = await axios.get(`${API_LINK}/getTourBySlug/${slug}`);
        setTour(response.data.data);
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };

    loadTour();
  }, [slug]);

  console.log(tour);

  const handleOpenModal = async (name) => {
    await setModalName(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <MetaData title={tour.name ? tour.name : ""} />
      {showModal && (
        <ModalBooking
          message={`Query Related for ${ModalName}`}
          show={showModal}
          handleClose={handleCloseModal}
        />
      )}
      <main id="content" className="site-main">
        <section className="package-inner-page">
          <Banner
            bg={tour.mainImage || "/assets/images/img7.jpg"}
            title={tour.name}
            desc=""
          />
          <div className="inner-package-detail-wrap">
            <div className="container">
              <UaePackage
                key={tour._id}
                tour={tour}
                handleOpenModal={handleOpenModal}
              />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default SinglePackage;
