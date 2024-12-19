// source : https://www.npmjs.com/package/react-native-vector-icons#web-setup
  // Use the prebuilt version of RNVI located in the dist folder
  import Icon from 'react-native-vector-icons/FontAwesome';
// Generate the required CSS
import iconFont from 'react-native-vector-icons/FontAwesome';
// import iconFont from'@expo/vector-icons';


import { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// import RenderHtmlIcon from '@/components/RenderHtmlIcon';

// Obtenir les dimensions de l'écran
const { width } = Dimensions.get('window');
// import { MaterialIcons } from '@expo/vector-icons';
import { I } from '@expo/html-elements';

export default function TabLayout() {
  const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: FontAwesome;
  }`;

  // Create a stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';

  // Append the iconFontStyles to the stylesheet
  // if (style.styleSheet) {
  //   style.styleSheet.cssText = iconFontStyles;
  // } else {
  //   style.appendChild(document.createTextNode(iconFontStyles));

  // }
  style.appendChild(document.createTextNode(iconFontStyles));


  // Inject the stylesheet into the document head
  document.head.appendChild(style);

  const colorScheme = useColorScheme();
  useEffect(() => {
    // Charger la police en arrière-plan
    Icon.loadFont();
  }, []);

   const RenderHtmlIcon = () => {
    return (
      <View style={{backgroundColor:'grey' }}>
        <I>
          {/* <FontAwesome name="user" size={24} color="black" /> */}
          {/* <MaterialIcons name="home" size={30} color="#900" /> */}
          <Icon name="rocket" size={30} color="#900" />
        </I>
      </View>
    );
  };

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
            
            RenderHtmlIcon()

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
            <IconSymbol size<i class="fa-solid fa-house-chimney"></i>={width > 600 ? 32 : 28} name="paperplane.fill" color={color} />
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
