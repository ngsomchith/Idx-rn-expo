
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
import { groupedByPdjType, thisClone } from '@/components/services/DataServices';
import { getmyDoc } from '@/firebase';
import RenderEachArticleInHome from '@/components/articlesQte/RenderEachArticleInHome';
import { useAuth } from '../AuthContext';
import RenderEachArticleFullPage from '@/components/articlesQte/RenderEachArticleFullPage';
import { FontAwesome } from '@expo/vector-icons';
// import { renderHtmlIcon } from '@/components/RenderHtmlIcon';
// import RenderHtmlIcon from '@/components/renderHtmlIcon';


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

  const [articlesListByCat, setArticlesListByCat] = useState<Array<ArticleType>>([]);
  const [articlesListByCatLength, setArticlesListByCatLength] = useState(0);

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

  const maxHeightArticle = 570
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
  const [platNum0, setPlatNum0] = useState()
  const [platNum1, setPlatNum1] = useState()
  const [platNum2, setPlatNum2] = useState()
  const [platNum3, setPlatNum3] = useState()

  let platDuJourTemp = platDuJour ? thisClone(platDuJour) : []
  // const platNum1 ="topV140"
  // const platNum2 ="topV142"
  // const platNum3 ="topV140"
  // const platNum4 ="topV169"



  useEffect(() => {
    console.log('ArticlesQteToShow48 articlesList', articlesList);
    if (articlesListByCat?.length === 0 && articlesList?.length > 0) {
      getArticlesListByCat(articlesList);
    } else {
      setArticlesListByCatLength(Object.keys(articlesListByCat).length);
    }

    if (Object.keys(articlesListByCat).length > 0) {

      //  setIsLoading(false);
      //  getPdjTitleList(pdjTitleObject2);
    }
  }, [articlesListByCat, articlesList]);

  useEffect(() => {
    console.log("articlesListByCat", articlesListByCat)

  }, [articlesListByCat])

  async function getArticlesListByCat(_articlesList: any) {
    if (_articlesList && _articlesList.length > 0) {
      groupedByPdjType(articlesList, setArticlesListByCat);
    }
  }

  async function getPlatsDJ(articlesList: any, pdjRef: any) {
    console.log("getPlatsDJ90 articlesList", articlesList)
    const resultPDJ = await articlesList.filter((elt: any) => elt.ref === pdjRef)

    console.log("198PlatDuJour", resultPDJ)

    // platDuJourTemp.name = resultPDJ
    // platDuJourTemp.pdjType = 'pdj'
    // platDuJourTemp.date = todayfr10 // dayDocStr // resultPDJ.date
    // platDuJourTemp.explication = resultPDJ?.explication

    // setPlatDuJour(platDuJourTemp)
    setPlatDuJour(resultPDJ[0])



  }


  const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: 'transparent',
      height: '100%',
      width: '100%',
      padding: 10,
      // paddingHorizontal: padHorizNotMobile,
      position: 'relative',
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 4,
    },
    eachContainerArticle: {
      // width: '100%',
      // borderColor: 'white',
      // borderWidth: 10,
      // borderStyle: 'solid',
      // minHeight: MAXWIDTH > widthMobile ? 500 : 500,
      // marginVertical: 10

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: MAXWIDTH > widthMobile ? '46%' : '100%',
      minWidth: MAXWIDTH > widthMobile ? '46%' : '100%',
      backgroundColor: Colors.primaryBG,
      marginVertical: 20,
      // borderColor: 'green',
      // borderWidth: 10,
      // borderStyle: 'solid',
      padding: 8,
      margin: 0,
      borderRadius: 10,
      // marginHorizontal: 'auto',
      // maxHeight: '100%',
      height: maxHeightArticle,
    },
    titleContainer: {
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 10,
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
  // const renderHtmlIcon = (nameIcon) => {

  // const styles = StyleSheet.create({
  //     container: {
  //       flex: 1,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     },
  //   });

  //     return (
  //         <View style={styles.container}>
  //         <FontAwesome name ={nameIcon} size={50} color="blue" />
  //         {/* <Text>'nameIcon'</Text> */}
  //       </View>
  //     );
  // };


  // const iconSend= 'send'

  return (


    <ParallaxScrollView //background image
      headerBackgroundColor={{ light: '#A1CEDC', dark: Colors.primaryBG }}
      headerImage={
        <BackgroundImage />

      }>

      <ThemedView style={styles.pageContainer}>


        <ThemedView style={[styles.stepContainer, {
          // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 8,
          display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'
        }]}>

          <ThemedTitle type="subtitle">Bienvenue chez Delicatessen
            {/* <RenderHtmlIcon nameIcon={iconSend} /> */}
            {/* {renderHtmlIcon('send')} */}
          </ThemedTitle>
          <ThemedText>
            Découvrez une expérience culinaire unique où la fraîcheur et la tradition se rencontrent. Chez Delicatessen, nous livrons des sushis et d'autres plats vietnamiens faits maison à la demande.

          </ThemedText>
          <ThemedText style={{ width: '100%' }}> Site en cours en finition, Pour commander: Appelez nous :07 43 33 12 34</ThemedText>


          {articlesListByCat && articlesListByCat?.topV &&
            <View style={[styles.eachContainerArticle, { position: 'relative' }]}>

              <ThemedText type='defaultSemiBold' style={{
                position: 'absolute', fontSize: 30, zIndex: 9,
                top: '30%', color: Colors.primaryBG,
                backgroundColor: '#ffffff6e', textAlign: 'center',
                padding: 5, width: '70%',
                transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
              }}> Idéale pour vos soirées exceptionnelles
              </ThemedText>
              <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                addToCart={addToCart} removeFromCart={removeFromCart}
                menuN={articlesListByCat?.topV[0]} scrollY0={undefined}
                scrollX0={undefined} updateScrollValue={undefined} />
            </View>}



          {articlesListByCat && articlesListByCat?.promo &&
            <View style={styles.eachContainerArticle}>
              <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                addToCart={addToCart} removeFromCart={removeFromCart}

                menuN={articlesListByCat?.promo['0']} scrollY0={undefined}
                scrollX0={undefined} updateScrollValue={undefined} />
            </View>}

        </ThemedView>





        <ThemedView style={[styles.stepContainer, {
          // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 8,
          display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'
        }]}>
          <ThemedTitle type="subtitle">🍕🍣🍔 Des saveurs pour tous les goûts, à prix malin !</ThemedTitle>
          {/* 
          {articlesListByCat && articlesListByCat?.topV && <View style={{
            minHeight: MAXWIDTH > widthMobile ? 500 : 500,
            marginVertical: 10
          }}>
            <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
              addToCart={addToCart} removeFromCart={removeFromCart}
              menuN={articlesListByCat?.topV[2]} scrollY0={undefined}
              scrollX0={undefined} updateScrollValue={undefined} />
          </View>} */}



          {articlesListByCat && articlesListByCat?.topV &&
            <View style={styles.eachContainerArticle}>
              <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                addToCart={addToCart} removeFromCart={removeFromCart}
                menuN={articlesListByCat?.topV[3]} scrollY0={undefined}
                scrollX0={undefined} updateScrollValue={undefined} />
            </View>}


          {articlesListByCat && articlesListByCat?.topV &&
            <View style={styles.eachContainerArticle}>
              <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                addToCart={addToCart} removeFromCart={removeFromCart}
                menuN={articlesListByCat?.topV[1]} scrollY0={undefined}
                scrollX0={undefined} updateScrollValue={undefined} />
            </View>}
        </ThemedView>

        {/* <ThemedView style={styles.stepContainer}> */}
        <ThemedText type="defaultSemiBold">📍 Livraison rapide à Toulon et alentours.</ThemedText>
        <ThemedText type="default">
          Découvrez, commandez, dégustez : c'est bon pour vous et pour votre portefeuille ! 🥂✨
        </ThemedText>

      </ThemedView>

    </ParallaxScrollView>
  );
}


