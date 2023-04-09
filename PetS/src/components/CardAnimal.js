import { Card } from "react-native-paper";

import { Text, TouchableOpacity, View } from "react-native";

export default CardAnimal = ({ item }) => {
    return (
        <TouchableOpacity>
            <Card.Content>
                <View style={{}}>
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
                                position: 'absolute',
                                alignItems: "baseline",
                                padding: 5,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20
                            }}
                        >
                            <Text style={{ color: "#EAEAEA" }}>{item?.name}</Text>
                        </View>
                    </View>
                </View>
            </Card.Content>
        </TouchableOpacity>
    );
};
