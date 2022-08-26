import { useState } from "react";
import { Image, Text, View, Pressable } from "react-native";

import { formatPrice } from "../../../../helpers";

import store from "../../../../store";

import { addProductToCart } from "../../../../store/modules/cart/reducer";

import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.card}>
      <View>
        <Image
          source={{ uri: product.image }}
          style={{
            height: 150,
            width: 150,
            marginRight: 8,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.name}>{product.name}</Text>
        {product.discount > 0 && (
          <Text
            style={{
              color: "tomato",
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            {formatPrice(product.price)}
          </Text>
        )}
        <Text style={styles.price}>
          {formatPrice(
            product.discount <= 100
              ? product.price - product.price * (product.discount / 100)
              : 0
          )}
        </Text>
        <View style={styles.buttons}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <Pressable
              onPress={() =>
                setQuantity((prev) => {
                  if (prev > 1) return (prev -= 1);
                  return prev;
                })
              }
            >
              <View
                style={{
                  backgroundColor: "#0096CD",
                  borderRadius: "50%",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  -
                </Text>
              </View>
            </Pressable>
            <Text
              style={{ marginHorizontal: 4, fontWeight: "bold", fontSize: 20 }}
            >
              {quantity}
            </Text>
            <Pressable onPress={() => setQuantity((prev) => (prev += 1))}>
              <View
                style={{
                  backgroundColor: "#0096CD",
                  borderRadius: "50%",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  +
                </Text>
              </View>
            </Pressable>
          </View>
          <Pressable
            onPress={() =>
              store.dispatch(
                addProductToCart({ product: product, quantity: quantity })
              )
            }
          >
            <Text
              style={{
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 12,
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: 16,
              }}
            >
              Adicionar{" "}
              <AntDesign name="shoppingcart" size={16} color="white" />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
