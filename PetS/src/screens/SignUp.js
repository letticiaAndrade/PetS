import { View, Text, Image, TouchableOpacity } from "react-native";

import { useState } from "react";

import Button from "../components/Button.js";

import { TextInput } from "react-native-paper";

import Ionicons from "@expo/vector-icons/Ionicons";

import Logo from "../../assets/Logo.png";

export const SignUp = () => {
    const [text, setText] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: "#FFEDCB" }}>
            <View
                style={{
                    paddingHorizontal: 15,
                    paddingVertical: 35,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Ionicons.Button
                        name="arrow-back-circle"
                        backgroundColor={"#FFEDCB"}
                        color={"#B67830"}
                        size={54}
                        activeOpacity={1}
                        style={{ width: 60, height: 54 }}
                        onPress={""}
                        iconStyle={{ width: 54, height: 54 }}
                    ></Ionicons.Button>
                </View>
                <View style={{}}>
                    <Image
                        source={Logo}
                        resizeMode="contain"
                        style={{ width: 94, height: 92 }}
                    />
                </View>
            </View>

            <View style={{ marginHorizontal: 30 }}>
                <Text
                    style={{
                        color: "#342E29",
                        fontWeight: "bold",
                        fontSize: 32,
                        marginBottom: 10,
                    }}
                >
                    Seja bem vindo!
                </Text>
                <Text style={{ color: "#342E29", opacity: 0.6, fontSize: 20 }}>
                    Preencha os campos{"\n"}para se registrar.
                </Text>
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 15 }}>
                <TextInput
                    label="NOME COMPLETO"
                    mode="outlined"
                    activeOutlineColor="#342E29"

                    left={<TextInput.Icon icon="account" />}
                />
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <TextInput
                    label="TELEFONE"
                    mode="outlined"
                    activeOutlineColor="#342E29"
                    left={<TextInput.Icon icon="phone" />}
                />
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <TextInput
                    label="EMAIL"
                    mode="outlined"
                    activeOutlineColor="#342E29"
                    value={text}
                    onChangeText={(text) => setText(text)}
                    left={<TextInput.Icon icon="email" />}
                />
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <TextInput
                    selectionColor="#FFEDCB"
                    activeOutlineColor="#342E29"
                    secureTextEntry={true}
                    label="SENHA"
                    mode="outlined"
                    textColor="#342E29"
                    activeUnderlineColor="#FFEDCB"
                    left={<TextInput.Icon icon="lock" />}
                />
            </View>
            <View style={{ marginVertical: 30 }}>
                <Button text={"CADASTRAR"} />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 20,
                }}
            >
                <Text style={{ color: "#342E29", fontSize: 20, paddingRight: 10 }}>
                    Já possui uma conta?
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: "#B67830", fontSize: 20, letterSpacing: 1 }}>
                        Faça o LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
