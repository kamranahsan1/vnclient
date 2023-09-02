import React, { Fragment, useState } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";
import { useDispatch } from "react-redux";
import { saveContact } from "../action/packagesActions";
import Popup from "./layouts/Popup";

function Contact() {
  const dispatch = useDispatch();
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const [errors, setErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Name is required";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone is required";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      dispatch(saveContact(formData));
      setFormData(initialFormData);
      setDialogOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
                    {isDialogOpen && (
                      <Popup>
                        <h2>Query Sent</h2>
                        <p>We will contact you in shortly</p>
                      </Popup>
                    )}
                    <form
                      method="get"
                      className="contact-from"
                      onSubmit={handleSubmit}
                    >
                      <p>
                        <label>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name*"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        {errors.name && (
                          <span className="error-message">{errors.name}</span>
                        )}
                      </p>
                      <p>
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email*"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <span className="error-message">{errors.email}</span>
                        )}
                      </p>
                      <p>
                        <label>Phone No</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        {errors.phone && (
                          <span className="error-message">{errors.phone}</span>
                        )}
                      </p>
                      <p>
                        <label>Reason</label>
                        <br />
                        <select
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          className="full-width"
                        >
                          <option value="">Select reason</option>
                          <option value="visa">Visa</option>
                          <option value="uae-tours">Uae Tours</option>
                          <option value="packages">Packages</option>
                        </select>
                        {errors.reason && (
                          <span className="error-message">{errors.reason}</span>
                        )}
                      </p>
                      <p>
                        <label>Comments / Questions</label>
                        <textarea
                          rows="8"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
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
