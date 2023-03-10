import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

export const fetchCategoriesAsync = createAsyncThunk(
  'category/fetchCategoriesAsync',
  async () => await getCategoriesAndDocuments()
)

const INITIAL_STATE = {
  categoriesMap: [],
  isLoading: false,
  error: null
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

    builder.addCase(fetchCategoriesAsync.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    })

    builder.addCase(fetchCategoriesAsync.pending, (state, _) => {
      state.isLoading = true;
    })
  }
});


export const { setCategories } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;