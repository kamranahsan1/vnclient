// export const API_LINK = `https://vnbackend-b4d0409e1de8.herokuapp.com/api`;
//export const API_IMAGE = `https://vnbackend-b4d0409e1de8.herokuapp.com/uploads`;

// export const API_LINK = `http://127.0.0.1:5000/api`;
// export const API_IMAGE = `http://127.0.0.1:5000/uploads`;
export const API_LINK = `https://server.newvision.travel:5000/api`;
export const API_IMAGE = `https://server.newvision.travel:5000/uploads`;
export const BASE_IMAGE_URL = `https://newvision.travel/server/backend`;

export const APP_NAME = `NewVision Travel & Tours`;

export const ALL_PACKAGE_REQUEST = "ALL_PACKAGE_REQUEST";
export const ALL_PACKAGE_SUCCESS = "ALL_PACKAGE_SUCCESS";
export const ALL_PACKAGE_FAIL = "ALL_PACKAGE_FAIL";

export const ALL_PACKAGE_HOT_REQUEST = "ALL_PACKAGE_HOT_REQUEST";
export const ALL_PACKAGE_HOT_SUCCESS = "ALL_PACKAGE_HOT_SUCCESS";
export const ALL_PACKAGE_HOT_FAIL = "ALL_PACKAGE_HOT_FAIL";

export const ALL_CATEGORY_REQUEST = "ALL_CATEGORY_REQUEST";
export const ALL_CATEGORY_SUCCESS = "ALL_CATEGORY_SUCCESS";
export const ALL_CATEGORY_FAIL = "ALL_CATEGORY_FAIL";

export const ALL_COUNTRY_REQUEST = "ALL_COUNTRY_REQUEST";
export const ALL_COUNTRY_SUCCESS = "ALL_COUNTRY_SUCCESS";
export const ALL_COUNTRY_FAIL = "ALL_COUNTRY_FAIL";

export const ALL_TOUR_REQUEST = "ALL_TOUR_REQUEST";
export const ALL_TOUR_SUCCESS = "ALL_TOUR_SUCCESS";
export const ALL_TOUR_FAIL = "ALL_TOUR_FAIL";

export const ALL_VISA_CATEGORY_REQUEST = "ALL_VISA_CATEGORY_REQUEST";
export const ALL_VISA_CATEGORY_SUCCESS = "ALL_VISA_CATEGORY_SUCCESS";
export const ALL_VISA_CATEGORY_FAIL = "ALL_VISA_CATEGORY_FAIL";

// Action Types
export const SAVE_CONTACT_REQUEST = "SAVE_CONTACT_REQUEST";
export const SAVE_CONTACT_SUCCESS = "SAVE_CONTACT_SUCCESS";
export const SAVE_CONTACT_FAILURE = "SAVE_CONTACT_FAILURE";

// Action Types
export const SAVE_SUBSCRIBER_REQUEST = "SAVE_SUBSCRIBER_REQUEST";
export const SAVE_SUBSCRIBER_SUCCESS = "SAVE_SUBSCRIBER_SUCCESS";
export const SAVE_SUBSCRIBER_FAILURE = "SAVE_SUBSCRIBER_FAILURE";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

// Routes
export const HOME_URL = "/";
export const ABOUT_US_URL = "/about";
export const PACKAGES_TOURS_URL = "/package/:category";
export const VISAS_URL = "/visa/:category";
export const TOURS_URL = "/tour/:slug";
export const UAE_TOURS_URL = "/uae-tours";
export const AI_TOURS_URL = "/generate-tour-by-ai";
export const DUBAI_TOURS_URL = "/dubai-tours";
export const UAE_VISA_URL = "/uae-visa";
export const SCHENGEN_VISA_URL = "/schengen-visa";
export const BOOKING_HOTELS_URL = "/booking-hotels";
export const AIR_TIKETS_URL = "/air-tickets";
export const TRAVEL_INSURANCE_URL = "/travel-insurance";
export const PICKUP_SERVICES_URL = "/pickup-services";
export const CONTACT_URL = "/contact";
export const ERROR_404 = "/404_not_found";

export const FB_LINK = "https://www.facebook.com/newvisiontravels/";
export const INSTA_LINK = "https://www.instagram.com/newvision.travel/";

export const removePrefixFromURL = (url) => {
  if (url) {
    if (url.includes("://")) {
      return url;
    }
    const prefixes = [
      "http://127.0.0.1:5000/uploads",
      "https://127.0.0.1:5000/uploads",
      "https://newvision.travel/wp-content/uploads",
      "http://newvision.travel/wp-content/uploads",
      "https://vnbackend-b4d0409e1de8.herokuapp.com/uploads",
      "http://vnbackend-b4d0409e1de8.herokuapp.com/uploads",
      "https://server.newvision.travel:5000/uploads",
      "http://server.newvision.travel:5000/uploads",
    ];

    for (const prefix of prefixes) {
      if (url.startsWith(prefix)) {
        return BASE_IMAGE_URL + url.slice(prefix.length);
      }
    }

    const modified = BASE_IMAGE_URL + url;
    return modified;
  } else {
    console.error("URL is undefined or null.");
    return null;
  }
};
