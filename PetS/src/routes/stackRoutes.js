import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignUp, SignIn, Welcome } from "../screens";

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};
