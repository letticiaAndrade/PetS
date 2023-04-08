import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default ButtonOutline = ({ text, onPress = null }) => {
    return (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={style.button}>
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
        borderColor: "#342E29",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#342E29",
    },
});
