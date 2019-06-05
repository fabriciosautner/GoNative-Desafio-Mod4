import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import MenuActions from '~/store/ducks/menu';

export function* load() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(MenuActions.loadMenuSuccess(response.data));
  } catch (err) {
    yield put(MenuActions.loadMenuFailure());
  }
}
