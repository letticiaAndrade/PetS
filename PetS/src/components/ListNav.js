import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const ListNav = ({ selectedCategory, setSelectedCategory }) => {
  const listCategory = [
    {
      _id: 0,
      title: "Todos",
    },
    {
      _id: 1,
      title: "Cães",
    },
    {
      _id: 2,
      title: "Gatos",
    },
    {
      _id: 3,
      title: "Coelhos",
    },
    {
      _id: 4,
      title: "Aves",
    },
    {
      _id: 5,
      title: "Répteis",
    },
    {
      _id: 6,
      title: "Peixes",
    },
  ];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ width: 20 }} />
        {listCategory.map((category) => (
          <View style={style.viewspaceCards} key={category._id}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setSelectedCategory(category._id)}
              style={{ alignItems: "center" }}
            >
              <View
                style={[
                  style.contentCard,
                  selectedCategory === category._id && {
                    backgroundColor: "#E4B283",
                  },
                ]}
              >
                {category._id === 0 && (
                  <Ionicons
                    name="paw"
                    color={
                      Boolean(selectedCategory === category._id)
                        ? "#FFEDCB"
                        : "#E4B283"
                    }
                    size={40}
                  />
                )}
                {category._id === 1 && (
                  <FontAwesome5
                    name="dog"
                    color={
                      Boolean(selectedCategory === category._id)
                        ? "#FFEDCB"
                        : "#E4B283"
                    }
                    size={40}
                  />
                )}
                {category._id === 2 && (
                  <FontAwesome5
                    name="cat"
                    color={
                      Boolean(selectedCategory === category._id)
                        ? "#FFEDCB"
                        : "#E4B283"
                    }
                    size={40}
                  />
                )}
                {category._id === 3 && (
                  <Icon
                    name="rabbit"
                    color={
                      Boolean(selectedCategory === category._id)
                        ? "#FFEDCB"
                        : "#E4B283"
                    }
                    size={40}
                  />
                )}
                {category._id === 4 && (
                  <Icon
                    name="bird"
                    color={
                      Boolean(selectedCategory === category._id)
                        ? "#FFEDCB"
                        : "#E4B283"
                    }
                    size={40}
                  />
                )}
                {category._id === 5 && (
                  <Icon
                    name="snake"
                    color={
                      Boolean(selectedCategory === category._id)
                        ? "#FFEDCB"
                        : "#E4B283"
                    }
                    size={40}
                  />
                )}
                {category._id === 6 && (
                  <FontAwesome5
                    name="fish"
                    color={
                      Boolean(selectedCategory === category._id)
                        ? "#FFEDCB"
                        : "#E4B283"
                    }
                    size={40}
                  />
                )}
              </View>
              <Text style={style.textNav}>{category.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ width: 20 }} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  textNav: {
    color: "#E4B283",
    fontSize: 18,
    marginTop: 5,
  },
  viewspaceCards: {
    marginHorizontal: 10,
  },
  contentCard: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E4B283",
    borderRadius: 8,
    width: 70,
    height: 70,
  },
});
