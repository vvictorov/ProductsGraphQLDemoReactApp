import {ajax} from 'rxjs/ajax';
import {Constants} from "../utils/constants";
import {ofType} from "redux-observable";
import {mergeMap, map, catchError} from "rxjs/operators";
import {updateProductFailedAction, updateProductSuccessAction} from "../actions/products/products-actions";
import {of} from "rxjs";
import {showNotification} from '../actions/general/general-actions';

const updateProductEpic = action$ => action$.pipe(
  ofType(Constants.Actions.PRODUCT_UPDATE_REQUEST),
  mergeMap(action =>
    ajax({
      method: "PUT",
      url: Constants.Api.Products.Update + action.payload.id,
      headers: {
        "Content-Type": "application/json"
      },
      body: action.payload,
      crossDomain: true,
      withCredentials: false
    })
      .pipe(
        mergeMap(response => of(
          updateProductSuccessAction(withCategoryMapped(action.payload)),
          showNotification({
            message: Constants.Messages.Products.Updated,
            type: Constants.Notifications.Success
          })
        )),
        catchError(error => of(
          updateProductFailedAction(error),
          showNotification({
            message: Constants.Messages.Products.UpdateFailed,
            type: Constants.Notifications.Error
          })
          )
        )
      )
  )
);

const withCategoryMapped = (product) => {
  product.category = {
    id: product.categoryId,
    title: categories[product.categoryId]
  };

  return product;
};

// Hardcoded
const categories = {
  1: "Плодове",
  2: "Зеленчуци"
};

export default updateProductEpic;