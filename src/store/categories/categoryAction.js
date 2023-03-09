import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { CATEGORY_ACTION_TYPES } from './categoryActionTypes';

export const fetchCategoriesSuccess = (categories) => {
  return { 
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, 
    payload: categories
  }
}

export const fetchCategoriesStart = () => {
  return { 
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START
  }
}

export const fetchCategoriesFailed = (error) => {
  return { 
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: error
  }
}

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();

    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (err) {
    dispatch(fetchCategoriesFailed(err));
  }
}