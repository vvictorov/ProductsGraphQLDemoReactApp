import {Constants} from '../utils/constants';

export default function (state = [], action) {

  switch (action.type) {

    case Constants.Actions.MODAL_OPENED:
      return [...state, action.payload];

    case Constants.Actions.MODAL_CLOSED:
      const index = state.findIndex(modal => modal.name === action.payload);

      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default:
      return state;

  }
}