import React, { Fragment } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";

const PickUpServices = () => {
  return (
    <Fragment>
      <MetaData title={`Pick Up Services`} />
      <main id="content" className="site-main">
        <section className="inner-page-wrap">
          <Banner
            bg="/assets/images/img7.jpg"
            title="Pick Up Services"
            desc=""
          />
          <div className="offer-package-wrap visa">
            <div className="container">
              <div className="row">
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
                                <h2>Home / Office Pickup</h2>
                                <p>
                                  Airport to Hotel Pickup: Hassle-Free and
                                  Comfortable Arrival Experience
                                  <br /> <br />
                                  Arriving in a new destination can be stressful
                                  and overwhelming, especially after a long
                                  flight. At [Company Name], we understand the
                                  importance of a smooth and comfortable arrival
                                  experience, which is why we offer reliable and
                                  efficient airport to hotel pickup services for
                                  travelers arriving in Dubai.
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
                      src="/assets/images/why-booking-an-airport-transfer-is-an-awesome-idea.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
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
                                  Our airport pickup services are designed to
                                  provide you with a hassle-free and stress-free
                                  arrival experience. Our professional and
                                  experienced drivers will meet you at the
                                  airport terminal, help you with your luggage,
                                  and escort you to our comfortable and
                                  air-conditioned vehicles. Our fleet of
                                  vehicles includes a wide range of options to
                                  suit your needs and preferences, from standard
                                  sedans to luxury SUVs and vans for larger
                                  groups.
                                  <br /> <br />
                                  We pride ourselves on our punctuality and
                                  reliability, and we monitor your flight
                                  schedule to ensure that we are there waiting
                                  for you when you arrive, even if your flight
                                  is delayed or arrives early. Our drivers are
                                  also knowledgeable about the city and can
                                  provide you with useful information and
                                  recommendations to help you make the most of
                                  your stay in Dubai.
                                  <br /> <br />
                                  Whether you’re traveling for business,
                                  leisure, or any other purpose, our airport to
                                  hotel pickup services provide you with a
                                  comfortable, convenient, and stress-free start
                                  to your journey. Contact us today to learn
                                  more about our services and book your airport
                                  pickup with us. We look forward to welcoming
                                  you to Dubai!
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

export default PickUpServices;
