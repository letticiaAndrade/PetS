import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export const Profile = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFEDCB' }}>
            <View style={{ flexDirection: 'row', borderWidth: 1, alignItems: 'center' }}>
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

                <Text style={{ fontWeight: "500", fontSize: 16, paddingHorizontal: 110 }}>MEU PERFIL</Text>
            </View>


        </View>
    );
};
