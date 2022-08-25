import { useState } from "react";

import { products } from "./data";

import Cart from "./src/components/Cart";
import Layout from "./src/components/Layout";
import Products from "./src/components/Products";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <Layout>
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Products products={products} setShowCart={setShowCart} />
    </Layout>
  );
}
