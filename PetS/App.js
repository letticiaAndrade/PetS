import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from "./src/routes"
import { Provider } from 'react-native-paper';

export default function App() {
  return (
    <>
      <Provider>

        <NavigationContainer>
          <Routes />
        </NavigationContainer>

        <StatusBar style="auto" />
      </Provider>
    </>

  );
}


