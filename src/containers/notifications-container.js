import Notifications from '../components/notifications/Notifications';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

export default connect(mapStateToProps)(Notifications);