import React from 'react';
import { Text, type TextProps, StyleSheet, Platform } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export type ThemedTitleProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedTitle({
  style,
  lightColor,
  darkColor,
  type = 'default',
  children,
  ...rest
}: ThemedTitleProps) {
  darkColor = Colors.primaryText
  lightColor = Colors.primaryText
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Helper function to render HTML tags for Web
  const renderContent = () => {
    if (Platform.OS === 'web') {
      if (type === 'title') {
        return <h1>{children}</h1>; // Use <h1> for title on web
      } else if (type === 'subtitle') {
        return <h2>{children}</h2>; // Use <h2> for subtitle on web
      }
    }
    // For React Native (mobile), render Text component with styles
    return <Text style={[{ color }, style]} {...rest}>{children}</Text>;
  };

  return renderContent();
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color:Colors.primaryText
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    paddingHorizontal: 10,
    color:Colors.primaryText
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 32,
    paddingHorizontal: 10,
    color:Colors.primaryText
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
    paddingHorizontal: 10,
  },
});
