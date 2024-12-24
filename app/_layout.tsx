import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { AuthProvider } from './AuthContext';
import { ActivityIndicator } from 'react-native';
// import AuthProvider from './AuthContext';
// import { AuthProvider } from '@/app/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    Roboto: require('@/assets/fonts/Roboto-Regular.ttf')
  });

  // const [fontsLoaded] = useFonts({
  //   // Déclare ta police ici
  //   'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
  //   // 'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   // Affiche un indicateur de chargement si les polices ne sont pas encore prêtes
  //   return <ActivityIndicator size="large" />;
  // }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (

    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontFamily: 'SpaceMono', // Utilise la police déclarée
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>



        <StatusBar style="auto" />

      </ThemeProvider>

    </AuthProvider >
  );
}
