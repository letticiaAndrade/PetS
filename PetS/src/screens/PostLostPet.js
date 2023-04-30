import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { useForm, Controller } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HelperText, TextInput } from "react-native-paper";
import Button from "../components/Button";
export const PostLostPet = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            address: "",
            description: "",
            phone: "",
            gender: "",
        },
    });

    const onSubmit = () => {
        console.log("TESTE AQUI !");
    };
    return (
        <SafeAreaView style={style.content}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 20,
                    marginHorizontal: 5,
                }}
            >
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

                <Text
                    style={{
                        fontWeight: "500",
                        fontSize: 16,
                        paddingHorizontal: 110,
                        textAlign: "center",
                    }}
                >
                    PET PERDIDO
                </Text>
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Campo obrigatório." }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            error={Boolean(errors.name)}
                            onBlur={onBlur}
                            selectionColor="#FFEDCB"
                            activeOutlineColor="#342E29"
                            textColor="#342E29"
                            activeUnderlineColor="#FFEDCB"
                            label={"NOME PET"}
                            mode="outlined"
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
                    name="address"
                    control={control}
                    rules={{ required: "Campo obrigatório." }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            error={Boolean(errors.address)}
                            selectionColor="#FFEDCB"
                            activeOutlineColor="#342E29"
                            textColor="#342E29"
                            activeUnderlineColor="#FFEDCB"
                            label={"LOCALIDADE"}
                            mode="outlined"
                        />
                    )}
                />
                {Boolean(errors.address) && (
                    <HelperText type="error" visible={Boolean(errors.address)}>
                        {errors.address.message}
                    </HelperText>
                )}
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: "Campo obrigatório." }}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            value={value}
                            error={Boolean(errors.description)}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            selectionColor="#FFEDCB"
                            activeOutlineColor="#342E29"
                            textColor="#342E29"
                            activeUnderlineColor="#FFEDCB"
                            label={"DESCRIÇÃO"}
                            mode="outlined"
                        />
                    )}
                />
                {Boolean(errors.description) && (
                    <HelperText type="error" visible={Boolean(errors.description)}>
                        {errors.description.message}
                    </HelperText>
                )}
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Campo obrigatório." }}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            error={Boolean(errors.phone)}
                            selectionColor="#FFEDCB"
                            activeOutlineColor="#342E29"
                            textColor="#342E29"
                            activeUnderlineColor="#FFEDCB"
                            label={"TELEFONE"}
                            mode="outlined"
                        />
                    )}
                />
                {Boolean(errors.phone) && (
                    <HelperText type="error" visible={Boolean(errors.phone)}>
                        {errors.phone.message}
                    </HelperText>
                )}
            </View>
            <Button onPress={handleSubmit(onSubmit)} text="POSTAR PET" />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFEDCB",
    },
});
