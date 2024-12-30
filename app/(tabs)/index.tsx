
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
import { groupedByPdjType, sortObjectsAscent, sortObjectsAscentStr, thisClone } from '@/components/services/DataServices';
import { useAuth } from '../AuthContext';
import RenderEachArticleFullPage from '@/components/articlesQte/RenderEachArticleFullPage';
import { FontAwesome } from '@expo/vector-icons';
import Header from '@/components/Header';
import BackgroundImage from '@/components/BackGroundImage';
import ButtonStd from '@/components/ButtonTypeStd';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { iconMenu } from '@/icons';
import ImageViewer from '@/components/ImageViewer';
import { TextInput } from '@/components/TextInput';


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


  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const widthMobile = 450
  const sectionPriceHeight = 60
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

  const heightBody = ThisDevice().device.heightBody
  const [todayfr10, setTodayfr10] = useState()
  const [topVentesList, setTopVentesList] = useState<Array<ArticleType>>([]);

  const masterEmail = 'ng.somchith@gmail.com'
  const masterEmail2 = 'deviehoa@gmail.com'

  const [thisImport, setThisImport] = useState(false)

  const [sound, setSound] = useState(null);

  const [articlesListByCat, setArticlesListByCat] = useState<Array<ArticleType>>([]);
  const [articlesListByCatLength, setArticlesListByCatLength] = useState(0);

  const [topVentesListGroup, setTopVentesListGroup] = useState([])
  // const [cart, setCart] = useState([]);
  const addToCart = addToCartFn;
  const removeFromCart = removeFromCartFn;

  const maxHeightArticle = MAXWIDTH > widthMobile ? 500 : 800
  const device = ThisDevice().device
  const myHeight = device.height

  const [_cdeFrom2Months, set_CdeFrom2Months] = useState([])
  const [platDuJour, setPlatDuJour] = useState()
  const [qte, setQte] = useState(0) // useState(menuN && menuN?.qte || 0);
  // let topVentesListTemp = thisClone(topVentesList)


  // const maxHeightArticle = MAXWIDTH > widthMobile ? 500 : 800
  const thisBackGround = "transparent" // "grey"





  useEffect(() => {
    console.log('index103 articlesList', articlesList);
    if (articlesListByCat?.length === 0 && articlesList?.length > 0) {
      getArticlesListByCat(articlesList);
    } else {
      setArticlesListByCatLength(Object.keys(articlesListByCat).length);
    }

    if (Object.keys(articlesListByCat).length > 0) {
      console.log('index111 articlesListByCat', articlesListByCat);
      getTopVentesList(articlesListByCat?.topV)
      //  setIsLoading(false);
      //  getPdjTitleList(pdjTitleObject2);
    }
  }, [articlesListByCat, articlesList]);


  useEffect(() => {
    console.log("topVentesList", topVentesList)
    getTopVentesListGroup(topVentesList)
  }, [topVentesList])


  async function goTo(url: any, rayon: string) {

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

  const buttonGoToMenu = (url: any, thisIcon: any, rayon: string) => {
    return (
      <View style={{ width: 50 }}>
        <ButtonStd iconL={undefined} iconR={thisIcon} label={''} labelColor={Colors.primaryText}
          onPress={() => goTo(url, rayon)} onChange={undefined} bgButton={Colors.accentBG} />
      </View>

    )
  }
  async function getArticlesListByCat(_articlesList: any) {
    if (_articlesList && _articlesList.length > 0) {
      groupedByPdjType(articlesList, setArticlesListByCat);
    }
  }

  async function getTopVentesList(_topVente: any) {
    // if (!topVentesListTemp) { topVentesListTemp = [] }
    console.log("top Vente91", _topVente?.length > 0, _topVente)
    const topVentesListTemp: any = await sortObjectsAscentStr(_topVente, 'ref')
    // if (topVentesListTemp?.length > 0) {
    console.log("topVentesListTemp 195 ", topVentesListTemp)
    setTopVentesList(topVentesListTemp)
    // }
  }


  useEffect(() => {
    console.log("RFullPage62 qte ", qte)
  }, [qte])

  const incrementQuantity = (menuN: any) => {
    menuN.qte++;
    console.log("RFullPage67 incrementQuantity", menuN.qte)
    addToCart(menuN);
    setQte(menuN.qte);
  };

  const decrementQuantity = (menuN: any) => {
    if (menuN.qte > 0) {
      menuN.qte--;
      removeFromCart(menuN);
      setQte(menuN.qte);
    }
  };


  function getTopVentesListGroup(topVentesList: any) {
    console.log("getTopVentesListGroup", topVentesList.length, topVentesList)
    const groupedItems: any = [
      topVentesList.slice(0, 4), // Groupe 1 : 3 éléments
      topVentesList.slice(4, 6), // Groupe 2 : 3 éléments
      // items.slice(6)     // Groupe 3 : 4 éléments
    ];
    console.log("groupedItems ", groupedItems)
    setTopVentesListGroup(groupedItems)
  }

  async function getPlatsDJ(articlesList: any, pdjRef: any) {
    //all console.log("getPlatsDJ90 articlesList", articlesList)
    const resultPDJ = await articlesList.filter((elt: any) => elt.ref === pdjRef)

    //all console.log("198PlatDuJour", resultPDJ)


    setPlatDuJour(resultPDJ[0])



  }

  const renderMenuContent = (menuN: any) => (


    <ThemedView style={styles.menuContainer}>
      <View style={{//name
        height: 70, maxHeight: 70,
        // borderWidth: 5,
        // borderColor: 'green',
        // borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 0
      }}>
        <ThemedText type="subtitle" style={[styles.menuTitle, {

        }]}>{menuN?.name.indexOf('Fondu') < 0 ? menuN?.name : 'Fondu pour 2'}
        </ThemedText>
      </View>
      <ThemedView style={styles.descriptionContainer}>
        <ThemedView //imageViewer
          style={[styles.imageContainer, {
            // width: widthMobileOrWeb,
            width: '100%',
            maxWidth: '100%',
            minHeight: MAXWIDTH > widthMobile ? 300 : 200,
            maxHeight: MAXWIDTH > widthMobile ? 300 : 200,
            position: 'relative',
            // backgroundColor: thisBackGround,
            // borderWidth: 5,
            // borderColor: 'blue',
            // borderStyle: 'solid',
            height: widthMobileOrWeb
          }]}>

          <ImageViewer placeholderImageSource={menuN?.img} />
          {menuN &&
            menuN?.ref === "topV175"
            // && menuN.qte >= 1
            &&
            <Text style={[styles.texteArticlePrix, { //  + 1 gratuit
              fontSize: 20,
              width: 220,
              textAlign: 'center',
              display: 'flex', justifyContent: 'center',
              paddingHorizontal: 5,
              alignItems: 'center',
              color: 'white',
              position: 'relative',
              backgroundColor: 'green',
              right: 0,
              top: -50,
              borderRadius: 5,
              padding: 10,
              zIndex: 999
            }]}>
              {/* + {Math.round((menuN.qte / 2) - 0.5)} gratuit */}
              1 Acheté = 1 Offert
            </Text>
          }
        </ThemedView>
        <ThemedText type="default" style={[styles.imageDescription, {

          width: '100%',
          fontSize: 16,

        }]}
        >{menuN?.explication}
        </ThemedText>

      </ThemedView>

      {/* <ThemedView style={styles.figCaption}>
          <ThemedText style={styles.description}>{menuN?.description}</ThemedText>
          {renderDateContent()}
        </ThemedView> */}
    </ThemedView>

  );
  const renderPriceSection = (menuN: any) => (
    <ThemedView style={styles.priceSection}>
      {menuN?.prixbarre > 0 && (
        <ThemedText style={[styles.strikethroughPrice, {
          position: 'absolute', top: -20
        }]}>
          {Number(menuN.prixbarre).toFixed(2)}€
        </ThemedText>
      )}
      {menuN?.prix > 0 && (
        <ThemedText style={styles.price}>{Number(menuN.prix).toFixed(2)}€</ThemedText>
      )}
      <ThemedView style={styles.quantityControls}>

        <Pressable style={styles.quantityButton} onPress={decrementQuantity}>
          <ThemedText style={styles.quantityButtonText}>-</ThemedText>
        </Pressable>

        <View style={styles.qteInputContainer}>

          <TextInput
            style={styles.quantityInput}
            editable={false}
            value={String(qte)} leftIconName={undefined} rightIcon={undefined}
            handlePasswordVisibility={undefined} />
        </View>

        <Pressable style={styles.quantityButton} onPress={incrementQuantity}>
          <ThemedText style={styles.quantityButtonText}>+</ThemedText>
        </Pressable>
      </ThemedView>
      {/* {buttonGoToMenu} */}
    </ThemedView>
  );


  const widthArticle = screenWidth > widthMobile ? screenWidth * 0.4 : widthMobile
  const heightArticle = screenHeight - 100
  const widthContainerArticle = screenWidth

  const styles = StyleSheet.create({
    articleContainer: {
      // borderColor: thisBackGround, borderStyle: 'solid', borderWidth: 8,
      borderRadius: 18,
      width: widthContainerArticle,
      maxWidth: '100%',
      // height:heightArticle, // faut pas fixer la hauteur !!!
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 5,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
      backgroundColor: 'transparent',
      paddingHorizontal: 0
    },
    articleContent: {
      width: widthArticle,
      maxWidth: '100%',
      height: heightArticle,
      maxHeight: heightArticle,
      marginHorizontal: 0, //widthMobile *0.1,
      marginVertical: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: Colors.primaryBG,
      borderRadius: 18,
      // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
    },
    priceSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 2,
      marginVertical: 4,
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 3,
      height: sectionPriceHeight,
      minHeight: sectionPriceHeight,
      borderRadius: 10,
      backgroundColor: thisBackGround, // Couleur de fond pour une meilleure visibilité
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: thisBackGround,
      justifyContent: 'flex-start',
      width: '100%',
      maxHeight: heightArticle - 80,
      // height: heightBody *.8, // ne pas fixer hauteur !!!
      // borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
    },
    quantityControls: {
      display: 'flex',
      flexDirection: 'row',
      width: 120,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      maxHeight: '100%',
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
    },
    quantityButton: {
      backgroundColor: Colors.highlightBG, // Couleur plus visible
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minHeight: 36,
      width: 30, // Augmentation pour une meilleure cliquabilité
      position: 'static',
      margin: 0,
      elevation: 3, // Ombre pour plus de profondeur
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 1,
    },
    quantityButtonText: {
      fontSize: 20, // Texte plus grand
      fontWeight: 'bold',
      color: 'white',
    },
    qteInputContainer: {
      maxWidth: 30,
    },
    quantityInput: {
      width: 26,
      textAlign: 'center',
      borderRadius: 5,
      paddingVertical: 5,
      fontSize: 18,
      backgroundColor: Colors.accentBG,
      // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 1,
    },


    texteArticlePrix: {
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
    },
    strikethroughPrice: {
      textDecorationLine: 'line-through',
      color: 'red',
      backgroundColor: 'white',
      padding: 3,
      position: 'absolute',
      fontSize: 16,
      transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
    },
    rotatedText: {
      fontSize: 18,
      color: '#333',
      transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.primaryText,
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

    modalContainer: {
      backgroundColor: 'transparent',
      width: '100%',
    },
    openModalButton: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    descriptionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      flex: 1,
      maxWidth: '100%',
      backgroundColor: thisBackGround,
      maxHeight: MAXWIDTH > widthMobile ? heightArticle - 100 : widthMobile * 1,
      overflow: 'hidden',
    },
    menuTitle: {
      color: 'white',
      fontSize: 20,
      width: '100%',
      margin: 0,
      textAlign: 'center',
      overflow: 'hidden',
      backgroundColor: thisBackGround,
      padding: 0,
      height: 70,
      // minHeight: 70,
      maxHeight: 70,
      paddingVertical: 0,
      // backgroundColor:Colors.accentBG
    },
    imageContainer: {
      height: widthMobileOrWeb,
      width: widthMobile,
      maxHeight: widthMobile
    },
    imageDescription: {
      display: 'flex',
      height: widthMobile * .3,
      maxHeight: widthMobile * .3,
      overflow: 'hidden',
      backgroundColor: thisBackGround,
    },
    icon: {
      position: 'absolute',
      color: 'white',
      fontWeight: '600',
      right: 0,
      zIndex: 999,
    },
    figCaption: {
      width: '100%',
      // minHeight: 60,
      flex: 1,
      display: 'flex',
      // maxHeight: 60,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: -60,
      backgroundColor: thisBackGround,
      marginVertical: 10,
    },
    pageContainer: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      width: '100%',
      marginHorizontal: 0,
      padding: 4,
      borderColor: 'blue', borderStyle: 'solid', borderWidth: 5,
    },
    listContainer: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      width: '100%',
      marginHorizontal: 0,
      padding: 4,
      // borderColor: 'turquoise', borderStyle: 'solid', borderWidth: 5,
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
    eachContainerArticle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: MAXWIDTH > widthMobile ? '48%' : '100%',
      minWidth: MAXWIDTH > widthMobile ? '48%' : '100%',
      backgroundColor: Colors.primaryBG,
      marginVertical: 20,
      // borderColor: MAXWIDTH > widthMobile ? 'green' : 'yellow',
      // borderWidth: 5,
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
      borderColor: 'pink', borderStyle: 'solid', borderWidth: 10,
      position: 'absolute',
      top : 0
    },

  });


  {/* {renderMenuN(topVentesList[0])} */ }
  const renderItem = (item: any, index: any) => {
    return (
      <ThemedView
        style={
          styles.articleContent
        }
      >

        {renderMenuContent(topVentesList[index])}
        {renderPriceSection(topVentesList[index])}
      </ThemedView>

    )
  }

  const consTest = "Z0".repeat(50)
  return (
    <ParallaxScrollView //background image

      headerBackgroundColor={{ light: '#A1CEDC', dark: Colors.primaryBG }}
      headerImage={ // BackgroundImage
        // <BackgroundImage />
        <View // cadre backGround
          style={{
            height: screenHeight,
            width: screenWidth,
            borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
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
              <ThemedText type='subtitle' style={styles.text}>La fraicheur : je vous garantis . </ThemedText>
              <ThemedText type='subtitle' style={styles.text}>Le meilleur goût : aussi .</ThemedText>

              <ThemedText type='subtitle' style={styles.text}>Vous ne serez pas déçus, c'est Promis .</ThemedText>

            </View>
          </View>
        </View>

      }>
        <View
          style={styles.headerContainer}
          >
            <Header
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              articlesList={articlesList}
              cart={cart}
              navigation={undefined}
            />


          </View>

      <ThemedView style={styles.pageContainer}>

          
        <ThemedView style={[styles.stepContainer, {
          backgroundColor: Colors.primaryBG,
           padding: 10,
          width:'96%',margin: 'auto',
          borderRadius: 10,
          // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
        }]}>

          <ThemedText type="subtitle">Bienvenue chez Delicatessen
            {/* <RenderHtmlIcon nameIcon={iconSend} /> */}
            {/* {renderHtmlIcon('send')} */}
          </ThemedText>
          <ThemedView style={[styles.stepContainer, {
            borderRadius: 10,
            // backgroundColor: Colors.primaryBG, padding: 10
          }]}>
            <ThemedText type="default">
              Découvrez une expérience culinaire unique où la fraîcheur et la tradition se rencontrent. Chez Delicatessen, nous livrons des Sushis et d'autres plats vietnamiens faits maison à la demande.

            </ThemedText>
            <ThemedText style={{ width: '100%', textAlign: 'left' }}> Site en cours en finition, N'hésitez pas à nous appeler :07 43 33 12 34</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, {
        }]}>


          {topVentesListGroup.map((group, index) => (
            <ThemedView style={styles.listContainer} key={index}>
              {index == 0 &&
                <ThemedView style={[styles.stepContainer, {
                  borderRadius: 10,
                  backgroundColor: Colors.primaryBG, padding: 10
                }]}>
                  <ThemedText type="subtitle">Plats vietnamiens fait-maison</ThemedText>
                  <ThemedText type="default">Voyagez au cœur du Vietnam avec nos plats traditionnels, de la délicatesse des nems croustillants à la richesse parfumée du phở. Préparés dans le respect des saveurs authentiques, nos plats vietnamiens faits maison sont parfaits pour tous vos moments de partage, que ce soit un repas en famille ou un dîner entre amis. Découvrez des saveurs qui vous transporteront dans les rues du Vietnam, où vous serez certain de passer un moment inoubliable</ThemedText>
                </ThemedView>}
              {index == 1 &&
                <ThemedView>
                  <ThemedText type="subtitle">Des sushis frais et authentiques</ThemedText>
                  <ThemedText type="default">Plongez dans l’art de la cuisine japonaise avec nos sushis, préparés avec soin pour offrir une expérience culinaire inoubliable. Des classiques comme les makis et nigiris aux créations originales, chaque bouchée est un voyage gustatif qui vous transporte directement au Japon. Nos assortiments de sushis frais sont idéaux pour satisfaire toutes vos envies et sublimer vos repas. Présentez à vos convives l'élégance et la délicatesse de notre cuisine japonaise pour une expérience visuelle et gustative unique.rez fiers de présenter l’élégance notre cuisine japonaise à vos convives</ThemedText>
                </ThemedView>}

              <ThemedView style={[styles.articleContainer, {}]}>
                {group.map((item: any, i: any) => (
                  <React.Fragment key={i}>
                    {renderItem(item, i)}
                  </React.Fragment>
                ))}
              </ThemedView>
            </ThemedView>
          ))}


        </ThemedView>


        <ThemedText type="defaultSemiBold">📍 Livraison rapide à Toulon et alentours.</ThemedText>
        <ThemedText type="default">
          Découvrez, commandez, dégustez : c'est bon pour vous et pour votre portefeuille ! 🥂✨
        </ThemedText>
      </ThemedView>


    </ParallaxScrollView>


  )
}