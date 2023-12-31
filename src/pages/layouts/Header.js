import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getCategories,
  getViewCategory,
} from "../../action/packagesActions";
import {
  HOME_URL,
  ABOUT_US_URL,
  UAE_VISA_URL,
  SCHENGEN_VISA_URL,
  TRAVEL_INSURANCE_URL,
  PICKUP_SERVICES_URL,
  CONTACT_URL,
  AI_TOURS_URL,
  FB_LINK,
  INSTA_LINK,
} from "../../constants/commonConstants";

const Header = () => {
  const dispatch = useDispatch();
  const lct = useLocation();

  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [isSearchIn, setIsSearchIn] = useState(false);
  const [isCanvasVisible, setisCanvasVisible] = useState(false);
  const [isMenuToggle, setMenuToggle] = useState(false);
  const [showPackagesSubMenu, setShowPackagesSubMenu] = useState(false);
  const [showVisasSubMenu, setShowVisasSubMenu] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
  const { categories, error } = useSelector((state) => state.categories);
  const { viewcategory } = useSelector((state) => state.viewcategory);
  const categorySlugs = categories.map(
    (category) => `/package/${category.slug}`
  );
  const [iscurrentPage, setCurrentPage] = useState(
    [
      HOME_URL,
      ABOUT_US_URL,
      UAE_VISA_URL,
      SCHENGEN_VISA_URL,
      TRAVEL_INSURANCE_URL,
      PICKUP_SERVICES_URL,
      CONTACT_URL,
      AI_TOURS_URL,
      ...categorySlugs,
    ].includes(lct.pathname)
      ? lct.pathname
      : HOME_URL
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getCategories());
    dispatch(getViewCategory());

    const handleScroll = () => {
      const headerHeight = document.querySelector(".top-header").offsetHeight;
      const bottomHeaderHeight =
        document.querySelector(".bottom-header").offsetHeight;
      const mobileHeaderHeight = headerHeight + bottomHeaderHeight;

      if (window.innerWidth >= 992) {
        setIsFixedHeader(window.scrollY > headerHeight);
      } else {
        setIsFixedHeader(window.scrollY > mobileHeaderHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, error]);

  useEffect(() => {
    setCurrentPage(lct.pathname);
  }, [lct.pathname]);

  const menuToggle = () => {
    setMenuToggle(!isMenuToggle);
  };
  const togglePackagesSubMenu = () => {
    setShowPackagesSubMenu(!showPackagesSubMenu);
  };

  const toggleVisasSubMenu = () => {
    setShowVisasSubMenu(!showVisasSubMenu);
  };

  const toggleServicesSubMenu = () => {
    setShowServicesSubMenu(!showServicesSubMenu);
  };

  const closeSearch = () => {
    setIsSearchIn(false);
  };
  const navigationActive = (url) => {
    setCurrentPage(url);
  };

  const canvasOpen = () => {
    setisCanvasVisible(true);
  };
  const canvasClose = () => {
    setisCanvasVisible(false);
  };

  return (
    <Fragment>
      <div
        id="offCanvas"
        className={
          isCanvasVisible
            ? "offcanvas-show offcanvas-container"
            : "offcanvas-container"
        }
      >
        <div className="offcanvas-inner">
          <div className="offcanvas-sidebar">
            <aside className="widget widget_text text-center">
              <h3 className="widget-title">CONTACT US</h3>
              <div className="textwidget widget-text">
                <p>
                  Feel free to contact and
                  <br /> reach us !!
                </p>
                <ul>
                  <li>
                    <a href="tel:+97144324415">
                      <i aria-hidden="true" className="icon icon-phone1"></i>
                      +971 4 432 44 15
                    </a>
                  </li>
                  <li>
                    <a href="mailtop:info@domain.com">
                      <i aria-hidden="true" className="icon icon-envelope1"></i>
                      info@newvision.travel
                    </a>
                  </li>
                  <li>
                    <i aria-hidden="true" className="icon icon-map-marker1"></i>
                    Office 2503-4, Prism Tower, Business Bay, Dubai – UAE, P.O
                    Box 118962
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <Link className="offcanvas-close" onClick={canvasClose}>
            <i className="fas fa-times"></i>
          </Link>
        </div>
        <div className="overlay"></div>
      </div>
      <header
        id="masthead"
        className={isFixedHeader ? "fixed-header site-header" : "site-header"}
      >
        <div
          className={
            isSearchIn ? "header-search-form search-in" : "header-search-form"
          }
        >
          <div className="container">
            <div className="header-search-container">
              <form className="search-form" role="search" method="get">
                <input type="text" name="s" placeholder="Enter your text..." />
              </form>
              <Link className="search-close">
                <i className="fas fa-times" onClick={closeSearch}></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="top-header">
          <div className="container">
            <div className="top-header-inner">
              <div className="site-logo text-left">
                <div className="appended-logo">
                  <h1 className="site-title">
                    <Link to={HOME_URL}>
                      <img src="/assets/images/logo-sign.png" alt="Logo" />
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="header-contact text-center">
                <a href="tel:+01977259912">
                  <div className="header-contact-details">
                    <span className="contact-label">
                      For Further Inquires :
                    </span>
                    <h5 className="header-contact-no">+971 4 432 44 15</h5>
                  </div>
                </a>
              </div>
              <div className="header-icons text-right">
                <div className="offcanvas-menu d-inline-block">
                  <Link onClick={canvasOpen}>
                    <i aria-hidden="true" className="icon icon-burger-menu"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="bottom-header-inner d-flex justify-content-between align-items-center">
              <div className="header-social social-icon">
                <ul>
                  <li>
                    <Link to={FB_LINK} target="_blank">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={INSTA_LINK} target="_blank">
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="navigation-container d-none d-lg-block">
                <nav id="navigation" className="navigation">
                  <ul>
                    <li
                      className={
                        iscurrentPage === HOME_URL ? "menu-active" : ""
                      }
                    >
                      <Link
                        to={HOME_URL}
                        onClick={() => {
                          navigationActive(HOME_URL);
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      className={
                        iscurrentPage === ABOUT_US_URL ? "menu-active" : ""
                      }
                    >
                      <Link
                        to={ABOUT_US_URL}
                        onClick={() => {
                          navigationActive(ABOUT_US_URL);
                        }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li
                      className={
                        iscurrentPage.includes("/package") ? "menu-active" : ""
                      }
                    >
                      <Link>Packages</Link>
                      <ul>
                        {categories &&
                          categories.map((category, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                navigationActive(`/package/${category.slug}`);
                              }}
                            >
                              <Link
                                to={`/package/${category.slug}`}
                                onClick={() => setShowPackagesSubMenu(false)}
                              >
                                {category.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                    <li
                      className={
                        iscurrentPage === UAE_VISA_URL ||
                        iscurrentPage === SCHENGEN_VISA_URL
                          ? "menu-active"
                          : ""
                      }
                    >
                      <Link>Visas</Link>
                      <ul>
                        {viewcategory &&
                          viewcategory.map((category, index) => {
                            // Check if isNavigation is 1 for the category
                            if (category.isNavigation === 1) {
                              return (
                                <li
                                  key={index}
                                  onClick={() => {
                                    navigationActive(`/visa/${category.slug}`);
                                  }}
                                >
                                  <Link
                                    to={`/visa/${category.slug}`}
                                    onClick={() =>
                                      setShowPackagesSubMenu(false)
                                    }
                                  >
                                    {category.name}
                                  </Link>
                                </li>
                              );
                            }
                            return null;
                          })}
                      </ul>
                    </li>
                    <li
                      className={
                        iscurrentPage === AI_TOURS_URL ? "menu-active" : ""
                      }
                    >
                      <Link
                        to={AI_TOURS_URL}
                        onClick={() => {
                          navigationActive(AI_TOURS_URL);
                        }}
                      >
                        Generate Tour
                      </Link>
                    </li>
                    <li
                      className={
                        iscurrentPage === TRAVEL_INSURANCE_URL ||
                        iscurrentPage === PICKUP_SERVICES_URL
                          ? "menu-active"
                          : ""
                      }
                    >
                      <Link>Our Services</Link>
                      <ul>
                        {/*
                        <li>
                          <Link
                            to={TRAVEL_INSURANCE_URL}
                            onClick={() => {
                              navigationActive(TRAVEL_INSURANCE_URL);
                            }}
                          >
                            Travel Insurance
                          </Link>
                          </li>*/}
                        <li>
                          <Link
                            to={PICKUP_SERVICES_URL}
                            onClick={() => {
                              navigationActive(PICKUP_SERVICES_URL);
                            }}
                          >
                            Pickup Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        iscurrentPage === CONTACT_URL ? "menu-active" : ""
                      }
                    >
                      <Link
                        to={CONTACT_URL}
                        onClick={() => {
                          navigationActive(CONTACT_URL);
                        }}
                      >
                        contact us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-btn">
                <Link to={CONTACT_URL} className="round-btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-container">
          <div className="slicknav_menu">
            <Link
              aria-haspopup="true"
              onClick={menuToggle}
              className={
                isMenuToggle
                  ? "slicknav_btn slicknav_open"
                  : "slicknav_btn slicknav_collapse"
              }
            >
              <span className="slicknav_menutxt">Menu</span>
              <span className="slicknav_icon">
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
              </span>
            </Link>
            <nav
              aria-hidden="false"
              role="menu"
              className={
                isMenuToggle
                  ? "slicknav_nav slicknav_open"
                  : "slicknav_nav slicknav_hidden"
              }
            >
              <ul>
                <li>
                  <li className="menu-active">
                    <Link to={HOME_URL} onClick={() => setMenuToggle(false)}>
                      Home
                    </Link>
                  </li>
                </li>
                <li>
                  <li>
                    <Link
                      to={ABOUT_US_URL}
                      onClick={() => setMenuToggle(false)}
                    >
                      About Us
                    </Link>
                  </li>
                </li>
                <li className="slicknav_collapsed slicknav_parent">
                  <span
                    className="slicknav_parent-link slicknav_row"
                    onClick={togglePackagesSubMenu}
                  >
                    <Link>Packages</Link>
                    <Link
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      className="slicknav_item"
                    >
                      <span className="slicknav_arrow">
                        <i className="fas fa-plus"></i>
                      </span>
                    </Link>
                  </span>
                  <ul
                    role="menu"
                    className={showPackagesSubMenu ? "" : "slicknav_hidden"}
                    aria-hidden="true"
                  >
                    {categories &&
                      categories.map((category, index) => (
                        <li key={index}>
                          <Link
                            to={`/package/${category.slug}`}
                            onClick={() => setMenuToggle(false)}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
                <li className="slicknav_collapsed slicknav_parent">
                  <span
                    className="slicknav_parent-link slicknav_row"
                    onClick={toggleVisasSubMenu}
                  >
                    <Link>Visas</Link>
                    <Link
                      role="menuitem"
                      aria-haspopup="true"
                      className="slicknav_item"
                    >
                      <span className="slicknav_arrow">
                        <i className="fas fa-plus"></i>
                      </span>
                    </Link>
                  </span>
                  <ul
                    role="menu"
                    className={showVisasSubMenu ? "" : "slicknav_hidden"}
                    aria-hidden="true"
                  >
                    {viewcategory &&
                      viewcategory.map((category, index) => {
                        // Check if isNavigation is 1 for the category
                        if (category.isNavigation === 1) {
                          return (
                            <li
                              key={index}
                              onClick={() => {
                                navigationActive(`/visa/${category.slug}`);
                              }}
                            >
                              <Link
                                to={`/visa/${category.slug}`}
                                onClick={() => setMenuToggle(false)}
                              >
                                {category.name}
                              </Link>
                            </li>
                          );
                        }
                        return null;
                      })}
                  </ul>
                </li>
                <li>
                  <Link to={AI_TOURS_URL} onClick={() => setMenuToggle(false)}>
                    Generate Tour
                  </Link>
                </li>
                <li className="slicknav_collapsed slicknav_parent">
                  <span
                    className="slicknav_parent-link slicknav_row"
                    onClick={toggleServicesSubMenu}
                  >
                    <Link>Our Services</Link>
                    <Link className="slicknav_item">
                      <span className="slicknav_arrow">
                        <i className="fas fa-plus"></i>
                      </span>
                    </Link>
                  </span>
                  <ul
                    role="menu"
                    className={showServicesSubMenu ? "" : "slicknav_hidden"}
                    aria-hidden="true"
                  >
                    <li>
                      <Link
                        to={TRAVEL_INSURANCE_URL}
                        onClick={() => setMenuToggle(false)}
                      >
                        Travel Insurance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={PICKUP_SERVICES_URL}
                        onClick={() => setMenuToggle(false)}
                      >
                        Pickup Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={CONTACT_URL} onClick={() => setMenuToggle(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
