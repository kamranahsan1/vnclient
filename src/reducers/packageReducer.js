const {
  ALL_PACKAGE_REQUEST,
  ALL_PACKAGE_SUCCESS,
  ALL_PACKAGE_FAIL,

  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,

  ALL_COUNTRY_REQUEST,
  ALL_COUNTRY_FAIL,
  ALL_COUNTRY_SUCCESS,

  ALL_VISA_CATEGORY_REQUEST,
  ALL_VISA_CATEGORY_SUCCESS,
  ALL_VISA_CATEGORY_FAIL,

  ALL_TOUR_REQUEST,
  ALL_TOUR_SUCCESS,
  ALL_TOUR_FAIL,

  CLEAR_ERRORS,
} = require("../constants/commonConstants");

export const packageReducers = (state = { packages: [] }, action) => {
  switch (action.type) {
    case ALL_PACKAGE_REQUEST:
      return {
        loading: true,
        packages: [],
        packagesCount: 0,
      };
    case ALL_PACKAGE_SUCCESS:
      return {
        loading: false,
        packages: action.payload.packages,
        packagesCount: action.payload.packagesCount,
        resultPerPage: action.payload.resultPerPage,
      };
    case ALL_PACKAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const categoriesReducers = (state = { categories: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case ALL_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const countriesReducers = (state = { countries: [] }, action) => {
  switch (action.type) {
    case ALL_COUNTRY_REQUEST:
      return {
        loading: true,
        countries: [],
      };
    case ALL_COUNTRY_SUCCESS:
      return {
        loading: false,
        countries: action.payload,
      };
    case ALL_COUNTRY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const viewcategoryReducers = (state = { viewcategory: [] }, action) => {
  switch (action.type) {
    case ALL_VISA_CATEGORY_REQUEST:
      return {
        loading: true,
        viewcategory: [],
      };
    case ALL_VISA_CATEGORY_SUCCESS:
      return {
        loading: false,
        viewcategory: action.payload,
      };
    case ALL_VISA_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const generatedTourReducers = (
  state = { generatedTour: [] },
  action
) => {
  switch (action.type) {
    case ALL_TOUR_REQUEST:
      return {
        loading: true,
        generatedTour: [],
      };
    case ALL_TOUR_SUCCESS:
      return {
        loading: false,
        status: action.payload.status,
        tours: action.payload.tours,
        toursCount: action.payload.toursCount,
      };
    case ALL_TOUR_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
