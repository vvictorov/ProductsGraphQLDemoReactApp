import productsQuery from "../queries/products.graphql";
import selectedProductQuery from "../queries/selectedProduct.graphql";

export const selectProductResolver = (_, {id}, {cache}) => {

  const {products} = cache.readQuery({query: productsQuery});

  const index = products.findIndex(product => product.id === id);

  let product = null;

  if (index >= 0) {
    product = {...products[index]};

    const data = {
      selectedProduct: product
    };

    cache.writeQuery({
      query: selectedProductQuery,
      data
    });
  }

  return product;
};
