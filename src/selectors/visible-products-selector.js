import { createSelector } from 'reselect'
import {Constants} from "../utils/constants";

const getVisibilityFilter = state => state.productsVisibilityFilter;
const getProducts = state => state.products;

const getVisibleProducts = createSelector(
  [getVisibilityFilter, getProducts],
  (visibilityFilter, products) => {
    switch (visibilityFilter) {
      case Constants.Filters.SHOW_ALL:
        return products;
      case Constants.Filters.SHOW_FRUITS:
        return products.filter(product => product.category === "Плодове");
      case Constants.Filters.SHOW_VEGETABLES:
        return products.filter(product => product.category === "Зеленчуци");
      default:
        return products;
    }
  }
);

export default getVisibleProducts;
