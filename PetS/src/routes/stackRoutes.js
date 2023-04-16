import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignUp, SignIn, Welcome, Profile, Home, LostPets, MyPosts, MyLostPets, EditProfile } from "../screens";

const Stack = createNativeStackNavigator();

// exportando a rota de autenticação
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
// exportando outra rota
export const Routes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="LostPets" component={LostPets} />
            <Stack.Screen name="MyPosts" component={MyPosts} />
            <Stack.Screen name="MyLostPets" component={MyLostPets} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    );
};
