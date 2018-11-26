import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CSSModules from 'react-css-modules';
import styles from './products-list.module.css';
import GridList from '@material-ui/core/GridList';
import ProductsListItem from '../products-list-item/ProductsListItem';

const inlineStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  }
});

class ProductsGridList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    const tiles = this.props.products
      .map(product => <ProductsListItem product={product}
                                        key={product.id}
                                        classes={classes}
                                        openModal={this.props.openModal}
                                        selectProduct={this.props.selectProduct}/>);

    return (
      <div styleName="root">
        <GridList cellHeight={200} styleName="list">
          {tiles}
        </GridList>
      </div>
    );
  }

}

ProductsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(inlineStyles)(CSSModules(ProductsGridList, styles));