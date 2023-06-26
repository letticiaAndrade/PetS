import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import { Provider } from "react-native-paper";

import { decode } from "base-64";

if (typeof atob === "undefined") {
  global.atob = decode;
}

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
