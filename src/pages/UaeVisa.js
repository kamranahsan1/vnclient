import React, { Fragment, useState } from "react";
import Banner from "./layouts/Banner";
import { Link } from "react-router-dom";
import MetaData from "./layouts/MetaData";
import ModalBooking from "../pages/layouts/ModalBooking";
import { removePrefixFromURL } from "../constants/commonConstants";

const UaeVisa = () => {
  const [showModal, setShowModal] = useState(false);
  const [ModalItem, setModalItem] = useState(false);

  const handleOpenModal = (name) => {
    setModalItem(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <MetaData title={"Uae Visa"} />
      <main id="content" className="site-main">
        {showModal && (
          <ModalBooking
            message={ModalItem}
            show={showModal}
            handleClose={handleCloseModal}
          />
        )}
        <section className="inner-page-wrap">
          <Banner
            bg="/assets/images/img7.jpg"
            title="UAE VISAS"
            desc="Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
          />
          <div className="offer-package-wrap visa">
            <div className="container">
              <div className="row padding-down">
                <div className="col-md-5">
                  <div className="tab-section">
                    <div className="tab-container">
                      <div className="responsive-tabs">
                        <div
                          id="nav-tab-content"
                          className="tab-content"
                          role="tablist"
                        >
                          <div
                            id="pane-A"
                            className="card tab-pane fade show active"
                            role="tabpanel"
                            aria-labelledby="tab-A"
                          >
                            <div
                              id="collapse-A"
                              className="collapse show"
                              data-bs-parent="#nav-tab-content"
                              role="tabpanel"
                              aria-labelledby="heading-A"
                            >
                              <div className="card-body">
                                <h2>#Dubai</h2>
                                <p>
                                  A dazzling metropolis in the UAE known for its
                                  futuristic skyscrapers, luxury shopping, and
                                  vibrant multicultural ambiance.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <figure className="career-detail-image">
                    <img src="assets/images/dubai.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="row gx-5">
                <div className="col-md-6">
                  <article
                    className="offer-item"
                    style={{
                      backgroundColor: `#3066af`,
                    }}
                  >
                    <div className="offer-content">
                      <h2>14 Days</h2>
                      <p>
                        The 14 Days visa for Dubai is a tourist and business
                        visa type, this visa is suitable for people who plan to
                        spend up to 14 days in Dubai or the United Arab
                        Emirates. This is only a single-entry visa.
                      </p>
                      <Link
                        onClick={() =>
                          handleOpenModal(
                            `Query Related for Dubai 14 Days Visa`
                          )
                        }
                        className="round-btn"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article
                    className="offer-item"
                    style={{
                      backgroundColor: `#3066af`,
                    }}
                  >
                    <div className="offer-content">
                      <h2>1 Month</h2>
                      <p>
                        Tourists or visitors who desire to spend up to 1 month
                        or 30 days in the United Arab Emirates for either a
                        long-term business trip or for recreation can apply for
                        a 1-month or 30 days Dubai Visa.
                      </p>
                      <Link
                        onClick={() =>
                          handleOpenModal(
                            `Query Related for Dubai 1 Month Visa`
                          )
                        }
                        className="round-btn"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article
                    className="offer-item"
                    style={{
                      backgroundColor: `#3066af`,
                    }}
                  >
                    <div className="offer-content">
                      <h2>2 Months</h2>
                      <p>
                        The 2-months visa recommended for visitors who want stay
                        longer with family or visit the United Arab Emirates
                        multiple times within 60 days. Two months visa come with
                        single and multiple entry.
                      </p>
                      <Link
                        onClick={() =>
                          handleOpenModal(
                            `Query Related for Dubai 2 Months Visa`
                          )
                        }
                        className="round-btn"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article
                    className="offer-item"
                    style={{
                      backgroundColor: `#3066af`,
                    }}
                  >
                    <div className="offer-content">
                      <h2>5 Years</h2>
                      <p>
                        The 5-year multiple-entry tourism visa is available for
                        visitors from diverse nations globally, this visa
                        enables tourists and visitors to enter into the United
                        Arab Emirates multiple times.
                      </p>
                      <Link
                        onClick={() =>
                          handleOpenModal(
                            `Query Related for Dubai 5 Months Visa`
                          )
                        }
                        className="round-btn"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-package-wrap visa">
            <div className="container">
              <h2 className="section-title">U.A.E. EMIRATES VISA</h2>
              <div className="row padding-down">
                <div className="col-md-7">
                  <figure className="career-detail-image">
                    <img
                      src="https://newvision.travel/wp-content/uploads/2023/04/ddAsset-30aaaaaa-768x508.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-md-5">
                  <div className="tab-section">
                    <div className="tab-container">
                      <div className="responsive-tabs">
                        <div
                          id="nav-tab-content"
                          className="tab-content"
                          role="tablist"
                        >
                          <div
                            id="pane-A"
                            className="card tab-pane fade show active"
                            role="tabpanel"
                            aria-labelledby="tab-A"
                          >
                            <div
                              id="collapse-A"
                              className="collapse show"
                              data-bs-parent="#nav-tab-content"
                              role="tabpanel"
                              aria-labelledby="heading-A"
                            >
                              <div className="card-body">
                                <h2>#Sharjah</h2>
                                <p>
                                  Sharjah is the capital of Islamic Culture,
                                  amongst which Mleiha Archaeological Site and
                                  Sharjah Heritage Area are declared as Heritage
                                  Restoration Sites by UNESCO, they are a
                                  wonderful tourist attraction too.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="pane-B"
                            className="card tab-pane fade"
                            role="tabpanel"
                            aria-labelledby="tab-B"
                          >
                            <div
                              className="card-header"
                              role="tab"
                              id="heading-B"
                            >
                              <h5 className="mb-0">
                                <a
                                  className="collapsed"
                                  data-bs-toggle="collapse"
                                  href="#collapse-B"
                                  aria-expanded="false"
                                  aria-controls="collapse-B"
                                >
                                  EXPERIENCE
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row padding-down">
                <div className="col-md-5">
                  <div className="tab-section">
                    <div className="tab-container">
                      <div className="responsive-tabs">
                        <div
                          id="nav-tab-content"
                          className="tab-content"
                          role="tablist"
                        >
                          <div
                            id="pane-A"
                            className="card tab-pane fade show active"
                            role="tabpanel"
                            aria-labelledby="tab-A"
                          >
                            <div
                              id="collapse-A"
                              className="collapse show"
                              data-bs-parent="#nav-tab-content"
                              role="tabpanel"
                              aria-labelledby="heading-A"
                            >
                              <div className="card-body">
                                <h2>#Abu Dhabi</h2>
                                <p>
                                  Abu Dhabi visa is suited for tourists or
                                  visitors who wish to stay in the UAE for 14
                                  days for either a tour, business venture, or
                                  family visit. These visas are also valid for
                                  either 30 days (short-term visit visa) or 90
                                  days (long-term visit visa).
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <figure className="career-detail-image">
                    <img
                      src="https://newvision.travel/wp-content/uploads/2023/04/ddAsset-31aaaaaa-768x508.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="row gx-5">
                <div className="col-md-6">
                  <article
                    className="offer-item"
                    style={{
                      backgroundColor: `#3066af`,
                    }}
                  >
                    <div className="offer-content">
                      <h2>SHARJAH VISA</h2>
                      <p>
                        We offer different types of Sharjah visas, this includes
                        the Sharjah 14 days (single entry), 30 days (single
                        entry), 30 days (multiple entry), 60 days (single
                        entry), 60 days (multiple entry), 90 days (single
                        entry), 90 days (multiple entry), 90 days (job seekers
                        entry), and Transit visa (single entry).
                      </p>
                      <Link
                        onClick={() =>
                          handleOpenModal(`Query Related for SHARJAH Visa`)
                        }
                        className="round-btn"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article
                    className="offer-item"
                    style={{
                      backgroundColor: `#3066af`,
                    }}
                  >
                    <div className="offer-content">
                      <h2>ABU DHABI VISA</h2>
                      <p>
                        The 30-day visa is granted with an initial validity of
                        30 days, while the 90-day visa, initially valid for 60
                        days, offers a non-renewable 90-day stay starting from
                        the date of arrival.Abu Dhabi: The capital of the UAE,
                        renowned for its modern architecture, cultural
                        landmarks, and vibrant blend of tradition and
                        innovation.
                      </p>
                      <Link
                        onClick={() =>
                          handleOpenModal(`Query Related for Abu dhabi Visa`)
                        }
                        className="round-btn"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default UaeVisa;
