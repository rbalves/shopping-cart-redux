import * as React from "react";

import { Modal, Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import useCart from "../../hooks/useCart";

import Layout from "../Layout";

import ProductsTable from "./components/ProductsTable";
import Summary from "./components/Summary";
import NoProducts from "./components/NoProducts";

const Cart = ({ showCart, setShowCart }) => {
  const { cart } = useCart();

  return (
    <Modal
      visible={showCart}
      onRequestClose={() => {
        setShowCart(!showCart);
      }}
    >
      <Layout>
        <Pressable
          onPress={() => {
            setShowCart(!showCart);
          }}
        >
          <Text style={{ color: "#0096FF" }}>
            {<AntDesign name="arrowleft" size={24} color="#0096FF" />} Voltar
            para produtos
          </Text>
        </Pressable>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 12 }}>
            Carrinho
          </Text>
        </View>
        {cart.length > 0 ? <ProductsTable products={cart} /> : <NoProducts />}
        <Summary cart={cart} />
      </Layout>
    </Modal>
  );
};

export default Cart;
