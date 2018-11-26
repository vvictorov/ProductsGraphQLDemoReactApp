import {Constants} from "../../utils/constants";

export const resetFormAction = (formName) => {
    return {
      type: Constants.Actions.RESET_FORM,
      payload: formName
    };
};

export const showNotification = (notification) => {
  return {
    type: Constants.Actions.SHOW_NOTIFICATION,
    payload: notification
  };
};
