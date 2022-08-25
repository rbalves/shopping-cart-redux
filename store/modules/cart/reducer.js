import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productFound = Boolean(
        state.products.find((item) => item.id === action.payload.id)
      );

      if (productFound) {
        state.products = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: (item.quantity += 1),
            };
          }

          return item;
        });
      } else {
        state.products = [...state.products, { ...action.payload, quantity: 1 }];
      }
    },
    removeProductToCart: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addProductToCart, removeProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
