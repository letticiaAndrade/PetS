import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const ListNav = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const listCategory = [
        {
            _id: "1",
            title: "Cães",
        },
        {
            _id: "2",
            title: "Gatos",
        },
        {
            _id: "3",
            title: "Coelhos",
        },
        {
            _id: "4",
            title: "Aves",
        },
        {
            _id: "5",
            title: "Répteis",
        },
        {
            _id: "6",
            title: "Peixes",
        },
    ];

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {listCategory.map((category) => (
                    <View style={style.viewspaceCards} key={category._id}>
                        <TouchableOpacity
                            onPress={() => setSelectedCategory(category._id)}
                            style={{ alignItems: "center" }}
                        >
                            <View
                                style={[
                                    style.contentCard,
                                    selectedCategory === category._id && { backgroundColor: "#E4B283" },
                                ]}
                            >
                                {category._id === "1" && (
                                    <FontAwesome5 name="dog" color={Boolean(selectedCategory === category._id ? "#fff" : "#E4B283")} size={40} />
                                )}
                                {category._id === "2" && (
                                    <FontAwesome5 name="cat" color="#E4B283" size={40} />
                                )}
                                {category._id === "3" && (
                                    <Icon name="rabbit" color="#E4B283" size={40} />
                                )}
                                {category._id === "4" && (
                                    <Icon name="bird" color="#E4B283" size={40} />
                                )}
                                {category._id === "5" && (
                                    <Icon name="snake" color="#E4B283" size={40} />
                                )}
                                {category._id === "6" && (
                                    <FontAwesome5 name="fish" color="#E4B283" size={40} />
                                )}
                            </View>
                            <Text style={[style.textNav, selectedCategory === category._id && { color: "#fff" }]}>
                                {category.title}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

/*   return (
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
 */

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
