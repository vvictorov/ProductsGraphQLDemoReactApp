import React, {Component} from 'react';
import './App.css';
import ProductsTable from './containers/products-table-container';
import ProductsList from './containers/products-list-container';
import Header from './components/header/Header';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header title="Съставки"/>
        <div id="page">
          <ProductsList/>
          <ProductsTable/>
        </div>
        {/*<ModalsContainer/>*/}
        {/*<NotificationsContainer/>*/}
      </div>
    );
  }
}

export default App;
