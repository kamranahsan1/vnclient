import React, { useState, useEffect } from "react";

const SectionLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="section-loader">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="content">
          {/* Your content goes here */}
          <p>This is the loaded content.</p>
        </div>
      )}
    </div>
  );
};

export default SectionLoader;
