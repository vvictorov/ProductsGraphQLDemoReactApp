import {Constants} from '../utils/constants';

export default function (state = [], action) {

  switch (action.type) {

    case Constants.Actions.PRODUCT_ADDED:
      return [...state, action.payload];

    case Constants.Actions.PRODUCT_UPDATE_SUCCESS:
      const index = state.findIndex(x => x.id === action.payload.id);
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ];
      }
      return state;

    case Constants.Actions.FETCH_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;

  }
}