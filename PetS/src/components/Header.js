import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Header = ({ navigation, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
        marginHorizontal: 5,
      }}
    >
      <Ionicons.Button
        name="arrow-back-circle"
        backgroundColor={"#FFEDCB"}
        color={"#B67830"}
        size={54}
        activeOpacity={1}
        style={{ width: 60, height: 54 }}
        onPress={navigation}
        iconStyle={{ width: 54, height: 54 }}
      />

      <Text style={{ fontWeight: "500", fontSize: 16 }}>{title}</Text>
      <View style={{ width: 54 }} />
    </View>
  );
};
