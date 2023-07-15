// imports dos componentes nativos
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

// imports dos componentes do paper
import { Avatar } from "react-native-paper";

// imports dos icones
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// imports das telas de navegação
import { MyPosts } from "../screens/MyPosts.js";
import { MyLostPets } from "./MyLostPets.js";
import { EditProfile } from "./EditProfile.js";

// import das imagens
import Logo from "../../assets/Logo.png";
import { Header } from "../components/Header.js";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const onLogout = async () => {
    await AsyncStorage.removeItem("@session");
    navigation.navigate("AuthRoutes");
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
      <Header title={"MEU PERFIL"} navigation={() => navigation.goBack()} />

      <View style={{}}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("EditProfile", { user: user })}
          style={{
            marginBottom: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Avatar.Text
            size={109}
            label={user?.name[0]}
            labelStyle={{ color: "#342E29" }}
            style={{ backgroundColor: "#FFCB14" }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 18 }}>{user?.name}</Text>
            <Text>{user?.phone}</Text>
          </View>

          <FontAwesome name="edit" size={24} color={"#B67830"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            paddingHorizontal: 20,
            opacity: 0.7,
            color: "#342E29",
            fontSize: 16,
          }}
        >
          Conta
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginVertical: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(MyPosts)}
      >
        <Text style={{ fontSize: 16, marginLeft: 40 }}>
          Meus pets publicados
        </Text>
        <FontAwesome style={{ marginRight: 40 }} name="angle-right" size={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginVertical: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(MyLostPets)}
      >
        <Text style={{ fontSize: 16, marginLeft: 40 }}>Meus pets perdidos</Text>
        <FontAwesome style={{ marginRight: 40 }} name="angle-right" size={24} />
      </TouchableOpacity>

      <View
        style={{ borderWidth: 0.4, opacity: 0.5, borderColor: "#E4B283" }}
      ></View>
      <TouchableOpacity
        style={{
          marginVertical: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        activeOpacity={0.5}
        onPress={onLogout}
      >
        <Text style={{ marginLeft: 40, color: "#D45152", fontSize: 16 }}>
          Sair da conta
        </Text>
        <Ionicons
          style={{ marginRight: 30 }}
          name="exit-outline"
          size={24}
          color="#D45152"
        />
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          marginTop: 120,
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          source={Logo}
          style={{ width: 80, height: 78 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 12, marginTop: 5 }}>
          {" "}
          PetS - Versão {"1.0.0"}
        </Text>
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
