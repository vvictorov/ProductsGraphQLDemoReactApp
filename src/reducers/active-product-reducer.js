import {Constants} from "../utils/constants";

export default function (state = {}, action) {
  switch (action.type) {

    case Constants.Actions.PRODUCT_SELECTED:
      return action.payload;
    default:
      return state;
  }
}