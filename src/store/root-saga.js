import { all, call } from 'redux-saga/effects'; 
import { categoriesSaga } from './categories/categorySagas';

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}