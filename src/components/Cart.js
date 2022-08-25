import * as React from "react";

import { Button, Modal, SafeAreaView, Text } from "react-native";

import useCart from "../hooks/useCart";

const Cart = ({ showCart, setShowCart }) => {
  const { cart } = useCart();

  return (
    <Modal
      visible={showCart}
      onRequestClose={() => {
        setShowCart(!showCart);
      }}
    >
      <SafeAreaView>
        <Text>{`
      Itens: 
      ${
        cart.length
          ? cart.map(({ name, quantity }) => `${name}: ${quantity}`).join(" | ")
          : "Nenhum produto adicionado"
      }
      Valor total da compra: ${cart
        .reduce(
          (acc, { quantity, price, discount }) =>
            (acc += quantity * (price - price * (discount / 100))),
          0
        )
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}</Text>
        <Button
          title="Fechar"
          onPress={() => {
            setShowCart(!showCart);
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default Cart;
