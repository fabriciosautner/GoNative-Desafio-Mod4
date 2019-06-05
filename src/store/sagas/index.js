import { all, takeLatest } from 'redux-saga/effects';

import { MenuTypes } from '~/store/ducks/menu';
import { ProductsTypes } from '~/store/ducks/products';

import { load } from './menu';
import { load as loadProducts } from './products';

export default function* rootSaga() {
  return yield all([
    takeLatest(MenuTypes.LOAD_MENU_REQUEST, load),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
  ]);
}
