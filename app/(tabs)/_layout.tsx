import { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedTitle } from '@/components/ThemedTitle';
import { ThemedView } from '@/components/ThemedView';

// Obtenir les dimensions de l'écran
const { width } = Dimensions.get('window');


export default function TabLayout() {
  const colorScheme = useColorScheme();


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
          title: 'Index',
          tabBarIcon: ({ color }) => (
            // <ThemedView>
            // <ThemedTitle> Explorer Page</ThemedTitle>
            <IconSymbol size={width > 600 ? 32 : 28} name="house.fill" color={color} />
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
          title: 'Articles',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={width > 600 ? 32 : 28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={width > 600 ? 32 : 28} name="house.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
