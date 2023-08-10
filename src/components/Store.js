import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
export default store;
