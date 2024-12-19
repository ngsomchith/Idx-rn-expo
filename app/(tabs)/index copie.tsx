
import { StyleSheet, Button, View, Text, ScrollView, Pressable, SafeAreaView, ScrollViewComponent, FlatList, Platform } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useContext, useEffect, useState } from 'react';
// import { Colors, iconCadeau, iconCheck, iconCheckBox, iconCheckBoxRed, iconClick, iconRefresh, iconSquare, iconSquareRed, iconTop } from '../config';

// import { arrayUnique, convertDatefrToDayDocStrIndex, convertToFormeDatefr, formeMyDatefr, getTodayfr10, initArrayToCsv, objectLength, thisClone } from '../components/DataService';
import { Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { ArticleType } from '../models/ArticleType';
import { useFocusEffect, useRouter } from 'expo-router';
import React from 'react';
import ThisDevice from '@/constants/ThisDevice';
import { myStyles } from '@/components/myStyle';
import { useFb } from '@/hooks/useFb';
import images from '@/constants/images';
import BackgroundImage from '@/components/BackGroundImage';
import ImageViewer from '@/components/ImageViewer';
import ButtonStd from '@/components/ButtonTypeStd';
import Header from '@/components/Header';
import { getmyDoc } from '@/firebase';
import { Colors } from '@/constants/Colors';
import { thisClone } from '@/components/services/DataServices';
import { iconClick, iconTop } from '@/icons';


export default function HomeIndex({ navigation, route, showPanierViewModal }) { //articlesList, setArticlesList, articlesListByCat, setArticlesListByCat

  // import { useContext, useEffect, useState } from 'react';
  // const {
  //   user, setUser,
  //   viewModal, setViewModal,
  //   currentUserEmail, setCurrentUserEmail,
  //   userInfo, setUserInfo,
  //   articlesList, setArticlesList,
  //   articlesListFiltered, setArticlesListFiltered,
  //   articlesListByCat, setArticlesListByCat,
  //   currentMenuN, setcurrentMenuN,
  //   newArticlesList, setNewArticlesList,
  //   panier, setPanier,
  //   panierQte, setPanierQte,
  //   panierView, setpanierView,
  //   totalPanier, setTotalPanier,
  //   currentPdjType, setCurrentPdjType,
  //   myDaysList, setMyDaysList,
  //   currentUser, setCurrentUser,
  //   currentUserFinal, setCurrentUserFinal,
  //   todayfr10, setTodayfr10,
  //   cdeEnCours, setCdeEnCours,
  //   currentCdeEnCours, setCurrentCdeEnCours,
  //   cdeEnCoursList, setCdeEnCoursList,
  //   cdeEnCoursAllEmail, setCdeEnCoursAllEmail,
  //   filteredDataSource, setFilteredDataSource,
  //   masterDataSource, setMasterDataSource,
  //   search, setSearch,
  //   searchAble, setSearchAble,
  //   MyModalPageVisible, setMyModalPageVisible,
  //   PlatsToShowFiltered, setPlatsToShowFiltered,
  //   PlatsToShowFilteredPanier, setPlatsToShowFilteredPanier,
  //   gAuth, setGAuth,
  //   pdjTypeList, setPdjTypeList,
  //   promoOuverture, setpromoOuverture,
  //   navAdminState, setNavAdminState,
  //   arrayUser, lastFixtures,
  //   lastDateFixtures, currentDateFixtures,
  //   dateSaisie, setDateSaisie,
  //   datePush, setDatePush,
  //   categoryNameList, setcategoryNameList,
  //   historyCde, setHistoryCde,
  //   newFixtureAble, setNewFixtureAble,
  //   chooseDateAble, setChooseDateAble,
  //   addFixtureState, setAddFixtureState,
  //   chooseTimeAble, setChooseTimeAble,
  //   updateFixtureAble, setUpdateFixtureAble,
  //   fixtureAdd, setFixtureAdd,
  //   fixtureEdit, setFixtureEdit,
  //   fixture2Update, setFixture2Update,
  //   selectedDate, setSelectedDate,
  //   selectedTime, setSelectedTime,
  //   currentNavIdx, setCurrentNavIdx,
  //   fixturesForOdds, setFixturesForOdds,
  //   fixturesImport, setFixturesImport,
  //   currentIndex, setCurrentIndex,
  //   nextIndex, setNextIndex,
  //   newState, setNewState,
  //   dayDocStr, setDayDocStr,
  //   startState, setStartState,
  //   cancelState, setCancelState,
  //   updateState, setUpdateState,
  //   MyModalAuthPageVisible, setMyModalAuthPageVisible,
  //   deleteState, setDeleteState,
  //   fixtures2Months, setFixtures2Months,
  //   saveAble, setSaveAble,
  //   screenBt, setScreenBt,
  //   goToHomeScreen, setgoToHomeScreen,
  //   debuteunefois, setdebuteunefois,
  //   fixtViewed, setfixtViewed,
  //   fixturesListData, setfixturesListData,
  //   currentScreen, setCurrentScreen,
  //   isLoading, setIsLoading,
  //   stateBar, setstateBar,
  //   monthDocStr, setMonthDocStr,
  //   dateFact, setdateFact,
  //   chooseDay, setChooseDay,
  //   chooseDayTime, setChooseDayTime,
  //   scrollTo, setscrollTo,
  //   categoryName, setcategoryName,
  //   categoryIcon, setcategoryIcon,
  //   allCdeEnCours, setAllCdeEnCours,
  //   currentcategoryNameAndIcon, setcurrentcategoryNameAndIcon,
  //   idx, setIdx,
  //   allCurrentCde, setAllCurrentCde,
  //   articlesListForSearch, setArticlesListForSearch,
  //   notConnected

  // } = useContext(AuthenticatedUserContext);

  const masterEmail = 'ng.somchith@gmail.com'
  const masterEmail2 = 'deviehoa@gmail.com'

  const [thisImport, setThisImport] = useState(false)

  const router = useRouter()
  const [sound, setSound] = useState(null);


  let customFonts = {
    'BrushScript': require('@/assets/fonts/BrushScript.ttf')
    // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  };
  const [fontsLoaded] = useFonts(customFonts)

  const styles0 = ThisDevice().styles0
  const styles = myStyles
  const MAXWIDTH1_3 = ThisDevice().device.myMAXWIDTH

  const device = ThisDevice().device
  const MAXWIDTH = ThisDevice().MAXWIDTH
  const myHeight = device.height * 1.3
  // const myCoeffScreen = myWidth / myHeight

  const [my2Months, setmy2Months] = useState([])
  const [_cdeFrom2Months, set_CdeFrom2Months] = useState([])
  // let allCurrentCdeTemp = thisClone(allCurrentCde)
  // let articlesListByCatTemp = thisClone(articlesListByCat)
  const { data, error } = useFb('articles/seller2/articlesList')

  const panierTemp = new Array<ArticleType>()
  const [platDuJour, setPlatDuJour] = useState('')

  const [viewCdeDone, setViewCdeDone] = useState(true)
  const [viewCdeToDo, setViewCdeToDo] = useState(true)
  const [orientatn, setOrientatn] = useState(null)

  const [myDocsCdeEncoursHorsEmailTest, setMyDocsCdeEncoursHorsEmailTest] = useState([])

  useEffect(() => { //device Orientation
    //  // Set the initial screen orientation (optional)
    //  ScreenOrientation?.lockAsync(ScreenOrientation?.OrientationLock?.PORTRAIT);

    //  // Add an event listener for orientation changes (optional)
    //  const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
    //    //all20240215 console.log('Orientation changed to', event.orientation);
    //  });

    // Clean up the event listener when the component unmounts
    //all20240215 console.log("width,height", device.width, ' x ', device.height)

  }, [device])

  // const thisCollectionStr = '/dayListCde/' + (monthDocStr ? monthDocStr : 'monthDocStr') + '/' + dayDocStr
  let platDuJourTemp = platDuJour ? thisClone(platDuJour) : []

  async function getPlatsDJ(articlesList: any) {
    console.log("getPlatsDJ", articlesList)
    const pdjRefFB = await getmyDoc('/dayListCde/pdjRef')
    console.log("pdjRefFB", pdjRefFB)
    const resultPDJ = articlesList.find((elt: any) => elt.ref === pdjRefFB)

    console.log("198PlatDuJour", resultPDJ)

    platDuJourTemp.name = resultPDJ
    platDuJourTemp.pdjType = 'pdj'
    platDuJourTemp.date = todayfr10 // dayDocStr // resultPDJ.date
    platDuJourTemp.explication = resultPDJ?.explication

    // setPlatDuJour(platDuJourTemp)
    setPlatDuJour(resultPDJ)
  }

  // async function getItemsRealTimeFromCollectionFn(thisCollectionStr: any, dayDocStr: any) {
  //   //all28012024 console.log("WELC416 = thisCollectionStr,dayDocStr,dataCdeLength,dataCde =", thisCollectionStr, dayDocStr, dataCdeLength, dataCde)
  //   // const result =[dataCde]
  //   getItemsRealTimeFromCollection(thisCollectionStr, dataCde, setDataCde, dataCdeLength).then(() => {
  //     //all28012024 console.log("WELC420 = dataCdeLength,dataCde =", dataCdeLength, dataCde)

  //     if (dataCde.length > dataCdeLength) { setDataCdeLength(dataCde.length) }

  //   })
  // }

  async function getCdeEnCoursByMonth(my2Months: any, dayDocStr: string) {
    let docStrMonth = dayDocStr?.substring(0, 6)
    const resultGetCdeEnCoursByDay: any = []
    const myDocs: any = []
    let cdeEnCoursAllEmailTemp: any = []
    let historyCdeTemp: any = []

    my2Months?.forEach(async (eachDay: any) => {
      docStrMonth = eachDay.substr(0, 6)
      resultGetCdeEnCoursByDay['day' + eachDay] = await getCdeEnCoursByDay(docStrMonth, eachDay)
      if (resultGetCdeEnCoursByDay['day' + eachDay]?.length > 0) {
        myDocs.push(resultGetCdeEnCoursByDay['day' + eachDay])

      }

    })

    setTimeout(() => {
      // let allCdeEnCoursTemp = thisClone(allCdeEnCours)
      if (myDocs?.length > 0) {
        let eachCdeIndex = 0
        myDocs.forEach((eachDayListCde: any) => {
          eachDayListCde.forEach((eachCde: any) => {
            eachCde.index = eachCdeIndex
            historyCdeTemp[eachCdeIndex] = eachCde
            eachCdeIndex++
            let i: any = 0
            eachCde.panier.forEach(async (panierElt: any) => {
              let datePanierElt = await convertDatefrToDayDocStrIndex(panierElt.date)
              // console.log("Welcome360 ", i, " i, dayDocStr,datePanierElt,  ? ", eachCde && ("eachCde.id:panier =" + eachCde.id))

              if (Number(datePanierElt) >= Number(dayDocStr)) {
                if (panierElt.pdjType == 'pdj') {
                  panierElt.qte = 0
                  let i = 0

                  panierElt.id = eachCde.id
                  panierElt.email = eachCde.panierUserEmail
                  cdeEnCoursAllEmailTemp.push(panierElt)
                  // allCdeEnCoursTemp.push(panierElt)
                }
              }
              // if (eachCde.panierUserEmail == currentUserEmail) {

              //   panierTemp.push(panierElt)
              // }
              i++;
            });


          });

          // setCdeEnCoursList([])
          // setCdeEnCoursAllEmail(cdeEnCoursAllEmailTemp)

        });
        // setTimeout(() => {
        //   setHistoryCde(historyCdeTemp)
        //   setIsLoading(false)
        // }, 3000);

      } else {
        // setTimeout(() => {
        //   setIsLoading(false)
        // }, 3000);
      }
    }, 1000);

    return myDocs
  }

  async function filtertoGetMyDocsCdeEncoursHorsEmailTestTemp(_cdeFrom2Months:any) {

    const thisPanierDate = []
    const myDocsCdeEncoursHorsEmailTestTemp = thisClone(myDocsCdeEncoursHorsEmailTest)
    let i = 0


    _cdeFrom2Months?.forEach((eachDayListCde: any) => {
      eachDayListCde.forEach((eachCde: any) => {

        if (
          eachCde.panierUserEmail != 'ng.somchith@gmail.com' &&
          eachCde.panierUserEmail != 'sg83auc@gmail.com'
          && eachCde.panierUserEmail != 'udex.web@gmail.com'
          && eachCde.panierUserEmail != 'delicatessen.cloud@gmail.com'
          && eachCde.panierUserEmail != 'deviehoa@gmail.com') {

          // eachCde.panier.forEach(panierElt => {// ???????????????????????????????????????   date dépasséee ? 

          //   if (panierElt?.date) {
          //     // console.log(" eachCde.panier / new Date(panierElt?.date) ",panierElt?.date, new Date(panierElt?.date))
          //     if (Number(convertDatefrToDayDocStrIndex(panierElt?.date)) >= Number(dayDocStr)) {
          //       //all console.log("522panierElt.date = ", convertDatefrToDayDocStrIndex(panierElt?.date), eachCde)
          //       allCurrentCdeTemp.push(panierElt)
          //       if (i == 0) {
          //         myDocsCdeEncoursHorsEmailTestTemp[i] = eachCde
          //         i++;
          //       }
          //       else if (i > 0) {
          //         //all console.log("435 i", i, myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8), eachCde?.id.substr(0, 8), myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8) == eachCde?.id.substr(0, 8))
          //         if (myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8) != eachCde?.id.substr(0, 8)) {
          //           //all console.log("535i", i, myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8), eachCde?.id.substr(0, 8), myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8) == eachCde?.id.substr(0, 8))
          //           myDocsCdeEncoursHorsEmailTestTemp[i] = eachCde
          //           setAllCurrentCde(myDocsCdeEncoursHorsEmailTestTemp)

          //         } else {
          //           //all console.log("540i", i, myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8), eachCde?.id.substr(0, 8), myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8) == eachCde?.id.substr(0, 8))
          //         }
          //       } else {
          //         //all console.log("543i", i, myDocsCdeEncoursHorsEmailTestTemp[i - 1].id.substr(0, 8), eachCde?.id.substr(0, 8))
          //       }


          //     } else {
          //       //all console.log("535panierElt.date = ", i, panierElt?.date)
          //     }
          //   } else {

          //     //all console.log("528panierElt without date", panierElt)
          //   }

          // });

          // ---------------------------

        } else {
          //all202409    console.log('466 eachCde email - test ', eachCde.panierUserEmail)
        }


      });


    });


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
          maxWidth: '100%',
          width: device.width > device.height ? device.height - 200 : '100%', // device.width,// device.height - 240,
          // height: device.width > device.height ? device.height - 200 : device.width,
          // maxHeight: device.height - 200,
          // maxHeight: device.width > device.height ? device.height - 200 : MAXWIDTH,
          // margin: 'auto',
          flexDirection: 'column',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          // borderWidth: 5, borderColor: 'blue', borderStyle: 'solid',
        }}>

          <Pressable onPress={() => {
            console.log("Welcome 546  : platDuJour ", platDuJour)
            // getarticlesListByCat(articlesList)
            // setcurrentMenuN(platDuJour)
            // setCurrentScreen('ArticleScreen')
            // goToArticleScreenPdj()
          }}
          >

            <View style={{
              width: '100%', margin: 0,
              backgroundColor: Colors.primaryBG,
              paddingHorizontal: 10,
              marginVertical: 10,
              paddingVertical: 5,

            }}>
              <Text style={{ //title plat du jour
                fontSize: 26,
                color: 'gold',
                backgroundColor: Colors.highlightBG,
                fontWeight: '600',
                padding: 10,
                borderRadius: 18,
                marginVertical: 5,
                textAlign: 'center',
                width: '96%',
                marginHorizontal: 'auto'

              }}>
                Plat Spécialisé du jour
              </Text>

              <View style={{
                display: 'flex',
                width: '96%',
                marginHorizontal: 'auto',
                borderRadius: 18,
                height: MAXWIDTH * .5,
                // borderWidth: 5, borderColor: 'turquoise', borderStyle: 'solid',
              }}>

                <Image source={images[platDuJour?.img] ? images[platDuJour?.img] : images.logo2} style={[
                  {

                    resizeMode: 'contain',
                    width: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    // borderColor: 'red', borderWidth: 3, borderStyle: 'solid',
                  }]} />
              </View>
              <Text style={[styles.title, {
                backgroundColor: Colors.highlightBG,
                borderRadius: 18,
                marginVertical: 5,
                color: Colors.primaryText,

              }]}>
                {platDuJour && platDuJour['name']}
              </Text>
              <Text style={{
                color: Colors.primaryText,
                fontSize: 18,
                padding: 5,
                width: '100%'

              }}>
                {platDuJour && platDuJour['explication']}
              </Text>
            </View>


          </Pressable>
        </View>
      </View>

    )
  }

  // async function getarticlesListByCat(_articlesList:any) {
  //   if (_articlesList && _articlesList.length > 0) {
  //     //all202409    console.log("521getarticlesListByCat +++++++++++++ TOP getarticlesListByCat ++++++++++++++++")

  //     // initArticlesListByCatTemp()
  //     // groupedByPdjType(articlesList, setArticlesListByCat)
  //     // const myDocs: any = []
  //     // let i: any;

  //     // i = 0


  //     // const grouped = _articlesList.length > 0 && _articlesList.reduce(
  //     //   (result: any, currentValue: any) => {
  //     //     console.log('WelcomeScreen474 grouped',i, currentValue.pdjType,result[currentValue.pdjType], objectLength(currentValue));
  //     //     typeof (currentValue) == 'object' && (result[currentValue.pdjType]  || []).push(currentValue);
  //     //     i++
  //     //     // console.log(i, result)
  //     //     return result;

  //     //   }

  //     // );

  //     //   i = 0
  //     //   if (grouped) {
  //     //     for (const key in grouped) {
  //     //       if (Object.prototype.hasOwnProperty.call(grouped, key)) {
  //     //         const articlesListGrouped = grouped[key];
  //     //         if (typeof (articlesListGrouped) != 'string') {
  //     //           // console.log("Welcome496 (articlesListGrouped) = key ->pdjType", i, articlesListGrouped.length, key)

  //     //         } else {
  //     //           // console.log("Home559 = ", i, typeof (articlesListGrouped))
  //     //           delete grouped[key]
  //     //         }
  //     //         i++
  //     //       }
  //     //     }

  //     // //all202409    console.log("Welcomeome506 grouped = ", grouped)
  //     // //all202409    console.log("Welcomeome507 grouped = ", 'grouped')
  //     //     setArticlesListByCat(grouped)
  //     //     for (const key in grouped) {
  //     //       if (Object.prototype.hasOwnProperty.call(grouped, key)) {
  //     //         const element = grouped[key];
  //     //         // console.log("513 ", key, element.length)
  //     //       }
  //     //     }

  //     //   }

  //   }
  // }

  // function groupedByPdjType(_articlesList, _setArticlesListByCat) {
  //   return _articlesList.reduce((acc, article) => {
  //     const { pdjType } = article;

  //     // Si le type n'existe pas encore dans l'accumulateur, on l'initialise
  //     if (!acc[pdjType]) {
  //       acc[pdjType] = [];
  //     }

  //     // On ajoute l'article dans le tableau correspondant à son pdjType
  //     acc[pdjType].push(article);
  //     _setArticlesListByCat(acc)
  //     return acc;
  //   }, {});
  // }


  // function initArticlesListByCatTemp() {// appelé par getarticlesListByCat()
  //   if (!articlesListByCatTemp) { articlesListByCatTemp = [] }

  //   articlesListByCatTemp['promoOff'] = []
  //   articlesListByCatTemp['promo'] = []
  //   articlesListByCatTemp['topV'] = []
  //   articlesListByCatTemp['pdjsja'] = []
  //   articlesListByCatTemp['pdj'] = []
  //   articlesListByCatTemp['faitM'] = []
  //   articlesListByCatTemp['pdjsDess'] = []
  //   // articlesListByCatTemp['tlj'] = []
  //   articlesListByCatTemp['tljFri'] = []
  //   articlesListByCatTemp['tljSal'] = []
  //   articlesListByCatTemp['tljLiv'] = []
  //   articlesListByCatTemp['pdjVap'] = []
  //   articlesListByCatTemp['tljboi'] = []
  //   articlesListByCatTemp['tljDess'] = []
  //   // articlesListByCatTemp['tlp'] = []
  //   // articlesListByCatTemp['pdjsja'] = []
  //   articlesListByCatTemp['jap'] = []
  //   articlesListByCatTemp['japspe'] = []
  // }

  const cadreBackGroundImage = () => {
    return (
      <View style={// container cuisiniere - BackgroundImage absolute top 120
        [{
          padding: 0,
          minWidth: MAXWIDTH1_3,
          width: MAXWIDTH,
          maxWidth: '100%',
          minHeight: MAXWIDTH1_3,
          height: myHeight,
          backgroundColor: 'transparent',
          // borderColor: 'turquoise',
          // borderWidth: 15,
          // borderStyle: 'solid',
          display: 'flex',
          position: 'absolute',
          top: 0,
        }]
      }
      >
        <BackgroundImage />
      </View>)
  }

  const cadreVide = () => {
    //pour laisser apparaitre le backGroundImage

    return (<View style={[
      // myStyles.dbCol, 
      {
        display: 'flex',
        maxWidth: '100%', width: MAXWIDTH,
        height: 150,
        minHeight: MAXWIDTH1_3 * 1.1,
        flexDirection: 'column',
        marginVertical: 10,

        // borderWidth: 5, borderColor: 'coral', borderStyle: 'solid',

      }]}>

    </View>)

  }

  const myFlatListRowWrap = () => {
    // const data = thisData // Votre ensemble de données

    return (
      <View style={{
        backgroundColor: 'transparent',
        width: MAXWIDTH,
        maxWidth: '100%',
        height: device.heightBody - 10,
        overflow: 'scroll',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 0,
        // borderWidth: 5, borderColor: 'pink', borderStyle: 'solid',
      }}>
       
            {/* <PhoneSendVerif /> */}
            {accrocheAccueil()}
            {/* {textbicolore()} */}
            {promotionButton()}
            {/* {cadrePlanDelicatessen()}
            {promotionButton()} */}
            {cadrePlatduJour()}
            {promotionButton()}
            {cadreImageCuisine()}
            {presentation()}

            {cadreMoyenPaiement()}

            <View style={{
              maxWidth: '100%',
              width: MAXWIDTH,
              margin: 0,
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'flex-end',
            }}>
              <View style={{
                maxWidth: 345,
                width: '100%',
                marginHorizontal: 'auto',
                maxHeight: '100%',
                borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
                marginVertical: 60,
                zIndex: 999
              }}>
                {/* <ModalGoToAvis navigation={navigation} /> */}
              </View>
            </View>

            {promotionButton()}

        

      </View>
    );
  }

  const accrocheAccueil = () => {
    return (

      <View style={[styles2.containerNoScroll, {
        // height: device.height - 210,
        maxHeight: device.height - 220,
        marginHorizontal: 0,
        padding: 10,
        borderRadius: 10,
        // borderWidth: 10, borderColor: 'coral', borderStyle: 'solid',

      }]}>

        <View style={{
          // maxWidth: device.height - 200,
          maxWidth: '100%',
          width: device.width > device.height ? device.height - 200 : device.width,// device.height - 240,
          height: device.width > device.height ? device.height - 200 : device.width,
          // maxHeight: device.height - 200,
          maxHeight: device.width > device.height ? device.height - 200 : MAXWIDTH,
          // margin: 'auto',
          flexDirection: 'column',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          // borderWidth: 5, borderColor: 'blue', borderStyle: 'solid',
        }}>


          <ImageViewer placeholderImageSource={'pub_Delicatessen'} />

          <Text style={[
            // styles.highlightText, 
            {
              fontSize: 16, width: '100%', padding: 20,
              marginVertical: 2, textAlign: 'center'
            }]}>
            {iconTop}
            {iconTop}
          </Text>



        </View>

      </View>)
  }

  const textbicolore = () => {
    return (
      <View style={{
        maxWidth: MAXWIDTH - 140,
        width: MAXWIDTH,
        margin: 50,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'flex-end',
      }}>

        <View style={{
          maxWidth: 350,
          width: '100%',
          // marginHorizontal: 50,
          paddingHorizontal: 20,
          // maxHeight: '100%',
          // borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
          marginVertical: 60
        }}>

          <Text style={[styles.highlightText, {
            fontSize: 16, width: '100%',
            paddingVertical: 20,
            marginVertical: 20, textAlign: 'center'
          }]}>
            LIVRAISON OFFERTE

          </Text>

          <Text style={[styles.highlightText, {
            fontSize: 16, width: '100%', padding: 20,
            marginVertical: 2, textAlign: 'center'
          }]}>
            commande supérieur à 30€
          </Text>
          <Text style={[styles.highlightText, {
            fontSize: 16, width: '100%', padding: 20,
            marginVertical: 2, textAlign: 'center'
          }]}>
            OU
          </Text>
          <Text style={[styles.highlightText, {
            fontSize: 16, width: '100%', padding: 20,
            marginVertical: 2, textAlign: 'center'
          }]}>
            1ère commande à Toulon
          </Text>

        </View>

      </View>)
  }
  const cadrePlanDelicatessen = () => {

    return (
      <View style={[styles2.containerNoScroll, {
        // height: device.height - 210,
        maxHeight: device.height - 220,
        marginHorizontal: 0,
        padding: 10,
        borderRadius: 10,
        // borderWidth: 10, borderColor: 'coral', borderStyle: 'solid',

      }]}>

        <View style={{
          // maxWidth: device.height - 200,
          maxWidth: '100%',
          width: device.width > device.height ? device.height - 200 : device.width,// device.height - 240,
          height: device.width > device.height ? device.height - 200 : device.width,
          // maxHeight: device.height - 200,
          maxHeight: device.width > device.height ? device.height - 200 : MAXWIDTH,
          // margin: 'auto',
          flexDirection: 'column',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          // borderWidth: 5, borderColor: 'blue', borderStyle: 'solid',
        }}>
          {/* <ZoomableImageModal imageName={'plan_delicatessen'} /> */}
          {/* <ZoomableImageModal  imageName={'riz_sautes_crevettes'}/> */}
        </View>
      </View>
    )
  }

  const cadreImageCuisine = () => {

    return (

      <View style={[styles2.containerNoScroll, {
        // height: device.height - 210,
        maxHeight: device.height - 220,
        marginHorizontal: 0,
        maxWidth: '90%',
        width: '90%',
        // padding: 10,
        borderRadius: 10,
        // borderWidth: 10, borderColor: 'red', borderStyle: 'solid',

      }]}>

        <View style={[styles2.containerNoScroll, {
          height: MAXWIDTH * .8,
          minHeight: MAXWIDTH * .8,
          // maxWidth:'100%',
          // marginHorizontal:'10%',
          // paddingHorizontal: 10,
          marginVertical: 20,
          // backgroundColor:Colors.primaryBG,
          borderRadius: 10,

        }]}>

          <ImageViewer placeholderImageSource={'cuisine'} />
        </View>
      </View>
    )
  }

  const cadreMoyenPaiement = () => {
    return (

      <View style={{
        // maxWidth: MAXWIDTH - 140,
        width: MAXWIDTH,
        maxWidth: '100%',
        // margin: 50,
        flexDirection: 'column',
        display: 'flex',
        height: 1000,
        alignItems: 'center',
      }}>


        <Text style={[styles.highlightText, {
          fontSize: 24, width: '94%', padding: 20,
          marginHorizontal: 'auto',
          marginVertical: 10, textAlign: 'center'
        }]}>
          Paiements acceptés

        </Text>
        <View style={{
          width: '100%',
          height: '100%',
          maxWidth: MAXWIDTH < 350 ? MAXWIDTH * .8 : 350,
          maxHeight: 900
        }}>
          <ImageViewer placeholderImageSource={'carte_bleue'} />
        </View>

        <View style={{ height: 10, minWidth: '100%', maxWidth: '100%' }}></View>

      </View>)
  }

  const presentation = () => {
    return (
      <View style={{
        // maxWidth: MAXWIDTH - 140,
        width: MAXWIDTH,
        maxWidth: '100%',
        // margin: 50,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'flex-end',
      }}>

        <View style={{
          // maxWidth: 350,
          width: '100%',
          // marginHorizontal: 50,
          paddingHorizontal: 20,
          // maxHeight: '100%',
          // borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
          marginVertical: 60
        }}>

          <Text style={[styles.highlightText, {
            fontSize: 16, width: '100%', padding: 20,
            // marginVertical: 20,
            textAlign: 'center'
          }]}>
            Découvrez une expérience culinaire unique avec notre service de cuisine professionnelle installée à domicile,
            où chaque plat est préparé avec passion et dévouement. En plus des plats vietnamiens et des sushis, vous trouverez aussi quelques spécialités thailandais et laotiens.
            Ici, les frais fixes sont maintenus au plus bas, vous garantissant ainsi des repas frais au meilleur prix.

          </Text>

          <Text style={[styles.highlightText, {
            fontSize: 20, width: '100%', padding: 20,
            marginVertical: 20,
            textAlign: 'center'
          }]}>

            Ainsi, nous pouvons vous assurer des plats toujours frais et délicieux, sans aucune perte.
          </Text>


          <Text style={[styles.highlightText, {
            fontSize: 16, width: '100%', padding: 20,
            marginVertical: 20,
            // color: Colors.accentBG,
            textAlign: 'center'
          }]}>
            En temps normale, la plupart de nos spécialités sont disponibles rapidement,
            pour satisfaire vos envies gourmandes en un clin d'œil.

          </Text>
          <Text style={{ height: device.heightBody }}></Text>

          <Text style={[styles.highlightText, {
            fontSize: 20, width: '100%', padding: 20,
            marginVertical: 40,
            textAlign: 'center'
          }]}>

            Oubliez les compromis entre qualité et prix. Avec nous, bénéficiez du meilleur des deux mondes : une cuisine savoureuse, préparée avec amour, à des tarifs abordables.

            Offrez-vous le plaisir d'une expérience culinaire exceptionnelle dès aujourd'hui.

          </Text>

          <Text style={[styles.highlightText, {
            fontSize: 20, width: '100%', padding: 20,
            marginVertical: 40,
            textAlign: 'center'
          }]}>
            Votre satisfaction est notre priorité, et nous aimerions savoir ce que vous en pensez ! Partagez votre expérience en quelques clics et aidez-nous à continuer à vous offrir le meilleur. Cliquez ici pour laisser un avis.
          </Text>



          {/* <View style={{
            maxWidth: MAXWIDTH - 140,
            minWidth: 320,
            width: MAXWIDTH,
            margin: 0,
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'flex-end',
            borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
          }}>

            <ModalGoToAvis navigation={navigation} />
          </View> */}
        </View>


      </View>
    )
  }

  const contentScrollView = () => {//decicatessen.com
    return (
      <View
        style={{
          maxWidth: MAXWIDTH - 140,
          // borderWidth: 5, borderColor: 'white', borderStyle: 'solid',
        }}
      >

        <Text style={{ height: 200 }}></Text>
        {cadrePlatduJour()}
        {cadreVide()}
        {textbicolore()}
        {cadreVide()}
        <Text style={{ height: 150 }}></Text>

      </View>
    )
  }

  const styles2 = StyleSheet.create({
    containerNoScroll: { // styles2.containerNoScroll

      maxWidth: MAXWIDTH - 20,
      // width: MAXWIDTH,
      width: MAXWIDTH - 20,
      height: device.height - 200,
      maxHeight: device.height - 200,
      margin: 0,
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      justifyContent: 'flex-start',

      marginHorizontal: 0,

      // borderWidth: 4, borderColor: 'yellow', borderStyle: 'solid',
    },
    containerFullWidth: {
      backgroundColor: 'transparent',
      width: MAXWIDTH,
      maxWidth: '100%',
      // height: device.heightBody * 0.94,
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      // borderWidth: 10, borderColor: 'green', borderStyle: 'solid',
    }
  });

  function goTo(url: string, param: any, articlesList: any, articlesListByCat: any) {
    //all console.log("1048WelcomeScreen = ", articlesList, articlesListByCat)
    navigation.navigate(url, {
      // otherParam: 'anything you want here',
      articlesList: articlesList,
      articlesListByCat: articlesListByCat,
    });

  }


  const callBackHeader = (data: any) => {
    // console.log("callBackHeader = ", data)
  }

  const promotionButton = () => {
    return (

      <View style={{
        maxWidth: MAXWIDTH - 140,
        width: MAXWIDTH,
        margin: 50,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'flex-end',
      }}>

        <View
          style={{
            maxWidth: 350,
            width: '100%',
            paddingHorizontal: 20,
            maxHeight: '100%',
            // borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
            marginVertical: 60
          }}
        >

          <ButtonStd
            style={{
              position: 'relative',

            }}

            label={"Continuer"}
            // iconL={<IconImg iconName={'iconCadeauImg'} onPressFn={undefined} />}
            iconL={iconClick}
            iconR={iconClick}
            bgButton={Colors.accentBG}
            onChange={undefined}
            labelColor={Colors.primaryText}
            onPress={() => {
              console.log("promotionButton")
              // setCurrentScreen('HomeScreen')
              // goTo('HomeScreen', undefined, articlesList, articlesListByCat)
            }}
          />
        </View>
      </View>
    )
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const cadre1 = () => {//exemple à dupliquer
    return (
      <View style={{
        width: MAXWIDTH, height: myHeight, margin: 5,
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ color: 'black' }} >{'cadre1'}</Text>
      </View>
    )
  }


  const MobilScrolllView = () => {
    return (
      <ScrollView
        // horizontal={device.width >= device.height}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ // ScrollView column
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: 'transparent',
          paddingHorizontal: 10,
          width: '100%',
          // borderColor: 'purple',
          // borderWidth: 10,
          // borderStyle: 'solid',

        }]}>

        {contentScrollView()}
      </ScrollView>
    )
  }
  const getCdeEnCours = () => {
     console.log("getCdeEnCours et useEffect setDayDocStr ")
    // let dayDocStrTemp = thisClone(dayDocStr)
    // setDayDocStr('')
    // setmy2Months([])
    // setTimeout(() => {
    //   setDayDocStr(dayDocStrTemp)
    //   fetchCdeEncours()
    // }, 1000);
  }

  // useEffect(() => {
  //   //all 10 07 2024 console.log("1049articlesList ", articlesList)
  //   if (articlesList?.length > 0) {
  //     if (!articlesListByCat || articlesListByCat?.length == 0) {
  //       getarticlesListByCat(articlesList)

  //     } else {

  //       setTimeout(() => {
  //         setdebuteunefois(2),
  //           setCurrentScreen('HomeScreen');
  //       }, 1000);
  //     }
  //   }
  //   // console.log(66, "desactiver ici / exportArrayTocsv , importFromCsv ")
  //   // desactiver ici pour exporter to CSV

  //   // exportArrayTocsv (articlesList)
  //   // <importFromCsv / > ---> >>> {/* <ImportFromCsv/> */}
  //   // navigation.setOptions({ headerShown: false });

  // }, [articlesList])
  // setArticlesListFiltered


  // useEffect(() => {
  //   //all202409    console.log(" getarticlesListByCat (articlesListFiltered) ", articlesListFiltered)
  //   if (articlesListFiltered?.length > 0) {

  //     getarticlesListByCat(articlesListFiltered)

  //   }
  //   else {
  //     getarticlesListByCat(articlesList)
  //   }


  // }, [articlesListFiltered])

  // useEffect(() => {
  //   //all10062024 console.log("1145 cdeEnCours ", cdeEnCours)
  // }, [cdeEnCours])

  // useEffect(() => {
  //   //all202409    console.log("1145 historyCde ", historyCde)
  // }, [historyCde])

  // useEffect(() => {
  //   //all console.log("1180 articlesListByCat", articlesListByCat)
  //   if (!articlesListByCat && articlesList?.length > 0) {

  //     getarticlesListByCat(articlesList)
  //   }
  // }, [articlesListByCat])



  // useEffect(() => {
  //   //all202409    console.log(" WELCOME1265 my2Months, dayDocStr", dayDocStr)
  //   fetchCdeEncours()
  // }, [my2Months, dayDocStr]);

  // const fetchCdeEncours = () => {
  //   let my2MonthsResult = getTwoMonths(dayDocStr)

  //   my2MonthsResult.then((res: any) => {
  //     //all202409    console.log("WELCOME1269 my2MonthsResult", dayDocStr, res, my2Months)
  //     if (my2Months && my2Months?.length == 0 && res) {
  //       setmy2Months(res)
  //       getCdeEnCoursByMonth(res, dayDocStr)
  //     } else {

  //     }
  //   })
  // }

  // useEffect(() => {
  //   console.log("1242 platDuJour =", platDuJour)
  //   setTimeout(() => {

  //     let platDuJourTemp = thisClone(platDuJour)
  //     if (todayfr10) {
  //       platDuJourTemp.date = todayfr10
  //       console.log("306todayfr10", platDuJourTemp.date, todayfr10)
  //       setPlatDuJour(platDuJourTemp)
  //     }
  //   }, 3000);
  // }, [platDuJour, todayfr10])

  // useEffect(() => {
  //   if (data.length > 0) {
  //     setArticlesList(data) //useFb

  //     setArticlesListForSearch(data)
  //     getPlatsDJ(data)
  //   } else {
  //   }
  // }, [data, todayfr10]);

  // useEffect(() => {
  //   //all console.log("262_cdeFrom2Months ", _cdeFrom2Months)
  //   filtertoGetMyDocsCdeEncoursHorsEmailTestTemp(_cdeFrom2Months)
  // }, [_cdeFrom2Months])

  // useEffect(() => {
  //   if (!todayfr10 || !dateFact || !monthDocStr || monthDocStr == '') {
  //     getTodayfr10(monthDocStr, setMonthDocStr, dayDocStr, setDayDocStr, dateFact, setdateFact)
  //   }
  //   //all console.log("WELCOME310 todayfr10,dateFact  ", platDuJour, dateFact.substring(0, 10))
  //   if (platDuJour) {
  //     let platDuJourTemp = thisClone(platDuJour)
  //     platDuJourTemp.date = dateFact?.substring(0, 10)
  //     setPlatDuJour(platDuJourTemp)
  //   }

  //   //all28012024 console.log(230, "monthDocStr ", monthDocStr, dateFact.substring(0,10))
  // }, [todayfr10, dateFact, monthDocStr, platDuJour])


  useFocusEffect(
    React.useCallback(() => {
      // Action à exécuter à chaque fois que cet onglet est accédé
      console.log('WelcomeScreen is focused');

      // setCurrentScreen('WelcomeScreen')
      return () => {
        // Optionnel : action à exécuter lorsque cet onglet perd le focus
        //all202409    console.log('WelcomeScreen is  (action à exécuter : )  unfocused');
      };
    }, [])
  );

  // useEffect(() => {

  //   return sound
  //     ? () => {
  //       //all28012024 console.log('Unloading Sound');
  //       sound.unloadAsync();
  //     }
  //     : undefined;
  // }, [sound])


  // const ShowCdeEnCours = () => {
  //   return (

  //     <View style={[
  //       {
  //         display: "flex",
  //         width: '90%',
  //         marginVertical: 30,
  //         alignItems: 'center',
  //         backgroundColor: 'transparent',
  //         // backgroundColor : 'blue',
  //         // padding: 10
  //         // marginVertical: 10,
  //         minHeight: 100,
  //         borderWidth: 10, borderColor: Colors.primaryBG, borderStyle: 'solid',
  //       }]}>
  //       <View style={{
  //         backgroundColor: Colors.primaryBG,
  //         display: 'flex', flexDirection: 'row',
  //         justifyContent: 'space-between',
  //         flexWrap: 'nowrap', width: '100%',
  //         // borderWidth: 5, borderColor: 'green', borderStyle: 'solid',
  //       }}>

  //         <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
  //           <Pressable onPress={() => { setViewCdeDone(!viewCdeDone) }} >
  //             {viewCdeDone ? iconCheckBox : iconCheckBoxRed}
  //           </Pressable>
  //         </View>

  //         <View
  //           style={{ width: '70%' }}
  //         >
  //           <ButtonStd
  //             iconL={undefined} iconR={iconRefresh} label={'Rafraichir'}
  //             labelColor={Colors.primaryText}
  //             onPress={() => getCdeEnCours()} onChange={undefined} bgButton={Colors.accentBG} />

  //         </View>

  //         <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
  //           <Pressable onPress={() => { setViewCdeToDo(!viewCdeToDo) }} >
  //             {viewCdeToDo ? iconSquare : iconSquareRed}
  //           </Pressable>
  //         </View>

  //       </View>


  //       {historyCde?.length > 0 &&
  //         <FlatListScrollHistoryCde
  //           viewCdeToDo={viewCdeToDo}
  //           viewCdeDone={viewCdeDone}
  //           todayfr10={todayfr10} menuN={currentMenuN}
  //           menuNImg={undefined} idx={undefined}
  //           navigation={navigation} route={route}
  //           callbackFn={undefined}
  //           pdjType={undefined}
  //           articlesListTemp={articlesList}
  //           historyCdeVar={historyCde}
  //           allCdeEnCours={undefined}
  //         />
  //       }
  //     </View>
  //   );
  // };


  return ( //return global
    <GestureHandlerRootView
      style={ // total screen
        [styles0.containerPage, {
          // borderColor: 'white',
          borderColor: Colors.primaryBG,
          borderWidth: 5,
          borderStyle: 'solid',
          backgroundColor: Colors.primaryBG
        }]
      }
    >

      <SafeAreaView //safe area
        style={[
          styles2.containerFullWidth, {
            // position: 'relative',
            // backgroundColor: 'transparent',
            // width: MAXWIDTH,
            // margin:0, 
            height: device.height - device.footer,
          }
        ]} >

        {/* <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>{thisImport ? 'thisImport ' : ' ! thisImport'}</Text> */}

        {
          !thisImport ? //Header with importCsv
            <Pressable
              style={{
                maxHeight: 120,
                height: '100%',
              }}
            >

              <Header navigation={navigation} articlesList={undefined} cart={undefined} removeFromCart={undefined} addToCart={undefined}                // callback={callBackHeader} PlatsToShow={undefined} route={undefined} showPanierViewModal={showPanierViewModal} scrollY0={scrollY} scrollX0={scrollX} 
              />
            </Pressable>

            :
            <View /// button Fin IMPORT
            >

              {/* <InputFilePickerDelicat navigation={navigation} /> */}

              <ButtonStd iconL={undefined} label={'fin Import CSV 1383 '} labelColor={Colors.primaryText}
                onPress={() => {
                  //all console.log('1385 thisImport pressed :', thisImport)
                  setThisImport(false);
                }} onChange={undefined} bgButton={undefined} iconR={undefined} />
            </View>
        }
        {cadreBackGroundImage()}
        {Platform.OS != 'web' ?
          MobilScrolllView()
          :
          myFlatListRowWrap()

        }


        {/* <View // StateBar
          style={{ minHeight: 10, width: '100%', minWidth: 200 }}>

          {stateBar ?
            <StateBar />
            :
            <ButtonStd
              style={{ color: 'yellow', height: 30, zIndex: 999 }}
              iconL={undefined}
              iconR={undefined}
              label={'stateBar'} labelColor={'yellow'}
              onPress={() => { setstateBar(!stateBar) }}
              onChange={undefined}
              bgButton={undefined} />
          }
        </View> */}

      </SafeAreaView>

    </GestureHandlerRootView>

  );

}




