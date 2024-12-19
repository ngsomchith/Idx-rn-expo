/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#f2c2c2';// '#fff';

export const Colors: { [key: string]: string } = {
  orange: '#f57c00',
  blue: '#039be5',
  black: '#222222',
  white: '#ffffff',
  mediumGray: '##9a9293',
  red: '#fc5c65',
  primaryBG:'#821e1e',
  // primaryBG:'rgba(130, 30, 30,.7)',
  
  primaryText:'white',
  secondaryBG:'#f2c2c2',
  secondaryText:'#333333',
  accentBG:'#f8b8008a',
  accentText:'#ffffff',
  highlightBG:'#294e80',
  highlightText:'#ffffff',
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#821e1e',//'#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
 

  // export const Colors = {
  // };
};
