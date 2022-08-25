import { Text, View, Pressable } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import useCart from "../../../../hooks/useCart";

import { styles } from "./styles";

const Header = ({ setShowCart }) => {
  const { cart } = useCart();

  const cartQuantity = cart.reduce((acc, { quantity }) => (acc += quantity), 0);

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.pageTitle}>Produtos</Text>
      </View>
      <View>
        <Pressable onPress={() => setShowCart(true)}>
          <View style={{ position: "relative", padding: 8 }}>
            <AntDesign name="shoppingcart" size={36} color="black" />
            {cartQuantity > 0 && (
              <View
                style={{
                  backgroundColor: "#A52A2A",
                  borderRadius: "50%",
                  position: "absolute",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  top: 0,
                  right: 0,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {cartQuantity}
                </Text>
              </View>
            )}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
