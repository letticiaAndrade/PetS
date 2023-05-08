import { Card } from "react-native-paper";

import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default CardAnimal = ({ item, onPress = null, sizes = 142 }) => {
  return (
    <TouchableOpacity
      style={{ overflow: "hidden", borderRadius: 14, marginHorizontal: 5, width: sizes, height:sizes }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <ImageBackground style={{width: "100%", height: "100%"}} source={{uri: item.image}}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#00000050",
                position: "absolute",
                padding: 5,
                bottom:0
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
                Boolean(item.gender === "F") ? "female-outline" : "male-outline"
              }
              color={Boolean(item.gender === "F") ? "red" : "blue"}
              size={25}
            />
      </ImageBackground>
    </TouchableOpacity>
  );
};
