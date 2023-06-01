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
  Linking
} from "react-native";
import Feather from "@expo/vector-i/*  */cons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
const imageSize = Dimensions.get("window").width;

export const CardAnimal = ({ navigation, route }) => {
  const pet = route?.params?.pet;
  // função de linking para o whatsapp
  const handleLinking =()=> {
    // ternario para decisão de artigo 
    const article = pet?.gender === "Masculino"? "o": "a"
    Linking.openURL(`https://wa.me/55${pet?.phone}?text=Olá, achei ${artigo} ${pet?.name} lind${artigo}! Gostaria de saber sobre a adoção.`)
  }
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

          <Pressable
            style={{
              position: "absolute",
              top: 15,
              left: 15,
              borderRadius: 60,
              padding: 5,
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
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {pet?.name}
            </Text>
            <Ionicons name={Boolean(pet?.gender==="Feminino")? "female-outline": "male-outline"} color= {Boolean(pet?.gender==="Feminino")? "red": "blue"} size={30} />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Feather name="map-pin" size={20} />
            <Text style={{ marginLeft: 5 }}>{pet?.address}</Text>
          </View>
        </View>

        <Text style={{ marginLeft: 20, fontSize: 16, textAlign: "left" }}>
          {pet?.description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 30,
            alignItems: "center",
            marginTop: 80,
            marginBottom: 10,
          }}
        >
         {/*  <Avatar.Text
          
            style={{ marginRight: 10, backgroundColor: '#FFCB14'}}
            label={pet?.ownerName[0]}
          />
          <View>

            <Text style={{ fontWeight: 500, fontSize: 17 }}>
              {pet?.ownerName}
            </Text>
            <Text style={{ opacity: 0.7 }}>03/08/2002</Text>
          </View> */}
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ ...style.buttonWpp, marginHorizontal: 15 }}
            onPress={()=> handleLinking()}
          >
            <Ionicons
              name="logo-whatsapp"
              size={24}
              color={"green"}
            />
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
