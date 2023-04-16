import { View, Text, StyleSheet } from "react-native";


export const LostPets = () => {
    return (
        <View style={style.content}>
            <Text>Animais perdidos</Text>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})