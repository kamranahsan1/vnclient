import React, { Fragment } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";

const TravelInsurance = () => {
  return (
    <Fragment>
      <MetaData title={`Travel Insurance`} />
      <main id="content" className="site-main">
        <section className="inner-page-wrap">
          <Banner
            bg="/assets/images/img7.jpg"
            title="Travel Insurance"
            desc="At New Vision Travel, we understand that traveling can be unpredictable and unforeseen events can disrupt your plans. That’s why we offer comprehensive travel insurance coverage to protect you and your loved ones throughout your journey. Whether you’re traveling for leisure, business, or any other purpose, our travel insurance packages provide peace of mind, security, and support when you need it most."
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
                                <h2>Benefits</h2>
                                <p>
                                  Our travel insurance packages include a wide
                                  range of benefits and coverage, such as:
                                  <ul>
                                    <li>
                                      Medical coverage for emergencies, illness,
                                      and accidents
                                    </li>
                                    <li>
                                      Trip cancellation and interruption
                                      coverage
                                    </li>
                                    <li>
                                      Baggage and personal effects coverage
                                    </li>
                                    <li>
                                      Emergency travel assistance and evacuation
                                    </li>
                                    <li>
                                      24/7 customer support and claims handling
                                    </li>
                                  </ul>
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
                      src="https://newvision.travel/wp-content/uploads/2023/04/ddArtboard-1-1.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="row padding-down">
                <div className="col-md-6">
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
                                <p>
                                  With our travel insurance, you can enjoy your
                                  journey with the confidence and security of
                                  knowing that you’re protected against
                                  unexpected events and emergencies. Our
                                  policies are tailored to meet your specific
                                  needs and budget, and we work with trusted and
                                  reliable insurance providers to offer you the
                                  best coverage and value.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
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
                                <p>
                                  Don’t let unexpected events ruin your travel
                                  plans. Contact us today to learn more about
                                  our travel insurance services and get a free
                                  quote. Our team of travel experts will be
                                  happy to assist you in selecting the right
                                  policy for your needs and provide you with the
                                  support and guidance you need throughout your
                                  journey.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default TravelInsurance;
