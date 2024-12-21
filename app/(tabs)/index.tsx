
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, Pressable, ScrollView, Dimensions } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ThisDevice from '@/constants/ThisDevice';

import { useState } from 'react';
import { ArticleType } from '../models/ArticleType';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { ThemedTitle } from '@/components/ThemedTitle';
import { groupedByPdjType, thisClone } from '@/components/services/DataServices';
import { useAuth } from '../AuthContext';
import RenderEachArticleFullPage from '@/components/articlesQte/RenderEachArticleFullPage';
import { FontAwesome } from '@expo/vector-icons';
import Header from '@/components/Header';
import BackgroundImage from '@/components/BackGroundImage';


export default function HomeScreen() {
  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH
  const widthMobile = 650

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
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
  const [_cdeFrom2Months, set_CdeFrom2Months] = useState([])
  const [platDuJour, setPlatDuJour] = useState()




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
      marginVertical: 40,
      padding:10,
      backgroundColor: Colors.primaryBG,
      // borderColor: 'coral', borderStyle: 'solid', borderWidth: 10,
    },
    reactLogo: {
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
      resizeMode: 'cover',
      height: '100%',
      // height:device.heightBody,
      // minHeight:device.heightBody,
      width: screenWidth,
      margin: 'auto',
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    cardContainer: {
      padding: 20,
      margin: 10,
      borderRadius: 10,
      backgroundColor: 'white', // Couleur de fond par défaut
    },
    text: {
      marginBottom: 10,
      color: Colors.primaryText,
      fontSize: 30,
      padding: 10
    },

    headerContainer: {
      height: 100,
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 10,
      position: 'relative'
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

  return (
    <>
      <View style={styles.headerContainer}>
        <Header
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          articlesList={articlesList}
          cart={cart}
          navigation={undefined}
        />


      </View>

      <ParallaxScrollView //background image

        headerBackgroundColor={{ light: '#A1CEDC', dark: Colors.primaryBG }}
        headerImage={
          // <BackgroundImage />
          <View style={{
            height: screenHeight,
            width: screenHeight,
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 1,
            position: 'relative',

          }}>
            <Image
              source={require('@/assets/images/la_cuisiniere_Delicatessen.png')}
              style={styles.reactLogo}
            />

            <View style={{
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
                backgroundColor: Colors.primaryBGlight
              }}>
                <ThemedText type='defaultSemiBold' style={styles.text}>La fraicheur : je vous garantis . </ThemedText>
                <ThemedText type='defaultSemiBold' style={styles.text}>Le meilleur goût : aussi .</ThemedText>

                <ThemedText type='defaultSemiBold' style={styles.text}>Vous ne serez pas déçus, c'est Promis .</ThemedText>

              </View>
            </View>
          </View>

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
            <ThemedText style={{ width: '100%', textAlign:'left' }}> Site en cours en finition, N'hésitez pas à nous appeler :07 43 33 12 34</ThemedText>


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

    </>

  );
}


