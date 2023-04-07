import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Welcome } from './src/screens/Welcome.js'
  ;
export default function App() {
  return (
    <>
      <Welcome />
      <StatusBar style="auto" />
    </>

  );
}


