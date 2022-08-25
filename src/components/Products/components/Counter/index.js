import { View, Text } from "react-native";

const Counter = ({ quantity }) => {
  return (
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
        {quantity}
      </Text>
    </View>
  );
};

export default Counter;
