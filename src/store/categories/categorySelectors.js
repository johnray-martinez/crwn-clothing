import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
)

export const selectCategoriesArray = createSelector(
  [selectCategories],
  (categories) => {
    return Array.from(categories)
    .reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  }
   
)
  