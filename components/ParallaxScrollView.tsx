import { useEffect, type PropsWithChildren, type ReactElement } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import ThisDevice from '@/constants/ThisDevice';
import { Colors } from '@/constants/Colors';
import Header from './Header';
import { useAuth } from '@/app/AuthContext';


type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {

  const { articlesList, setArticlesList, thisParams,
    thisUseFB, cart, setCart, currentUser,
    addToCartFn, removeFromCartFn } = useAuth()

  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const device = ThisDevice().device;
  const HEADER_HEIGHT = screenHeight;

  useEffect(() => {
    console.log('HEADER_HEIGHT=', HEADER_HEIGHT)
  }, [HEADER_HEIGHT])

  const styles = StyleSheet.create({
    container: {
      maxHeight: device.height,
      height: device.height * 0.9,
      width: screenWidth,
      position:'relative',
      // borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
      backgroundColor: Colors.highlightBG,
      paddingHorizontal: 0
    },
    header: {
      height: '100%', //
      maxHeight: HEADER_HEIGHT,
      width: '100%',
      maxWidth: screenWidth,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'flex-start',

      // minHeight: myDevice.height ,
      // height:  myDevice.height ,
      // borderColor: 'green', borderStyle: 'solid', borderWidth: 10,
    },
    content: {
      flex: 1,
      padding: device.width > 450 ? 32 : 10,
      gap: 16,
      overflow: 'hidden',
      backgroundColor: 'transparent'
    },
  });


  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>

          {/* <View
          // style={styles.headerContainer}
          >
            <Header
              addToCart={undefined}
              removeFromCart={undefined}
              articlesList={articlesList}
              cart={cart}
              navigation={undefined}
            />


          </View> */}
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

