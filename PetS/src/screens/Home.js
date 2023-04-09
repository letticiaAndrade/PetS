import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

import Logo from "../../assets/Logo.png";
import { Avatar } from "react-native-paper";
import CardAnimal from "../components/CardAnimal";
import { LostPets } from "./LostPets";
import { Profile } from "./Profile";
import { ListNav } from "../components/ListNav";

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
    return (
        <View style={{ flex: 1, backgroundColor: "#FFEDCB" }}>
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
        </View>
    );
};

const style = StyleSheet.create({
    text: {
        color: "#342E29",
        fontSize: 16,
    },
});
