import { Card } from "react-native-paper";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// exportando a lista de categorias
export const ListNav = () => {
    const listCategory = [
        {
            _id: "1",
            image: "",
            title: "Cães",
        },
        {
            _id: "2",
            image: "",
            title: "Gatos",
        },
        {
            _id: "3",
            image: "",
            title: "Coelhos",
        },
        {
            _id: "4",
            image: "",
            title: "Aves",
        },
        {
            _id: "5",
            image: "",
            title: "Répteis",
        },
        {
            _id: "6",
            image: "",
            title: "Peixes",
        },
    ];
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.viewspaceCards}>
                    <TouchableOpacity
                        onPress={""}
                        activeOpacity={0.5}
                        style={{ alignItems: "center" }}
                    >
                        <View style={style.contentCard}>
                            <FontAwesome5 name="dog" color="#E4B283" size={40} />
                        </View>
                        <Text style={style.textNav}>Cães</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.viewspaceCards}>
                    <TouchableOpacity onPress={""} style={{ alignItems: "center" }}>
                        <View style={style.contentCard} >
                            <FontAwesome5 name="cat" color="#E4B283" size={40} />
                        </View>
                        <Text style={style.textNav}>Gatos</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.viewspaceCards}>
                    <TouchableOpacity
                        onPress={() => console.log("coelho")}
                        style={{ alignItems: "center" }}
                    >
                        <View style={style.contentCard}>
                            <Icon name="rabbit" color="#E4B283" size={40} />
                        </View>
                        <Text style={style.textNav}>Coelhos</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.viewspaceCards}>
                    <TouchableOpacity onPress={""} style={{ alignItems: "center" }}>
                        <View style={style.contentCard}>
                            <Icon name="bird" color="#E4B283" size={40} />
                        </View>
                        <Text style={style.textNav}>Aves</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.viewspaceCards}>
                    <TouchableOpacity onPress={""} style={{ alignItems: "center" }}>
                        <View style={style.contentCard}>
                            <Icon name="snake" color="#E4B283" size={40} />
                        </View>
                        <Text style={style.textNav}>Reptéis</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.viewspaceCards}>
                    <TouchableOpacity onPress={""} style={{ alignItems: "center" }}>
                        <View style={style.contentCard}>
                            <FontAwesome5 name="fish" color="#E4B283" size={40} />
                        </View>
                        <Text style={style.textNav}>Peixe</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    textNav: {
        color: "#E4B283",
        fontSize: 18,
        marginTop: 5
    },
    viewspaceCards: {
        marginHorizontal: 10,
    },
    contentCard: {
        borderWidth: 1,
        borderColor: "#E4B283",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 8,
    },
});
