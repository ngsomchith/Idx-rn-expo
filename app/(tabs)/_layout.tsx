import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { Tabs } from '@react-navigation/bottom-tabs'; // Importer Tabs depuis React Navigation
import { NavigationContainer } from '@react-navigation/native';
import IconSymbol from 'react-native-vector-icons/MaterialCommunityIcons'; // Exemple d'icône
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
// import Colors from './constants/Colors'; // Assume que tu as un fichier pour les couleurs
// import HapticTab from './components/HapticTab'; // Ton composant pour les vibrations
// import TabBarBackground from './components/TabBarBackground'; // Ton composant pour le fond flou

const Tab = Tabs();
const { width } = Dimensions.get('window'); // Obtenir la largeur de l'écran

// Écrans
function IndexScreen() {
  return <ScreenComponent title="Index" />;
}

function ExploreScreen() {
  return <ScreenComponent title="Explore" />;
}

function HomeScreen() {
  return <ScreenComponent title="Home" />;
}

// Composant générique pour simplifier les écrans
const ScreenComponent = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </View>
);

// App principale
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors['light'].tint, // Couleur de l'onglet actif
          headerShown: false, // Masquer l'en-tête
          tabBarButton: HapticTab, // Ajouter le feedback haptique
          tabBarBackground: TabBarBackground, // Fond personnalisé
          tabBarStyle: {
            ...Platform.select({
              ios: {
                position: 'absolute', // Style absolu pour iOS
              },
            }),
            height: width > 600 ? 70 : 50, // Hauteur dynamique
            paddingHorizontal: width > 600 ? 50 : 20, // Marges dynamiques
          },
        }}
      >
        {/* Définir les onglets */}
        <Tab.Screen
          name="Index"
          component={IndexScreen}
          options={{
            title: 'Index',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={width > 600 ? 32 : 28} name="home" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={width > 600 ? 32 : 28} name="send" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={width > 600 ? 32 : 28} name="home-outline" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// import { useEffect, useState } from 'react';
// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Dimensions, Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// // Obtenir les dimensions de l'écran
// const { width } = Dimensions.get('window');


// export default function TabLayout() {
//   const colorScheme = useColorScheme();



// function useResponsive() {
//   const [isLargeScreen, setIsLargeScreen] = useState(Dimensions.get('window').width > 600);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(Dimensions.get('window').width > 600);
//     };

//     Dimensions.addEventListener('change', handleResize);

//     return () => Dimensions.removeEventListener('change', handleResize);
//   }, []);

//   return isLargeScreen;
// }


//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: {
//           ...Platform.select({
//             ios: {
//               position: 'absolute', // Pour iOS, conserver le flou
//             },
//           }),
//           height: width > 600 ? 70 : 50, // Ajuster la hauteur selon la largeur de l'écran
//           paddingHorizontal: width > 600 ? 50 : 20, // Ajuster la marge pour les grands écrans
//         },
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Index',
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={width > 600 ? 32 : 28} name="house.fill" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={width > 600 ? 32 : 28} name="paperplane.fill" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={width > 600 ? 32 : 28} name="house.fill" color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
