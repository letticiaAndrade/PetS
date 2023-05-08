import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import Button from "../components/Button.js"
import { Header } from "../components/Header.js";
import { Controller, useForm } from "react-hook-form";

import Ionicons from "@expo/vector-icons/Ionicons";
export const EditProfile = ({ navigation }) => {
    return (
        <SafeAreaView style={style.content}>
            <Header title={"EDITAR PERFIL"} navigation={()=>navigation.goBack()}/>
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
                    left={<TextInput.Icon icon="account-outline" />}
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
                    left={<TextInput.Icon icon="phone-outline" />}
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
                    left={<TextInput.Icon icon="email-outline" />}
                />
            </View>

            <View style={{ marginTop: 50 }}>

                <Button text={"SALVAR ALTERAÇÕES"} onPress={()=> console.warn("Salvando alterações")} />
            </View>

        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})
