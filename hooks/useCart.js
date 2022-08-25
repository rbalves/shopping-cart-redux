import { useState } from "react";

import store from "../store/index";

const useCart = () => {
  const [cart, setCart] = useState([]);

  store.subscribe(() => {
    const {
      cart: { products },
    } = store.getState();

    setCart(products);
  });

  return { cart };
};

export default useCart;
