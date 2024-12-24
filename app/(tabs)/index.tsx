
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, Pressable, ScrollView, Dimensions } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ThisDevice from '@/constants/ThisDevice';

import { useState } from 'react';
import { ArticleType } from '../models/ArticleType';
import { useFonts } from 'expo-font';
import { Colors } from '@/constants/Colors';
import { ThemedTitle } from '@/components/ThemedTitle';
import { groupedByPdjType, thisClone } from '@/components/services/DataServices';
import { useAuth } from '../AuthContext';
import RenderEachArticleFullPage from '@/components/articlesQte/RenderEachArticleFullPage';
import { FontAwesome } from '@expo/vector-icons';
import Header from '@/components/Header';
import BackgroundImage from '@/components/BackGroundImage';
import ButtonStd from '@/components/ButtonTypeStd';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { iconMenu } from '@/icons';


export default function HomeScreen({ }) { //navigation, route

  const { articlesList, setArticlesList, thisParams,
    thisUseFB, cart, setCart, currentUser,
    addToCartFn, removeFromCartFn } = useAuth()

  // Définir les routes et leurs paramètres
  type RootStackParamList = {
    Home: undefined;
    DestinationScreen: { thisParams: any }; // Remplacez `any` par le type réel si possible
  };

  // Type pour navigation
  type NavigationProps = StackNavigationProp<RootStackParamList, 'DestinationScreen'>;

  // Type pour route
  type RouteProps = RouteProp<RootStackParamList, 'DestinationScreen'>;

  // Props combinées pour le composant
  type Props = {
    navigation: NavigationProps;
    route: RouteProps;
  };

  // const navigation= useNavigation()
  // const route = useRouter()
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();

  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH
  const widthMobile = 450

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

  const [todayfr10, setTodayfr10] = useState()
  const [topVentesList, setTopVentesList] = useState<Array<ArticleType>>([]);

  const masterEmail = 'ng.somchith@gmail.com'
  const masterEmail2 = 'deviehoa@gmail.com'

  const [thisImport, setThisImport] = useState(false)

  const [sound, setSound] = useState(null);

  const [articlesListByCat, setArticlesListByCat] = useState<Array<ArticleType>>([]);
  const [articlesListByCatLength, setArticlesListByCatLength] = useState(0);

  // const [cart, setCart] = useState([]);
  const addToCart = addToCartFn;
  const removeFromCart = removeFromCartFn;

  // let customFonts = {
  //   'BrushScript': require('@/assets/fonts/BrushScript.ttf')
  //   // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  // };
  // const [fontsLoaded] = useFonts(customFonts)

  const styles0 = ThisDevice().styles0
  // const styles = myStyles
  const MAXWIDTH1_3 = ThisDevice().device.myMAXWIDTH

  // const maxHeightArticle = MAXWIDTH > widthMobile ? 500 : 800

  const maxHeightArticle = MAXWIDTH > widthMobile ?  widthMobile *1.1 : widthMobile * 1.2
  const device = ThisDevice().device
  const myHeight = device.height * 1.3
  const [_cdeFrom2Months, set_CdeFrom2Months] = useState([])
  const [platDuJour, setPlatDuJour] = useState()
  let topVentesListTemp = thisClone(topVentesList)

  let docTemp:any
  const [articlesListByCat2,setArticlesListByCat2]=useState<Array<ArticleType>>([]);

  useEffect(() => {
    console.log('index75 articlesListByCat', articlesListByCat);
    if (articlesListByCat?.length === 0 && articlesList?.length > 0) {
      getArticlesListByCat(articlesList);
    } else if(articlesListByCat != undefined && articlesListByCat != null ) {
      setArticlesListByCatLength(Object.keys(articlesListByCat).length);
      getTopVentesList()
    }

    // if (Object.keys(articlesListByCat)?.length > 0) {

     
    //   //  setIsLoading(false);
    //   //  getPdjTitleList(pdjTitleObject2);
    // }
  }, [articlesListByCat, articlesList]);
  useEffect(() => {
    console.log('index110 articlesListByCat2', articlesListByCat2);
    if(articlesListByCat!=articlesListByCat2){setArticlesListByCat(articlesListByCat2)}
  }, [articlesListByCat2]);

  useEffect(() => {
    console.log("topVentesList", topVentesList)
  }, [topVentesList])


  async function goTo(url: any,rayon:string) {

    // setTimeout(async () => {
    const itemPdjType0 = platDuJour && platDuJour['pdjType']
    // console.log("goTo ... 1195 currentPdjType, categoryNameList, categoryIconList ", itemPdjType0, categoryNameList)
    //All console.log("goTo ... 1154, pageChoisi ",url, pageChoisi)

    // Construire les paramètres à passer à la route
    const thisParams = {
      articlesList: articlesList,
      articlesListByCat: articlesListByCat,
      cart: cart,
      currentUser: currentUser,
      rayon: rayon
    }

    // Construire les paramètres à passer à la route
    // const thisParams = {
    //   articlesList,
    //   articlesListByCat,
    //   cart,
    //   currentUser,
    // };

    console.log("thisParams ", thisParams)
    navigation.navigate(url, {
      thisParams: thisParams
    });

  }

  const buttonGoToMenu = (url: any, thisIcon: any,rayon:string) => {
    return (
      <View style={{width: 50, position:'relative'}}>
        <ButtonStd iconL={undefined} iconR={thisIcon} label={''} labelColor={Colors.primaryText}
          onPress={() => goTo(url,rayon)} onChange={undefined} bgButton={Colors.accentBG} />
        <Text style={{
          color: Colors.primaryText,
          position:'absolute',
          bottom: 0
        }}>{rayon} </Text>
      </View>

    )
  }
  async function getArticlesListByCat(_articlesList: any) {
    if (_articlesList && _articlesList.length > 0) {
      groupedByPdjType(articlesList, setArticlesListByCat);
    }
  }

  function getTopVentesList() {
    const _topVente = articlesListByCat?.topV
    if (!topVentesListTemp) { topVentesListTemp = [] }
    //all console.log("top Vente91", _topVente?.length > 0, _topVente)

    if (_topVente?.length > 0) {
      // console.log("top Vente94", _topVente?.length > 0, _topVente)
      // _topVente && 
      // _topVente?.length > 0 &&
      _topVente?.forEach((element: any, index: any) => {
        let articlesListByCatTopV:any
        // console.log('98', element.name, index)
        if ( element.name.indexOf('Fondu') >= 0) { topVentesListTemp[0] = element }//, console.log("topVentesListTemp93 ", index, element, topVentesListTemp[index]) }
        if ( element.name.indexOf('Bo Bun Boeuf') >= 0) { topVentesListTemp[1] = element }//, console.log("topVentesListTemp94 ", index, element, topVentesListTemp[index]) }
        if ( element.name.indexOf('Phat Thai') >= 0) { topVentesListTemp[2] = element }//, console.log("topVentesListTemp95 ", index, element, topVentesListTemp[index]) }
        if ( element.name.indexOf('Riz Cantonnais') >= 0) { topVentesListTemp[3] = element }//, console.log("topVentesListTemp96 ", index, element, topVentesListTemp[index]) }
        if ( element.name.indexOf('Poke Thon Saumon') >= 0) { topVentesListTemp[4] = element }//, console.log("topVentesListTemp97 ", index, element, topVentesListTemp[index]) }
        if ( element.name.indexOf('Cali Saumon Avocat') >= 0) { 
          topVentesListTemp[5] = element 
          articlesListByCatTopV = element
          articlesListByCat?.promo.push(element)
          setArticlesListByCat2(articlesListByCat)
          console.log("element", element)
          console.log("articlesListByCatTopV", articlesListByCatTopV)
          console.log("articlesListByCat?.topV", articlesListByCat)
        //  console.log("articlesListByCat?", articlesListByCat)
        //  setArticlesListByCat2(articlesListByCat)

        }
        // if (element.name.indexOf('Cali Saumon Avocat') >= 0) { topVentesListTemp[index] = element}//, console.log("topVentesListTemp93 ", index, element, topVentesListTemp[index]) }

      })

    } else {
      //all console.log("top Vente 114", _topVente?.length > 0, _topVente)
    }
    if (topVentesListTemp.length > 0) {
      //all console.log("topVentesListTemp 119 ", topVentesListTemp)
      setTopVentesList(topVentesListTemp)
    }
  }

  async function getPlatsDJ(articlesList: any, pdjRef: any) {
    //all console.log("getPlatsDJ90 articlesList", articlesList)
    const resultPDJ = await articlesList.filter((elt: any) => elt.ref === pdjRef)

    //all console.log("198PlatDuJour", resultPDJ)


    setPlatDuJour(resultPDJ[0])



  }

  const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: 'transparent',
      height: '100%',
      width: '100%',
      padding: 4,
      // paddingHorizontal: padHorizNotMobile,
      position: 'relative',
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 4,
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
      minWidth:'90%',
      marginVertical: 40,
      padding: 4,
      paddingVertical: 10,
      backgroundColor:  Colors.primaryBG,
      // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 8,
      display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'
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
    // cardContainer: {
    //   padding: 20,
    //   margin: 10,
    //   borderRadius: 10,
    //   backgroundColor: 'white', // Couleur de fond par défaut
    //   borderColor: 'white', borderStyle: 'solid', borderWidth: 3,
    // },

    eachContainerArticle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: MAXWIDTH > widthMobile ? '48%' : '100%',
      minWidth: MAXWIDTH > widthMobile ? '48%' : '100%',
      backgroundColor: Colors.primaryBG,
      marginVertical: 20,
      // borderColor: MAXWIDTH > widthMobile ? 'green': 'yellow' ,
      // borderWidth: 2,
      // borderStyle: 'solid',
      padding: 4,
      margin: 0,
      borderRadius: 10,
      height: maxHeightArticle,
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
        headerImage={ // BackgroundImage
          // <BackgroundImage />
          <View style={{
            height: screenHeight,
            width: screenWidth,
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
            padding: 0,
            
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
                backgroundColor: Colors.primaryBGlight,
                padding: 10

              }}>
                <ThemedText type='subtitle' style={styles.text}>La fraicheur : je vous garantis . </ThemedText>
                <ThemedText type='subtitle' style={styles.text}>Le meilleur goût : aussi .</ThemedText>

                <ThemedText type='subtitle' style={styles.text}>Vous ne serez pas déçus, c'est Promis .</ThemedText>

              </View>
            </View>
          </View>

        }>

        <ThemedView style={styles.pageContainer}>

          <ThemedView style={[styles.stepContainer, {
          }]}>

            <ThemedText type="subtitle">Bienvenue chez Delicatessen
              {/* <RenderHtmlIcon nameIcon={iconSend} /> */}
              {/* {renderHtmlIcon('send')} */}
            </ThemedText>
            <ThemedText type="default">
              Découvrez une expérience culinaire unique où la fraîcheur et la tradition se rencontrent. Chez Delicatessen, nous livrons des Sushis et d'autres plats vietnamiens faits maison à la demande.

            </ThemedText>
            <ThemedText style={{ width: '100%', textAlign: 'left' }}> Site en cours en finition, N'hésitez pas à nous appeler :07 43 33 12 34</ThemedText>
          </ThemedView>

          <ThemedView style={[styles.stepContainer, {
          }]}>

            {topVentesList &&
              <View style={styles.eachContainerArticle}>
                <Text style={{
                  position: 'absolute', fontSize: 30, zIndex: 9,
                  top: '30%', color:  Colors.primaryBG,
                  backgroundColor: '#2fcc179e', textAlign: 'center',
                  padding: 5, width: '70%',top:0, right: 0,
                  transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
                }}> Dépêchez-vous: Reste 2 x 2parts !!!
                </Text>
                <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                  addToCart={addToCart} removeFromCart={removeFromCart}
                  buttonGoToMenu={buttonGoToMenu('articles', iconMenu,'Tout')}
                  menuN={topVentesList[0]} scrollY0={undefined}
                  scrollX0={undefined} updateScrollValue={undefined} />

              </View>

            }


            {topVentesList &&
              <View style={styles.eachContainerArticle}>
                {/* <Text  style={{
                  position: 'absolute', fontSize: 30, zIndex: 9,
                  top: '30%', color: 'white', // Colors.primaryText,
                  backgroundColor: '#ffffff6e', textAlign: 'center',
                  padding: 5, width: '70%',
                  transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
                }}> 
                </Text> */}
                <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                  addToCart={addToCart} removeFromCart={removeFromCart}
                  buttonGoToMenu={buttonGoToMenu('articles', iconMenu,'Traditionnels')}
                  menuN={topVentesList[1]} scrollY0={undefined}
                  scrollX0={undefined} updateScrollValue={undefined} />
              </View>
            }

          </ThemedView>

          <ThemedView style={[styles.stepContainer, {
          }]}>
            <Text style={{ width: '100%', color: Colors.primaryText, fontSize:16 }}>🍕🍣🍔 Des saveurs pour tous les goûts, à prix malin !</Text>

            {topVentesList &&
              <View style={styles.eachContainerArticle}>
                <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                  addToCart={addToCart} removeFromCart={removeFromCart}
                  buttonGoToMenu={buttonGoToMenu('articles', iconMenu,'Traditionnels')}
                  menuN={topVentesList[2]} scrollY0={undefined}
                  scrollX0={undefined} updateScrollValue={undefined} />
              </View>}


            {topVentesList &&
              <View style={styles.eachContainerArticle}>
                <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                  addToCart={addToCart} removeFromCart={removeFromCart}
                  buttonGoToMenu={buttonGoToMenu('articles', iconMenu,'Traditionnels')}
                  menuN={topVentesList[3]} scrollY0={undefined}
                  scrollX0={undefined} updateScrollValue={undefined} />
              </View>}
          </ThemedView>



          <ThemedView style={[styles.stepContainer, {
          }]}>
            {topVentesList &&
              <View style={styles.eachContainerArticle}>
                <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                  addToCart={addToCart} removeFromCart={removeFromCart}
                  buttonGoToMenu={buttonGoToMenu('articles', iconMenu,'Sushi')}
                  menuN={topVentesList[4]} scrollY0={undefined}
                  scrollX0={undefined} updateScrollValue={undefined} />
              </View>}


            {topVentesList &&
              <View style={styles.eachContainerArticle}>
                <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                  addToCart={addToCart} removeFromCart={removeFromCart}
                  buttonGoToMenu={buttonGoToMenu('articles', iconMenu,'Sushi')}
                  menuN={topVentesList[5]} scrollY0={undefined}
                  scrollX0={undefined} updateScrollValue={undefined} />
              </View>}
          </ThemedView>


        </ThemedView>


        <ThemedText type="defaultSemiBold">📍 Livraison rapide à Toulon et alentours.</ThemedText>
        <ThemedText type="default">
          Découvrez, commandez, dégustez : c'est bon pour vous et pour votre portefeuille ! 🥂✨
        </ThemedText>



      </ParallaxScrollView>

    </>

  );
}


