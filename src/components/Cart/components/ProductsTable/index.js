import * as React from "react";

import { Pressable, Text, View } from "react-native";

import { DataTable } from "react-native-paper";

import { AntDesign } from "@expo/vector-icons";

import { formatPrice } from "../../../../helpers";

import store from "../../../../store";

import { removeProductToCart } from "../../../../store/modules/cart/reducer";

const ProductsTable = ({ products }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        borderRadius: "5px",
        marginTop: 12,
      }}
    >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Produto</DataTable.Title>
          <DataTable.Title numeric>Preço unitário</DataTable.Title>
          <DataTable.Title numeric>Quantidade</DataTable.Title>
          <DataTable.Title></DataTable.Title>
        </DataTable.Header>
        {products.map((product) => {
          const { id, name, quantity, price } = product;

          return (
            <DataTable.Row key={id}>
              <DataTable.Cell>
                <Text>{name}</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text>{formatPrice(price)}</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text>{quantity}</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text>
                  <Pressable
                    onPress={() => store.dispatch(removeProductToCart(product))}
                  >
                    <AntDesign name="delete" size={20} color="red" />
                  </Pressable>
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

export default ProductsTable;
