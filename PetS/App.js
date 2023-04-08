import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Welcome } from './src/screens/Welcome.js'
import { SignIn } from './src/screens/SignIn.js';

export default function App() {
  return (
    <>

      <SignIn />
      <StatusBar style="auto" />
    </>

  );
}


