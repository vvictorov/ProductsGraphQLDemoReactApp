import {Constants} from '../utils/constants';

export default function (state = Constants.Filters.SHOW_ALL, action) {
  if (action.type === Constants.Actions.PRODUCTS_FILTERED) {
    return action.payload;
  }
  return state;
}