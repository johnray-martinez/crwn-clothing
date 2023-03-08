import { CATEGORY_ACTION_TYPES } from './categoryActionTypes';

const INITIAL_STATE = {
  categoriesMap: []
}

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.UPDATE_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload
      }
    default: return state;
  }
}