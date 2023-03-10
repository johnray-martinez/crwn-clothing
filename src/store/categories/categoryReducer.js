import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  categoriesMap: []
}

const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE, 
  reducers: {
    setCategories(state, action) {
      state.categoriesMap = action.payload
    }
  }
});


export const { setCategories } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;