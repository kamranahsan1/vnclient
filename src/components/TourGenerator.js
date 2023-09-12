import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getCountries } from "../action/packagesActions";
import Select from "react-select";
import { AI_TOURS_URL } from "../constants/commonConstants";
import { Link, useLocation } from "react-router-dom";

const TourGenerator = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const visitType = [
    { value: "general", label: "General" },
    { value: "site-seen", label: "Site Seen" },
    { value: "event-visit", label: "Event Visit" },
  ];
  const id = queryParams.has("id") ? queryParams.get("id") : "";
  const country = queryParams.has("country") ? queryParams.get("country") : "";
  const days = queryParams.has("days") ? queryParams.get("days") : "";

  const [numberOfDays, setNumberOfDays] = useState(days);
  const [selectedOption, setSelectedOption] = useState(
    id !== "" && country !== "" ? { value: id, label: country } : ""
  );

  const matchingType = queryParams.has("type")
    ? visitType.find((item) => item.value === queryParams.has("type"))
    : visitType[0];

  const [selectedType, setSelectedType] = useState(matchingType);

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

  const handleTypeChange = (selected) => {
    setSelectedType(selected);
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
                    <h3>Visit Type</h3>
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
                  <Link
                    to={`${AI_TOURS_URL}?id=${
                      selectedOption.value ? selectedOption.value : ""
                    }&country=${
                      selectedOption.label ? selectedOption.label : ""
                    }&type=${
                      selectedType.value ? selectedType.value : ""
                    }&days=${numberOfDays}`}
                    className="round-btn"
                  >
                    Generate
                  </Link>
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
