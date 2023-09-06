import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME_URL } from "../../constants/commonConstants";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { saveSubscriber } from "../../action/packagesActions";
const Footer = () => {
  const dispatch = useDispatch();
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    try {
      dispatch(saveSubscriber({ email: email }));
      setEmail("");
      setDialogOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if ($(window).scrollTop() > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };

    $(window).on("scroll", handleScroll);
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  const handleBackToTopClick = () => {
    $("html, body").animate({ scrollTop: 0 }, 300);
  };

  return (
    <Fragment>
      <footer id="colophon" className="site-footer footer-primary">
        <div className="top-footer">
          <div className="container">
            <div className="upper-footer">
              <div className="row">
                <div className="col-lg-9 col-sm-6">
                  <aside className="widget widget_text">
                    <div className="footer-logo">
                      <Link to={HOME_URL}>
                        <img
                          src="/assets/images/logo-sign.png"
                          width="65"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="textwidget widget-text">
                      NewVision Tours: Embrace the World with Unparalleled
                      Adventures - Book Your Dream Getaway Now!
                    </div>
                  </aside>
                </div>
                <div className="col-lg-3 col-sm-6 text-left">
                  <aside className="widget widget_text">
                    <div className="textwidget widget-text">
                      <p>
                        Feel free to contact and
                        <br /> reach us !!
                      </p>
                      <ul>
                        <li>
                          <a href="tel:+01988256203">
                            <i
                              aria-hidden="true"
                              className="icon icon-phone1"
                            ></i>
                            +971 4 432 44 15
                          </a>
                        </li>
                        <li>
                          <a href="mailtop:info@domain.com">
                            <i
                              aria-hidden="true"
                              className="icon icon-envelope1"
                            ></i>
                            info@newvision.travel
                          </a>
                        </li>
                        <li>
                          <i
                            aria-hidden="true"
                            className="icon icon-map-marker1"
                          ></i>
                          Office 2503-4, Prism Tower, Business Bay, Dubai – UAE,
                          P.O Box 118962
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
            <div className="lower-footer">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="footer-newsletter">
                    <p>
                      Subscribe our newsletter for more update &amp; news !!
                    </p>
                    <form className="newsletter" onSubmit={handleSubscribe}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                      <button
                        type="submit"
                        className="outline-btn outline-btn-white"
                      >
                        Subscribe
                      </button>
                      {isDialogOpen && (
                        <div
                          className="alert"
                          style={{
                            color: "#ffffff",
                          }}
                        >
                          <strong>Thanks for your Interested!</strong>.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 text-right">
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i
                            className="fab fa-facebook-f"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i className="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i
                            className="fab fa-instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* 
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="policy.html">Term &amp; Condition</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                    </ul>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="copy-right text-center">
              Copyright &copy; 2023 NewVision. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      <Link
        onClick={handleBackToTopClick}
        className="to-top-icon"
        style={{
          display: isBackToTopVisible ? "inline" : "none",
        }}
      >
        <i className="fas fa-chevron-up"></i>
      </Link>
    </Fragment>
  );
};

export default Footer;
