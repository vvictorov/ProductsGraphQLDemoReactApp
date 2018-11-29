import React from 'react';
import {graphql, compose} from "react-apollo";
import ProductsTable from '../components/products-table/ProductsTable';
import productsQuery from '../queries/products.graphql';
import openModal from '../mutations/openModal.graphql'
import {Constants} from '../utils/constants';

let updateModalOpenMutation = null;

const ProductsTableContainer = (props) => {

  const {loading, error, networkStatus, products} = props;
  const {openModal} = props;

  if(loading === true) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error...</div>;
  }

  updateModalOpenMutation = openModal;

  return <ProductsTable
    products={products}
    openUpdateModal={openUpdateProductModal}
  />;
};

const openUpdateProductModal = () => {
  updateModalOpenMutation({
    variables: {
      name: Constants.ModalDialogs.UpdateProduct
    }
  });
};

const WrappedComponent = compose(
  graphql(productsQuery, {
    props: ({data: {loading, error, networkStatus, products}}) => {
      return {loading, error, networkStatus, products};
    }
  }),
  graphql(openModal, {name: 'openModal'})
)
(ProductsTableContainer);

// export default ProductsTableContainer;
export default WrappedComponent;