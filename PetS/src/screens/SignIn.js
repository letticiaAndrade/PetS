import { View, Text, Image, TouchableOpacity } from "react-native";

import { useState } from "react";
import { TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

import Logo from "../../assets/Logo.png";

export const SignIn = () => {
    const [text, setText] = useState("");
    return (
        <View style={{ flex: 1, backgroundColor: "#FFEDCB" }}>
            <View
                style={{
                    paddingHorizontal: 15,
                    paddingVertical: 40,
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

            <View style={{}}>
                <Text style={{ color: "#342E29", fontWeight: "bold", fontSize: 32 }}>
                    Bem vindo de volta!
                </Text>
                <Text style={{ color: "#342E29", opacity: 0.6, fontSize: 20 }}>
                    Preencha os campos{"\n"}para entrar na conta.
                </Text>
            </View>

            <View>
                <TextInput
                    label="Email"
                    mode="outlined"
                    value={text}
                    onChangeText={(text) => setText(text)}
                    left={<TextInput.Icon icon="email" />}
                />
            </View>

            <View>
                <TextInput
                    label="Senha"
                    mode="outlined"
                    textColor="#342E29"
                    activeUnderlineColor="#FFEDCB"
                    left={<TextInput.Icon icon="lock" />}
                />
            </View>

            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#342E29", fontSize: 20, paddingRight: 10 }}>
                    Não tem uma conta?
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: "#B67830", fontSize: 20, letterSpacing: 1 }}>
                        Registre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
