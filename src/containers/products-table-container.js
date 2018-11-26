import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProductsTable from '../components/products-table/ProductsTable';
import {
  addProductAction,
  selectProductAction,
  updateProductRequestAction,
  filterProductsAction,
  fetchProducts
} from '../actions/products/products-actions';
import {closeModalAction, openModalAction} from "../actions/modals/modal-actions";
import getVisibleProducts from '../selectors/visible-products-selector';



function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addProduct: addProductAction,
    updateProduct: updateProductRequestAction,
    openModal: openModalAction,
    closeModal: closeModalAction,
    selectProduct: selectProductAction,
    filterProducts: filterProductsAction,
    fetchProducts: fetchProducts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);