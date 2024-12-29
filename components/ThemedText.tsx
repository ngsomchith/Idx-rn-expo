import { Text, type TextProps, StyleSheet, Platform } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  children,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Fonction qui conditionne le rendu en fonction de la plateforme
  const renderContent = () => {
    if (Platform.OS === 'web') {
      // Pour le web, utiliser <h1>, <h2> pour les titres
      if (type === 'title') {
        return <h1 style={{ color, margin : 0 }}>{children}</h1>;
      } else if (type === 'subtitle') {
        return <h2 style={{ color, margin : 0, fontFamily: 'Roboto', }}>{children}</h2>;
      } else if (type === 'link') {
        return <a style={{ color, margin : 0,  fontFamily: 'Roboto',  }} {...rest}>{children}</a>;
      } else  {
        return <h3 style={{ color, margin : 0,  fontFamily: 'Roboto',  }}>{children}</h3>;
      }
    }
    // Pour React Native (mobile), utiliser Text
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
        {children}
      </Text>
    );
  };

  return renderContent();
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color:'white',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    // lineHeight: 32,
    margin:0
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:0
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});


// import { Text, type TextProps, StyleSheet } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedTextProps = TextProps & {
//   lightColor?: string;
//   darkColor?: string;
//   type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
// };

// export function ThemedText({
//   style,
//   lightColor,
//   darkColor,
//   type = 'default',
//   ...rest
// }: ThemedTextProps) {
//   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

//   return (
//     <Text
//       style={[
//         { color },
//         type === 'default' ? styles.default : undefined,
//         type === 'title' ? styles.title : undefined,
//         type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
//         type === 'subtitle' ? styles.subtitle : undefined,
//         type === 'link' ? styles.link : undefined,
//         style,
//       ]}
//       {...rest}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   default: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   defaultSemiBold: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontWeight: '600',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     lineHeight: 32,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   link: {
//     lineHeight: 30,
//     fontSize: 16,
//     color: '#0a7ea4',
//   },
// });
