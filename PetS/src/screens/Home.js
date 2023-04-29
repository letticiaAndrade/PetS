// imports dos componentes nativos
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Pressable,
} from "react-native";

// imports das imagens
import Logo from "../../assets/Logo.png";
// imports dos componentes personalizados
import CardAnimal from "../components/CardAnimal";

// imports dos componentes do react native paper
import { Avatar, Modal } from "react-native-paper";
import { ListNav } from "../components/ListNav";

// imports das telas
import { LostPets } from "./LostPets";
import { Profile } from "./Profile";
import { PostPet } from "./PostPet";
import { PostLostPet } from "./PostLostPet";

// imports dos icones
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

// imports do react 
import { useState } from "react";

// export da tela
export const Home = ({ navigation }) => {
    const pets = [
        {
            _id: 1,
            image:
                "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name: "Lucca",
            gender: "M",
        },

        {
            _id: 2,
            image:
                "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            name: "Lucca",
            gender: "M",
        },

        {
            _id: 3,
            image:
                "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
            name: "Lucca",
            gender: "M",
        },

        {
            _id: 4,
            image:
                "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Lucca",
            gender: "M",
        },

        {
            _id: 5,
            image:
                "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Lucca",
            gender: "M",
        },
    ];

    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={style.content}>
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
                        onPress={() => navigation.navigate(LostPets)}
                        activeOpacity={0.5}
                    >
                        <Text style={style.text}>VER MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {pets.map((item) => (
                        <View>
                            <CardAnimal item={item} />
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={{ marginVertical: 30, marginHorizontal: 15 }}>
                <Text style={[style.text, { fontWeight: "bold" }]}>
                    Navegue pelas categorias:
                </Text>
            </View>

            <ListNav />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onDismiss={() => setModalVisible(false)}
                style={{ alignItems: 'flex-end' }}
                dismissable={true}
            >
                <Pressable
                    onPress={() => {
                        navigation.navigate(PostLostPet);
                        setModalVisible(false);
                    }}
                    style={{
                        alignSelf: 'flex-end',
                        flexDirection: "row",
                        backgroundColor: "#FFCB14",
                        marginTop: 300,
                        marginVertical: 10,
                        borderWidth: 2,
                        borderColor: "#B67830",
                        borderRadius: 8,
                        padding: 5,

                    }}
                >
                    <Feather name="github" size={21} color={"#342E29"} style={{ marginRight: 30, marginLeft: 10 }} />
                    <Text style={{ marginRight: 10, color: '#342E29' }}>PUBLICAR PET PERDIDO</Text>
                </Pressable>

                <Pressable
                    onPress={() => {
                        navigation.navigate(PostPet);
                        setModalVisible(false);
                    }}
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#FFCB14",
                        marginVertical: 10,
                        borderWidth: 2,
                        borderColor: "#B67830",
                        borderRadius: 8,
                        padding: 5,

                    }}
                >
                    <Feather name="github" size={21} color={"#342E29"} style={{ marginRight: 30, marginLeft: 10 }} />
                    <Text style={{ color: '#342E29' }}>PUBLICAR PET PARA ADOÇÃO</Text>
                </Pressable>
            </Modal>

            <View style={{ position: 'absolute', top: 600, left: 300 }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    activeOpacity={1}

                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFCB14",
                        borderWidth: 2,
                        borderColor: "#B67830",
                        width: 90,
                        height: 90,
                        borderRadius: 70,
                    }}
                >
                    <AntDesign name="plus" size={60} color={"#342E29"} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
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
