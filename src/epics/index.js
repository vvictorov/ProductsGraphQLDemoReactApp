import { combineEpics } from 'redux-observable';
import fetchProductsEpic from './fetch-products-epic';
import updateProductEpic from './update-product-epic';

export const allEpics = combineEpics(
  fetchProductsEpic,
  updateProductEpic
);