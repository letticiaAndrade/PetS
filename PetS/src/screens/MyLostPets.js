import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";

import { Header } from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { database } from "../../config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import CardAnimal from "../components/CardAnimal";

export const MyLostPets = ({ navigation }) => {
  const [myPets, setMyPets] = useState([]);
  const imageSize = Dimensions.get("window").width / 2.2;

  const getMyPets = async () => {
    const session = await AsyncStorage.getItem("@session");
    const user = JSON.parse(session);

    const q = query(
      collection(database, "perdidos"),
      where("owner.uid", "==", user?.uid)
    );

    const querySnapshot = await getDocs(q).then((list) => {
      setMyPets(list?.docs?.map((pet) => pet?.data()));
    });

    const list = querySnapshot.map((doc) => {
      return doc.data();
    });

    setMyPets(list);
  };

  useEffect(() => {
    getMyPets();
  }, []);

  return (
    <SafeAreaView style={style.content}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title="MEUS PETS PERDIDOS"
              navigation={() => navigation.goBack()}
            />
          </>
        }
        numColumns={2}
        ListHeaderComponentStyle={{ marginBottom: 30 }}
        columnWrapperStyle={{ alignItems: "center", justifyContent: "center" }}
        data={myPets}
        renderItem={({ item }) => (
          <CardAnimal
            item={item}
            isLost={false}
            sizes={imageSize}
            style={{ alignSelf: "center", marginBottom: 15 }}
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
