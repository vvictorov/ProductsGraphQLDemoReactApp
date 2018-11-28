import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ProductsTable from '../components/products-table/ProductsTable';
import productsQuery from '../queries/products.graphql';

const ProductsApolloContainer = () => (
  <Query
    query={productsQuery}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <ProductsTable products={data.products}/>;
    }}
  </Query>
);

export default ProductsApolloContainer;