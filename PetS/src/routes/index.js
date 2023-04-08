import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRoutes, Routes } from "./stackRoutes";

const Stack = createNativeStackNavigator();
const RootRoutes = () => {
    return (
        <Stack.Navigator initialRouteName={"AuthRoutes"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
            <Stack.Screen name="Routes" component={Routes} />
        </Stack.Navigator>
    )
}

export default RootRoutes;