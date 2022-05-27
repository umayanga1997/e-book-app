import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search_cat_slice",
  initialState: {
    value: "",
  },
  reducers: {
    search(state, action) {
      state.value = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
