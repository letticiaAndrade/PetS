// imports dos componentes nativos
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState } from "react";

// imports de componentes personalizados
import Button from "../components/Button.js";

// imports do react native paper
import { ActivityIndicator, HelperText, TextInput } from "react-native-paper";

// import dos icones
import Ionicons from "@expo/vector-icons/Ionicons";

// import das imagens
import Logo from "../../assets/Logo.png";

// import de outros arquivos para rotas
import { SignUp } from "./SignUp.js";
import { Routes } from "../routes/stackRoutes.js";

// import do hook form
import { Controller, useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../config/firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

export const SignIn = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  // todas as constantes usadas do hook form e os valores
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  // função para o envio do form no banco de dados
  const onSubmit = (data) => {
    console.warn(data);
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data?.email, data?.password)
      .then(async (userCredential) => {
        const authUser = userCredential?.user;
        const userRef = doc(database, "users", authUser?.uid);
        const userData = await getDoc(userRef);
        await AsyncStorage.setItem("@session", JSON.stringify(userData.data()) );
        navigation.navigate("Routes");
      })
      .catch(() => console.warn("Ocorreu um erro"))
      .finally(() => setIsLoading(false));

    /* navigation.navigate(Routes); */
  };

  return (
    <SafeAreaView style={style.content}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Ionicons.Button
              name="arrow-back-circle"
              backgroundColor={"#FFEDCB"}
              color={"#B67830"}
              size={54}
              activeOpacity={1}
              style={{ width: 60, height: 54 }}
              onPress={() => navigation.goBack()}
              iconStyle={{ width: 54, height: 54 }}
            ></Ionicons.Button>
          </View>
          <View>
            <Image
              source={Logo}
              resizeMode="contain"
              style={{ width: 94, height: 92 }}
            />
          </View>
        </View>

        <View style={{ margin: 30 }}>
          <Text
            style={{
              color: "#342E29",
              fontWeight: "bold",
              fontSize: 32,
              marginBottom: 10,
            }}
          >
            Bem vindo de volta!
          </Text>
          <Text style={{ color: "#342E29", opacity: 0.6, fontSize: 20 }}>
            Preencha os campos{"\n"}para entrar na conta.
          </Text>
        </View>

        <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Campo obrigatório.",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={Boolean(errors?.email)}
                label="Email"
                mode="outlined"
                activeOutlineColor="#342E29"
                left={<TextInput.Icon icon="email-outline" />}
              />
            )}
          />
          {Boolean(errors?.email) && (
            <HelperText type="error" visible={Boolean(errors?.email)}>
              {errors?.email?.message}
            </HelperText>
          )}
        </View>

        <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Campo obrigatório." }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={Boolean(errors?.password)}
                selectionColor="#FFEDCB"
                activeOutlineColor="#342E29"
                secureTextEntry={true}
                label="Senha"
                mode="outlined"
                textColor="#342E29"
                activeUnderlineColor="#FFEDCB"
                left={<TextInput.Icon icon="lock-outline" />}
              />
            )}
          />
          {Boolean(errors?.password) && (
            <HelperText type="error" visible={Boolean(errors?.password)}>
              {errors?.password?.message}
            </HelperText>
          )}
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            animating={isLoading ? true : false}
            isLoading={isLoading}
            disabled={isLoading}
            onPress={handleSubmit(onSubmit)}
            text={"ENTRAR"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 30,
          }}
        >
          <Text style={{ color: "#342E29", fontSize: 20, paddingRight: 10 }}>
            Não tem uma conta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(SignUp)}>
            <Text style={{ color: "#B67830", fontSize: 20, letterSpacing: 1 }}>
              Registre-se
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
});
