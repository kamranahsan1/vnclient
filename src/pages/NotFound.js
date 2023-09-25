import React from "react";
import Banner from "./layouts/Banner";

function NotFound() {
  return (
    <main id="content" className="site-main">
      <section className="package-inner-page bg-light-grey">
        <Banner bg="/assets/images/img7.jpg" title="PAGE NOT FOUND!" desc="" />
        <div className="no-content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="no-content-wrap">
                  <span className="extra-big">404</span>
                  <h1>SORRY ! THAT PAGE CAN'T BE FOUND</h1>
                  <p>It looks like nothing was found at this location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
