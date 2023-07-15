import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const imageSize = Dimensions.get("window").width;

export const CardAnimal = ({ navigation, route }) => {
  const [user, setUser] = useState(null);
  const pet = route?.params?.pet;
  const isLost = route?.params?.isLost || false;
  // função de linking para o whatsapp
  const handleLinking = () => {
    // ternario para decisão de artigo
    const article = pet?.gender === "Masculino" ? "o" : "a";
    Linking.openURL(
      `https://wa.me/55${pet?.phone}?text=Olá, achei ${article} ${pet?.name} lind${article}! Gostaria de saber sobre a adoção.`
    );
  };

  /* pegando a session do usuario, cache */
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
        {/* <Header title={"Card animal visitante"} navigation={()=> navigation.goBack()}/> */}

        <View
          style={{
            position: "relative",
            width: imageSize,
            height: imageSize,
            backgroundColor: "gray",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: pet?.image }}
          />

          <View
            style={{
              top: 15,
              // left: 15,
              alignItems: "center",
              position: "absolute",
              flexDirection: "row",
              paddingHorizontal: 15,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Pressable
              style={{
                padding: 5,
                borderRadius: 60,
                alignItems: "center",
                backgroundColor: "#B67830",
              }}
              onPress={() => navigation.goBack()}
            >
              <Feather
                style={{ margin: 0, padding: 0 }}
                name="arrow-left"
                color={"#FFEDCB"}
                size={45}
              />
            </Pressable>

         {/*    {pet?.owner?.uid === user?.uid && (
              <Pressable
                onPress={() => isLost ? navigation.navigate("PostLostPet", { pet: pet }) : navigation.navigate("PostPet", { pet: pet })}
              >
                <Feather
                  size={35}
                  name="edit"
                  color="#B67830"
                  style={{ margin: 0, padding: 0 }}
                />
              </Pressable>
            )} */}
          </View>
        </View>

        <View
          style={{
            padding: 20,
            backgroundColor: "#E4B283",
            marginHorizontal: 15,
            borderRadius: 8,
            top: -20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500" }}>{pet?.name}</Text>
            <Ionicons
              name={
                Boolean(pet?.gender === "Feminino")
                  ? "female-outline"
                  : "male-outline"
              }
              color={Boolean(pet?.gender === "Feminino") ? "red" : "blue"}
              size={30}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Feather name="map-pin" size={20} />
            <Text style={{ marginLeft: 5 }}>{pet?.address}</Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            textAlign: "left",
          }}
        >
          {pet?.description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 30,
            alignItems: "center",
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <Avatar.Text
            style={{ marginRight: 10, backgroundColor: "#FFCB14" }}
            label={pet?.owner?.name[0] || ""}
          />
          <View>
            <Text style={{ fontWeight: 500, fontSize: 17 }}>
              {pet?.owner?.name}
            </Text>
            <Text style={{ opacity: 0.7 }}>
              {new Date(String(pet?.createdAt)).toLocaleDateString("br")}
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ ...style.buttonWpp, marginHorizontal: 15 }}
            onPress={() => handleLinking()}
          >
            <Ionicons name="logo-whatsapp" size={24} color={"green"} />
            <Text style={{ color: "green", paddingHorizontal: 40 }}>
              ENTRAR EM CONTATO
            </Text>
          </TouchableOpacity>
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
  buttonWpp: {
    borderWidth: 1,
    width: "85%",
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 15,
    paddingVertical: 5,
    borderColor: "green",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
