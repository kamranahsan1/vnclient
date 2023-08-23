import axios from "axios";
import {
  ALL_COUNTRY_FAIL,
  ALL_COUNTRY_REQUEST,
  ALL_COUNTRY_SUCCESS,
  ALL_VISA_CATEGORY_FAIL,
  ALL_VISA_CATEGORY_REQUEST,
  ALL_VISA_CATEGORY_SUCCESS,
  API_LINK,
} from "../constants/commonConstants";
import {
  ALL_PACKAGE_REQUEST,
  ALL_PACKAGE_SUCCESS,
  ALL_PACKAGE_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
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
export const getViewCategory = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_VISA_CATEGORY_REQUEST });
    const { data } = await axios.get(`${API_LINK}/viewcategories`);
    dispatch({
      type: ALL_VISA_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_VISA_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
