import ProductsList from '../components/products-list/ProductsGridList';
import React from 'react';
import {Mutation, Query} from "react-apollo";
import productsQuery from '../queries/products.graphql';
import {Constants} from "../utils/constants";
import openModal from "../mutations/openModal.graphql";
import ProductsTable from "../components/products-table/ProductsTable";

const ProductsListContainer = () => (

  <Query query={productsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Mutation mutation={openModal} variables={{ name: Constants.ModalDialogs.UpdateProduct }}>
          { openModalMutation =>
            <ProductsList products={data.products} openModal={openModalMutation}/>
          }
        </Mutation>
      );
    }}
  </Query>
);

export default ProductsListContainer;