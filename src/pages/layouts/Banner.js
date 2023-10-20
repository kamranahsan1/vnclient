import React, { useEffect } from "react";
import $ from "jquery";

const Banner = ({ bg, title, desc, padding }) => {
  /*useEffect(() => {
    const headerHeight = $("#masthead").outerHeight();
    $(".home-banner").css("padding-top", headerHeight);
    $(".inner-baner-container").css("padding-top", headerHeight);
  });*/
  return (
    <div className={`inner-banner-wrap ${padding ? padding : ""}`}>
      <div
        className="inner-baner-container"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="container">
          <div className="inner-banner-content">
            <h1 className="page-title">{title}</h1>
            <br />
            <div dangerouslySetInnerHTML={{ __html: desc }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
