import { Card } from "react-native-paper";

import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default CardAnimal = ({
  item,
  isLost = false,
  onPress = null,
  sizes = 142,
  style,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        overflow: "hidden",
        borderRadius: 14,
        marginHorizontal: 5,
        width: sizes,
        height: sizes,
        ...style,
      }}
      onPress={() =>
        navigation.navigate("CardAnimal", { pet: item, isLost: isLost })
      }
      activeOpacity={0.8}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{ uri: item.image }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#00000050",
            position: "absolute",
            padding: 5,
            bottom: 0,
          }}
        >
          <Text style={{ color: "#fff" }}>{item?.name}</Text>
        </View>
        <Ionicons
          style={{
            backgroundColor: "#FFEDCB",
            borderRadius: 20,
            padding: 2,
            paddingHorizontal: 3,
            position: "absolute",
            bottom: 18,
            right: 5,
          }}
          name={
            Boolean(item.gender === "Feminino")
              ? "female-outline"
              : "male-outline"
          }
          color={Boolean(item.gender === "Feminino") ? "red" : "blue"}
          size={25}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};
