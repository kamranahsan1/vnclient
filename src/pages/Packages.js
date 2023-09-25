import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPackages, clearErrors } from "../action/packagesActions";
import MetaData from "./layouts/MetaData";
import Banner from "./layouts/Banner";
import UaePackage from "../components/UaePackage";
import DubaiDestination from "../components/DubaiDestination";
import ModalBooking from "../pages/layouts/ModalBooking";
import Pagination from "react-js-pagination";
import SectionLoader from "../components/loader";
import { useNavigate } from "react-router-dom";
import { ERROR_404 } from "../constants/commonConstants";

const Packages = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [ModalName, setModalName] = useState("");
  const { categories } = useSelector((state) => state.categories);
  const { packages, error, resultPerPage, packagesCount, loading } =
    useSelector((state) => state.packages);

  const category =
    categories.find((cat) => cat.slug.includes(params.category)) || false;

  if (!category) {
    navigate(ERROR_404);
  }

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = async (name) => {
    await setModalName(name);
    setShowModal(true); // Open the modal here
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (category._id) {
      dispatch(getPackages({ category: category._id }, currentPage));
    }
  }, [dispatch, currentPage, error, category._id]);

  return (
    <>
      <MetaData title={category.name ? category.name : ""} />
      <main id="content" className="site-main">
        <section className="package-inner-page">
          <Banner
            bg="/assets/images/img7.jpg"
            title={category.name}
            desc="Our tours are structured to meet our customers’ expectations. We want to give you a memorable experience during your visit. This is why we have a dedicated team to guide you through your tour in Europe, Dubai, USA, UK, and Asia."
          />
          {showModal && (
            <ModalBooking
              message={`Query Related for ${ModalName}`}
              show={showModal}
              handleClose={handleCloseModal}
            />
          )}
          {loading && <SectionLoader />}
          {category.viewType === "detail" && packages.length > 0 && (
            <>
              <div className="inner-package-detail-wrap">
                <div className="container">
                  {packages &&
                    packages.map((tour) => (
                      <UaePackage
                        key={tour._id}
                        tour={tour}
                        handleOpenModal={handleOpenModal}
                      />
                    ))}
                </div>
              </div>
              <div className="post-navigation-wrap">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={packagesCount}
                  onChange={setCurrentPageNo}
                  nextPageText=">"
                  prevPageText="<"
                  firstPageText="<<"
                  lastPageText=">>"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            </>
          )}
          {category.viewType === "quick" && packages.length > 0 && (
            <div className="offer-package-wrap">
              <div className="container">
                <div className="row gx-5">
                  {packages &&
                    packages.map((tour) => (
                      <DubaiDestination key={tour._id} tour={tour} />
                    ))}
                </div>
              </div>
              <div className="post-navigation-wrap">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={packagesCount}
                  onChange={setCurrentPageNo}
                  nextPageText=">"
                  prevPageText="<"
                  firstPageText="<<"
                  lastPageText=">>"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            </div>
          )}
          {packages.length === 0 && !loading && (
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
          )}
        </section>
      </main>
    </>
  );
};

export default Packages;
