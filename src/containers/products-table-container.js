import React from 'react';
import {Mutation, Query} from "react-apollo";
import ProductsTable from '../components/products-table/ProductsTable';
import productsQuery from '../queries/products.graphql';
import {Constants} from "../utils/constants";
import openModal from '../mutations/openModal.graphql'

const ProductsTableContainer = () => (

  <Query query={productsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Mutation mutation={openModal} variables={{ name: Constants.ModalDialogs.UpdateProduct }}>
          { openModalMutation =>
            <ProductsTable products={data.products} openModal={openModalMutation}/>
          }
        </Mutation>
      );
    }}
  </Query>
);

export default ProductsTableContainer;