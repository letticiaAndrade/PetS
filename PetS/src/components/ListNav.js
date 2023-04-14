import { Card } from "react-native-paper";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


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
                <View>
                    <TouchableOpacity>
                        <Card.Content>
                            <FontAwesome5.Button onPress={""} name="dog">

                            </FontAwesome5.Button>
                        </Card.Content>
                        <Card.Title title="Cães" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
