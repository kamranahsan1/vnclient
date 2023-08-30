import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getCountries } from "../action/packagesActions";
import Select from "react-select";
import { AI_TOURS_URL } from "../constants/commonConstants";
import { Link, useLocation } from "react-router-dom";

const TourGenerator = ({ isMainPage }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.has("id") ? queryParams.get("id") : "";
  const country = queryParams.has("country") ? queryParams.get("country") : "";
  const days = queryParams.has("days") ? queryParams.get("days") : "";

  const avaOption =
    id !== "" && country !== "" ? { value: id, label: country } : "";

  const [selectedOption, setSelectedOption] = useState(avaOption);
  const [numberOfDays, setNumberOfDays] = useState(days);

  const dispatch = useDispatch();
  const { countries, error } = useSelector((state) => state.countries);
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
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getCountries());
  }, [dispatch, error]);

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleDaysChange = (event) => {
    setNumberOfDays(parseInt(event.target.value));
  };

  return (
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
                  {isMainPage ? (
                    <button className="round-btn">Generate</button>
                  ) : (
                    <Link
                      to={`${AI_TOURS_URL}?id=${
                        selectedOption.value ? selectedOption.value : ""
                      }&country=${
                        selectedOption.label ? selectedOption.label : ""
                      }&days=${numberOfDays}`}
                      className="round-btn"
                    >
                      Generate
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGenerator;
