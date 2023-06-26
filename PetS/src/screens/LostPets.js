import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  View,
  Image,
} from "react-native";
import { ListNav } from "../components/ListNav.js";
import { Header } from "../components/Header.js";
import { useEffect, useState } from "react";
import { pets } from "../../exampleApi.js";
import { Text } from "react-native-paper";

import Image1 from "../../assets/petsImages/petNotFound.png";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { database } from "../../config/firebaseConfig.js";
const imageSize = Dimensions.get("window").width / 2.2;
export const LostPets = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [lostPets, setLostPets] = useState([]);
 
  const getLostPets = async () => {
    const q = query(
      collection(database, "perdidos"),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q).then((list) => {
      setLostPets(list?.docs?.map((pet) => pet?.data()));
    });
    const list = querySnapshot.map((doc) => {
      return doc.data();
    });
    setLostPets(list);
  };

  useEffect(() => getLostPets(), []);

  const filteredPets = {
    0: lostPets,
    1: lostPets.filter((p) => p?.category === 1),
    2: lostPets.filter((p) => p?.category === 2),
    3: lostPets.filter((p) => p?.category === 3),
    4: lostPets.filter((p) => p?.category === 4),
    5: lostPets.filter((p) => p?.category === 5),
    6: lostPets.filter((p) => p?.category === 6),
  };

  return (
    <SafeAreaView style={style.content}>
      <FlatList
        data={filteredPets[selectedCategory]}
        numColumns={2}
        ListHeaderComponentStyle={{ marginBottom: 30 }}
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 60 }}>
            <Image
              source={Image1}
              resizeMode="contain"
              style={{ width: 306, height: 183 }}
            />
            <Text style={{ margin: 50, fontWeight: "500" }}>
              NENHUM PET ENCONTRADO
            </Text>
          </View>
        }
        columnWrapperStyle={{ alignItems: "center", justifyContent: "center" }}
        ListHeaderComponent={
          <>
            <Header
              title="PETS PERDIDOS"
              navigation={() => navigation.goBack()}
            />
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
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#FFEDCB",
  },
});
