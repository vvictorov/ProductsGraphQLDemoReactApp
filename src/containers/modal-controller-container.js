import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ModalsController from '../components/modals/ModalsController';
import {closeModalAction, openModalAction} from '../actions/modals/modal-actions';

function mapStateToProps(state) {
  return {
    modals: state.modals,
    activeProduct: state.activeProduct
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openModal: openModalAction,
    closeModal: closeModalAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalsController);