import { CATEGORY_ACTION_TYPES } from './categoryActionTypes';

const INITIAL_STATE = {
  categoriesMap: [],
  isLoading: false,
  error: null
}

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesMap: payload,
        isLoading: false
      }

      case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true
      }

      case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    default: return state;
  }
}