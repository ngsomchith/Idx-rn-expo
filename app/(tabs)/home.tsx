
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, Pressable, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Panier from '@/components/articlesQte/Panier';
import ThisDevice from '@/constants/ThisDevice';

import { useState } from 'react';
import { ArticleType } from '../models/ArticleType';
import { useFb } from '@/hooks/useFb';
import { myStyles } from '@/components/myStyle';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import images from '@/constants/images';
import BackgroundImage from '@/components/BackGroundImage';
import { ThemedTitle } from '@/components/ThemedTitle';
import ContactForm from '@/components/contact/ContactCallable';
import { LoginScreen } from '@/components/GestionUser/LoginScreen';
import { thisClone } from '@/components/services/DataServices';
import { getmyDoc } from '@/firebase';
import RenderEachArticleInHome from '@/components/articlesQte/RenderEachArticleInHome';
import { useAuth } from '../AuthContext';
import RenderEachArticleFullPage from '@/components/articlesQte/RenderEachArticleFullPage';


export default function HomeScreen() {
  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH
  const widthMobile = 650
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

  const [todayfr10, setTodayfr10] = useState()


  const masterEmail = 'ng.somchith@gmail.com'
  const masterEmail2 = 'deviehoa@gmail.com'

  const [thisImport, setThisImport] = useState(false)

  const router = useRouter()
  const [sound, setSound] = useState(null);


  const { articlesList, setArticlesList,
    thisUseFB, cart, setCart,
    addToCartFn, removeFromCartFn } = useAuth()
  // const [cart, setCart] = useState([]);
  const addToCart = addToCartFn;
  const removeFromCart = removeFromCartFn;

  let customFonts = {
    'BrushScript': require('@/assets/fonts/BrushScript.ttf')
    // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  };
  const [fontsLoaded] = useFonts(customFonts)

  const styles0 = ThisDevice().styles0
  // const styles = myStyles
  const MAXWIDTH1_3 = ThisDevice().device.myMAXWIDTH

  const device = ThisDevice().device
  const myHeight = device.height * 1.3
  // const myCoeffScreen = myWidth / myHeight

  // const [my2Months, setmy2Months] = useState([])
  const [_cdeFrom2Months, set_CdeFrom2Months] = useState([])
  // let allCurrentCdeTemp = thisClone(allCurrentCde)
  // let articlesListByCatTemp = thisClone(articlesListByCat)

  // useEffect(() => {
  //   if (articlesList.length === 0 && thisUseFB.articlesList) {
  //     setArticlesList(thisUseFB.articlesList);
  //   }
  // }, [thisUseFB, articlesList]);
  // const panierTemp = new Array<ArticleType>()
  const [platDuJour, setPlatDuJour] = useState()

  let platDuJourTemp = platDuJour ? thisClone(platDuJour) : []



  useEffect(() => {
    console.log("home79 useEffect articlesList ", articlesList)
    if (articlesList.length > 0) {
      getPlatsDJ(articlesList)
    }
  }, [articlesList])

  async function getPlatsDJ(articlesList: any) {
    console.log("getPlatsDJ90 articlesList", articlesList)
    const pdjRefFB = 'pdj56' //  await getmyDoc('/dayListCde/pdjRef')
    console.log("pdjRefFB91", pdjRefFB)
    const resultPDJ = await articlesList.filter((elt: any) => elt.ref === pdjRefFB)

    console.log("198PlatDuJour", resultPDJ)

    // platDuJourTemp.name = resultPDJ
    // platDuJourTemp.pdjType = 'pdj'
    // platDuJourTemp.date = todayfr10 // dayDocStr // resultPDJ.date
    // platDuJourTemp.explication = resultPDJ?.explication

    // setPlatDuJour(platDuJourTemp)
    setPlatDuJour(resultPDJ[0])



  }

  const cadrePlatduJour = () => {
    return (


      <View style={[
        // styles2.containerNoScroll
        , {
          // height: device.height - 210,
          maxHeight: device.height * 1.5,
          marginHorizontal: 0,
          padding: 10,
          borderRadius: 10,
          marginVertical: 20
          // borderWidth: 10, borderColor: 'coral', borderStyle: 'solid',

        }]}>

        <View style={{
          // maxWidth: device.height - 200,
          // maxWidth: '100%',
          // width: device.width > device.height ? device.height - 200 : '100%', // device.width,// device.height - 240,
          // height: device.width > device.height ? device.height - 200 : device.width,
          // maxHeight: device.height - 200,
          // maxHeight: device.width > device.height ? device.height - 200 : MAXWIDTH,
          // margin: 'auto',
          flexDirection: 'column',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          borderWidth: 5, borderColor: 'blue', borderStyle: 'solid',
        }}>



           
              {/* <Image source={images[platDuJour?.img] ? images[platDuJour?.img] : images.logo2} style={[
                {

                  resizeMode: 'cover',
                  width: '100%',
                  maxWidth: '100%',
                  height: '100%',
                  // borderColor: 'red', borderWidth: 3, borderStyle: 'solid',
                }]} /> */}
            </View>
           

      </View>

    )
  }



  return (


    <ParallaxScrollView //background image
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <BackgroundImage />

      }>

      <View style={styles.pageContainer}>


        {/* <ThemedView style={styles.titleContainer}>
          <ThemedTitle type="title">Faites livrer vos repas à TOULON

          </ThemedTitle>
          <HelloWave />

        </ThemedView> */}

        <ThemedView style={styles.stepContainer}>
          <ThemedTitle type="subtitle">Savourez votre expérience gourmande dans cette ville aux multiples saveurs !</ThemedTitle>

          <View style={{ height: 300 ,minHeight:300,  maxHeight:'100%'}}>
            <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
              addToCart={addToCart} removeFromCart={removeFromCart}
              menuN={platDuJour} scrollY0={undefined}
              scrollX0={undefined} updateScrollValue={undefined} />
          </View>

          {/* <ThemedText type="defaultSemiBold">Vous pouvez faire des économies </ThemedText>

          <ThemedText type="default">tout en soutenant {' '}

            <ThemedText type="defaultSemiBold">
              vos restaurateurs locaux ! {' '}
            </ThemedText>
          </ThemedText> */}
          {/* <ThemedText type="default">
            <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
            <ThemedText type="defaultSemiBold">
              Commandez vos plats préférés {' '}
            </ThemedText >
            directement auprès des restaurateurs
            et profitez {' '}
            <ThemedText type="defaultSemiBold">
              des tarifs avantageux, {' '}
            </ThemedText>

            sans intermédiaires ni frais cachés.
          </ThemedText> */}

        </ThemedView>
        <ThemedView 
        // style={styles.stepContainer}
        >
          <ThemedTitle type="subtitle">🍕🍣🍔 Des saveurs pour tous les goûts, à prix malin !</ThemedTitle>

        </ThemedView>

        {/* <ThemedView style={styles.stepContainer}> */}
        <ThemedText type="defaultSemiBold">📍 Livraison rapide à Toulon et alentours.</ThemedText>
        <ThemedText type="default">
          Découvrez, commandez, dégustez : c'est bon pour vous et pour votre portefeuille ! 🥂✨
        </ThemedText>

        {/* </ThemedView> */}


        {/* <ThemedView style={styles.stepContainer}>
          <ThemedTitle type="subtitle">Un site simple et facile à retenir :</ThemedTitle>
          <ThemedText type="defaultSemiBold">👉 livraison-repas-toulon.fr</ThemedText>

          {cadrePlatduJour()}
        </ThemedView> */}

        {/*<ThemedView style={styles.stepContainer}>
            <ArticlesToShow />

          <ContactForm />
          <LoginScreen />
          <Profile />
        </ThemedView> */}


      </View>
      {/* 
      <ThemedView style={styles.titleContainer}>
        <ScrollView contentContainerStyle={styles.container}>

          <Image
            source={require('@/assets/images/seller2/bo_bun_nem.png')} // Remplacez par l'URL de votre image
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>Découvrez notre Bo Bun maison avec des nems croustillants!</Text>

          <Text style={styles.description}>
            Une combinaison parfaite de fraîcheur et de saveurs :
            - Vermicelles de riz frais
            - Légumes croquants
            - Herbes aromatiques
            - Nems faits maison dorés à la perfection
            - Une sauce maison exquise pour accompagner le tout
          </Text>

          <Text style={styles.price}>Prix : 12,99 €</Text>

          <Button title="Commander maintenant" onPress={undefined} color="#ff6347" />
        </ScrollView>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    // paddingHorizontal: padHorizNotMobile,
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
  },



  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 20,
  },


});
