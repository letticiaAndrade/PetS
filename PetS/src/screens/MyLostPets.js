import { View, Text, StyleSheet } from "react-native";


export const MyLostPets = () => {
    return (
        <View style={style.content}>
            <Text>Meus pets perdidos</Text>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})