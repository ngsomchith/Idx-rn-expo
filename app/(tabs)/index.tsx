import { Image, StyleSheet, Platform, ScrollView, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedTitle } from '@/components/ThemedTitle';
import { ArticleList } from '@/components/ShowArticles';
import ArticlesToShow from '@/components/ArticlesToShow';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-elements'; // Ou votre composant Button préféré
import { ExternalLink } from '@/components/ExternalLink';
import BackgroundImage from '@/components/BackGroundImage';


export default function HomeIndex() {

  // const MyComponent = () => {
  //   const { isSmallScreen } = useMediaQuery({
  //     queries: {
  //       smallScreen: '(max-width: 768px)',
  //     },
  //   });
  
  //   return (
  //     <View style={[styles.container, isSmallScreen && styles.smallScreen]}>
  //       {/* Your content */}
  //     </View>
  //   );
  // };
  
  // const styles = StyleSheet.create({
  //   container: {
  //     // Default styles
  //   },
  //   smallScreen: {
  //     // Styles for small screens
  //   },
  // });


  return (
    // <ExternalLink href="https://docs.expo.dev/router/introduction">
    //   <ThemedText type="link">Learn more</ThemedText>
    // </ExternalLink>
    <ParallaxScrollView //background image
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
         <BackgroundImage />
       // <Image
       //   source={require('@/assets/images/livreurs-a-TOULON.webp')}
       //   style={styles.reactLogo}
       // />
      }>

      <View style={styles.pageContainer}>

        <ThemedView style={styles.titleContainer}>
          <ThemedTitle type="title">Faites livrer vos repas à TOULON

          </ThemedTitle>
          <HelloWave />

        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedTitle type="subtitle">Savourez votre expérience gourmande dans cette ville aux multiples saveurs !</ThemedTitle>


          <ThemedText type="defaultSemiBold">Vous pouvez faire des économies </ThemedText>

          <ThemedText type="default">tout en soutenant {' '}

            <ThemedText type="defaultSemiBold">
              vos restaurateurs locaux ! {' '}
            </ThemedText>
          </ThemedText>
          <ThemedText type="default">
            {/* <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: 'cmd + d',
                android: 'cmd + m',
                web: 'F12'
              })}
            </ThemedText>{' '} */}
            <ThemedText type="defaultSemiBold">
              Commandez vos plats préférés {' '}
            </ThemedText >
            directement auprès des restaurateurs
            et profitez {' '}
            <ThemedText type="defaultSemiBold">
              des tarifs avantageux, {' '}
            </ThemedText>

            sans intermédiaires ni frais cachés.
          </ThemedText>

        </ThemedView>
        <ThemedView style={styles.stepContainer} >
          <ThemedTitle type="subtitle">🍕🍣🍔 Des saveurs pour tous les goûts, à prix malin !</ThemedTitle>

        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="defaultSemiBold">📍 Livraison rapide à Toulon et alentours.</ThemedText>
          <ThemedText type="default">
            Découvrez, commandez, dégustez : c'est bon pour vous et pour votre portefeuille ! 🥂✨
          </ThemedText>
        </ThemedView>


        <ThemedView style={styles.stepContainer}>
          <ThemedTitle type="subtitle">Un site simple et facile à retenir :</ThemedTitle>
          <ThemedText type="defaultSemiBold">👉 livraison-repas-toulon.fr</ThemedText>

        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ArticlesToShow />
          {/* <ArticleList /> */}
          {/* <ArticleList articles={articles0} /> */}
        </ThemedView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    paddingHorizontal:'10%',
    position: 'relative',
    borderColor: 'white', borderStyle: 'solid', borderWidth: 2,
  },
  titleContainer: {
    borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
    // position:'absolute',
    // top: 0,
    // left: 0,
    zIndex: 99999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    // position: 'absolute',
  },
  cardContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white', // Couleur de fond par défaut
  },
  text: {
    marginBottom: 10,
    color: 'grey'
  }


}
);
