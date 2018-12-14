import React from 'react';
import {graphql, compose} from "react-apollo";
import ProductsTable from '../components/products-table/ProductsTable';
import productsQuery from '../queries/products.graphql';
import openModal from '../mutations/openModal.graphql';
import selectProduct from '../mutations/selectProduct.graphql';
import {Constants} from '../utils/constants';
import ProductsGridList from "../components/products-list/ProductsGridList";

let updateModalOpenMutation = null;
let selectProductMutation = null;

const ProductsContainer = (props) => {

  const {loading, error, products} = props;
  const {openModal, selectProduct} = props;

  updateModalOpenMutation = openModal;
  selectProductMutation = selectProduct;

  if(loading === true) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <ProductsTable
        products={products}
        openUpdateModal={openUpdateProductModal}
      />
      <ProductsGridList
        products={products}
        openUpdateModal={openUpdateProductModal}
      />
    </div>
  );
};

const openUpdateProductModal = (productId) => {

  if(typeof productId !== typeof undefined && productId !== null) {

    selectProductMutation({
      variables: {
        id: productId
      }
    });

    updateModalOpenMutation({
      variables: {
        name: Constants.ModalDialogs.UpdateProduct
      }
    });
  }
};

const WrappedComponent = compose(
  graphql(productsQuery, {
    props: ({data: {loading, error, networkStatus, products}}) => {
      return {loading, error, networkStatus, products};
    }
  }),
  graphql(openModal, {
    name: 'openModal'
  }),
  graphql(selectProduct, {
    name: 'selectProduct'
  })
)(ProductsContainer);

export default WrappedComponent;