import { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookOpen, faCoffee, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

// Obtenir les dimensions de l'écran
const { width } = Dimensions.get('window');


export default function TabLayout() {
  const colorScheme = useColorScheme();

  console.log("process.env.NODE_ENV ", process.env.NODE_ENV); // Doit afficher 'development'

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: 'absolute', // Pour iOS, conserver le flou
            },
          }),
          height: width > 600 ? 70 : 50, // Ajuster la hauteur selon la largeur de l'écran
          paddingHorizontal: width > 600 ? 50 : 20, // Ajuster la marge pour les grands écrans
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => (
            // <ThemedView>
            // <ThemedTitle> Explorer Page</ThemedTitle>
            //    faBookOpen
                  <FontAwesomeIcon icon={faHouseChimney}  size={32} color="brown"/>
            // <IconSymbol size={width > 600 ? 32 : 28} name="house.fill" color={color} />
            // </ThemedView>
          ),
        }}
      />

      
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={width > 600 ? 32 : 28} name="paperplane.fill" color={color} />
          ),
        }}
      /> */}


      <Tabs.Screen
        name="articles"
        options={{
          title: 'Menus',
          tabBarIcon: ({ color }) => (
            // <IconSymbol size={width > 600 ? 32 : 28} name="paperplane.fill" color={color} />
                  <FontAwesomeIcon icon={faBookOpen}  size={32} color="brown"/>
          ),
        }}
      />
      
    </Tabs>
  );
}
