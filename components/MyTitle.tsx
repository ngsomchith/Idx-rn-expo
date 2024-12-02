// 'use dom';
// import { useCallback } from 'react';
// import React, { useContext, useEffect, useState } from 'react';
// import { Text, View, StyleSheet, Pressable } from 'react-native';
// import { useFonts } from 'expo-font';
// // import * as SplashScreen from 'expo-splash-screen';
// import { myStyles } from './style';
// import { AuthenticatedUserContext } from '../providers';
// import { H1 } from '@expo/html-elements';
// import { Colors } from '../config';
// import ThisDevice from '../constants/ThisDevice';

// // SplashScreen.preventAutoHideAsync();

// export default function MyTitle() {

//     const {

//         user, setUser,
//         viewModal, setViewModal,
//         currentUserEmail, setCurrentUserEmail,
//         currentUserEmailNew, setCurrentUserEmailNew,
//         userInfo, setUserInfo,
//         articlesList, setArticlesList,
//         currentCdeEnCours, setCurrentCdeEnCours,
//         cdeEnCours, setCdeEnCours,
//         cdeEnCoursList, setCdeEnCoursList,
//         filteredDataSource, setFilteredDataSource,
//         MyModalPageVisible, setMyModalPageVisible,
//         PlatsToShowFiltered, setPlatsToShowFiltered,
//         PlatsToShowFilteredPanier, setPlatsToShowFilteredPanier,

//         currentMenuN, setcurrentMenuN,
//         newArticlesList, setNewArticlesList,
//         panier, setPanier,
//         panierQte, setPanierQte,
//         // callPanier,setcallPanier,
//         panierView, setpanierView,
//         totalPanier, setTotalPanier,
//         currentPdjType, setCurrentPdjType,
//         myDaysList, setMyDaysList,
//         currentUser, setCurrentUser,
//         masterDataSource, setMasterDataSource,
//         search, setSearch,
//         searchAble, setSearchAble,
//         gAuth, setGAuth,
//         currentScreen, setCurrentScreen,
//         promoOuverture, setpromoOuverture,
//         stateBar, setstateBar,


//     } = useContext(AuthenticatedUserContext);
//     const styles = myStyles


//     const device = ThisDevice().device

//     const myWidth = device.width
//     const myHeight = device.height * 1.3
//     const myCoeffScreen = myWidth / myHeight

//     const styles0 = ThisDevice().styles0

//     // const [isLoading, setIsLoading] = useState(true);
//     const FULLWIDTH = ThisDevice().device.width
//     const MAXWIDTH1_3 = ThisDevice().device.width / 3

//     const MAXWIDTH = myCoeffScreen < 1 ? myWidth : MAXWIDTH1_3
//     const NBCOLUMN = myCoeffScreen < 1 ? 1 : 3

//     let customFonts = {
//         'Inter-SemiBoldItalic': require('../assets/fonts/Babylonica-Regular.ttf')
//         // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
//     };
//     const [fontsLoaded] = useFonts(customFonts)

//     const onLayoutRootView = useCallback(async () => {
//         if (fontsLoaded) {
//             // await SplashScreen.hideAsync(i);
//         }
//     }, [fontsLoaded]);

//     if (!fontsLoaded) {
//         return null;
//     }

//     return (//global

//         <h1 style={{
//             margin:0,
//             width: '75%',
//             // borderColor: 'pink',
//             // borderWidth: 2,
//             // borderStyle: 'solid',
//             maxHeight: '100%',
//             height: '80%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'flex-start',
//         }}>
//             <View style={[
//                 styles.dbCol, {
//                     // borderColor: 'white',
//                     // borderWidth: 5,
//                     // borderStyle: 'solid',
//                 }]} onLayout={onLayoutRootView}>
//                 <Pressable
//                     style={{
//                         maxHeight: '90%',
//                         // display:'flex',
//                         // flexDirection:'column',
//                         // justifyContent:'flex-start',

//                     }}
//                     onPress={() => {
//                         setstateBar(!stateBar)
//                     }}
//                 >
//                     <Text style={{
//                         fontFamily: 'Inter-SemiBoldItalic',
//                         fontSize: 44,
//                         color: 'white',
//                         height: '100%',
//                         maxHeight: '100%',
//                         display: 'flex',
//                         fontWeight:'600',
//                         // borderColor: 'yellow',
//                         // borderWidth: 5,
//                         // borderStyle: 'solid',
//                         position: 'relative',
//                         top: 10,
//                     }}>
                        
//                         Délicatessen

//                     </Text>

//                 </Pressable>


//                 <Text style={{
//                     width: MAXWIDTH,
//                     height: 60,
//                     fontSize: 22,
//                     color: Colors.primaryText,
//                     fontFamily: 'BrushScript',
//                     position: 'absolute',
//                     left: -45,
//                     top: 65,
//                     // borderColor: 'green',
//                     // borderWidth: 5,
//                     // borderStyle: 'solid',
//                 }}>
//                     Plats Vietnamien et Sushi
//                 </Text>
//                 {/* <Text style={styles.dbCol70} > SITE DE DEMONSTRATION :</Text> */}
//             </View>
//         </h1>
//     )
// }