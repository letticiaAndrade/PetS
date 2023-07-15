import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import Button from "../components/Button.js";
import { Header } from "../components/Header.js";
import { Controller, useForm } from "react-hook-form";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "../../config/firebaseConfig.js";

export const EditProfile = ({ route, navigation }) => {
  const { user } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: user?.name, phone: user?.phone, email: user?.email },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    const userRef = collection(database, "users");
    updateDoc(doc(userRef, user.uid), { ...data })
      .then(() => alert("Deu certo!!"))
      .catch(() => alert("Ocorreu um erro!"))
      .finally(() => setIsLoading(false));

    // batch.update(sfRef, { population: 1000000 });

    console.warn(data);
  };

  return (
    <SafeAreaView style={style.content}>
      <Header title={"EDITAR PERFIL"} navigation={() => navigation.goBack()} />
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Avatar.Text
          size={109}
          label={user?.name[0]}
          labelStyle={{ color: "#342E29" }}
          style={{ backgroundColor: "#FFCB14" }}
        />
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              mode="outlined"
              label="NOME COMPLETO"
              onChangeText={onChange}
              error={Boolean(errors.name)}
              activeOutlineColor="#342E29"
              left={<TextInput.Icon icon="account-outline" />}
            />
          )}
        />
        {Boolean(errors.name) && (
          <HelperText type="error" visible={Boolean(errors.name)}>
            {errors.name.message}
          </HelperText>
        )}
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              mode="outlined"
              label="NOME COMPLETO"
              onChangeText={onChange}
              error={Boolean(errors.phone)}
              activeOutlineColor="#342E29"
              left={<TextInput.Icon icon="account-outline" />}
            />
          )}
        />
        {Boolean(errors.phone) && (
          <HelperText type="error" visible={Boolean(errors.phone)}>
            {errors.phone.message}
          </HelperText>
        )}
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Campo obrigatório." }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              mode="outlined"
              label="NOME COMPLETO"
              onChangeText={onChange}
              error={Boolean(errors.email)}
              activeOutlineColor="#342E29"
              left={<TextInput.Icon icon="account-outline" />}
            />
          )}
        />
        {Boolean(errors.email) && (
          <HelperText type="error" visible={Boolean(errors.email)}>
            {errors.email.message}
          </HelperText>
        )}
      </View>

      <View style={{ marginTop: 50 }}>
        <Button disabled={isLoading} isLoading={isLoading} text={"SALVAR ALTERAÇÕES"} onPress={handleSubmit(onSubmit)} />
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
