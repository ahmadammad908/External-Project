import { createSlice } from "@reduxjs/toolkit";
export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((_, i) => i !== action.payload);
    },
  },
});
export const { setProducts, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
