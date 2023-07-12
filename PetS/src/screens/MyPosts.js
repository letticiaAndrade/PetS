import { StyleSheet, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { database } from "../../config/firebaseConfig";
import { getDocs, where } from "firebase/firestore";

export const MyPosts = ({ navigation }) => {
  const [user, setUSer] = useState();
  const [pets, setPets] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [myPets, setMypets] = useState([]);

  const getMyPets = async ()=> {
    const q = query(
      collection(database, "adoção"),
      orderBy("createdAt", "desc"), 
      where()
    );
    const querySnapshot = await getDocs(q).then((list) => {
      setPets(list?.docs?.map((pet) => pet?.data()));
    });

    const list = querySnapshot.map((doc) => {
      return doc.data();
    });

    setPets(list);
  }

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
      <Header
        title={"MINHAS PUBLICAÇÕES"}
        navigation={() => navigation.goBack()}
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
