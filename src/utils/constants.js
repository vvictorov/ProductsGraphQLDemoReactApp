const graphQLApiUrl = "http://localhost:5000/graphql";

export const Constants = {
  ModalDialogs: {
    AddProduct: "ADD_PRODUCT_MODAL",
    UpdateProduct: "UPDATE_PRODUCT_MODAL",
  },
  Filters: {
    SHOW_ALL: "SHOW_ALL",
    SHOW_VEGETABLES: "SHOW_VEGETABLES",
    SHOW_FRUITS: "SHOW_FRUITS"
  },
  Api: {
    GraphQLUrl: graphQLApiUrl
  },
  Forms: {
    ProductsUpdate: "PRODUCTS_UPDATE_FORM"
  },
  Notifications: {
    Success: "SUCCESS",
    Error: "ERROR",
    Warn: "WARN",
    Info: "INFO"
  },
  Messages: {
    Products: {
      Updated: "Продуктът е успешно променен!",
      UpdateFailed: "Продуктът не може да бъде променен в момента!"
    }
  }
};
