import React from "react";
import Helmet from "react-helmet";
import { APP_NAME } from "../../constants/commonConstants";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} - {APP_NAME}
      </title>
    </Helmet>
  );
};

export default MetaData;
