import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignUp, SignIn, Welcome, Profile, Home, LostPets } from "../screens";

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

export const Routes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="LostPets" component={LostPets} />
        </Stack.Navigator>
    );
};
