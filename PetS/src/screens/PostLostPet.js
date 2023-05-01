// imports dos componentes nativos
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

// imports do hook form
import { useForm, Controller } from "react-hook-form";

// imports dos icones
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

//imports dos componentes do paper
import { HelperText, Switch, TextInput } from "react-native-paper";

// imports dos componentes personalizados
import Button from "../components/Button";

// imports dos hooks
import { useState } from "react";

export const PostLostPet = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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

            <View style={{}}>
                <TouchableOpacity style={{ marginBottom: 20, borderWidth: 1 }} onPress={""} activeOpacity={1}>
                    <View style={{ alignItems: "center" }}>
                        <FontAwesome name="file-photo-o" size={109} />
                    </View>
                    <View
                        style={{
                            backgroundColor: "#FFCB14",
                            borderWidth: 2,
                            borderColor: "#B67830",
                            width: 65,
                            height: 65,
                            borderRadius: 70,
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            right: 130,
                            top: 50,
                        }}
                    >
                        <AntDesign name="plus" size={30} color={"#342E29"} style={{}} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 5, alignItems: 'center' }}>
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
                            style={{ width: 354, height: 38 }}
                            left={<TextInput.Icon icon="pencil-outline" size={22} />}
                        />
                    )}
                />

                {Boolean(errors.name) && (
                    <HelperText type="error" visible={Boolean(errors.name)}>
                        {errors.name.message}
                    </HelperText>
                )}
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 5, alignItems: 'center' }}>
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
                            style={{ width: 354, height: 38 }}
                            left={<TextInput.Icon icon="map-marker-outline" size={22} />}
                        />
                    )}
                />
                {Boolean(errors.address) && (
                    <HelperText type="error" visible={Boolean(errors.address)}>
                        {errors.address.message}
                    </HelperText>
                )}
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 5, alignItems: 'center' }}>
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
                            style={{ width: 354, height: 38 }}
                            left={<TextInput.Icon icon="email-outline" />}
                        />
                    )}
                />
                {Boolean(errors.description) && (
                    <HelperText type="error" visible={Boolean(errors.description)}>
                        {errors.description.message}
                    </HelperText>
                )}
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>M</Text>
                <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    trackColor={{ true: "#E4B283", false: "#00D5B0" }}
                    thumbColor={"#D9D9D9"}
                    style={{}}
                />
                <Text>F</Text>
            </View>
            <View style={{ marginHorizontal: 30, marginVertical: 5, alignItems: 'center' }}>
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
                            style={{ width: 354, height: 38 }}
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
            <View style={{ marginTop: 20 }}>

                <Button onPress={handleSubmit(onSubmit)} text="POSTAR PET" />
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFEDCB",
    },
});
