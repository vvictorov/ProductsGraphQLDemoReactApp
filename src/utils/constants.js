const apiBaseUrl = "https://localhost:44314/api/";

export const Constants = {
  Actions: {
    PRODUCT_ADDED: "PRODUCT_ADDED",
    PRODUCT_UPDATE_REQUEST: "PRODUCT_UPDATE_REQUEST",
    PRODUCT_UPDATE_SUCCESS: "PRODUCT_UPDATE_SUCCESS",
    PRODUCT_UPDATE_FAILED: "PRODUCT_UPDATE_FAILED",
    PRODUCT_SELECTED: "PRODUCT_SELECTED",
    MODAL_OPENED: "MODAL_OPENED",
    MODAL_CLOSED: "MODAL_CLOSED",
    PRODUCTS_FILTERED: "PRODUCTS_FILTERED",
    FETCH_PRODUCTS: "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
    RESET_FORM: "RESET_FORM",
    SHOW_NOTIFICATION: "SHOW_NOTIFICATION"
  },
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
    BaseUrl: apiBaseUrl,
    Products: {
      All: apiBaseUrl + 'products/',
      Update: apiBaseUrl + 'products/',
    }
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
