import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SignUp } from './src/screens/SignUp.js';
import { NavigationContainer } from '@react-navigation/native';

import Routes from "./src/routes"

export default function App() {
  return (
    <>

      <NavigationContainer>
        <Routes />
      </NavigationContainer>

      <StatusBar style="auto" />
    </>

  );
}


