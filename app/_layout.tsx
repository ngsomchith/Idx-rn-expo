import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider } from '@/app/AuthContext';


  // import Icon from 'react-native-vector-icons/dist/FontAwesome';
  // // Generate the required CSS
  // import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();



  // const [fontsLoaded] = useFonts({
  //   // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  //   ...Ionicons.font, // Inclure toutes les polices nécessaires
  // });

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }


  // // =========================

  // // // Use the prebuilt version of RNVI located in the dist folder
  // // import Icon from 'react-native-vector-icons/dist/FontAwesome';

  // // // Generate the required CSS
  // // import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
  // const iconFontStyles = `@font-face {
  //   src: url(${iconFont});
  //   font-family: FontAwesome;
  // }`;

  // // Create a stylesheet
  // const style = document.createElement('style');
  // style.type = 'text/css';

  // // Append the iconFontStyles to the stylesheet
  // if (style.styleSheet) {
  //   style.styleSheet.cssText = iconFontStyles;
  // } else {
  //   style.appendChild(document.createTextNode(iconFontStyles));
  // }

  // // Inject the stylesheet into the document head
  // document.head.appendChild(style);


  // ==========================

  return (

    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        {/* <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack> */}

        <Slot />
        <StatusBar style="auto" />

      </ThemeProvider>

    </AuthProvider>
  );
}
