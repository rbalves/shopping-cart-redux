import { FlatList } from "react-native";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

const Products = ({ products, setShowCart }) => {
  return (
    <>
      <Header setShowCart={setShowCart} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </>
  );
};

export default Products;
