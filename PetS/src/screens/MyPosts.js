import { StyleSheet, SafeAreaView } from "react-native";
import { Header } from "../components/Header";

export const MyPosts = ({ navigation }) => {
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
