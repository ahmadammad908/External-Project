import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (cart, action) => {
      const product = action.payload;
      cart.value.push(product);
      // const doesProductExist = cart.find((item) => item.id === product.id);
      // if (doesProductExist) {
      //   cart = cart.map((item) =>
      //     item.id === product.id
      //       ? { ...doesProductExist, quantity: doesProductExist.quantity + 1 }
      //       : item
      //   );
      // } else {
      //   cart = [...cart, { ...product, quantity: 1 }];
      // }
    },
    removeFromCart: (state, action) => {
      const { cart } = state;
      const product = action.payload;
      const doesProductExist = cart.find((item) => item.id === product.id);
      if (doesProductExist.quantity === 1) {
        cart = cart.filter((item) => item.id !== product.id);
      } else {
        cart = cart.map((item) =>
          item.id === product.id
            ? { ...doesProductExist, quantity: doesProductExist.quantity - 1 }
            : item
        );
      }
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
