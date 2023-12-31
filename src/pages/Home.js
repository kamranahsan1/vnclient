import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "./layouts/MetaData";
import {
  CONTACT_URL,
  SCHENGEN_VISA_URL,
  removePrefixFromURL,
} from "../constants/commonConstants";
import { Link } from "react-router-dom";
import ModalBooking from "../pages/layouts/ModalBooking";
import {
  clearErrors,
  getFeaturePackages,
  getViewCategory,
  getHotDeals,
} from "../action/packagesActions";
import TourGenerator from "../components/TourGenerator";

function Home() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [ModalQuery, setModalQuery] = useState("");
  const { packages, error } = useSelector((state) => state.packages);
  const { packagesHot } = useSelector((state) => state.packagesHot);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getFeaturePackages());
    dispatch(getHotDeals());
  }, [dispatch, error]);

  const { viewcategory } = useSelector((state) => state.viewcategory);

  useEffect(() => {
    dispatch(getViewCategory(6));
  }, [dispatch]);

  const handleOpenModal = (name) => {
    setModalQuery(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      <MetaData title={`Home`} />
      {showModal && (
        <ModalBooking
          message={`Query Related for ${ModalQuery}`}
          show={showModal}
          handleClose={handleCloseModal}
        />
      )}
      <main id="content" className="site-main">
        <section className="home-banner-section home-banner-slider">
          <div
            className="home-banner d-flex flex-wrap align-items-center"
            style={{
              backgroundImage: `url(/assets/images/banner-img1.jpg)`,
            }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="banner-content text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h2 className="banner-title">JOURNEY TO EXPLORE WORLD</h2>
                    <p>
                      With
                      <span
                        style={{
                          padding: "10px 0",
                          fontWeight: 600,
                          fontSize: 20,
                        }}
                      >
                        {" "}
                        New Vision
                      </span>{" "}
                      Travel and Tourism
                    </p>
                    {/** 
                    <div className="banner-btn">
                      <Link
                        to={CONTACT_URL}
                        className="outline-btn outline-btn-white"
                      >
                        BOOK NOW
                      </Link>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TourGenerator />
        <section className="home-destination pd-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-sm-center">
                <div className="section-heading">
                  <h2 className="section-title">HOT DEALS</h2>
                </div>
              </div>
            </div>
            <div className="destination-section">
              <div className="row">
                {packagesHot &&
                  packagesHot.map((tour, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <Link to={`/tour/${tour.slug}`}>
                        <article
                          className="destination-item"
                          style={{
                            backgroundImage: `url(${removePrefixFromURL(
                              tour.mainImage
                            )})`,
                          }}
                        >
                          <div className="destination-content">
                            <div className="rating-start-wrap">
                              <div className="rating-start">
                                <span style={{ width: "100%" }}></span>
                              </div>
                            </div>
                            <h3>{tour.name}</h3>
                          </div>
                        </article>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className="section-btn-wrap text-center">
                <Link to={`package/hot-deals`} className="round-btn">
                  More Deals
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="home-destination pd-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-sm-center">
                <div className="section-heading">
                  <h5 className="sub-title">UNCOVER PLACE</h5>
                  <h2 className="section-title">POPULAR DESTINATION</h2>
                </div>
              </div>
            </div>
            <div className="destination-section">
              <div className="row">
                {packages &&
                  packages.map((tour, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <Link to={`/tour/${tour.slug}`}>
                        <article
                          className="destination-item"
                          style={{
                            backgroundImage: `url(${removePrefixFromURL(
                              tour.mainImage
                            )})`,
                          }}
                        >
                          <div className="destination-content">
                            <div className="rating-start-wrap">
                              <div className="rating-start">
                                <span style={{ width: "100%" }}></span>
                              </div>
                            </div>
                            <h3>{tour.name}</h3>
                          </div>
                        </article>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className="section-btn-wrap text-center">
                <Link to={`package/uae-packages`} className="round-btn">
                  More Destination
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="home-destination pd-top">
          <div className="home-counter">
            <div className="container">
              <div className="counter-wrap">
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">16</span>K+
                  </span>
                  <span className="counter-desc">SATISFIED CUSTOMER</span>
                </div>
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">50</span>+
                  </span>
                  <span className="counter-desc">Tours</span>
                </div>
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">600</span>+
                  </span>
                  <span className="counter-desc">ACTIVE MEMBERS</span>
                </div>
                <div className="counter-item">
                  <span className="counter-no">
                    <span className="counter">220</span>+
                  </span>
                  <span className="counter-desc">TOUR DESTINATION</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {viewcategory && (
          <section className="home-destination pd-top">
            <div className="home-counter">
              <div className="container">
                <div className="row">
                  {viewcategory.map((vc, index) => (
                    <div className="col-md-6" key={index}>
                      <article
                        className="offer-item"
                        style={{
                          backgroundImage: `url(${removePrefixFromURL(
                            vc.mainImage
                          )})`,
                        }}
                      >
                        <div className="offer-content">
                          <h3>{vc.name}</h3>
                          <Link
                            onClick={() => handleOpenModal(vc.name)}
                            className="round-btn"
                          >
                            Book Now
                          </Link>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
                {/*
                <div className="section-btn-wrap text-center">
                  <Link className="round-btn" to={SCHENGEN_VISA_URL}>
                    View ALL
                  </Link>
                </div>
                */}
              </div>
            </div>
          </section>
        )}
        <section className="home-callback bg-color-callback primary-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2 className="section-title">
                  READY FOR UNFORGATABLE TRAVEL. CONTACT US!
                </h2>
              </div>
              <div className="col-md-4 text-md-end">
                <Link
                  to={CONTACT_URL}
                  className="outline-btn outline-btn-white"
                >
                  Contact Us!
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Home;
