import React from 'react';
import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

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
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const renderContent = () => {
    if (type === 'title') {
      return <h1>{children}</h1>;
    } else if(type === 'subtitle'){
      return <h2>{children}</h2>;
    }
    else {
      return children;
    }
  };

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    >
      {renderContent()}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 32,
    paddingHorizontal: 10
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
    paddingHorizontal: 10
  },
});
// // 
// // 
// <ThemedTitle type="title">Ceci est un titre</ThemedTitle>
// <ThemedTitle type="default">Ceci est un texte par défaut</ThemedTitle>



// // 
// // 
