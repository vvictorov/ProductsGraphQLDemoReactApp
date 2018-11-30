import React, {Component} from 'react';
import './App.css';
import ProductsContainer from './containers/products-container';
import Header from './components/header/Header';
import ModalsContainer from './containers/modal-controller-container';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Header title="Съставки"/>
        <div id="page">
          <ProductsContainer/>
        </div>
        <ModalsContainer/>
        {/*<NotificationsContainer/>*/}
      </div>
    );
  }
}

export default App;
