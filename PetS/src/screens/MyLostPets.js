import { StyleSheet, SafeAreaView } from "react-native";
import { Header } from "../components/Header.js";
export const MyLostPets = ({ navigation }) => {
  return (
    <SafeAreaView style={style.content}>
      <Header
        title={"MEUS PETS PERDIDOS"}
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
