import React, { Fragment, useEffect, useState } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getViewCategory, clearErrors } from "../action/packagesActions";

const SchengenVisa = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { viewcategory, error } = useSelector((state) => state.viewcategory);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getViewCategory());
  }, [dispatch, params, currentPage, error]);

  return (
    <Fragment>
      <MetaData title={`Schengen Visa`} />
      <main id="content" className="site-main">
        <section className="inner-page-wrap">
          <Banner
            bg="/assets/images/img7.jpg"
            title="SCHENGEN VISA"
            desc="Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
          />
          <div className="offer-package-wrap visa">
            <div className="container">
              {viewcategory &&
                viewcategory.map((cate, index) =>
                  index % 2 === 0 ? (
                    <div className="row padding-down" key={index}>
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
                                      <h2>#{cate.name}</h2>
                                      <p>#{cate.description}</p>
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
                          <img src={cate.mainImage} alt="" />
                        </figure>
                      </div>
                    </div>
                  ) : (
                    <div className="row padding-down" key={index}>
                      <div className="col-md-7">
                        <figure className="career-detail-image">
                          <img src={cate.mainImage} alt="" />
                        </figure>
                      </div>
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
                                      <h2>#{cate.name}</h2>
                                      <p>#{cate.description}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default SchengenVisa;
