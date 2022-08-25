import { Text, View, Pressable } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import useCart from "../../../../hooks/useCart";

import { styles } from "./styles";
import Counter from "../Counter";

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
            {cartQuantity > 0 && <Counter quantity={cartQuantity} />}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
