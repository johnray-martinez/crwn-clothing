import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { CategoryState } from './categoryTypes';

export const fetchCategoriesAsync = createAsyncThunk(
  'category/fetchCategoriesAsync',
  async () => await getCategoriesAndDocuments()
)

const INITIAL_STATE: CategoryState = {
  categoriesMap: [],
  isLoading: false,
  error: ''
}

const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE, 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, { payload }) => {
      state.categoriesMap = payload;
      state.isLoading = false;
    })

    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    })

    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      state.isLoading = true;
    })
  }
});

export const categoryReducer = categorySlice.reducer;