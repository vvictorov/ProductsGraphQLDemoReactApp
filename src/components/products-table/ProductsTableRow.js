import Avatar from '@material-ui/core/es/Avatar/Avatar';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './products-table.module.css';

const productsTableRow = (props) => {
  const {product} = props;

  let avatar = "";
  if(product.cover !== null) {
    avatar = <Avatar alt={product.title} src={product.cover.path}/>;
  }

  return null;
};

export default CSSModules(productsTableRow, styles);