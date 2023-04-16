import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

import { MyPosts } from "../screens/MyPosts.js";
import { MyLostPets } from "./MyLostPets.js";
export const Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFEDCB' }}>
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

                <Text style={{ fontWeight: "500", fontSize: 16, paddingHorizontal: 110 }}>MEU PERFIL</Text>
            </View>
            <View>

            </View>
            <View>
                <Text style={{ paddingHorizontal: 20, opacity: 0.7, color: "#342E29", fontSize: 16 }}>Conta</Text>
            </View>

            <TouchableOpacity style={{ marginVertical: 20, justifyContent: 'space-between', flexDirection: 'row' }} activeOpacity={0.5} onPress={() => navigation.navigate(MyPosts)}>
                <Text style={{ fontSize: 16, marginLeft: 40 }}>Meus pets publicados</Text>
                <FontAwesome style={{ marginRight: 40 }} name='angle-right' size={24} />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginVertical: 20, justifyContent: 'space-between', flexDirection: 'row' }} activeOpacity={0.5} onPress={() => navigation.navigate(MyLostPets)}>
                <Text style={{ fontSize: 16, marginLeft: 40 }}>Meus pets perdidos</Text>
                <FontAwesome style={{ marginRight: 40 }} name='angle-right' size={24} />
            </TouchableOpacity>

            <View style={{ borderWidth: 0.4, opacity: 0.5, borderColor: '#E4B283' }}></View>
            <TouchableOpacity style={{ marginVertical: 20, justifyContent: 'space-between', flexDirection: 'row' }} activeOpacity={0.5} onPress={''}>
                <Text style={{ marginLeft: 40, color: '#D45152', fontSize: 16 }}>Sair da conta</Text>
                <Ionicons style={{ marginRight: 30 }} name='exit-outline' size={24} color='#D45152' />
            </TouchableOpacity>



        </View>
    );
};
