import {ajax} from 'rxjs/ajax';
import {Constants} from "../utils/constants";
import {ofType} from "redux-observable";
import {mergeMap, map, catchError} from "rxjs/operators";
import {fetchProductsSuccess, fetchProductsError} from "../actions/products/products-actions";

const fetchProductsEpic = action$ => action$.pipe(
  ofType(Constants.Actions.FETCH_PRODUCTS),
  mergeMap(action =>
    ajax.getJSON(Constants.Api.Products.All)
      .pipe(
        map(response => fetchProductsSuccess(response)),

      )
  )
);

export default fetchProductsEpic;