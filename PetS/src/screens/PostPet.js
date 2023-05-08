// imports dos componentes nativos
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Pressable,
} from "react-native";

// imports do hook form
import { useForm, Controller } from "react-hook-form";

// imports dos icones
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

//imports dos componentes do paper
import {
    Divider,
    HelperText,
    Modal,
    Portal,
    Switch,
    TextInput,
} from "react-native-paper";

// imports dos componentes personalizados
import Button from "../components/Button.js";
import { Header } from "../components/Header.js";

// imports dos hooks
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export const PostPet = ({ navigation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

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

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const onSubmit = (data) => {
        const pet = {
            name: data?.name,
            address: data?.address,
            description: data?.description,
            phone: data?.phone,
            gender: data?.gender ? "Feminino" : "Masculino",
        };
        console.log(pet);
    };

    const handleSearchPicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 3],
        });
        console.log(result);
        if (!result?.canceled) {
            setSelectedImage(result?.assets[0]?.uri);
        }
        handleCloseModal();
    };

    const handleTakePicture = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result?.assets[0]?.uri);
            console.log(result);
        }
        handleCloseModal();
    };

    return (
        <SafeAreaView style={style.content}>
         <Header title={"PET PARA ADOÇÃO"} navigation={()=> navigation.goBack()}/>

            <Portal>
                <Modal visible={isOpen} onDismiss={handleCloseModal}>
                    <Pressable
                        onPress={() => {
                            handleSearchPicture();
                        }}
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#FFCB14",
                            borderWidth: 2,
                            borderColor: "#B67830",
                            borderRadius: 8,
                            padding: 5,
                            marginRight: 10,
                        }}
                    >
                        <Ionicons
                            name="images-outline"
                            size={21}
                            color={"#342E29"}
                            style={{ marginRight: 30, marginLeft: 10 }}
                        />
                        <Text style={{ color: "#342E29" }}>BUSCAR FOTO</Text>
                    </Pressable>
                    <Divider />

                    <Pressable
                        onPress={() => {
                            handleTakePicture();
                        }}
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#FFCB14",
                            borderWidth: 2,
                            borderColor: "#B67830",
                            borderRadius: 8,
                            padding: 5,
                            marginRight: 10,
                        }}
                    >
                        <Ionicons
                            name="camera-outline"
                            size={21}
                            color={"#342E29"}
                            style={{ marginRight: 30, marginLeft: 10 }}
                        />
                        <Text style={{ color: "#342E29" }}>TIRAR FOTO</Text>
                    </Pressable>
                </Modal>
            </Portal>
            <View style={{}}>
                <TouchableOpacity
                    style={{ marginBottom: 20, borderWidth: 1 }}
                    onPress={() => setIsOpen(true)}
                    activeOpacity={1}
                >
                    <View style={{ alignItems: "center" }}>
                        {selectedImage ? (
                            <Image
                                source={{ uri: selectedImage }}
                                resizeMode="contain"
                                style={{ width: 142, height: 109 }}
                            />
                        ) : (
                            <FontAwesome name="file-photo-o" size={120} />
                        )}
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
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
            {/*  <View
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
                />
                <Text>F</Text>
            </View> */}

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Controller
                    control={control}
                    name="gender"
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text>M</Text>
                            <Switch
                                value={value}
                                onValueChange={(value) => onChange(value)}
                                trackColor={{ true: "#E4B283", false: "#00D5B0" }}
                                thumbColor={"#D9D9D9"}
                            />
                            <Text>F</Text>
                        </>
                    )}
                />
            </View>
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
