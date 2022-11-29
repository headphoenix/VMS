import { Navigation } from "./src/infrastructure/navigation";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme/index"

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }


  return (
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider theme={theme}>
    <AuthenticationContextProvider>
                <Navigation />
        </AuthenticationContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style='auto' />
    </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
