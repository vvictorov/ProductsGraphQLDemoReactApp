import {Constants} from '../../utils/constants';

export const addProductAction = (product) => {
  return {
    type: Constants.Actions.PRODUCT_ADDED,
    payload: product
  }
};

export const updateProductRequestAction = (response) => {
  return {
    type: Constants.Actions.PRODUCT_UPDATE_REQUEST,
    payload: response
  }
};

export const updateProductSuccessAction = (product) => {
  return {
    type: Constants.Actions.PRODUCT_UPDATE_SUCCESS,
    payload: product
  }
};

export const updateProductFailedAction = (error) => {
  return {
    type: Constants.Actions.PRODUCT_UPDATE_FAILED,
    payload: error,
    error: true
  }
};

export const selectProductAction = (product) => {
  return {
    type: Constants.Actions.PRODUCT_SELECTED,
    payload: product
  }
};

export const filterProductsAction = (filter) => {
  return {
    type: Constants.Actions.PRODUCTS_FILTERED,
    payload: filter
  };
};

export const fetchProducts = (response) => {
  return {
    type: Constants.Actions.FETCH_PRODUCTS,
    payload: response
  }
};

export const fetchProductsSuccess = (products) => {
  return  {
    type: Constants.Actions.FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
};

export const fetchProductsError = (error) => {
  return {
    type: Constants.Actions.FETCH_PRODUCTS_ERROR,
    payload: error
  }
};