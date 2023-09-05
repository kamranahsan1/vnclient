import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layouts/MetaData";
import Banner from "./layouts/Banner";
import { useDispatch, useSelector } from "react-redux";
import { getTour, getCountries, clearErrors } from "../action/packagesActions";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { API_IMAGE } from "../constants/commonConstants";

const GenerateAi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.has("id") ? queryParams.get("id") : "";
  const country = queryParams.has("country") ? queryParams.get("country") : "";
  const days = queryParams.has("days") ? queryParams.get("days") : "";

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
    };

    fetchCons();
  }, [dispatch]);

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
    }
    if (numberOfDays) {
      p.days = numberOfDays;
      newParams.append("days", numberOfDays);
    } else if (p.id != "") {
      p.days = 5;
      newParams.append("days", 5);
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

  useEffect(() => {
    handleGenerateClick();
  }, []);

  return (
    <Fragment>
      <MetaData title={"Generate Your Tour By AI"} />
      <main id="content" className="site-main">
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
                <div className="booking-content ai-generate pd-no-bottom">
                  <div className="row">
                    <div className="col-sm-6 col-md-2 mg-auto">
                      <h2>Search</h2>
                    </div>
                    <div className="col-sm-6 col-md-3 mg-auto">
                      <div className="form-group">
                        {options && (
                          <Select
                            styles={customStyles}
                            options={options}
                            onChange={handleOptionChange}
                            value={selectedOption}
                            isSearchable
                            maxMenuHeight={200}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mg-auto">
                      <h2>Days</h2>
                    </div>
                    <div className="col-sm-6 col-md-3 mg-auto">
                      <div className="form-group">
                        <input
                          type="number"
                          placeholder="Ex 1, 2, 10"
                          onChange={handleDaysChange}
                          value={numberOfDays}
                        />
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
                            Day {tour.Day} - {tour.name}
                          </h3>
                        </div>
                      </div>
                      {tour.mainImage && (
                        <figure className="single-package-image">
                          <img
                            src={`${API_IMAGE}/${tour.mainImage}`}
                            alt=""
                            className="full-width"
                          />
                        </figure>
                      )}
                      <div className="package-content-detail">
                        {tour.description !== "" && (
                          <article className="package-overview">
                            <h4>OVERVIEW:</h4>
                            <p>{tour.description}</p>
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
