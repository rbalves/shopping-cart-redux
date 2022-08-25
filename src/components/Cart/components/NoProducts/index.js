import { Text, View } from "react-native";

const NoProducts = () => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        borderRadius: "5px",
        padding: 10,
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Text style={{ fontSize: 16 }}>Nenhum produto adicionado</Text>
    </View>
  );
};

export default NoProducts;
