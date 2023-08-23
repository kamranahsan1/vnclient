import React, { Fragment, useEffect, useState } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUaePackages, clearErrors } from "../action/packagesActions";
import UaePackage from "../components/UaePackage";

function UaeTours() {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);

  const { packages, loading, error, packagesCount, resultPerPage } =
    useSelector((state) => state.packages);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getUaePackages(params, currentPage));
  }, [dispatch, alert, params, currentPage]);

  return (
    <Fragment>
      <MetaData title={"Uae Tours"} />
      <main id="content" className="site-main">
        <section className="package-inner-page">
          <Banner
            bg="/assets/images/img7.jpg"
            title="UAE TOURS"
            desc="Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
          />
          <div className="inner-package-detail-wrap">
            {packages &&
              packages.map((tour) => <UaePackage key={tour._id} tour={tour} />)}
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default UaeTours;
