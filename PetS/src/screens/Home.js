// imports dos componentes nativos
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";

// imports das imagens
import Logo from "../../assets/Logo.png";
import Image1 from "../../assets/petsImages/petNotFound.png";
// imports dos componentes personalizados
import CardAnimal from "../components/CardAnimal.js";

// imports dos componentes do react native paper
import { Avatar, FAB, Modal, Portal } from "react-native-paper";
import { ListNav } from "../components/ListNav.js";

// imports das telas
import { Profile } from "./Profile.js";

// imports dos icones

// imports do react
import { useState } from "react";
import { pets } from "../../exampleApi";

const imageSize = Dimensions.get("window").width / 2.2;
// export da tela
export const Home = ({ navigation }) => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { open } = state;
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);

  const filteredPets = {
    0: pets,
    1: pets.filter((p) => p.category === 1),
    2: pets.filter((p) => p.category === 2),
    3: pets.filter((p) => p.category === 3),
    4: pets.filter((p) => p.category === 4),
    5: pets.filter((p) => p.category === 5),
    6: pets.filter((p) => p.category === 6),
  };

  return (
    <SafeAreaView style={style.content}>
      <FlatList
        data={filteredPets[selectedCategory]}
        numColumns={2}
        ListHeaderComponentStyle={{ marginBottom: 30 }}
        columnWrapperStyle={{ alignItems: "center", justifyContent: "center" }}
        ListEmptyComponent={
          <>
            <View style={{alignItems: 'center', marginBottom:40}}>
              <Image
                source={Image1}
                resizeMode="contain"
                style={{ width: 306, height: 183 }}
              />
              <Text style={{margin: 50, fontWeight: '500'}}>NENHUM PET ENCONTRADO</Text>
            </View>
          </>
        }
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
                alignItems: "center",
              }}
            >
              <View style={{}}>
                <Image
                  source={Logo}
                  resizeMode="contain"
                  style={{ width: 82, height: 80 }}
                />
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate(Profile)}
                >
                  <Avatar.Text
                    size={54}
                    label="LM"
                    labelStyle={{ color: "#342E29" }}
                    style={{ backgroundColor: "#FFCB14" }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginVertical: 15,
                alignItems: "center",
              }}
            >
              <View>
                <Text style={[style.text, { fontWeight: "bold" }]}>
                  Animais Perdidos:
                </Text>
              </View>
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 150,
                    height: 23,
                    borderRadius: 6,
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("LostPets")}
                  activeOpacity={0.5}
                >
                  <Text style={style.text}>VER MAIS</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {pets.map((item) => (
                  <CardAnimal
                    sizes={130}
                    onPress={() =>
                      navigation.navigate("CardAnimal", { pet: item })
                    }
                    item={item}
                  />
                ))}
              </ScrollView>
            </View>

            <View style={{ marginVertical: 30, marginHorizontal: 15 }}>
              <Text style={[style.text, { fontWeight: "bold" }]}>
                Navegue pelas categorias:
              </Text>
            </View>

            <ListNav
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </>
        }
        renderItem={({ item }) => (
          <CardAnimal
            style={{ alignSelf: "center", marginBottom: 15 }}
            item={item}
            sizes={imageSize}
            onPress={() => navigation.navigate("CardAnimal", { pet: item })}
          />
        )}
      />

      <FAB.Group
        open={open}
        //visible
        variant="surface"
        fabStyle={{ borderRadius: 30, backgroundColor: "#FFCB14" }}
        //style={{backgroundColor:"red"}}
        backdropColor="#00000050"
        color="#342E29"
        icon={open ? "chevron-up" : "plus"}
        actions={[
          {
            icon: "bone",
            color: "#B67830",
            style: {
              borderWidth: 1,
              backgroundColor: "#FFCB14",
              borderColor: "#B67830",
            },
            labelStyle: { color: "#342E29" },
            containerStyle: {
              backgroundColor: "#FFCB14",
              borderWidth: 2,
              borderColor: "#B67830",
            },
            label: "PUBLICAR PET PERDIDO",
            onPress: () => navigation.navigate("PostLostPet"),
          },
          {
            icon: "heart",
            color: "red",
            style: {
              borderWidth: 1,
              backgroundColor: "#FFCB14",
              borderColor: "#B67830",
            },
            labelStyle: { color: "#342E29" },
            containerStyle: {
              backgroundColor: "#FFCB14",
              borderWidth: 2,
              borderColor: "#B67830",
            },
            label: "PUBLICAR PET PARA ADOÇÃO",
            onPress: () => navigation.navigate("PostPet"),
          },
        ]}
        onStateChange={onStateChange}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#FFEDCB",
  },

  text: {
    color: "#342E29",
    fontSize: 16,
  },
});
