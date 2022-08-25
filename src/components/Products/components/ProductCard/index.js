import { Text, View, Pressable } from "react-native";
import { formatPrice } from "../../../../helpers";

import store from "../../../../store";

import { addProductToCart } from "../../../../store/modules/cart/reducer";
import { styles } from "./styles";

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
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
        <Pressable onPress={() => store.dispatch(addProductToCart(product))}>
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
              fontSize: "16px",
            }}
          >
            Comprar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
