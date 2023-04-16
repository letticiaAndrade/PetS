import { StyleSheet, Text, View } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import { Controller, useForm } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
export const EditProfile = ({ navigation }) => {
    return (
        <View style={style.content}>

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

                <Text style={{ fontWeight: "500", fontSize: 16, paddingHorizontal: 110 }}>EDITAR PERFIL</Text>
            </View>

            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Avatar.Text
                    size={109}
                    label="LM"
                    labelStyle={{ color: "#342E29" }}
                    style={{ backgroundColor: "#FFCB14" }}
                />
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>

                <TextInput
                    // value={value}
                    //  onBlur={onBlur}
                    // onChangeText={onChange}
                    //  error={Boolean(errors.email)}
                    label="NOME COMPLETO"
                    mode="outlined"
                    activeOutlineColor="#342E29"
                    left={<TextInput.Icon icon="email" />}
                />
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>

                <TextInput
                    // value={value}
                    // onBlur={onBlur}
                    //  onChangeText={onChange}
                    //  error={Boolean(errors.email)}
                    label="TELEFONE"
                    mode="outlined"
                    activeOutlineColor="#342E29"
                    left={<TextInput.Icon icon="email" />}
                />
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <TextInput
                    //value={value}
                    //  onBlur={onBlur}
                    //  onChangeText={onChange}
                    //error={Boolean(errors.email)}
                    label="EMAIL"
                    mode="outlined"
                    activeOutlineColor="#342E29"
                    left={<TextInput.Icon icon="email" />}
                />
            </View>



        </View >
    )
};

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})