import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPackages, clearErrors } from "../action/packagesActions";
import MetaData from "./layouts/MetaData";
import Banner from "./layouts/Banner";
import ModalBooking from "./layouts/ModalBooking";
import SectionLoader from "../components/loader";
import { useNavigate } from "react-router-dom";
import {
  API_LINK,
  ERROR_404,
  removePrefixFromURL,
} from "../constants/commonConstants";
import axios from "axios";

const Visas = () => {
  const params = useParams();
  const [ModalName, setModalName] = useState("");
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { viewcategory } = useSelector((state) => state.viewcategory);

  const category =
    viewcategory.find((cat) => cat.slug.includes(params.category)) || false;

  useEffect(() => {
    const loadVisas = async (slug) => {
      try {
        const response = await axios.get(
          `${API_LINK}/getAllVisas?slug=${slug}`
        );
        setVisas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching visas:", error);
        setLoading(false); // Handle error by setting loading to false
      }
    };

    if (category) {
      loadVisas(category.slug);
    }
  }, [category]);

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = async (name) => {
    await setModalName(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <MetaData title={category.name ? category.name : ""} />
      <main id="content" className="site-main">
        <section className="package-inner-page">
          <Banner
            bg={
              removePrefixFromURL(category.mainImage) ||
              "/assets/images/img7.jpg"
            }
            title={category.name}
            desc={category.description}
          />
          {showModal && (
            <ModalBooking
              message={`Query Related for ${ModalName}`}
              show={showModal}
              handleClose={handleCloseModal}
            />
          )}
          {loading ? (
            <SectionLoader />
          ) : visas.visaCount > 0 ? (
            <div className="offer-package-wrap visa">
              <div className="container">
                <div className="row ">
                  {visas.visas.map((visa) =>
                    visa.type === "detail" ? (
                      <div className="row reverse padding-down">
                        <div className="col-md-5">
                          <div className="tab-section">
                            <div className="tab-container">
                              <div className="responsive-tabs">
                                <div
                                  id="nav-tab-content"
                                  className="tab-content"
                                  role="tablist"
                                >
                                  <div
                                    id="pane-A"
                                    className="card tab-pane fade show active"
                                    role="tabpanel"
                                    aria-labelledby="tab-A"
                                  >
                                    <div
                                      id="collapse-A"
                                      className="collapse show"
                                      data-bs-parent="#nav-tab-content"
                                      role="tabpanel"
                                      aria-labelledby="heading-A"
                                    >
                                      <div className="card-body">
                                        <h2>#{visa.name}</h2>
                                        <p>{visa.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <figure className="career-detail-image">
                            <img
                              src={removePrefixFromURL(visa.mainImage)}
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                    ) : (
                      <div className="col-md-6">
                        <article
                          className="offer-item"
                          style={{
                            backgroundColor: `#3066af`,
                          }}
                        >
                          <div className="offer-content">
                            <h2>
                              {visa.NumberOfStay
                                ? `${visa.NumberOfStay} ${visa.NumberOfStayName}`
                                : visa.name}
                            </h2>
                            <p>{visa.description}</p>
                            <Link
                              onClick={() =>
                                handleOpenModal(
                                  `Query Related for Dubai 14 Days Visa`
                                )
                              }
                              className="round-btn"
                            >
                              Book Now
                            </Link>
                          </div>
                        </article>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="no-content-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="no-content-wrap">
                      <h1>SORRY ! No Visa Found</h1>
                      <p>New comming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Visas;
