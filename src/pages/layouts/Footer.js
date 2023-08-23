import React, { Fragment, useState, useEffect } from "react";
import $ from "jquery";

const Footer = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [isCanvasVisible, setisCanvasVisible] = useState(false);

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
                      <a href="index.html">
                        <img
                          src="/assets/images/logo-sign.png"
                          width="65"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="textwidget widget-text">
                      NewVision Tours: Embrace the World with Unparalleled
                      Adventures - Book Your Dream Getaway Now!
                    </div>
                  </aside>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fab fa-facebook-f"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fab fa-instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="policy.html">Term & Condition</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 text-left">
                  <aside className="widget widget_text">
                    <h3 className="widget-title">CONTACT US</h3>
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
      <a
        href="#"
        onClick={handleBackToTopClick}
        className="to-top-icon"
        style={{
          display: isBackToTopVisible ? "inline" : "none",
        }}
      >
        <i className="fas fa-chevron-up"></i>
      </a>
    </Fragment>
  );
};

export default Footer;
