import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default ButtonOutline = ({ text }) => {
    return (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.6} style={style.button}>
                <Text style={style.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    button: {

        borderWidth: 1,
        width: 348,
        height: 48,
        borderColor: "#FFEDCB",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FFEDCB",
    },
});
