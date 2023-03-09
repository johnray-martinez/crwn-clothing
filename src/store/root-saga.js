import { all, call } from 'redux-saga/effects'; 
import { categoriesSagas } from './categories/categorySagas';
import { userSagas } from './user/userSagas';

export function* rootSaga() {
  yield all([call(categoriesSagas), call(userSagas)]);
}