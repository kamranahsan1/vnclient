import React, { Fragment, useEffect, useState } from "react";
import Banner from "./layouts/Banner";
import { useParams } from "react-router-dom";
import MetaData from "./layouts/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { getDubaiPackages, clearErrors } from "../action/packagesActions";
import DubaiDestination from "../components/DubaiDestination";

const DubaiTours = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { packages, loading, error, packagesCount, resultPerPage } =
    useSelector((state) => state.packages);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getDubaiPackages(params, currentPage));
  }, [dispatch, alert, params, currentPage]);

  return (
    <Fragment>
      <MetaData title={`Dubai Packages`} />
      <main id="content" className="site-main">
        <section className="inner-page-wrap">
          <Banner
            bg="/assets/images/img7.jpg"
            title="DUBAI PACKAGES"
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
};

export default DubaiTours;
