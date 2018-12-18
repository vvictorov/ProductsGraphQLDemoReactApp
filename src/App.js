import React, {Component} from 'react';
import './App.css';
import ProductsContainer from './containers/products-container';
import Header from './components/header/Header';
import ModalsContainer from './containers/modal-controller-container';
import Menu from './components/menu/Menu';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    return (
      <div id="app">
        <Header handleDrawerOpen={this.handleDrawerOpen}
                handleDrawerClose={this.handleDrawerClose}
                drawerOpen={this.state.drawerOpen}
        />
        <Menu open={this.state.drawerOpen}
              handleDrawerClose={this.handleDrawerClose}
        />
        <main id="content">
          <ProductsContainer/>
        </main>
        <ModalsContainer/>
        {/*<NotificationsContainer/>*/}
      </div>
    );
  }
}

export default App;
