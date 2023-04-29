import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export const LostPets = () => {
    return (
        <SafeAreaView style={style.content}>
            <Text>Animais perdidos</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})