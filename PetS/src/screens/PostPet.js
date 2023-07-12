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

import uuid from "react-native-uuid";
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
import { ListNav } from "../components/ListNav.js";
import { Header } from "../components/Header.js";

// imports dos hooks
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { database, storage, storageRef } from "../../config/firebaseConfig.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { uploadString, ref, uploadBytes } from "firebase/storage";

export const PostPet = ({ navigation, route }) => {
  const [imageRoot, setImageRoot] = useState(null);

  const pet = route?.params?.pet;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(pet ? pet?.image : "");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: pet ? pet?.name : "teste",
      gender: pet ? pet?.gender : "feminino",
      category: pet ? pet?.category : 1,
      phone: pet ? pet?.phone : "7599999",
      address: pet ? pet?.address : "teste",
      description: pet ? pet?.description : "teste",
    },
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    // setIsLoading(true);
    const dataPet = {
      image: selectedImage,
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

    // console.error(imageRoot);
    
    const storageRef = ref(storage, `pets/${uuid.v4()}`);


    const response = await fetch(selectedImage);
    const blob = await response.blob();

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log(snapshot.metadata);

      snapshot.metadata.fullPath
    }).finally(() => setIsLoading(false)); 
    
 /*    uploadString(storageRef, imageRoot?.base64, "base64", { contentType: "" })
      .then((snapshot) => {
        console.log("Uploaded a base64 string!");
        // console.warn(snapshot);
      })
      .finally(() => setIsLoading(false)); */

    return setIsLoading(false);
    // adicionando um DOCUMENTO na colletion (pode já estar criada ou não, vai adicionar nesse caso o objeto pet (que criamos acima))

    if (pet) {
      //  ATUALIZAR PET
    } else {
      addDoc(collection(database, "adoção"), dataPet)
        .then(() => {
          navigation.navigate("Home");
        })
        // uma mensagem de erro de que não foi possivel postar o pet
        .catch(() => console.warn("Ocorreu um erro"))
        .finally(() => setIsLoading(false));
    }
  };

  // função de buscar foto
  const handleSearchPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // quality: 1,
      base64: true,
      aspect: [4, 3],
    });

    setImageRoot(result.assets[0]);

    setSelectedImage(result?.assets[0]?.uri);
    handleCloseModal();
  };

  // função de tirar foto
  const handleTakePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // quality: 1,
      base64: true,
      aspect: [4, 3],
    });
    setImageRoot(result);

    setSelectedImage(result?.assets[0]?.uri);
    handleCloseModal();
  };

  useEffect(() => {
    const getSession = async () => {
      const session = await AsyncStorage.getItem("@session");
      setUser(JSON.parse(session));
    };
    getSession();
  }, []);

  return (
    <SafeAreaView style={style.content}>
      <ScrollView>
        <Header
          title={pet ? "ATUALIZAR PET" : "POSTAR PARA ADOÇÃO"}
          navigation={() => navigation.goBack()}
        />

        <Portal>
          <Modal visible={isOpen} onDismiss={handleCloseModal}>
            <Pressable
              onPress={() => {
                handleSearchPicture();
              }}
              style={style.buttonModal}
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
              style={style.buttonModal}
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
            style={{ marginBottom: 20 }}
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
              <AntDesign name="plus" size={30} color={"#342E29"} />
            </View>
          </TouchableOpacity>
        </View>

        <Controller
          name="category"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onBlur, onChange, value } }) => (
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
                activeOutlineColor="#B67830"
                textColor="#342E29"
                activeUnderlineColor="#FFEDCB"
                label={"NOME PET"}
                mode="outlined"
                style={style.input}
                left={<TextInput.Icon icon="pencil-outline" size={22} />}
              />

              {Boolean(errors.name) && (
                <HelperText type="error" visible={Boolean(errors.name)}>
                  {errors.name.message}
                </HelperText>
              )}
            </View>
          )}
        />

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
                activeOutlineColor="#B67830"
                textColor="#342E29"
                activeUnderlineColor="#FFEDCB"
                label={"LOCALIDADE"}
                mode="outlined"
                style={style.input}
                left={<TextInput.Icon icon="map-marker-outline" size={22} />}
              />

              {Boolean(errors.address) && (
                <HelperText type="error" visible={Boolean(errors.address)}>
                  {errors.address.message}
                </HelperText>
              )}
            </View>
          )}
        />

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
                activeOutlineColor="#B67830"
                textColor="#342E29"
                activeUnderlineColor="#FFEDCB"
                label={"DESCRIÇÃO"}
                mode="outlined"
                style={style.input}
                left={<TextInput.Icon icon="email-outline" />}
              />
              {Boolean(errors.description) && (
                <HelperText type="error" visible={Boolean(errors.description)}>
                  {errors.description.message}
                </HelperText>
              )}
            </View>
          )}
        />

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
                <Text style={{ fontSize: 18 }}>Selecione o gênero:</Text>
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
                activeOutlineColor="#B67830"
                textColor="#342E29"
                activeUnderlineColor="#FFEDCB"
                label={"TELEFONE"}
                mode="outlined"
                style={style.input}
                left={<TextInput.Icon icon="phone-outline" />}
              />

              {Boolean(errors.phone) && (
                <HelperText type="error" visible={Boolean(errors.phone)}>
                  {errors.phone.message}
                </HelperText>
              )}
            </View>
          )}
        />

        <View style={{ marginTop: 20, marginBottom: 60 }}>
          <Button
            animating={isLoading ? true : false}
            disabled={isLoading}
            isLoading={isLoading}
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
  input: {
    width: 354,
    backgroundColor: "#FFEDCB",
  },
  buttonModal: {
    flexDirection: "row",
    backgroundColor: "#FFCB14",
    borderColor: "#B67830",
    borderRadius: 8,
    padding: 5,
    justifyContent: "center",
    top: 340,
  },
});
