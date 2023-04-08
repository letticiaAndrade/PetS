import { View, Text, Image, TouchableOpacity } from "react-native";

import { useState } from "react";

import Button from "../components/Button.js";

import { HelperText, TextInput } from "react-native-paper";

import Ionicons from "@expo/vector-icons/Ionicons";

import Logo from "../../assets/Logo.png";

import { SignUp } from "./SignUp.js";

import { Routes } from "../routes/stackRoutes.js";

import { Controller, useForm } from "react-hook-form";

export const SignIn = ({ navigation }) => {
    const [text, setText] = useState("");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = () => {
        navigation.navigate(Routes);
    };

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
                        onPress={() => navigation.goBack()}
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

            <View style={{ margin: 30 }}>
                <Text
                    style={{
                        color: "#342E29",
                        fontWeight: "bold",
                        fontSize: 32,
                        marginBottom: 10,
                    }}
                >
                    Bem vindo de volta!
                </Text>
                <Text style={{ color: "#342E29", opacity: 0.6, fontSize: 20 }}>
                    Preencha os campos{"\n"}para entrar na conta.
                </Text>
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 15 }}>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Campo obrigatório.",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={Boolean(errors.email)}
                            label="Email"
                            mode="outlined"
                            activeOutlineColor="#342E29"
                            left={<TextInput.Icon icon="email" />}
                        />
                    )}
                />
                {Boolean(errors.email) && (
                    <HelperText
                        style={{ marginBottom: 5 }}
                        type="error"
                        visible={Boolean(errors.email)}
                    >
                        {errors.email.message}
                    </HelperText>
                )}
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 15 }}>
                <Controller name="password" control={control}
                    rules={{ required: "Campo obrigatório." }}
                    render={({ field: { onChange, onBlur, value } }) => (


                        <TextInput
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={Boolean(errors.password)}
                            selectionColor="#FFEDCB"
                            activeOutlineColor="#342E29"
                            secureTextEntry={true}
                            label="Senha"
                            mode="outlined"
                            textColor="#342E29"
                            activeUnderlineColor="#FFEDCB"
                            left={<TextInput.Icon icon="lock" />}
                        />
                    )}
                />
                {Boolean(errors.password) && (
                    <HelperText type="error" visible={Boolean(errors.password)}>{errors.password.message}</HelperText>
                )}
            </View>
            <View style={{ marginVertical: 30 }}>
                <Button onPress={handleSubmit(onSubmit)} text={"ENTRAR"} />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 30,
                }}
            >
                <Text style={{ color: "#342E29", fontSize: 20, paddingRight: 10 }}>
                    Não tem uma conta?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate(SignUp)}>
                    <Text style={{ color: "#B67830", fontSize: 20, letterSpacing: 1 }}>
                        Registre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
