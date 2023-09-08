import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPackages, clearErrors } from "../action/packagesActions";
import MetaData from "./layouts/MetaData";
import Banner from "./layouts/Banner";
import UaePackage from "../components/UaePackage";
import DubaiDestination from "../components/DubaiDestination";

const Packages = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { categories } = useSelector((state) => state.categories);
  const { packages, error } = useSelector((state) => state.packages);
  const category =
    categories.find((cat) => cat.slug.includes(params.category)) || {};

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (category._id) {
      dispatch(getPackages({ category: category._id }, currentPage));
    }
  }, [dispatch, alert, currentPage, error, category._id]);

  if (category.viewType === "detail" && packages.length > 0) {
    return (
      <Fragment>
        <MetaData title={category.name ? category.name : ""} />
        <main id="content" className="site-main">
          <section className="package-inner-page">
            <Banner
              bg="/assets/images/img7.jpg"
              title={category.name}
              desc="Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
            />
            <div className="inner-package-detail-wrap">
              {packages &&
                packages.map((tour) => (
                  <UaePackage key={tour._id} tour={tour} />
                ))}
            </div>
          </section>
        </main>
      </Fragment>
    );
  }
  if (category.viewType === "quick" && packages.length > 0) {
    return (
      <Fragment>
        <MetaData title={category.name ? category.name : ""} />
        <main id="content" className="site-main">
          <section className="inner-page-wrap">
            <Banner
              bg="http://demo.stairthemes.com/html/traveler/assets/images/img7.jpg"
              title={category.name}
              desc="Our tours are structured to meet our customers’ expectations. 
          We want to give you a memorable experience during your visit. 
          This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
            />
            <div className="offer-package-wrap">
              <div className="container">
                <div className="row gx-5">
                  {packages &&
                    packages.map((tour) => (
                      <DubaiDestination key={tour._id} tour={tour} />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    );
  }
  return (
    <main id="content" className="site-main">
      <section className="package-inner-page bg-light-grey">
        <Banner
          bg="/assets/images/img7.jpg"
          title={category.name}
          desc="Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
        />
        <div className="no-content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="no-content-wrap">
                  <h1>SORRY ! No Package Found</h1>
                  <p>New packages comming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Packages;
