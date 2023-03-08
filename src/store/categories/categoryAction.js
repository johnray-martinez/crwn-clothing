import { CATEGORY_ACTION_TYPES } from './categoryActionTypes';

export const setCategories = (categories) => {
  return { 
    type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORIES, 
    payload: categories
  }
}