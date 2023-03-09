import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.categoriesMap
)

export const selectCategoriesArray = createSelector(
  [selectCategories],
  (categories) => {
    return categories
    .reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  }
)

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.isLoading
)
  