import { useEffect, type PropsWithChildren, type ReactElement } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
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


type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const myDevice = ThisDevice().device;
  const HEADER_HEIGHT = screenHeight;

  useEffect(() => {
    console.log('HEADER_HEIGHT=', HEADER_HEIGHT)
  }, [HEADER_HEIGHT])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 8,
      backgroundColor :Colors.primaryBG
    },
    header: {
      height: '100%', //
      maxHeight: HEADER_HEIGHT,
      width:'100%',
      maxWidth: screenWidth,
      overflow: 'hidden',
      display:'flex',
      justifyContent:'flex-start',

      // minHeight: myDevice.height ,
      // height:  myDevice.height ,
      // borderColor: 'green', borderStyle: 'solid', borderWidth: 10,
    },
    content: {
      flex: 1,
      padding: 32,
      gap: 16,
      overflow: 'hidden',
      backgroundColor: 'transparent'
    },
  });

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     borderColor: 'yellow', borderStyle: 'solid', borderWidth: 4,
  //     backgroundColor: Colors.primaryBG
  //   },
  //   header: {
  //     // height: HEADER_HEIGHT,
  //     minHeight: myDevice.height ,
  //     height:  myDevice.height ,
  //     overflow: 'hidden',
  //     borderColor: 'green', borderStyle: 'solid', borderWidth: 4,
  //   },
  //   content: {
  //     // flex: 1,
  //     padding: 32,
  //     gap: 16,
  //     overflow: 'hidden',
  //     backgroundColor:'transparent'
  //   },
  // });
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
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

