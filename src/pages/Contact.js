import React, { Fragment, useState } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";
import { useDispatch } from "react-redux";
import { saveContact } from "../action/packagesActions";
import { Link } from "react-router-dom";
import { FB_LINK, INSTA_LINK } from "../constants/commonConstants";

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
                          <Link to={FB_LINK}>
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={INSTA_LINK}>
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contact-map">
                    <iframe
                      title="google_map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.9681193795756!2d55.2589016!3d25.1881109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6833aaaaaaab%3A0xcc775e8c16ceacc9!2sNew%20Vision%20Travel%20%26%20Tourism%20L.L.C!5e0!3m2!1sen!2s!4v1634657032580!5m2!1sen!2s"
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
                      <div className="alert alert-success">
                        <strong>Success!</strong> Request Submitted
                        Successfully! Our team will contact shortly.
                      </div>
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
                        <li>Dubai</li>
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
