import { Text, View } from "react-native";

import { formatPrice } from "../../../../helpers";

const Summary = ({ cart }) => {
  const total = cart.reduce(
    (acc, { quantity, price, discount }) =>
      (acc +=
        discount <= 100 ? quantity * (price - price * (discount / 100)) : 0),
    0
  );

  const subtotal = cart.reduce(
    (acc, { price, quantity }) => (acc += quantity * price),
    0
  );

  const discount = total - subtotal;

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        borderRadius: "5px",
        padding: 10,
        marginTop: 8,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>Subtotal</Text>
        <Text style={{ fontSize: 16 }}>{formatPrice(subtotal)}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 8,
        }}
      >
        <Text style={{ fontSize: 16, color: "green", fontWeight: "bold" }}>
          Desconto
        </Text>
        <Text style={{ fontSize: 16, color: "green", fontWeight: "bold" }}>
          {formatPrice(discount)}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {formatPrice(total)}
        </Text>
      </View>
    </View>
  );
};

export default Summary;
