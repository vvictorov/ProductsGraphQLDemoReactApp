import React, {Component} from 'react';
import './App.css';
import ProductsList from './containers/products-list-container';
import ProductsTable from './containers/products-table-container';
import ModalsContainer from './containers/modal-controller-container';
import NotificationsContainer from './containers/notifications-container';
import Header from './components/header/Header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeModalAction, openModalAction} from './actions/modals/modal-actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.openAddProductModal = this.openAddProductModal.bind(this);
  }

  render() {
    return (
      <div className="app">
        <Header title="Съставки"/>
        <div id="page">
          <ProductsList/>
          <ProductsTable/>
        </div>
        <ModalsContainer/>
        <NotificationsContainer/>
      </div>
    );
  }

  openAddProductModal() {

  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openModal: openModalAction,
    closeModal: closeModalAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
