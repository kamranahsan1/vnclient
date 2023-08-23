import React, { Fragment } from "react";
import MetaData from "./layouts/MetaData";
import Banner from "./layouts/Banner";

const GenerateAi = () => {
  return (
    <Fragment>
      <MetaData title={"Generate Your Tour By AI"} />
      <main id="content" className="site-main">
        <section className="package-inner-page">
          <Banner
            bg="/assets/images/img7.jpg"
            title="Generate Your Tour"
            desc=""
          />
          <div className="inner-package-detail-wrap"></div>
        </section>
      </main>
    </Fragment>
  );
};

export default GenerateAi;
