import React, { Fragment, useEffect, useState } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUaePackages, clearErrors } from "../action/packagesActions";
import ModalBooking from "../pages/layouts/ModalBooking";

function UaeTours() {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showPackage, setPackage] = useState("");

  const handleOpenModal = (name) => {
    setPackage(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { packages, loading, error, packagesCount, resultPerPage } =
    useSelector((state) => state.packages);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getUaePackages(params, currentPage));
  }, [dispatch, alert, params, currentPage, error]);

  return (
    <Fragment>
      <MetaData title={"Uae Tours"} />
      <main id="content" className="site-main">
        <section className="package-inner-page">
          <Banner
            bg="/assets/images/img7.jpg"
            title="UAE TOURS"
            desc="Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. 
            This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
          />
          <div className="inner-package-detail-wrap">
            {packages &&
              packages.map((tour) => (
                <div className="row pd-bottom">
                  <div className="col-lg-8 primary right-sidebar">
                    <div className="single-packge-wrap">
                      <div className="single-package-head d-flex align-items-center">
                        <div className="package-title">
                          <h2>{tour.name}</h2>
                        </div>
                      </div>
                      <div className="package-meta"></div>
                      <figure className="single-package-image">
                        <img
                          src={tour.mainImage}
                          alt=""
                          className="full-width"
                        />
                      </figure>
                      <div className="package-content-detail">
                        {tour.description !== "" && (
                          <article className="package-overview">
                            <h3>OVERVIEW :</h3>
                            <p>{tour.description}</p>
                          </article>
                        )}
                        {tour.inclusionsList.length > 0 && (
                          <article className="package-include bg-light-grey">
                            <h3>INCLUDE :</h3>
                            <ul>
                              {tour.inclusionsList.map((inclusion, index) => (
                                <li className="full-width" key={index}>
                                  <i className="fas fa-check"></i>
                                  {inclusion}
                                </li>
                              ))}
                            </ul>
                          </article>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar">
                      {tour.price.length > 0 && (
                        <div className="booking-form-wrap">
                          <div className="booking-form-inner primary-bg">
                            <h3 className="pd-no-bottom mb-0">Pricing</h3>
                            <div className="price-box">
                              {tour.price.map((price, index) => (
                                <div className="price-item" key={index}>
                                  {price.description !== "" && (
                                    <span className="price-label">
                                      {price.description}:
                                    </span>
                                  )}
                                  <span className="price">
                                    {price.currency.toUpperCase()}
                                    {price.amount.$numberDecimal}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <p>
                              <button
                                onClick={handleOpenModal}
                                type="button"
                                className="outline-btn outline-btn-white theme-color"
                              >
                                Book Now
                              </button>
                            </p>
                          </div>
                        </div>
                      )}
                      {tour.attractions.length > 0 && (
                        <div className="booking-form-wrap">
                          <div className="booking-form-inner primary-bg">
                            <h3>ATTRACTIONS</h3>
                            <ul className="styled-list">
                              {tour.attractions.map((attraction, index) => (
                                <li className="full-width" key={index}>
                                  {attraction}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default UaeTours;
