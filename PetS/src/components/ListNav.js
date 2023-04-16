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
            <ScrollView horizontal style={{}} showsHorizontalScrollIndicator={false}>

                <View>
                    <TouchableOpacity onPress={""} style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}>
                            <FontAwesome5 name="dog" size={40} />
                        </View>
                        <Card.Title title="Cães" />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={""} style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}>
                            <FontAwesome5 name="cat" size={40} />
                        </View>
                        <Card.Title title="Gatos" />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={""} style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}>
                            <FontAwesome5 name="dog" size={40} />
                        </View>
                        <Card.Title title="Coelhos" />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={""} style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}>
                            <FontAwesome5 name="dog" size={40} />
                        </View>
                        <Card.Title title="Aves" />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={""} style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}>
                            <FontAwesome5 name="dog" size={40} />
                        </View>
                        <Card.Title title="Reptéis" />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={""} style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}>
                            <FontAwesome5 name="fish" size={40} />
                        </View>
                        <Card.Title title="Peixes" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};
