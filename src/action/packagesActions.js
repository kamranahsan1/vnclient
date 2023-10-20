import axios from "axios";
import {
  API_LINK,
  ALL_COUNTRY_FAIL,
  ALL_COUNTRY_REQUEST,
  ALL_COUNTRY_SUCCESS,
  ALL_VISA_CATEGORY_FAIL,
  ALL_VISA_CATEGORY_REQUEST,
  ALL_VISA_CATEGORY_SUCCESS,
  ALL_PACKAGE_REQUEST,
  ALL_PACKAGE_SUCCESS,
  ALL_PACKAGE_FAIL,
  ALL_PACKAGE_HOT_REQUEST,
  ALL_PACKAGE_HOT_SUCCESS,
  ALL_PACKAGE_HOT_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  ALL_TOUR_REQUEST,
  ALL_TOUR_SUCCESS,
  ALL_TOUR_FAIL,
  SAVE_CONTACT_REQUEST,
  SAVE_CONTACT_SUCCESS,
  SAVE_CONTACT_FAILURE,
  SAVE_SUBSCRIBER_REQUEST,
  SAVE_SUBSCRIBER_SUCCESS,
  SAVE_SUBSCRIBER_FAILURE,
  CLEAR_ERRORS,
} from "../constants/commonConstants";

export const getPackages =
  (params = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PACKAGE_REQUEST });
      let link = `${API_LINK}/packages?page=${currentPage}`;
      if (params && params.keyword) {
        link += `&keyword=${params.keyword}`;
      }
      if (params && params.resultPerPage) {
        link += `&resultPerPage=${params.resultPerPage}`;
      }
      if (params && params.category) {
        link += `&category=${params.category}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PACKAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PACKAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getFeaturePackages = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PACKAGE_REQUEST });
    let link = `${API_LINK}/packages?featured=1&resultPerPage=3`;
    const { data } = await axios.get(link);
    dispatch({
      type: ALL_PACKAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PACKAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getHotDeals = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PACKAGE_HOT_REQUEST });
    let link = `${API_LINK}/packages?featured=2&resultPerPage=3`;
    const { data } = await axios.get(link);
    dispatch({
      type: ALL_PACKAGE_HOT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PACKAGE_HOT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getTour =
  (params = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_TOUR_REQUEST });
      const queryParams = new URLSearchParams(params).toString();
      let link = `${API_LINK}/generate-tour${
        queryParams ? `?${queryParams}` : ""
      }`;
      console.log("params1", link);

      const { data } = await axios.get(link);
      dispatch({
        type: ALL_TOUR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_TOUR_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORY_REQUEST });
    const { data } = await axios.get(`${API_LINK}/categories`);
    dispatch({
      type: ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getCountries = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_COUNTRY_REQUEST });
    const { data } = await axios.get(`${API_LINK}/countries`);
    dispatch({
      type: ALL_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_COUNTRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getViewCategory = (resultPerPage) => async (dispatch) => {
  try {
    resultPerPage = resultPerPage || 100;
    dispatch({ type: ALL_VISA_CATEGORY_REQUEST });
    const { data } = await axios.get(
      `${API_LINK}/viewcategories?resultPerPage=${resultPerPage}`
    );
    dispatch({
      type: ALL_VISA_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_VISA_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const saveContact = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_CONTACT_REQUEST });
    const response = await axios.post(`${API_LINK}/Contact`, formData);
    dispatch({
      type: SAVE_CONTACT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SAVE_CONTACT_FAILURE,
      payload: error.message,
    });
  }
};

export const saveSubscriber = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_SUBSCRIBER_REQUEST });
    const response = await axios.post(`${API_LINK}/postsubscriber`, formData);
    dispatch({
      type: SAVE_SUBSCRIBER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SAVE_SUBSCRIBER_FAILURE,
      payload: error.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
