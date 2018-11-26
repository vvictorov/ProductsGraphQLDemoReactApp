import {Constants} from '../utils/constants';

export default function (state = [], action) {

  switch (action.type) {
    case Constants.Actions.SHOW_NOTIFICATION:
      return [action.payload];
    default:
      return state;
  }
}