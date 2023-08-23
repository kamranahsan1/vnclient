import React, { Fragment } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";

function Contact() {
  return (
    <Fragment>
      <MetaData title={`Contact Us`} />
      <main id="content" className="site-main">
        <section className="contact-inner-page">
          <Banner bg="/assets/images/img7.jpg" title="Contact Us" desc="" />
          <div className="inner-contact-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-heading">
                    <h5 className="sub-title">GET IN TOUCH</h5>
                    <h2 className="section-title">REACH & CONTACT US!</h2>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com" target="_blank">
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com" target="_blank">
                            <i
                              className="fab fa-twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com" target="_blank">
                            <i
                              className="fab fa-youtube"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com" target="_blank">
                            <i
                              className="fab fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contact-map">
                    <iframe
                      title="google_map"
                      src="https://www.google.com/maps/embed/v1/place?q=25.18907082791253,+55.26140949206774&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      width="600"
                      height="480"
                      style={{ border: "0" }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-from-wrap primary-bg">
                    <form method="get" className="contact-from">
                      <p>
                        <label>First Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name*"
                        />
                      </p>
                      <p>
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email*"
                        />
                      </p>
                      <p>
                        <label>Phone No</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Phone"
                        />
                      </p>
                      <p>
                        <label>Reason</label>
                        <br />
                        <select name="" id="" className="full-width">
                          <option value="">Select reason</option>
                          <option value="visa">Visa</option>
                          <option value="uae-tours">Uae Tours</option>
                          <option value="packages">Packages</option>
                        </select>
                      </p>
                      <p>
                        <label>Comments / Questions</label>
                        <textarea
                          rows="8"
                          placeholder="Your Message*"
                        ></textarea>
                      </p>
                      <p>
                        <input
                          type="submit"
                          name="submit"
                          value="SUBMIT MESSAGE"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-details-section bg-light-grey">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="icon-box border-icon-box">
                    <div className="box-icon">
                      <i
                        aria-hidden="true"
                        className="fas fa-envelope-open-text"
                      ></i>
                    </div>
                    <div className="icon-box-content">
                      <h4>Contact</h4>
                      <ul>
                        <li>
                          <a href="tell:+97144324415">+971 4 4 32 44 15</a>
                        </li>
                        <li>
                          <a href="mailto:info@newvision.travel">
                            info@newvision.travel
                          </a>
                        </li>
                        <li>
                          <a href="mailto:sales@newvision.travel">
                            sales@newvision.travel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="icon-box border-icon-box">
                    <div className="box-icon">
                      <i aria-hidden="true" className="fas fa-phone-alt"></i>
                    </div>
                    <div className="icon-box-content">
                      <h4>Address: </h4>
                      <ul>
                        <li>
                          Office 2503-4 Prism Tower,
                          <br /> Business Bay P.O BOX 118962 Dubai , <br /> UAE
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="icon-box border-icon-box">
                    <div className="box-icon">
                      <i aria-hidden="true" className="fas fa-map-marker"></i>
                    </div>
                    <div className="icon-box-content">
                      <h4>BRANCHES</h4>
                      <ul>
                        <li>United Arab Emirates</li>
                        <li>Saudi Arabia</li>
                        <li>Turkey</li>
                      </ul>
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
}

export default Contact;
