import { View, Text, StyleSheet } from "react-native";


export const MyPosts = () => {
    return (
        <View style={style.content}>
            <Text>Meus posts</Text>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})