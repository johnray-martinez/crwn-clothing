import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categoryAction';
import { CATEGORY_ACTION_TYPES } from './categoryActionTypes';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (err) {
    yield put(fetchCategoriesFailed(err));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSagas() {
  yield all([call(onFetchCategories)])
}