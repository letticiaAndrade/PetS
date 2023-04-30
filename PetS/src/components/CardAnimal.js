import { Card } from "react-native-paper";

import { Text, TouchableOpacity, View } from "react-native";

export default CardAnimal = ({ item, onPress = null }) => {
    return (
        <TouchableOpacity style={{ overflow: 'hidden', borderRadius: 14, marginHorizontal: 5 }} onPress={onPress} activeOpacity={0.8}>

            <View style={{ overflow: "hidden" }}>
                <Card.Cover
                    resizeMode="contain"
                    style={{ width: 142, height: 142 }}
                    source={{ uri: item?.image }}
                />
                <View style={{ justifyContent: "center" }}>
                    <View
                        style={{
                            width: 142,
                            height: 70,
                            backgroundColor: "#342E29",
                            opacity: 0.7,
                            position: "absolute",
                            alignItems: "baseline",
                            padding: 5,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}
                    >
                        <Text style={{ color: "#EAEAEA" }}>{item?.name}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    );
};
