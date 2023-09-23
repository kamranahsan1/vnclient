import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layouts/MetaData";
import Banner from "./layouts/Banner";
import { useDispatch, useSelector } from "react-redux";
import { getTour, getCountries, clearErrors } from "../action/packagesActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { API_IMAGE } from "../constants/commonConstants";
import ModalBooking from "../pages/layouts/ModalBooking";

const GenerateAi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [showModal, setShowModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState({});
  const visitType = [
    { value: "attraction", label: "Attraction" },
    { value: "event-visit", label: "Events" },
  ];
  const id = queryParams.has("id") ? queryParams.get("id") : "";
  const country = queryParams.has("country") ? queryParams.get("country") : "";
  const days = queryParams.has("days") ? queryParams.get("days") : 7;

  const avaOption =
    id !== "" && country !== "" ? { value: id, label: country } : "";

  const [selectedOption, setSelectedOption] = useState(avaOption);
  const [numberOfDays, setNumberOfDays] = useState(days);
  const [bannerData, setBannerData] = useState({
    bg: "/assets/images/img7.jpg",
    title: "Generate Your Tour",
    desc: "",
  });

  const { countries } = useSelector((state) => state.countries);

  const options = countries.map((country) => ({
    value: country._id,
    label: country.name,
  }));

  let vType = queryParams.has("type")
    ? visitType.find((item) => item.value === queryParams.get("type"))
    : visitType[0];

  const [selectedType, setSelectedType] = useState(vType);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: 35,
      backgroundColor: "#F8F8F8",
      borderColor: "#d9d9d9",
    }),
  };

  useEffect(() => {
    const fetchCons = async () => {
      dispatch(getCountries());
      if (id !== "") {
        handleGenerateClick();
      }
    };
    fetchCons();
  }, [dispatch, id]);

  const { loading, status, tours, toursCount } = useSelector(
    (state) => state.generatedTour
  );

  const findCountryById = (id) => {
    return countries.find((country) => country._id === id);
  };

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
    var newcountry = findCountryById(selected.value);
    setBannerData({
      bg: `${API_IMAGE}/${newcountry.mainImage}`,
      title: newcountry.name,
      desc: newcountry.description,
    });
  };

  const handleDaysChange = (event) => {
    setNumberOfDays(parseInt(event.target.value));
  };

  const handleGenerateClick = () => {
    const newParams = new URLSearchParams();
    const p = { id, country, days };
    if (selectedOption) {
      p.id = selectedOption.value;
      p.country = selectedOption.label;
      newParams.append("id", selectedOption.value);
      newParams.append("country", selectedOption.label);

      if (selectedType) {
        p.type = selectedType.value;
        newParams.append("type", selectedType.value);
      }
    }
    if (numberOfDays) {
      p.days = numberOfDays;
      newParams.append("days", numberOfDays);
    } else if (p.id !== "") {
      p.days = 5;
      newParams.append("days", 7);
    }

    if (newParams.toString() !== "") {
      navigate(`?${newParams.toString()}`);
    } else {
      navigate("");
    }
    if (p.id !== "" && p.days !== "") {
      var newcountry = findCountryById(p.id);
      if (newcountry) {
        setBannerData({
          bg: `${API_IMAGE}/${newcountry.mainImage}`,
          title: newcountry.name,
          desc: newcountry.description,
        });
      }
      dispatch(getTour(p));
    }
  };

  function isCompleteURL(str) {
    return str.startsWith("http://") || str.startsWith("https://");
  }
  const handleTypeChange = (selected) => {
    setSelectedType(selected);
  };
  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      <MetaData title={"Generate Your Tour By AI"} />
      <main id="content" className="site-main">
        {showModal && (
          <ModalBooking
            message={`Query Related for ${selectedOption.label}, ${selectedTour} for ${numberOfDays} Days`}
            show={showModal}
            handleClose={handleCloseModal}
          />
        )}
        <section className="package-inner-page pd-no-bottom">
          <Banner
            bg={bannerData.bg}
            title={bannerData.title}
            desc={bannerData.desc}
            padding="pd-no-bottom"
          />
        </section>
        <section className="home-offer pd-top pd-no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-sm-center">
                <div className="section-heading">
                  <h2 className="section-title">Generate Tour By AI</h2>
                </div>
                <div className="booking-content ai-generate">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <h3>Search</h3>
                        {options && (
                          <Select
                            styles={customStyles}
                            options={options}
                            onChange={handleOptionChange}
                            value={selectedOption}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <h3>Days</h3>
                        <input
                          type="number"
                          className="generate-input"
                          placeholder="Ex 1, 2, 10"
                          onChange={handleDaysChange}
                          value={numberOfDays}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <h3> Visit Type</h3>
                        {options && (
                          <Select
                            styles={customStyles}
                            options={visitType}
                            onChange={handleTypeChange}
                            value={selectedType}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mg-auto">
                      <button
                        className="round-btn"
                        onClick={handleGenerateClick}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-offer pd-top pd-no-top">
          {tours && toursCount ? (
            tours.map((tour, index) => (
              <div className="container" key={index}>
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8 primary right-sidebar">
                    <div className="single-packge-wrap">
                      <div className="package-meta"></div>
                      <div className="single-package-head d-flex align-items-center">
                        <div className="package-title">
                          <h3>
                            {tour.type === "attraction"
                              ? `Day ${tour.Day} - ${tour.name}`
                              : `Event - ${tour.name}`}
                          </h3>
                        </div>
                      </div>
                      {tour.mainImage && (
                        <figure className="single-package-image">
                          <img
                            src={
                              isCompleteURL(tour.mainImage)
                                ? tour.mainImage
                                : `${API_IMAGE}/${tour.mainImage}`
                            }
                            alt=""
                            className="full-width"
                          />
                        </figure>
                      )}
                      <div className="package-content-detail">
                        {tour.description !== "" && (
                          <article className="package-overview">
                            <h4>OVERVIEW: IN {tour.time}</h4>
                            <p>{tour.description}</p>
                            <Link
                              onClick={() => handleOpenModal(tour.name)}
                              className="round-btn"
                            >
                              Book Now
                            </Link>
                          </article>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="container">
              <div className="row">
                <div className="single-page-section">
                  <div className="container">
                    <figure className="single-feature-img">
                      <img src="assets/images/Dubai1.jpg" alt="" />
                    </figure>
                    <figure className="single-feature-img">
                      <img src="assets/images/Europe.jpg" alt="" />
                    </figure>
                    <figure className="single-feature-img">
                      <img src="assets/images/Asia.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </Fragment>
  );
};

export default GenerateAi;
