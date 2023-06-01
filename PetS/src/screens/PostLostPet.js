// imports dos componentes nativos
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
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
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { database } from "../../config/firebaseConfig.js";
import { ListNav } from "../components/ListNav.js";

export const PostLostPet = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      image:
        "https://www.patasdacasa.com.br/sites/patasdacasa/files/styles/webp/public/noticias/2020/01/gato-amarelo-ou-laranja-descubra-algumas-curiosidades-sobre-esse-felino.jpg.webp?itok=UX_dVNTF",
      name: data?.name,
      phone: data?.phone,
      address: data?.address,
      category: data?.category,
      createdAt: Timestamp.now(),
      description: data?.description,
      gender: data?.gender ? "Feminino" : "Masculino",
      // Aqui são dados que pega no cache do usuario!!
      owner: {
        uid: user?.uid,
        name: user?.name,
        phone: user?.phone,
      },
    };

    addDoc(collection(database, "perdidos"), pet)
      .then(() => {
        navigation.navigate("Home");
        console.log("Adicionado pet perdido!!!");
      })
      .catch(() => console.warn("Ocorreu erro ao postar seu pet perdido"))
      .finally(() => setIsLoading(false));
  };

  const handleSearchPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 3],
    });

    if (!result?.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
      console.log(result);
    }
    handleCloseModal();
  };

  const handleTakePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result?.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
      console.log(result);
    }
    handleCloseModal();
  };

  return (
    <SafeAreaView style={style.content}>
      <ScrollView>
        <Header title={"PET PERDIDO"} navigation={() => navigation.goBack()} />

        <Portal>
          <Modal visible={isOpen} onDismiss={handleCloseModal}>
            <Pressable
              onPress={() => {
                handleSearchPicture();
              }}
              style={{
                flexDirection: "row",
                backgroundColor: "#FFCB14",
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
        <View>
          <TouchableOpacity
            style={{ marginBottom: 20}}
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

        <Controller
          name="category"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onChange, value } }) => (
            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  marginVertical: 15,
                  paddingHorizontal: 35,
                  fontSize: 18,
                }}
              >
                Selecione uma categoria:
              </Text>
              <ListNav
                hideAll={true}
                selectedCategory={value}
                setSelectedCategory={onChange}
              />
            </View>
            // cada category tem um id especifico definido no componente de navegação
          )}
        />

        <Controller
          name="name"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
            </View>
          )}
        />

        {Boolean(errors.name) && (
          <HelperText type="error" visible={Boolean(errors.name)}>
            {errors.name.message}
          </HelperText>
        )}
        <Controller
          name="address"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
            </View>
          )}
        />
        {Boolean(errors.address) && (
          <HelperText type="error" visible={Boolean(errors.address)}>
            {errors.address.message}
          </HelperText>
        )}
        <Controller
          name="description"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onBlur, onChange, value } }) => (
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
            </View>
          )}
        />
        {Boolean(errors.description) && (
          <HelperText type="error" visible={Boolean(errors.description)}>
            {errors.description.message}
          </HelperText>
        )}
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
              <View
                style={{
                  marginTop: 10,
                  paddingHorizontal: 35,
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 18 }}>Selecione o genero:</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Pressable
                    onPress={() => onChange(false)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>Macho</Text>
                    <Ionicons
                      style={{ paddingHorizontal: 6 }}
                      name="male-outline"
                      color="blue"
                      size={25}
                    />
                  </Pressable>

                  <Switch
                    value={value}
                    onValueChange={(value) => onChange(value)}
                    trackColor={{ true: "red", false: "blue" }}
                    thumbColor={"#D9D9D9"}
                  />

                  <Pressable
                    onPress={() => onChange(true)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons
                      style={{ paddingHorizontal: 6 }}
                      name="female-outline"
                      color="red"
                      size={25}
                    />
                    <Text>Fêmea</Text>
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>

        <Controller
          name="phone"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onBlur, onChange, value } }) => (
            <View style={{ marginHorizontal: 35, marginVertical: 5 }}>
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
            </View>
          )}
        />
        {Boolean(errors.phone) && (
          <HelperText type="error" visible={Boolean(errors.phone)}>
            {errors.phone.message}
          </HelperText>
        )}
        <View style={{ marginTop: 20, marginBottom: 60 }}>
          <Button
            animating={isLoading ? true : false}
            isLoading={isLoading}
            disabled={isLoading}
            onPress={handleSubmit(onSubmit)}
            text="POSTAR PET"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#FFEDCB",
  },
});
