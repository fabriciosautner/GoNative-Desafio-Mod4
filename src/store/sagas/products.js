import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* load({ idCategory }) {
  try {
    const response = yield call(api.get, `category_products/${idCategory}`);

    yield put(ProductsActions.loadProductsSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.loadProductsFailure());
  }
}
