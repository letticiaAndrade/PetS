import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
/* import { ActivityIndicator } from "react-native-paper"; */
export default Button = ({ text, onPress, disabled, animating, isLoading }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        style={style.button}
      >
        {isLoading ? (
          <ActivityIndicator animating={animating} />
        ) : (
          <Text style={style.text}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "#B67830",
    width: 348,
    height: 48,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  text: {
    color: "#FFEDCB",
  },
});
