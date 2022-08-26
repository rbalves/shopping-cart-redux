import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { product, quantity } = action.payload;

      const productFound = Boolean(
        state.products.find((item) => item.id === product.id)
      );

      if (productFound) {
        state.products = state.products.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: (item.quantity += quantity),
            };
          }

          return item;
        });
      } else {
        state.products = [
          ...state.products,
          { ...product, quantity: quantity },
        ];
      }
    },
    removeProductToCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addProductToCart, removeProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
