import { useState } from "react";

import {
  Button,
  FlatList,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import Constants from "expo-constants";

import { products } from "./data";

import useCart from "./hooks/useCart";

import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  const { cart } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <View style={styles.header}>
        <View>
          <Text style={styles.pageTitle}>Produtos</Text>
        </View>
        <View>
          <Button
            title={`Carrinho: ${cart.reduce(
              (acc, { quantity }) => (acc += quantity),
              0
            )}`}
            onPress={() => setShowCart(true)}
          />
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
