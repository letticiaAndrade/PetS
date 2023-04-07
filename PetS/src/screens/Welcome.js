//imports dos componentes nativos
import { View, Text, Image, ScrollView, Dimensions } from "react-native";

// imports dos componentes personalizados
import ButtonStep from "../components/ButtonStep.js";
// import hooks nativos
import { useEffect, useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// imports das imagens do app
import pet1 from "../../assets/pet1.png";
import pet2 from "../../assets/pet2.png";
import logo from "../../assets/Logo.png";
import pet3 from "../../assets/pet3.png";

export const Welcome = () => {
    // criando a constante para pegar a tela inteira do celular e ocupar na screen da visao
    const sizeScreen = Dimensions.get("window").width;

    // state para controlar os steps
    const [step, setStep] = useState(0);

    // criando a referencia do scroll
    const scrollRef = useRef();

    // criando função de proximo step
    const nextStep = () => {
        console.log("Funçaõ de pular step");

        scrollRef.current.scrollTo({ y: 0, x: step * sizeScreen, animated: true });
    };

    useEffect(() => {
        nextStep();
    }, [step]);

    return (
        <>
            <ScrollView
                ref={scrollRef}
                // ativa o scroll horizontal
                horizontal
                // faz com que o usuŕaio não passe de tela com o dedo
                scrollEnabled={true}
                style={{ flex: 1, backgroundColor: "#B67830" }}
            >
                <View style={{ width: sizeScreen }}>
                    <View style={{ alignItems: "center", margin: 50 }}>
                        <Image
                            source={logo}
                            style={{ width: 170, height: 167 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ alignItems: "flex-end", marginRight: 20 }}>
                        <Image
                            style={{ width: 137, height: 104 }}
                            source={pet1}
                            resizeMode="contain"
                        />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 60,
                        }}
                    >
                        <Text style={{ color: "#EAEAEA", fontSize: 34 }}>
                            Está à procura de
                            {"\n"}seu animalzinho de{"\n"}estimação?
                        </Text>
                    </View>

                    <View
                        style={{
                            height: 84,
                            width: sizeScreen,
                            paddingRight: 20,
                            marginTop: 80,
                            alignItems: "flex-end",
                        }}
                    >
                        <FontAwesome.Button
                            name="chevron-right"
                            color="#B67830"
                            borderRadius={20}
                            size={40}
                            style={{
                                alignSelf: "center",
                                backgroundColor: "#FFEDCB",
                                height: 100,
                                width: 100,
                            }}
                            iconStyle={{ marginHorizontal: 30 }}
                            onPress={() => setStep(1)}
                        ></FontAwesome.Button>
                    </View>
                    <View></View>
                </View>

                <View style={{ width: sizeScreen }}>
                    <View style={{ alignItems: "center", margin: 50 }}>
                        <Image
                            source={logo}
                            style={{ width: 170, height: 167 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View
                        style={{
                            alignItems: "flex-start",
                            marginLeft: 80,
                            marginBottom: 20,
                        }}
                    >
                        <Image
                            style={{ width: 156, height: 156 }}
                            source={pet2}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#EAEAEA", fontSize: 34 }}>
                            Aqui você pode{"\n"}encontrar um amigo{"\n"}pra toda a vida!!
                        </Text>
                    </View>

                    <View
                        style={{
                            height: 84,
                            width: sizeScreen,
                            paddingRight: 20,
                            marginTop: 70,
                            alignItems: "flex-end",
                        }}
                    >
                        <FontAwesome.Button
                            name="chevron-right"
                            color="#B67830"
                            borderRadius={20}
                            size={40}
                            style={{
                                alignSelf: "center",
                                backgroundColor: "#FFEDCB",
                                height: 100,
                                width: 100,
                            }}
                            iconStyle={{ marginHorizontal: 30 }}
                            onPress={() => setStep(2)}
                        ></FontAwesome.Button>
                    </View>
                    <View></View>
                </View>

                <View style={{ width: sizeScreen }}>
                    <View style={{ alignItems: "center", margin: 50 }}>
                        <Image
                            source={logo}
                            style={{ width: 170, height: 167 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ alignItems: "flex-end", marginRight: 20 }}>
                        <Image
                            style={{ width: 170, height: 148 }}
                            source={pet3}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text
                            style={{
                                paddingLeft: 70,
                                color: "#00D5B0",
                                fontSize: 34,
                                marginBottom: 10,
                            }}
                        >
                            ADOTE
                        </Text>
                        <Text
                            style={{ alignSelf: "center", color: "#EAEAEA", fontSize: 34 }}
                        >
                            Amor de verdade é encontrado e não comprado!
                        </Text>
                    </View>

                    <View
                        style={{
                            height: 84,
                            width: sizeScreen,
                            paddingRight: 20,
                            marginTop: 40,
                            alignItems: "flex-end",
                        }}
                    >
                        <FontAwesome.Button
                            name="chevron-right"
                            color="#B67830"
                            borderRadius={20}
                            size={40}
                            style={{
                                alignSelf: "center",
                                backgroundColor: "#FFEDCB",
                                height: 100,
                                width: 100,
                            }}
                            iconStyle={{ marginHorizontal: 30 }}
                            onPress={() => setStep(3)}
                        ></FontAwesome.Button>
                    </View>
                    <View></View>
                </View>

                <View style={{ width: sizeScreen }}>
                    <Text>step4</Text>
                    <View style={{ alignItems: "center", margin: 70 }}>
                        <Image
                            source={logo}
                            style={{ width: 170, height: 167 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View
                        style={{
                            height: 84,
                            width: sizeScreen,
                            paddingRight: 20,
                            paddingTop: 30,
                            alignItems: "flex-end",
                            borderWidth: 2,
                        }}
                    >
                        <FontAwesome.Button
                            name="chevron-right"
                            color="#B67830"
                            borderRadius={20}
                            size={49}
                            style={{
                                alignSelf: "center",
                                backgroundColor: "#FFEDCB",

                                height: 100,
                                width: 150,
                            }}
                            iconStyle={{ marginHorizontal: 45 }}
                            onPress={() => setStep(4)}
                        ></FontAwesome.Button>
                    </View>
                </View>
            </ScrollView>

            <View
                style={{
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 65,
                    left: 60,

                }}
            >
                {["", "", ""].map((item, i) => (
                    <View
                        // a key com função de de direcionar o qual step atual
                        key={i}
                        style={{
                            backgroundColor: i === step ? "#00D5B0" : "gray",
                            height: 15,
                            // condição para mudar os dimensões do progress button quando selecionado o step
                            width: i === step ? 30 : 15,
                            borderRadius: 30,
                            marginHorizontal: 5,
                        }}
                    />
                ))}
            </View>
        </>
    );
};
