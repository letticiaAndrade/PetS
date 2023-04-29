// imports dos componentes nativos
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

// imports dos componentes do paper
import { Avatar } from "react-native-paper";

// imports dos icones 
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// imports das telas de navegação
import { MyPosts } from "../screens/MyPosts.js";
import { MyLostPets } from "./MyLostPets.js";
import { EditProfile } from "./EditProfile.js";

export const Profile = ({ navigation }) => {
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

                <Text style={{ fontWeight: "500", fontSize: 16, paddingHorizontal: 110 }}>MEU PERFIL</Text>
            </View>

            <View style={{}}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate(EditProfile)}
                    style={{ marginBottom: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}
                >
                    <Avatar.Text
                        size={109}
                        label="LM"
                        labelStyle={{ color: "#342E29" }}
                        style={{ backgroundColor: "#FFCB14" }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 18 }}>Leticia</Text>
                        <Text>(79)9 9999-9999</Text>
                    </View>

                    <FontAwesome name="edit" size={24} color={"#B67830"} />
                </TouchableOpacity>
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
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})
