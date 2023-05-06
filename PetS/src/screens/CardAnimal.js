import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const CardAnimal = ({ navigation }) => {
    return (
        <SafeAreaView style={style.content}>
            <View>
                <Ionicons.Button
                    name="arrow-back-circle"
                    backgroundColor={"#FFEDCB"}
                    color={"#B67830"}
                    size={54}
                    activeOpacity={1}
                    style={{ width: 60, height: 54 }}
                    onPress={() => navigation.goBack()}
                    iconStyle={{ width: 54, height: 54 }}
                ></Ionicons.Button>

                <Text>Card animal visitante</Text>
            </View>

            <View>

            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    },
})
