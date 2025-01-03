import { StyleSheet, Image, Platform, View, Text, Dimensions } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import ThisDevice from '@/constants/ThisDevice';

export default function TabTwoScreen() {

  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH


  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const maxScreenArticle = 800
  const widthMobile = 450
  const sectionPriceHeight = 60
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'


  const widthArticle = screenWidth > widthMobile ? screenWidth * 0.4 : widthMobile
  const heightArticle = screenHeight - 100
  const widthContainerArticle = screenWidth


  const styles = StyleSheet.create({

    reactLogo: {
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
      resizeMode: 'cover',
      height: '100%',
      // height:device.heightBody,
      // minHeight:device.heightBody,
      width: '100%',
      margin: 'auto',
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    pageContainer: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      width: '100%',
      marginHorizontal: 'auto',
      padding: 4,
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 5,
      maxWidth: maxScreenArticle,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
      // minWidth: '90%',
      width: '100%',
      marginVertical: 40,
      padding: 4,
      paddingVertical: 10,
      backgroundColor: "transparent",
      // backgroundColor: "grey",// Colors.primaryBG,
      // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
      display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'
    },
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });

  return (
    <ParallaxScrollView //background image

      headerBackgroundColor={{ light: '#A1CEDC', dark: Colors.primaryBG }}
      headerImage={ // BackgroundImage
        // <BackgroundImage />
        <View // cadre backGround
          style={{
            height: screenHeight,
            width: screenWidth,
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
            padding: 0,

            position: 'relative',

          }}>
          <Image
            source={require('@/assets/images/la_cuisiniere_Delicatessen.png')}
            style={styles.reactLogo}
          />

          <View // BG TEXT
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              width: screenWidth,
              height: screenHeight
              // backgroundColor: Colors.highlightBG
              // backgroundColor: '#294e807d', width: '84%', padding: 5, margin: 'auto' 
            }}
          >
            <View style={{
              backgroundColor: Colors.highlightBGlight,
              padding: 10

            }}>
              <ThemedText type='defaultSemiBold' style={styles.text}>La fraicheur : je vous garantis . </ThemedText>
              <ThemedText type='defaultSemiBold' style={styles.text}>Le meilleur goût : aussi .</ThemedText>


            </View>
          </View>
        </View>

      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">RGPD </ThemedText>
      </ThemedView>
      {/* <ThemedText>This app includes example code to help you get started.</ThemedText> */}

      {/* <Collapsible title="Contact"></Collapsible> */}

      <Collapsible title="RGPD">
        <ThemedView style={styles.pageContainer}>


          <ThemedView style={[styles.stepContainer, {
            backgroundColor: Colors.primaryBG,
            padding: 10,
            width: '96%', margin: 'auto',
            borderRadius: 10,
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
            marginVertical: 20
          }]}>

            <ThemedText type="subtitle">
              Politique de Protection des Données Personnelles (RPPD)
              {/* <RenderHtmlIcon nameIcon={iconSend} /> */}
              {/* {renderHtmlIcon('send')} */}
            </ThemedText>



          </ThemedView>


          <ThemedView style={[styles.stepContainer, {
            backgroundColor: Colors.primaryBG,
            padding: 10,
            width: '96%', margin: 'auto',
            borderRadius: 10,
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
          }]}>
            <View
              style={styles.pageContainer}
            >
              <ThemedText type='default'>
                La présente Politique de Protection des Données Personnelles (RPPD) énonce les principes et engagements du vendeur de repas à livrer sur Internet en matière de collecte, traitement et utilisation des données personnelles de ses clients. Nous accordons une importance primordiale à la confidentialité et à la sécurité des informations que vous partagez avec nous.
              </ThemedText>

              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                1. Collecte des Données Personnelles
              </Text>
              <ThemedText type='default'>

                Le vendeur collecte les informations personnelles nécessaires à la gestion de ses activités. Cela inclut généralement les coordonnées du client telles que le nom, l'adresse, le numéro de téléphone et l'adresse e-mail. Ces données sont collectées lors de la création d'un compte utilisateur, de la passation d'une commande ou de la participation à des promotions.
              </ThemedText>


              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                2. Utilisation des Données Personnelles
              </Text>
              <ThemedText type='default'>
                Les données personnelles collectées sont utilisées exclusivement dans le cadre de la gestion de notre entreprise, notamment pour le traitement des commandes, la livraison, la facturation et le service client. Nous nous engageons à ne pas partager ces informations avec des tiers non autorisés.
              </ThemedText>


              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                3. Communication Marketing
              </Text>
              <ThemedText type='default'>
                Le vendeur peut occasionnellement utiliser les coordonnées des clients pour envoyer des informations promotionnelles, des offres spéciales ou des nouveautés liées à nos services. Les clients ont la possibilité de se désabonner de ces communications à tout moment en suivant les instructions de désabonnement fournies dans chaque communication.
              </ThemedText>


              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                4. Sécurité des Données
              </Text>
              <ThemedText type='default'>
                Nous mettons en place des mesures de sécurité appropriées pour protéger les données personnelles de nos clients contre tout accès non autorisé, toute divulgation, toute altération ou toute destruction. Cela inclut des protocoles de sécurité informatique et des procédures de contrôle d'accès.
              </ThemedText>


              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                5. Conservation des Données
              </Text>
              <ThemedText type='default'>
                Les données personnelles ne seront conservées que le temps nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, sauf si une durée de conservation plus longue est légalement exigée ou permise.
              </ThemedText>


              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                6. Droits des Utilisateurs
              </Text>
              <ThemedText type='default'>
                Les utilisateurs ont le droit d'accéder, de rectifier, de supprimer ou de limiter le traitement de leurs données personnelles. Ils peuvent exercer ces droits en nous contactant via les coordonnées fournies ci-dessous.
              </ThemedText>

              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                Contact
              </Text>
              <ThemedText type='default'>

              </ThemedText>
              Pour toute question ou préoccupation concernant la Politique de Protection des Données Personnelles, veuillez nous contacter à l'adresse suivante :




              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                Delicatessen
                rue Alfred de Musset, 83100 TOULON
              </Text>
              <ThemedText type='default'>
                Nous nous engageons à mettre à jour cette politique en cas de modification de nos pratiques de confidentialité, afin de garantir la protection continue de vos données personnelles.
              </ThemedText>


              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                Collecte des données personnelles
              </Text>
              <ThemedText type='default'>
                Les données que nous collectons sont utilisées uniquement dans le but de vous fournir un service de qualité. Lors de la commande de nos plats vietnamiens faits maison, nous pourrions être amenés à recueillir des informations telles que votre nom, votre adresse et votre adresse e-mail.
              </ThemedText>

              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                Utilisation des données
              </Text>
              <ThemedText type='default'>
                Vos données personnelles ne seront jamais vendues, échangées ou divulguées à des tiers sans votre consentement. Elles sont exclusivement utilisées pour traiter vos commandes et améliorer notre service client.
              </ThemedText>


              <Text style={{
                marginVertical: 15,
                textDecorationLine: 'underline',
                color: 'white',
                fontSize: 18
              }} >
                Protection des données
              </Text>
              <ThemedText type='default'>
                Nous mettons en place des mesures de sécurité pour protéger vos données contre tout accès non autorisé. Vos informations sont stockées de manière sécurisée et confidentielle.
              </ThemedText>




            </View>
          </ThemedView>

          {/* <ThemedText type="defaultSemiBold">📍 Livraison rapide à Toulon et alentours.</ThemedText>
                                <ThemedText type="default">
                                    Découvrez, commandez, dégustez : c'est bon pour vous et pour votre portefeuille ! 🥂✨
                                </ThemedText> */}
        </ThemedView>
      </Collapsible>

      {/* <Collapsible title="CGV"></Collapsible> */}

      {/* <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{'-'}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> 
          and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
     
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible> */}
    </ParallaxScrollView>
  );
}

