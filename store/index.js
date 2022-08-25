import { configureStore } from '@reduxjs/toolkit';

import cart from './modules/cart/reducer';

const store = configureStore({
  reducer: {
    cart,
  },
});

export default store;
