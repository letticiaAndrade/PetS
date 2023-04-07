import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default Button = ({ text }) => {

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.7} style={style.button}>
                <Text style={style.text}>
                    {text}
                </Text>

            </TouchableOpacity>

            <Text style={{ color: "#B67830" }}>ENTRAR</Text>
        </View>
    )
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
    },

    text: {
        color: '#FFEDCB',
    }

});