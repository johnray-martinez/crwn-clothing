import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoryItem } from './categoryTypes';

const selectCategoryReducer = (state: RootState) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
)

export const selectCategoriesArray = createSelector(
  [selectCategories],
  (categories) => {
    return categories
    .reduce((acc: { [key: string]: CategoryItem[]}, category) => {
      const title: string = category.title;
      const items: CategoryItem[] = category.items;
      acc[title.toLowerCase()]= items;
      return acc;
    }, {})
  }
)

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.isLoading
)
  