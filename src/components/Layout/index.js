import { SafeAreaView, View } from "react-native";

const Layout = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ecf0f1",
        height: "100%"
      }}
    >
      <View
        style={{
          padding: 8,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;
