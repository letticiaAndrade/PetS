import { StyleSheet, SafeAreaView } from "react-native";
import { ListNav } from "../components/ListNav.js";
import { Header } from "../components/Header.js";
export const LostPets = ({ navigation }) => {
  return (
    <SafeAreaView style={style.content}>
      <Header title="PETS PERDIDOS" navigation={() => navigation.goBack()} />
      <ListNav />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#FFEDCB",
  },
});
