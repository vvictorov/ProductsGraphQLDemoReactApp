import React from 'react';
import {Mutation, Query, graphql, compose} from "react-apollo";
import ProductsTable from '../components/products-table/ProductsTable';
import productsQuery from '../queries/products.graphql';
import {Constants} from "../utils/constants";
import openModal from '../mutations/openModal.graphql'
import gql from "graphql-tag";

const ProductsTableContainer = (props) => {

  const {loading, error, networkStatus, products} = props;
  const {openModal} = props;

  if(loading === true) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error...</div>;
  }

  return <ProductsTable
    products={products}
    openModal={openModal}
  />;
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