import { createSelector } from 'reselect';
import { RootState } from '../store';
import { Product } from '../cart/cartTypes';

const selectCategoryReducer = (state: RootState) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
)

export const selectCategoriesArray = createSelector(
  [selectCategories],
  (categories) => {
    return categories
    .reduce((acc: { [key: string]: Product[]}, category) => {
      const title: string = category.title;
      const items: Product[] = category.items;
      acc[title.toLowerCase()]= items;
      return acc;
    }, {})
  }
)

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.isLoading
)
  