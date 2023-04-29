import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

import { Controller, useForm } from "react-hook-form";

import { useState } from "react";

import Button from "../components/Button.js";

import { HelperText, TextInput } from "react-native-paper";

import Ionicons from "@expo/vector-icons/Ionicons";

import Logo from "../../assets/Logo.png";

import { SignIn } from "./SignIn.js";
import { Routes } from "../routes/stackRoutes.js";

export const SignUp = ({ navigation }) => {
    const [text, setText] = useState("");
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { name: "", phone: "", email: "", password: "" },
    });

    const onSubmit = () => {
        navigation.navigate(Routes);
    };

    return (
        <SafeAreaView style={style.content}>
            <View
                style={{
                    paddingHorizontal: 15,
                    paddingVertical: 10,
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

            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: "Campo obrigatório.",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={Boolean(errors.name)}
                            label="NOME COMPLETO"
                            mode="outlined"
                            activeOutlineColor="#342E29"
                            left={<TextInput.Icon icon="account-outline" />}
                        />
                    )}
                />
                {Boolean(errors.name) && (
                    <HelperText type="error" visible={Boolean(errors.name)}>
                        {errors.name.message}
                    </HelperText>
                )}
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: "Campo obrigatório",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={Boolean(errors.phone)}
                            label="TELEFONE"
                            mode="outlined"
                            activeOutlineColor="#342E29"
                            left={<TextInput.Icon icon="phone-outline" />}
                        />
                    )}
                />
                {Boolean(errors.phone) && (
                    <HelperText type="error" visible={Boolean(errors.phone)}>
                        {errors.phone.message}
                    </HelperText>
                )}
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
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
                            label="EMAIL"
                            mode="outlined"
                            activeOutlineColor="#342E29"
                            left={<TextInput.Icon icon="email-outline" />}
                        />
                    )}
                />
                {Boolean(errors.email) && (
                    <HelperText type="error" visible={Boolean(errors.email)}>
                        {errors.email.message}
                    </HelperText>
                )}
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <Controller
                    name="password"
                    control={control}
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
                            label="SENHA"
                            mode="outlined"
                            textColor="#342E29"
                            activeUnderlineColor="#FFEDCB"
                            left={<TextInput.Icon icon="lock-outline" />}
                        />
                    )}
                />
                {Boolean(errors.password) && (
                    <HelperText type="error" visible={Boolean(errors.password)}>
                        {errors.password.message}
                    </HelperText>
                )}
            </View>
            <View style={{ marginVertical: 10 }}>
                <Button onPress={handleSubmit(onSubmit)} text={"CADASTRAR"} />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 20,
                }}
            >
                <Text style={{ color: "#342E29", fontSize: 20, paddingRight: 10 }}>
                    Já possui uma conta? Faça o
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate(SignIn)}>
                    <Text style={{ color: "#B67830", fontSize: 20, letterSpacing: 1 }}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFEDCB'
    }
})
