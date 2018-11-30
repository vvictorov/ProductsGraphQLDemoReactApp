import React from "react";
import CSSModules from 'react-css-modules';
import GridListTileBar from '@material-ui/core/GridListTileBar/GridListTileBar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SettingsIcon from '@material-ui/icons/MoreVert';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import styles from './products-list-item.module.css';

const productsListItem = (props) => {
  const product = props.product;
  const classes = props.classes;
  const imageStyles = {
    backgroundImage: (product.cover !== null) ? `url(${product.cover.path})` : ''
  };

  return (
    <GridListTile styleName="item">
      <div styleName="image" style={imageStyles}/>
      <GridListTileBar
        title={`${product.title} (${product.stock} ${product.unit})`}
        subtitle={<span>{product.category.title}</span>}
        actionIcon={
          <IconButton className={classes.icon} onClick={onUpdateIconClicked}>
            <SettingsIcon color="inherit" styleName="icon"/>
          </IconButton>
        }
      />
    </GridListTile>
  );

  function onUpdateIconClicked() {
    //props.selectProduct(product);
    props.openModal();
  }
};

export default CSSModules(productsListItem, styles);