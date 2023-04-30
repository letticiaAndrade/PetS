import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const PostPet = ({ navigation }) => {
    return (
        <SafeAreaView style={style.content}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginHorizontal: 5 }}>
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

                <Text style={{ fontWeight: "500", fontSize: 16, paddingHorizontal: 90, textAlign: 'center' }}>PET PARA ADOÇÃO</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})