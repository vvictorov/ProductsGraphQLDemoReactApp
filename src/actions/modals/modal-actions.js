import {Constants} from '../../utils/constants';

export const openModalAction = (name, data = {}) => {

  return {
    type: Constants.Actions.MODAL_OPENED,
    payload: {
      name,
        ...data
    }
  }
};

export const closeModalAction = (name) => {
  return {
    type: Constants.Actions.MODAL_CLOSED,
    payload: name
  }
};