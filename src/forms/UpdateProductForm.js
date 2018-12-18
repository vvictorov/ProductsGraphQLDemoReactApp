import updateProductMutation from '../mutations/updateProduct.graphql';
import categoriesQuery from '../queries/categories.graphql';
import FormBase from './FormBase';
import React from 'react';
import Query from 'react-apollo/Query';

const UpdateProductForm = (props) => {

  const product = props.product;

  return (
    <Query query={categoriesQuery}>
      {({data, loading}) => {

        if (loading) return null;

        let categories = {};

        for (let category of data.categories) {
          categories[category.id] = category.title;
        }

        return <FormBase config={{
          mutation: {
            name: 'updateProduct',
            document: updateProductMutation,
          }
        }}
                         ui={{
                           product: {
                             id: {
                               "ui:widget": "hidden"
                             },
                             category: {
                               "ui:widget": "select",
                               "ui:options": {
                                 enum: categories
                               }
                             }
                           }
                         }}
                         data={{
                           product: {
                             id: product.id,
                             title: product.title,
                             stock: product.stock,
                             unit: product.unit,
                             category: product.category.id
                           }
                         }}
                         title="Промени продукт"
                         onSubmit={props.onSubmit}
                         onCancel={props.onCancel}
        />
      }}
    </Query>
  );
};

export default UpdateProductForm;