import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRoutes } from "./stackRoutes";

const Stack = createNativeStackNavigator();
const RootRoutes = () => (
    <Stack.Navigator initialRouteName={"AuthRoutes"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthRoutes" component={AuthRoutes} />

    </Stack.Navigator>
)

export default RootRoutes;