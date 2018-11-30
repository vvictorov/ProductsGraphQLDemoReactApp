import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Constants} from '../../utils/constants';
import { Slide } from 'react-toastify';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.showToasts = this.showToasts.bind(this);
  }

  render() {
    this.showToasts();
    return <ToastContainer/>;
  }

  showToasts() {
    this.props.notifications.map(notification => {

      switch (notification.type) {
        case Constants.Notifications.Success:
          toast.success(notification.message, {...defaults, ...notification.options});
          break;
        case Constants.Notifications.Error:
          toast.error(notification.message, {...defaults, ...notification.options});
          break;
        case Constants.Notifications.Warn:
          toast.warn(notification.message, {...defaults, ...notification.options});
          break;
        case Constants.Notifications.Info:
          toast.info(notification.message, {...defaults, ...notification.options});
          break;
        default:
          toast(notification.message, {...defaults, ...notification.options});
          break;
      }
    });
  }
}

const defaults = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  transition: Slide
};

export default Notifications;