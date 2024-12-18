import { Image, StyleSheet, Platform, ScrollView, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedTitle } from '@/components/ThemedTitle';
import BackgroundImage from '@/components/BackGroundImage';
import LoginScreen from '@/firebase';
import ArticlesToShow from '@/components/articles/ArticlesToShow';
import ContactForm from '@/components/contact/ContactCallable';
import ThisDevice from '@/constants/ThisDevice';
import ExternalLink from '@/components/ExternalLink';
// import { ExternalLink } from '@/components/ExternalLink';


export default function HomeIndex() {
  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH
  const widthMobile = 650
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

  const padHorizNotMobile = MAXWIDTH > widthMobile ? '10%' : 0


  const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: 'transparent',
      height: '100%',
      width: '100%',
      paddingHorizontal: padHorizNotMobile,
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

  return (
    // <ExternalLink href="https://docs.expo.dev/router/introduction">
      // <ThemedText type="link">Learn more</ThemedText>
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
          {/* <ArticlesToShow /> */}
          
          <ContactForm />
          <LoginScreen />
          {/* <Profile /> */}
        </ThemedView>
      </View>
    </ParallaxScrollView>
  );
}


