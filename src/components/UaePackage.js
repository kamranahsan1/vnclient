import { removePrefixFromURL } from "../constants/commonConstants";

const UaePackage = (props) => {
  const { tour, handleOpenModal } = props;

  return (
    <div className="row pd-bottom">
      <div className="col-lg-8 primary right-sidebar">
        <div className="single-packge-wrap">
          <div className="single-package-head d-flex align-items-center">
            <div className="package-title">
              <h2 style={{ fontSize: "30px" }}>{tour.name}</h2>
            </div>
          </div>
          <div className="package-meta"></div>
          <figure className="single-package-image">
            <img
              src={removePrefixFromURL(tour.mainImage)}
              alt=""
              className="full-width"
            />
          </figure>
          <div className="package-content-detail">
            {tour.description !== "" && (
              <article className="package-overview">
                <h3>OVERVIEW :</h3>
                <p>{tour.description}</p>
              </article>
            )}
            {tour.inclusionsList && tour.inclusionsList.length > 0 && (
              <article className="package-include bg-light-grey">
                <h3>INCLUDE :</h3>
                <ul>
                  {tour.inclusionsList.map(
                    (inclusion, index) =>
                      inclusion !== null && (
                        <li className="full-width" key={index}>
                          <i className="fas fa-check"></i>
                          {inclusion}
                        </li>
                      )
                  )}
                </ul>
              </article>
            )}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="sidebar">
          <div className="booking-form-wrap">
            <div className="booking-form-inner primary-bg text-center">
              {tour.price && tour.price.length > 0 && (
                <>
                  <h3 className="pd-no-bottom mb-0">Pricing</h3>
                  <div className="price-box">
                    {tour.price.map((price, index) => (
                      <div className="price-item" key={index}>
                        {price.description !== "" && (
                          <span className="price-label">
                            {price.description}:
                          </span>
                        )}
                        <span className="price">
                          {price.currency.toUpperCase()}{" "}
                          {price.amount.$numberDecimal}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <button
                style={{ margin: "auto" }}
                onClick={() => handleOpenModal(tour.name)}
                type="button"
                className="outline-btn outline-btn-white theme-color"
              >
                Book Now
              </button>
            </div>
          </div>
          {tour.attractions && tour.attractions.length > 0 && (
            <div className="booking-form-wrap">
              <div className="booking-form-inner primary-bg">
                <h3>ATTRACTIONS</h3>
                <ul className="styled-list">
                  {tour.attractions.map((attraction, index) => (
                    <li className="full-width" key={index}>
                      {attraction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UaePackage;
