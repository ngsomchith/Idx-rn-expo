

// import React, { useEffect, useContext, useState } from 'react';
// import { useTogglePasswordVisibility } from '../hooks';
// import { Colors, auth, bigWidthBorder, iconBack, iconEmail, iconSmartphone, widthBorder } from '../config';
// import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, Platform } from 'react-native';
// import { Formik } from 'formik';
// // import { loginValidationSchema } from '../utils';
// import { TextInput } from '../components/TextInput';
// import { FormErrorMessage } from '../components/FormErrorMessage';
// import ButtonStd from '../components/ButtonTypeStd';
// import { AuthenticatedUserContext } from '../providers';
// import { myStyles } from '../components/style';
// import { addItemAndSetId, arrayToObject, autoSignUpSocialUser, fbLoginUser, getItemsWhere, updateItemModel } from '../services/Firebase';
// import { objectLength, syncCdeEnCoursListIntoArticlesList, thisClone } from '../components/DataService';
// import GoogleSignInWebOK from '../components/GoogleSignInWebOK';
// // import AuthAppleSession from '../../AuthAppleSession';
// import { myAuth, myPLatform } from '../config/firebase';
// import AuthAppleSession from '../components/AuthAppleSession';
// import StateBar from '../components/StateBar';
// import { AuthSessionSignIn } from '../components/AuthSessionSignIn';


// import Header from '../components/Header';

// import { AuthSessionGogleAndFB } from '../components/AuthSessionGogleAndFB';
// import Toggle from 'react-native-toggle-input'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { Logo } from '../components/Logo';
// import { Button } from '../components/Button';
// import MyTitle from '../components/MyTitle';
// import ImageViewer from '../components/ImageViewerComp';
// import { Image } from 'react-native';
// import HeaderWithLogo from '../components/HeaderWithLogo';
// import ThisDevice from '../constants/ThisDevice';
// // import { loginValidationSchema } from '../utils';
// // import ArticleScreen from './ArticleScreen';
// // import { AuthSessionGoogleSignIn } from '../components/AuthSessionGoogleSignIn';


// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { StatusBar } from 'expo-status-bar';

// import axios from 'axios';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';

// import * as AuthSession from 'expo-auth-session';

// import { onAuthStateChanged } from 'firebase/auth';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import PhoneSignIn from './PhoneSignIn';
// import { UserType } from '../models/UserType';
// // import ModalSignUp from '../components/ModalSignUp';



// WebBrowser.maybeCompleteAuthSession();


// const SignInComp = ({ navigation, route, showPanierViewModal, setModalSignInVisible, scrollY0, scrollX0, commande }) => {


//     const {
//         user, setUser,
//         viewModal, setViewModal,
//         currentUserEmail, setCurrentUserEmail,
//         // currentUserEmailNew, setCurrentUserEmailNew,
//         userInfo, setUserInfo,
//         articlesList, setArticlesList,
//         articlesListByCat, setArticlesListByCat,
//         currentMenuN, setcurrentMenuN,
//         newArticlesList, setNewArticlesList,
//         panier, setPanier,
//         connexionView, setConnexionView,
//         panierQte, setPanierQte,
//         // callPanier,setcallPanier,
//         panierView, setpanierView,
//         totalPanier, setTotalPanier,
//         totalPanierJap, setTotalPanierJap,
//         totalPanierNoJap, setTotalPanierNoJap,
//         currentPdjType, setCurrentPdjType,
//         myDaysList, setMyDaysList,
//         currentUser, setCurrentUser,
//         currentUserFinal, setCurrentUserFinal,
//         todayfr10, setTodayfr10,
//         cdeEnCours, setCdeEnCours,
//         currentCdeEnCours, setCurrentCdeEnCours,
//         cdeEnCoursList, setCdeEnCoursList,
//         cdeEnCoursAllEmail, setCdeEnCoursAllEmail,
//         filteredDataSource, setFilteredDataSource,
//         masterDataSource, setMasterDataSource,
//         search, setSearch,
//         searchAble, setSearchAble,
//         MyModalPageVisible, setMyModalPageVisible,
//         PlatsToShowFiltered, setPlatsToShowFiltered,
//         PlatsToShowFilteredPanier, setPlatsToShowFilteredPanier,
//         gAuth, setGAuth,
//         pdjTypeList, setPdjTypeList,
//         promoOuverture, setpromoOuverture,
//         categoryBeforePanier, setcategoryBeforePanier,
//         navAdminState, setNavAdminState,
//         // user, setUser,
//         arrayUser, lastFixtures,
//         lastDateFixtures, currentDateFixtures,
//         dateSaisie, setDateSaisie,
//         datePush, setDatePush,
//         newFixtureAble, setNewFixtureAble,
//         chooseDateAble, setChooseDateAble,
//         addFixtureState, setAddFixtureState,
//         chooseTimeAble, setChooseTimeAble,
//         updateFixtureAble, setUpdateFixtureAble,
//         fixtureAdd, setFixtureAdd,
//         fixtureEdit, setFixtureEdit,
//         fixture2Update, setFixture2Update,
//         selectedDate, setSelectedDate,
//         selectedTime, setSelectedTime,
//         currentNavIdx, setCurrentNavIdx,
//         fixturesForOdds, setFixturesForOdds,
//         fixturesImport, setFixturesImport,
//         currentIndex, setCurrentIndex,
//         nextIndex, setNextIndex,
//         newState, setNewState,
//         dayDocStr, setDayDocStr,
//         startState, setStartState,
//         cancelState, setCancelState,
//         updateState, setUpdateState,
//         MyModalAuthPageVisible, setMyModalAuthPageVisible,
//         deleteState, setDeleteState,
//         fixtures2Months, setFixtures2Months,
//         saveAble, setSaveAble,
//         screenBt, setScreenBt,
//         goToHomeScreen, setgoToHomeScreen,
//         debuteunefois, setdebuteunefois,
//         fixtViewed, setfixtViewed,
//         fixturesListData, setfixturesListData,
//         currentScreen, setCurrentScreen,
//         isLoading, setIsLoading,
//         stateBar, setstateBar,
//         monthDocStr, setMonthDocStr,
//         dateFact, setdateFact,
//         chooseDay, setChooseDay,
//         chooseDayTime, setChooseDayTime,
//         scrollTo, setscrollTo,
//         categoryName, setcategoryName,
//         categoryIcon, setcategoryIcon,
//         categoryNameList, setcategoryNameList,
//         categoryIconList, setcategoryIconList,
//         allCdeEnCours, setAllCdeEnCours,
//         scrollYAgain, setScrollYAgain,
//         scrollY, setScrollY,
//         scrollX, setScrollX,
//         currentcategoryNameAndIcon, setcurrentcategoryNameAndIcon,
//         idx, setIdx,
//         promoAccordN, setPromoAccordN,
//         remiseSushi, setRemiseSushi,
//         panierVisible, setPanierVisible,
//         showPanierForbidden, setShowPanierforbidden,
//         notConnected, setNotConnected,
//         remiseObtenue, setRemiseObtenue,
//         // commande, 
//         setCommande,
//         phoneKnown, setPhoneKnown,


//     } = useContext(AuthenticatedUserContext);



//     const device = ThisDevice().device
//     const styles0 = ThisDevice().styles0
//     const styles = myStyles

//     const routeParams0 = route?.params;
//     const [routeParams, setRouteParams] = useState(routeParams0?.thisParams)
//     const myWidth = device.width
//     const myHeight = device.height
//     const myCoeffScreen = myWidth / myHeight
//     const MAXWIDTH = ThisDevice().device.width - 5

//     const [goBackToPanier, setGoBackToPanier] = useState(false)
//     const [togglePromo, settogglePromo] = React.useState(true);
//     const [errorState, setErrorState] = useState('');
//     const { passwordVisibility, handlePasswordVisibility, rightIcon } =
//         useTogglePasswordVisibility();


//     const [formikSignInVisible, setFormikSignInVisible] = useState(true)
//     const [formikSignUpVisible, setFormikSignUpVisible] = useState(!formikSignInVisible)

//     const [reqAuthError, setReqAuthError] = useState(''); // getGoogleUser
//     const [gUser, setGUser] = useState(null); //// getGoogleUser

//     // const thisCollection = 'shoppinUsers/test/phoneSignIn'
//     const thisCollection = 'shoppinUsers'

//     // const [userInfo, setUserInfo] = useState(); // getUserData

//     // const [gAuth, setGAuth] = useState(); // getPersistedAuth
//     const [requireRefresh, setRequireRefresh] = useState(false);
//     const [gUserEmail, setGUserEmail] = useState(null); //// getGoogleUser

//     const iconGoogle = <SimpleLineIcons name="social-google" size={24} color="white" />

//     const [thisSignInByEmailChoosed, setThisSignInByEmailChoosed] = useState(false);

//     const [thisSignInByPhoneChoosed, setThisSignInByPhoneChoosed] = useState(false);
//     const [request, response, promptAsync] = Google.useAuthRequest({


//         // androidClientId: "160947168617-qfe66rkb7n5dmdml9hpsoh77vk6ld5fm.apps.googleusercontent.com",
//         // iosClientId: "160947168617-rsal7j3679q6g82883fkent0nlipk0ju.apps.googleusercontent.com",
//         // expoClientId: "160947168617-11uqtfp9fm7f4866cqrlscogi67871vb.apps.googleusercontent.com",
//         // webClientId: '160947168617-pdu60q0h0bgt53bhir8uulggvfg7dls6.apps.googleusercontent.com'

//         // J1P1 : 
//         // androidClientId : "964852376005-qhqkkv933h4p2ndi001km4k7dbmin3pr.apps.googleusercontent.com",
//         // iosClientId : "964852376005-v1cqlup6na7n4uirp64ejcg9uigc3da8.apps.googleusercontent.com",
//         // expoClientId : "964852376005-8to5aj0vdqhc8oqehmin8s83i7p4khgc.apps.googleusercontent.com",
//         // webClientId : '964852376005-5n1sfb9ssq4atk95vppjcrglj10kvm1l.apps.googleusercontent.com'

//         // delicatessencloud
//         androidClientId: "1033002245945-d5gb0i1f3u9uq8l15hk9mlpnuiuelstt.apps.googleusercontent.com",
//         iosClientId: "1033002245945-57a5pgcvshd2uahr1ncl1jttgpjqf37u.apps.googleusercontent.com",
//         expoClientId: "1033002245945-49qu8hhl1ssutcnee03keondt71bf3o9.apps.googleusercontent.com",

//         webClientId: '1033002245945-kkne3t2gsbmun08t5h3lfnjn7pg5ncl4.apps.googleusercontent.com',

//         //udexalgo
//         // androidClientId: "",
//         // iosClientId: "350509971155-on69qhpd1nnubl8gb0c9qmbsuon3c62l.apps.googleusercontent.com",
//         // expoClientId: "350509971155-c36a1gp30in35etpjajjf5k9p8bepvpl.apps.googleusercontent.com",

//         // webClientId: "350509971155-kcvbr5cq8d1d2ego65le7sh1o2289ehe.apps.googleusercontent.com",

//     });

//     useEffect(() => {
//         //all1109 console.log("61 response Google.useAuthRequest", response);
//         if (response?.type === "success") {
//             setGAuth(response.authentication);



//             const persistAuth = async () => {
//                 await AsyncStorage.setItem("auth", JSON.stringify(response.authentication));
//             };
//             persistAuth();
//         }


//     }, [response]);


//     const getGoogleUser = async (accessToken) => {
//         try {
//             //all1109 console.log(50, "getGoogleUser ", getGoogleUser)
//             let gUserReq = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo',
//                 {
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`
//                     }
//                 }
//             );

//             //all1109 console.log("gUserReq.data ", gUserReq.data);
//             setGUser(gUserReq.data);
//         }
//         catch (error) {
//             //all1109 console.log('GoogleUserReq error: ', error);
//             setReqAuthError(error);
//         }
//         // console.log("72  gUserReq.data", gUserReq.data)
//     }

//     useEffect(() => {
//         //21112023 console.log("route",route)
//         //all console.log("166routeParams =", routeParams, objectLength(routeParams))
//         // console.log("247routeParams.panierQte =", routeParams?.panierQte)
//         //all console.log("247routeParams.thisParams =", routeParams?.thisParams)
//         //all console.log("168routeParams.goBackToPanier =", routeParams?.goBackToPanier)
//         objectLength(routeParams).then(() => {

//             //all console.log("273routeParams +", routeParams?.panierQte, routeParams)
//             //all console.log("274routeParams +", routeParams?.goBackToPanier)

//         })


//     }, [route, routeParams])

//     useEffect(() => {
//         //all console.log("294 currentUserEmail, panierQte, panierView ", currentUserEmail, panierQte, panierView)
//         if (currentUserEmail == 'udex.invited@gmail.com'
//             && panierQte == 0) {
//             //all console.log('============= seconnecter plus tard')
//             // setCurrentScreen('HomeScreen')
//             // setgoToHomeScreen(true)

//             navigation?.navigate('HomeScreen')
//         } else {
//             setpanierView(true)
//             const thisParams = {
//                 typemenu: currentPdjType,
//                 goBackToPanier: true,
//                 PlatsToShowFilteredPanier: PlatsToShowFilteredPanier,
//                 menuN: currentMenuN,
//                 categoryName: categoryName,
//                 categoryIcon: categoryIcon,
//                 articlesList: articlesList,
//                 // remiseObtenueVar: commande,
//                 commandeVar:commande,
//                 categoryNameList: arrayToObject(categoryNameList),
//                 categoryIconList: arrayToObject(categoryIconList),
//                 panierQte: panierQte
//             }

//             //all console.log("ARTI309 navigation ", navigation)

//             console.log("ARTI319 thisParams ", thisParams)
//             navigation?.navigate('HomeScreen',
//                 {
//                     thisParams: thisParams
//                 }
//             )
//         }
//     }, [currentUserEmail, panierQte])

//     useEffect(() => {
//         //all console.log("150 user ", userInfo)

//         //all1109 console.log("promoOuverture", promoOuverture)
//         let currentUserEmailTemp = ''
//         // if(userInfo  ){
//         //   if(userInfo.email && userInfo.email  !=''){
//         //     currentUserEmailTemp = userInfo.email 
//         //     if(currentUserEmailTemp !=''){
//         //       //all1109 console.log("setCurrentUserEmail('currentUserEmailTemp')")
//         //     }
//         //   }
//         // }
//         setUser(user)

//         //all console.log("79 userInfo.email ", userInfo?.email)
//         setGUserEmail(userInfo?.email)
//         setTimeout(() => {
//             useRouteParams()
//         }, 2000);
//         setCurrentUserEmail(userInfo?.email)
//         if (userInfo && userInfo?.email != undefined && userInfo?.email != '' && userInfo?.email != 'udex.invited@gmail.com') {
//             //all console.log(" userInfo?.email  ", userInfo?.email)
//             setpanierView(true)
//         }
//         checkUserEmailExist(userInfo?.email)

//         // autoSignUpSocialUser(userInfo?.email)

//     }, [userInfo])

//     useEffect(() => {
//         //all console.log(" 335currentUser useEffect", currentUser)
//     }, [currentUser])

//     useEffect(() => {
//         console.log(" 366commande useEffect", commande)
//     }, [commande])

//     useEffect(() => {

//         setTimeout(() => {
//             // console.log(89, gAuth?.accessToken)
//             // !gAuth ? getUserData : () => promptAsync({ useProxy: false, showInRecents: true })
//             // if (!userInfo?.email) { getUserData() }
//         }, 200);
//     }, [gUserEmail])

//     useEffect(() => {
//         if (gAuth) {
//             //all1109 console.log("promoOuverture", promoOuverture)
//             getUserData()
//         }
//     }, [gAuth])

//     useEffect(() => {
//         const getPersistedAuth = async () => {
//             const jsonValue = await AsyncStorage.getItem("auth");
//             // console.log("78 getPersistedAuth jsonValue ", jsonValue)
//             if (jsonValue != null) {
//                 const authFromJson = JSON.parse(jsonValue);
//                 setGAuth(authFromJson);
//                 //all1109 console.log("94 getPersistedAuth / authFromJson ", authFromJson);

//                 setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh({
//                     expiresIn: authFromJson.expiresIn,
//                     issuedAt: authFromJson.issuedAt
//                 }));
//             }
//         };


//         getPersistedAuth();
//     }, []);

//     // =========================================================


//     const auth = myAuth
//     // =========================================================

//     async function useRouteParams() {
//         setTimeout(() => {
//             if (goBackToPanier) {
//                 // console.log(resultLogin['result']['user'].email)

//                 const thisParams = {
//                     typemenu: currentPdjType,
//                     goBackToPanier: true,
//                     PlatsToShowFilteredPanier: PlatsToShowFilteredPanier,
//                     menuN: currentMenuN,
//                     categoryName: categoryName,
//                     categoryIcon: categoryIcon,
//                     articlesList: articlesList,
//                     // remiseObtenue: remiseObtenue,
//                     categoryNameList: arrayToObject(categoryNameList),
//                     categoryIconList: arrayToObject(categoryIconList),
//                     panierQte: panierQte
//                 }

//                 //all console.log("ARTI888 thisParams ", thisParams)

//                 navigation.navigate('HomeScreen',
//                     {
//                         thisParams: thisParams
//                     }
//                 )


//                 // setCurrentUserEmail(resultLogin['result']['user'].email)


//             }
//         }, 1000);

//     }

//     async function getUserData() {
//         if (gAuth) {

//             let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
//                 headers: {
//                     Authorization: `Bearer ${gAuth?.accessToken}`
//                 }
//             });

//             userInfoResponse.json().then(data => {
//                 //all1109 console.log(127, "userdata", "data");
//                 //all1109 console.log(128, data, data?.email);

//                 //all1109 console.log("promoOuverture", promoOuverture)
//                 data['promoOuverture'] = promoOuverture
//                 setUserInfo(data);
//                 // result.push(data);
//                 return data
//             });

//         }

//     };

//     const {
//         handleConfirmPasswordVisibility,
//         confirmPasswordIcon,
//         confirmPasswordVisibility
//     } = useTogglePasswordVisibility();

//     // ========================
//     const handleSignIn = async (values: any) => {
//         //all27022024 console.log("SIGNIN230 setCurrentUserEmail")
//         const { email, password } = values;


//         let resultLogin: any = await fbLoginUser(email, password, promoOuverture)
//         //all console.log("200resultLogin =", resultLogin)
//         if (resultLogin) { // user exist after email sign in

//             checkUserEmailExist(email)


//             if (!userInfo || !userInfo?.email &&
//                 (currentUser.codePromo == ''
//                     || currentUser.codePromo == 'noCode'
//                     || !currentUser.codePromo
//                 )
//             ) {
//                 //all08112023 console.log ("128currentUser ", currentUser)
//                 let currentUserTemp = thisClone(currentUser)
//                 const result = promoOuverture ? 'promoOuverture' : 'noCode138'

//             }


//         }
//         //all console.log("271resultLogin =", resultLogin['codePromo'])
//         setpromoOuverture(resultLogin['codePromo'])
//         //all08112023 console.log ("resultLogin =", resultLogin['result']['user'])
//         //all27022024 console.log("resultLogin =", resultLogin['result']['user'].email)

//         //all27022024 console.log("SIGNIN240 setCurrentUserEmail")
//         setTimeout(() => {
//             if (goBackToPanier && resultLogin) {
//                 //all console.log("279resultLogin =", resultLogin)

//                 if (resultLogin && resultLogin['result']) {
//                     setCurrentUserEmail(resultLogin['result']['user'].email)
//                 }
//             }
//         }, 1000);

//         if (!userInfo || !userInfo?.email &&
//             (currentUser.codePromo == ''
//                 || currentUser.codePromo == 'noCode'
//                 || !currentUser.codePromo
//             )
//         ) {
//             //all08112023 console.log ("128currentUser ", currentUser)
//             let currentUserTemp = thisClone(currentUser)
//             const result = promoOuverture ? 'promoOuverture' : 'noCode138'

//         }


//     };

//     async function checkUserEmailExist(thisValue: string) {

//         if (thisValue?.indexOf('@') > 0) {

//             const thisField = 'email'
//             //all console.log("result595  / thisCollection, thisField, thisValue", thisCollection, thisField, thisValue)
//             const result = await getItemsWhere(thisCollection, thisField, thisValue)

//             if (result?.length > 0) { //user exist after PhoneSignin
//                 const emailTemp = result[0].email
//                 //all console.log("result600 checkUserByEmail Exist", emailTemp, result)

//                 // setTimeout(() => {
//                 // console.log("result590 checkUserByEmail Exist", emailTemp, result)

//                 setCurrentUser(result[0])
//                 //all console.log("setCurrentUserEmail ")
//                 setCurrentUserEmail(emailTemp)
//                 setpanierView(true)
//                 setNotConnected(false)
//                 if (result[0]?.phonehand != '') { setPhoneKnown(true) }
//                 // }, 500);

//                 // createUserProfile(result[0])
//             } else { // user does not exist after PhoneSignin
//                 //all console.log("result 149 new User checkUserByPhoneExist = null = nouvel user")
//                 const userTemp = new UserType()
//                 userTemp.email = thisValue

//                 setTimeout(() => {
//                     //all console.log("setCurrentUserEmail ", thisValue)

//                     if (thisValue && thisValue != 'udex.invited@gmail.com') {
//                         setCurrentUserEmail(thisValue)
//                         setCurrentUser(userTemp)
//                         setpanierView(true),
//                             setNotConnected(false)
//                     }
//                 }, 500);
//                 if (thisValue && thisValue != 'udex.invited@gmail.com') {

//                     // addItemAndSetId(thisCollection, userTemp)

//                     updateItemModel(thisCollection, userTemp, thisValue); // thisValue = userTemp.email 
//                 }
//                 // createUserProfile(userTemp)

//             }
//         } else {
//             //all console.log("not an email = ", thisValue)
//         }

//     }

//     async function checkUserByPhoneExist(thisValue: string) {

//         const thisField = 'phonehand'
//         //all console.log("result148 checkUserByPhoneExist / thisCollection, thisField, thisValue", thisCollection, thisField, thisValue)
//         if (Number(thisValue) > 99999999) {
//             const result = await getItemsWhere(thisCollection, thisField, thisValue)

//             if (result?.length > 0) { //user exist after PhoneSignin
//                 const emailTemp = result[0].email
//                 //all console.log("result 153 checkUserByPhoneExist", emailTemp, result[0])

//                 setTimeout(() => {

//                     setCurrentUser(result[0])
//                     //all console.log("setCurrentUserEmail ")
//                     setCurrentUserEmail(emailTemp)
//                     setpanierView(true)
//                 }, 500);

//                 // createUserProfile(result[0])
//             } else { // user does not exist after PhoneSignin
//                 //all console.log("result 149 new User checkUserByPhoneExist = null = nouvel user")
//                 const userTemp = new UserType()
//                 userTemp.phonehand = thisValue
//                 userTemp.email = '0' + thisValue?.substring(1)
//                 setTimeout(() => {
//                     //all console.log("setCurrentUserEmail ", '0' + thisValue?.substring(1))

//                     if (thisValue && thisValue != 'udex.invited@gmail.com') {
//                         setCurrentUserEmail('0' + thisValue?.substring(1))
//                         setCurrentUser(userTemp)
//                         setpanierView(true)
//                     }
//                 }, 500);
//                 addItemAndSetId(thisCollection, userTemp)
//                 // createUserProfile(userTemp)

//             }
//         } else {
//             //all console.log('Not de phoneNumber ! =', thisValue)
//         }

//     }

//     // ========================

//     const thisFormikSignIn = () => {
//         return (
//             <Formik
//                 initialValues={{
//                     email: '',
//                     password: ''
//                 }}
//                 // validationSchema={loginValidationSchema}
//                 onSubmit={values => handleSignIn(values)}
//             >
//                 {({
//                     values,
//                     touched,
//                     errors,
//                     handleChange,
//                     handleSubmit,
//                     handleBlur
//                 }) => (
//                     <View style={[styles.textInputContainer, { //email Pwd sign in
//                         maxHeight: 270,
//                         width: '100%',
//                         paddingHorizontal: 5,
//                         minWidth: 300,
//                         marginHorizontal: 0,
//                         marginVertical: 10,
//                         justifyContent: 'space-around',
//                         // borderWidth: middleWidthBorder,
//                         borderWidth: 5,
//                         borderColor: Colors.accentBG,
//                         // borderColor: 'turquoise',
//                         borderStyle: 'solid',
//                         borderBottomColor: 'grey',
//                         borderRadius: 10
//                     }]}>
//                         <Pressable
//                             style={{ width: '100%', flexDirection: 'row', flexWrap: 'nowrap' }}
//                             onPress={() => {
//                                 setThisSignInByEmailChoosed(!thisSignInByEmailChoosed)
//                             }}
//                         >

//                             <Text style={{
//                                 backgroundColor: Colors.highlightBG,
//                                 display: 'flex',
//                                 height: '100%',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                             }}>
//                                 {iconEmail}
//                             </Text>
//                             <Text style={{ // e-mail
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'flex-start',
//                                 paddingVertical: 10,
//                                 backgroundColor: Colors.highlightBG,
//                                 color: Colors.primaryText,
//                                 fontSize: 20,
//                                 flex: 1,
//                                 width: '100%'
//                             }}>
//                                 Par E-mail:
//                             </Text>
//                         </Pressable>


//                         {thisSignInByEmailChoosed &&
//                             <View style={{ width: '100%' }}>

//                                 <Text style={{
//                                     color: Colors.primaryText,
//                                     fontSize: 20,
//                                     textDecorationLine: 'underline'
//                                 }}> Vous avez déjà un compte :</Text>

//                                 {/* Input fields */}
//                                 <View //Input  email 
//                                     style={{ maxHeight: 40, width: '100%' }} >
//                                     <TextInput
//                                         style={{
//                                             maxHeight: 40, flex: 1,
//                                             // backgroundColor:'grey',
//                                             color: Colors.primaryText,
//                                             borderWidth: 2,
//                                             borderColor: 'transparent',
//                                             borderStyle: 'solid',
//                                             borderBottomColor: Colors.primaryText
//                                         }}
//                                         name='email'
//                                         leftIconName='email'
//                                         placeholder='Email'
//                                         autoCapitalize='none'
//                                         keyboardType='email-address'
//                                         textContentType='emailAddress'
//                                         autoFocus={true}
//                                         value={values.email}
//                                         onChangeText={handleChange('email')}
//                                         onBlur={handleBlur('email')}
//                                         rightIcon={undefined}
//                                         handlePasswordVisibility={undefined} />
//                                 </View>
//                                 <FormErrorMessage
//                                     error={errors.email}
//                                     visible={touched.email}
//                                 />

//                                 <View //Input  password 
//                                     style={{ maxHeight: 40, width: '100%' }} >

//                                     <TextInput
//                                         name='password'
//                                         leftIconName='key-variant'
//                                         placeholder='Mot de passe'
//                                         autoCapitalize='none'
//                                         autoCorrect={false}
//                                         secureTextEntry={passwordVisibility}
//                                         textContentType='password'
//                                         rightIcon={rightIcon}
//                                         handlePasswordVisibility={handlePasswordVisibility}
//                                         value={values.password}
//                                         onChangeText={handleChange('password')}
//                                         onBlur={handleBlur('password')}
//                                     />
//                                 </View>
//                                 <FormErrorMessage
//                                     error={errors.password}
//                                     visible={touched.password}
//                                 />
//                                 {/* Display Screen Error Mesages */}
//                                 {errorState !== '' ? (
//                                     <FormErrorMessage error={errorState} visible={true} />
//                                 ) : null}
//                                 {/* Login button */}
//                                 {/* <ButtonStd onPress={handleSubmit}
//                         iconR={undefined}
//                         label={'Connexion'} onChange={undefined}
//                         bgButton={Colors.accentBG}
//                         labelColor={Colors.primaryText} /> */}


//                                 <ButtonStd iconR={undefined}
//                                     label={'Connexion'}
//                                     onPress={handleSubmit}
//                                     onChange={undefined} bgButton={Colors.accentBG}
//                                     labelColor={Colors.primaryText} icon1={undefined}
//                                     iconL={undefined} />
//                             </View>
//                         }
//                     </View>
//                 )}
//             </Formik>
//         )
//     }

//     const handleSignup = async values => {
//         const { email, password } = values;

//         createUserWithEmailAndPassword(auth, email, password).then((res) => {
//             //all console.log("createUserWithEmailAndPassword res =", res)

//             // setPanierVisible(true)
//             setpanierView(true)
//         })

//             .catch(error =>
//                 setErrorState(error.message)
//             );
//     };

//     const thisFormikSignUp = () => {
//         return (

//             <Formik
//                 style={{ marginVertical: 20 }}
//                 initialValues={{
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 }}
//                 // validationSchema={signupValidationSchema}
//                 onSubmit={values => handleSignup(values)}
//             >
//                 {({
//                     values,
//                     touched,
//                     errors,
//                     handleChange,
//                     handleSubmit,
//                     handleBlur
//                 }) => (
//                     <>
//                         {/* Input fields */}
//                         <TextInput
//                             name='email'
//                             leftIconName='email'
//                             placeholder='Enter email'
//                             autoCapitalize='none'
//                             keyboardType='email-address'
//                             textContentType='emailAddress'
//                             autoFocus={true}
//                             value={values.email}
//                             onChangeText={handleChange('email')}
//                             onBlur={handleBlur('email')} rightIcon={undefined} handlePasswordVisibility={undefined} />
//                         <FormErrorMessage error={errors.email} visible={touched.email} />
//                         <TextInput
//                             name='password'
//                             leftIconName='key-variant'
//                             placeholder='Enter password'
//                             autoCapitalize='none'
//                             autoCorrect={false}
//                             secureTextEntry={passwordVisibility}
//                             textContentType='newPassword'
//                             rightIcon={rightIcon}
//                             handlePasswordVisibility={handlePasswordVisibility}
//                             value={values.password}
//                             onChangeText={handleChange('password')}
//                             onBlur={handleBlur('password')}
//                         />
//                         <FormErrorMessage
//                             error={errors.password}
//                             visible={touched.password}
//                         />
//                         <TextInput
//                             name='confirmPassword'
//                             leftIconName='key-variant'
//                             placeholder='Enter password'
//                             autoCapitalize='none'
//                             autoCorrect={false}
//                             secureTextEntry={confirmPasswordVisibility}
//                             textContentType='password'
//                             rightIcon={confirmPasswordIcon}
//                             handlePasswordVisibility={handleConfirmPasswordVisibility}
//                             value={values.confirmPassword}
//                             onChangeText={handleChange('confirmPassword')}
//                             onBlur={handleBlur('confirmPassword')}
//                         />
//                         <FormErrorMessage
//                             error={errors.confirmPassword}
//                             visible={touched.confirmPassword}
//                         />
//                         {/* Display Screen Error Mesages */}
//                         {errorState !== '' ? (
//                             <FormErrorMessage error={errorState} visible={true} />
//                         ) : null}
//                         {/* Signup button */}

//                         <ButtonStd style={styles.button}
//                             onPress={handleSubmit} title={undefined}
//                             iconL={undefined} iconR={undefined}
//                             label={"S'enregistrer"} labelColor={Colors.primaryText}
//                             onChange={undefined} bgButton={Colors.accentBG} />
//                     </>
//                 )}
//             </Formik>
//         )
//     }

//     const buttonPasswordForget = () => {
//         return (
//             <View style={[styles.columnContainer, {// SignUP & Forgot
//                 width: '100%',
//                 paddingHorizontal: 0,
//                 marginHorizontal: '0%',
//                 alignItems: 'center',
//                 minHeight: 140,
//                 flexDirection: 'column',
//                 justifyContent: 'space-between'
//             }]}  >

//                 {/* <ButtonStd iconR={undefined} //SignUpScreen
//                     label={'Créer votre compte?'}
//                     onPress={() => {
//                         // goTo('SignUpScreen', undefined, undefined)
//                         //all08112023 console.log ("379 navigation.navigate('SignUpScreen')")
//                         navigation.navigate('SignUpScreen');

//                         // setdebuteunefois(2)
//                         // setCurrentScreen('SignUpScreen')
//                     }}
//                     onChange={undefined} bgButton={Colors.accentBG} labelColor={Colors.primaryText} icon1={undefined} iconL={undefined} /> */}
//                 {/* <ModalSignUp /> */}

//                 <ButtonStd iconR={undefined} //Forgot Password
//                     style={{
//                         borderColor: '#white',
//                         borderStyle: 'solid',
//                         // borderWidth: widthBorder,
//                     }}
//                     label={'Mot de passe oublié'}
//                     onPress={() => console.log(" navigation.navigate('ForgotPasswordScreen')")}
//                     onChange={undefined} bgButton={Colors.accentBG} labelColor={Colors.primaryText} icon1={undefined} iconL={undefined} />

//             </View>
//         )
//     }
//     function thisPromptAsync(){
//         promptAsync()
        
//                 console.log("promptAsync GoogleSignIn Web commande ", commande)
        
//     if(commande?.remise >0 && remiseObtenue==0){
//         console.log("setRemiseObtenue(commande.remise)")
//         setRemiseObtenue(commande?.remise)
//       }else{
//         console.log("(commande???.remise)", commande)
//       }

//     }

//     return (
//         // <Text style={{ color: 'white' }}> Sign in Screen</Text>
//         <View style={{

//             // borderColor: 'yellow',
//             // borderWidth: 5,
//             // borderStyle: 'solid',
//             width: MAXWIDTH,
//             maxWidth: '100%',
//             position: 'absolute',
//             backgroundColor: 'transparent',
//             flexDirection: 'column'
//         }}>

//             <Pressable style={{ //setModalSignInVisible(false)

//                 // borderColor: 'red',
//                 // borderWidth: 5,
//                 // borderStyle: 'solid',
//                 width: MAXWIDTH,
//                 maxWidth: '100%',
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//             }}
//                 onPress={() => {
//                     setModalSignInVisible(false),
//                         setpanierView(false),
//                         setConnexionView(false),
//                         setShowPanierforbidden(false)
//                     //all console.log("setModalSignInVisible(false) / panierView, viewModal :", panierView, viewModal, articlesList, articlesListByCat)
//                     //all console.log("categoryNameList = ", categoryNameList)
//                     //all console.log("<< : currentUserEmail, notConnected , panierView,showPanierForbidden,phoneKnown = ", currentUserEmail, notConnected, panierView, showPanierForbidden, phoneKnown)
//                     //all console.log("scrollToPosition scrollY ", scrollY0)
//                     setScrollY(scrollY0)
//                     setScrollX(scrollX0)
//                     setScrollYAgain(true)
//                 }}>
//                 <Text // soit Annuler , soit bouton suivant
//                     style={{
//                         width: 30,
//                         backgroundColor: Colors.primaryBG,
//                         // minHeight:120,
//                         maxWidth: 30,
//                         height: 40,
//                         display: 'flex',
//                         // position:'absolute',
//                         flexDirection: 'column',
//                         color: 'white',
//                         marginVertical: 30,
//                         // borderColor: 'red',
//                         // borderWidth: 1,
//                         // borderStyle: 'solid',
//                     }}
//                 >
//                     {iconBack}
//                     {/* {connexionView ?' ':' '}  */}
//                 </Text>

//                 <Text style={{
//                     flex: 1,
//                     // borderColor: 'lightgreen',
//                     // borderWidth: 5,
//                     // borderStyle: 'solid',
//                     // minHeight:120,
//                     display: 'flex',
//                     alignItems: 'flex-end'
//                 }}>

//                 </Text>
//             </Pressable>



//             {
//                 connexionView ?
//                     <View style=
//                         {
//                             { // total screen

//                                 height: '100%',
//                                 width: myWidth,
//                                 //   maxWidth: myWidth * .96,
//                                 maxWidth: '100%',

//                                 marginHorizontal: 'auto',
//                                 // borderColor: 'blue',
//                                 // borderWidth: 5,
//                                 // borderStyle: 'solid',
//                                 backgroundColor: Colors.primaryBG,
//                                 marginVertical: 10,
//                                 paddingVertical: 0,
//                             }}
//                     >
//                         <PhoneSignIn commande = {commande} />

//                         {myPLatform.OS != "web" ?
//                             <>

//                                 <AuthSessionSignIn navigation={undefined} routeParams={undefined} route={undefined} commande = {commande}               //  routeParams={routeParams} route={route} 
//                                 />
//                             </>

//                             :

//                             <View style={{
//                                 borderColor: Colors.accentBG,
//                                 borderStyle: 'solid',
//                                 borderWidth: 5,
//                                 borderRadius: 10,
//                                 padding: 3,
//                                 marginVertical: 20
//                                 // backgroundColor: Colors.highlightBG
//                             }}>
//                                 {/* <Text style={{ // titre
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         paddingVertical: 10,
//                         backgroundColor: Colors.highlightBG,
//                         color: Colors.primaryText,
//                         fontSize: 20
//                     }}>
//                         Par bouton Google:
//                     </Text> */}
//                                 <ButtonStd
//                                     iconL={iconGoogle}
//                                     iconR={undefined}
//                                     label={' Connexion via Google-Web'}
//                                     labelColor={Colors.primaryText}
//                                     onPress={() => thisPromptAsync()}
//                                     onChange={undefined}
//                                     bgButton={Colors.highlightBG}
//                                 />
//                             </View>

//                         }

//                         {formikSignInVisible && thisFormikSignIn()}

//                         {!formikSignInVisible && thisFormikSignUp()}

//                         {formikSignInVisible && <ButtonStd iconL={undefined} iconR={undefined}
//                             label={'Créer un Compte'} labelColor={Colors.primaryText}
//                             onPress={() => setFormikSignInVisible(false)}
//                             onChange={undefined} bgButton={Colors.accentBG}
//                         />}

//                         {!formikSignInVisible && <ButtonStd iconL={undefined} iconR={undefined}
//                             label={'Compte déjà enregistré'} labelColor={Colors.primaryText}
//                             onPress={() => setFormikSignInVisible(true)}
//                             onChange={undefined} bgButton={Colors.accentBG}
//                         />}

//                         {buttonPasswordForget()}


//                     </View>
//                     :
//                     <View style={{
//                         top: 20
//                     }}>
//                         {showPanierViewModal && showPanierViewModal()}
//                     </View>
//             }
//         </View >
//     );
// };

// export default SignInComp;