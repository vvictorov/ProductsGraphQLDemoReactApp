import TableRow from '@material-ui/core/es/TableRow/TableRow';
import TableCell from '@material-ui/core/es/TableCell/TableCell';
import Avatar from '@material-ui/core/es/Avatar/Avatar';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './products-table.module.css';

const productsTableRow = (props) => {
  const {product} = props;

  const rowClicked = () => {
    props.handleClick(product);
  };

  let avatar = "";
  if(product.cover !== null) {
    avatar = <Avatar alt={product.title} src={product.cover.path}/>;
  }

  return (
    <TableRow styleName="row" onClick={rowClicked}>
      <TableCell>
        {avatar}
      </TableCell>
      <TableCell component="th" scope="row" styleName="title">
        {product.title}
      </TableCell>
      <TableCell>{product.category.title}</TableCell>
      <TableCell numeric>{product.stock}</TableCell>
      <TableCell>{product.unit}</TableCell>
    </TableRow>
  );


};

export default CSSModules(productsTableRow, styles);