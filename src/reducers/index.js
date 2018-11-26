import {combineReducers} from 'redux';
import productsReducer from './products-reducer';
import modalsReducer from './modals-reducer';
import activeProductReducer from './active-product-reducer';
import { reducer as formReducer } from 'redux-form';
import productsVisibilityFilterReducer from './products-filter-reducer';
import notificationsReducer from './notifications-reducer';

const allReducers = combineReducers({
  products: productsReducer,
  modals: modalsReducer,
  activeProduct: activeProductReducer,
  form: formReducer,
  productsVisibilityFilter: productsVisibilityFilterReducer,
  notifications: notificationsReducer
});

export default allReducers;