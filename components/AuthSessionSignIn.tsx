
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';

import { StyleSheet, Text, View, Image, Button, Platform, Pressable } from 'react-native';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import * as AuthSession from 'expo-auth-session';

import { SimpleLineIcons } from '@expo/vector-icons';
import { useAuth } from '@/app/AuthContext';
import { Colors } from '@/constants/Colors';
import ButtonStd from './ButtonTypeStd';
import { iconSmartphone } from '@/icons';

WebBrowser.maybeCompleteAuthSession();

export const AuthSessionSignIn = ({ 
    // navigation, routeParams, route, commande 
}) => { //ios et simul
  // const AuthSessionGoogle = ()=> {

//   const {

//     user, setUser,
//     viewModal, setViewModal,
//     currentUserEmail, setCurrentUserEmail,
//     // currentUserEmailNew, setCurrentUserEmailNew,
//     userInfo, setUserInfo,
//     articlesList, setArticlesList,
//     articlesListByCat, setArticlesListByCat,
//     currentMenuN, setcurrentMenuN,
//     newArticlesList, setNewArticlesList,
//     panier, setPanier,
//     panierQte, setPanierQte,
//     // callPanier,setcallPanier,
//     panierView, setpanierView,
//     totalPanier, setTotalPanier,
//     totalPanierJap, setTotalPanierJap,
//     totalPanierNoJap, setTotalPanierNoJap,
//     currentPdjType, setCurrentPdjType,
//     myDaysList, setMyDaysList,
//     currentUser, setCurrentUser,
//     currentUserFinal, setCurrentUserFinal,
//     todayfr10, setTodayfr10,
//     cdeEnCours, setCdeEnCours,
//     currentCdeEnCours, setCurrentCdeEnCours,
//     cdeEnCoursList, setCdeEnCoursList,
//     cdeEnCoursAllEmail, setCdeEnCoursAllEmail,
//     filteredDataSource, setFilteredDataSource,
//     masterDataSource, setMasterDataSource,
//     search, setSearch,
//     searchAble, setSearchAble,
//     MyModalPageVisible, setMyModalPageVisible,
//     PlatsToShowFiltered, setPlatsToShowFiltered,
//     PlatsToShowFilteredPanier, setPlatsToShowFilteredPanier,
//     gAuth, setGAuth,
//     pdjTypeList, setPdjTypeList,
//     promoOuverture, setpromoOuverture,
//     categoryBeforePanier, setcategoryBeforePanier,
//     navAdminState, setNavAdminState,
//     // user, setUser,
//     arrayUser, lastFixtures,
//     lastDateFixtures, currentDateFixtures,
//     dateSaisie, setDateSaisie,
//     datePush, setDatePush,
//     newFixtureAble, setNewFixtureAble,
//     chooseDateAble, setChooseDateAble,
//     addFixtureState, setAddFixtureState,
//     chooseTimeAble, setChooseTimeAble,
//     updateFixtureAble, setUpdateFixtureAble,
//     fixtureAdd, setFixtureAdd,
//     fixtureEdit, setFixtureEdit,
//     fixture2Update, setFixture2Update,
//     selectedDate, setSelectedDate,
//     selectedTime, setSelectedTime,
//     currentNavIdx, setCurrentNavIdx,
//     fixturesForOdds, setFixturesForOdds,
//     fixturesImport, setFixturesImport,
//     currentIndex, setCurrentIndex,
//     nextIndex, setNextIndex,
//     newState, setNewState,
//     dayDocStr, setDayDocStr,
//     startState, setStartState,
//     cancelState, setCancelState,
//     updateState, setUpdateState,
//     MyModalAuthPageVisible, setMyModalAuthPageVisible,
//     deleteState, setDeleteState,
//     fixtures2Months, setFixtures2Months,
//     saveAble, setSaveAble,
//     screenBt, setScreenBt,
//     goToHomeScreen, setgoToHomeScreen,
//     debuteunefois, setdebuteunefois,
//     fixtViewed, setfixtViewed,
//     fixturesListData, setfixturesListData,
//     currentScreen, setCurrentScreen,
//     // isLoading, setIsLoading,
//     stateBar, setstateBar,
//     monthDocStr, setMonthDocStr,
//     dateFact, setdateFact,
//     chooseDay, setChooseDay,
//     chooseDayTime, setChooseDayTime,
//     scrollTo, setscrollTo,
//     categoryName, setcategoryName,
//     categoryIcon, setcategoryIcon,
//     categoryNameList, setcategoryNameList,
//     categoryIconList, setcategoryIconList,
//     allCdeEnCours, setAllCdeEnCours,
//     currentcategoryNameAndIcon, setcurrentcategoryNameAndIcon,
//     idx, setIdx,
//     promoAccord, setPromoAccord,
//     remiseSushi, setRemiseSushi,
//     goBackToPanier, setGoBackToPanier,
//     notConnected

//   } = useContext(AuthenticatedUserContext);

  const {
        login, currentUser, auth,
        modalSignInVisible, setModalSignInVisible,
        userInfo, setUserInfo,
        gAuth, setGAuth
    } = useAuth();
    
  const [reqAuthError, setReqAuthError] = useState(''); // getGoogleUser
  const [gUser, setGUser] = useState(null); //// getGoogleUser

  // const [userInfo, setUserInfo] = useState(); // getUserData

  // const [gAuth, setGAuth] = useState(); // getPersistedAuth
  const [requireRefresh, setRequireRefresh] = useState(false);
  const [gUserEmail, setGUserEmail] = useState(null); //// getGoogleUser

  const [isLoading, setIsLoading] = useState(false);


  const iconGoogle = <SimpleLineIcons name="social-google" size={24} color="white" />

  const [request, response, promptAsync] = Google.useAuthRequest({


    // androidClientId: "160947168617-qfe66rkb7n5dmdml9hpsoh77vk6ld5fm.apps.googleusercontent.com",
    // iosClientId: "160947168617-rsal7j3679q6g82883fkent0nlipk0ju.apps.googleusercontent.com",
    // expoClientId: "160947168617-11uqtfp9fm7f4866cqrlscogi67871vb.apps.googleusercontent.com",
    // webClientId: '160947168617-pdu60q0h0bgt53bhir8uulggvfg7dls6.apps.googleusercontent.com'

    // J1P1 : 
    // androidClientId : "964852376005-qhqkkv933h4p2ndi001km4k7dbmin3pr.apps.googleusercontent.com",
    // iosClientId : "964852376005-v1cqlup6na7n4uirp64ejcg9uigc3da8.apps.googleusercontent.com",
    // expoClientId : "964852376005-8to5aj0vdqhc8oqehmin8s83i7p4khgc.apps.googleusercontent.com",
    // webClientId : '964852376005-5n1sfb9ssq4atk95vppjcrglj10kvm1l.apps.googleusercontent.com'

    // delicatessencloud
    androidClientId: "1033002245945-d5gb0i1f3u9uq8l15hk9mlpnuiuelstt.apps.googleusercontent.com",
    iosClientId: "1033002245945-57a5pgcvshd2uahr1ncl1jttgpjqf37u.apps.googleusercontent.com",
    expoClientId: "1033002245945-49qu8hhl1ssutcnee03keondt71bf3o9.apps.googleusercontent.com",

    webClientId: '1033002245945-kkne3t2gsbmun08t5h3lfnjn7pg5ncl4.apps.googleusercontent.com',

    //udexalgo
    // androidClientId: "",
    // iosClientId: "350509971155-on69qhpd1nnubl8gb0c9qmbsuon3c62l.apps.googleusercontent.com",
    // expoClientId: "350509971155-c36a1gp30in35etpjajjf5k9p8bepvpl.apps.googleusercontent.com",

    // webClientId: "350509971155-kcvbr5cq8d1d2ego65le7sh1o2289ehe.apps.googleusercontent.com",

  });


  useEffect(() => {
    //all1109 console.log("61 response Google.useAuthRequest", response);
    if (response?.type === "success") {
      setGAuth(response.authentication);


      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response.authentication));
      };
      persistAuth();
    }


  }, [response]);


  const getGoogleUser = async (accessToken:any) => {
    try {
      //all1109 console.log(50, "getGoogleUser ", getGoogleUser)
      let gUserReq = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      //all1109 console.log("gUserReq.data ", gUserReq.data);
      setGUser(gUserReq.data);
    }
    catch (error:any) {
      //all1109 console.log('GoogleUserReq error: ', error);
      setReqAuthError(error);
    }
    // console.log("72  gUserReq.data", gUserReq.data)
  }

//   useEffect(() => {
//     //21112023 console.log("route",route)
//     // console.log("166routeParams =", 'routeParams', objectLength(routeParams))
//     // console.log("247routeParams.panierQte =", routeParams?.panierQte)
//     // console.log("247routeParams.thisParams =", routeParams?.thisParams)
//     // console.log("168routeParams.goBackToPanier =", routeParams?.goBackToPanier)
//     // objectLength(routeParams).then(() => {
//     // console.log("248result", result)
//     // console.log("172routeParams +", routeParams)
//     // console.log("173routeParams +", routeParams?.goBackToPanier)

//     setPlatsToShowFilteredPanier(routeParams?.PlatsToShowFilteredPanier)
//     setArticlesList(routeParams?.articlesList)
//     setCurrentPdjType(routeParams?.typemenu)
//     setcurrentMenuN(routeParams?.menuN)
//     setcategoryName(routeParams?.categoryName)
//     setcategoryIcon(routeParams?.categoryIcon)
//     setcategoryNameList(routeParams?.categoryNameList)
//     setcategoryIconList(routeParams?.categoryIconList)
//     setPanierQte(routeParams?.panierQte)
//     setGoBackToPanier(routeParams?.goBackToPanier)
//     // //     if(routeParams?.panierQte?.length>0){
//     // //         syncCdeEnCoursListIntoArticlesList(panierQte,articlesList, setArticlesList)
//     // //     }
//     // })


//   }, [route])



  useEffect(() => {
    console.log("150 user ", userInfo)

    //all1109 console.log("promoOuverture", promoOuverture)
    let currentUserEmailTemp = ''
    // if(userInfo  ){
    //   if(userInfo.email && userInfo.email  !=''){
    //     currentUserEmailTemp = userInfo.email 
    //     if(currentUserEmailTemp !=''){
    //       //all1109 console.log("setCurrentUserEmail('currentUserEmailTemp')")
    //     }
    //   }
    // }
    // setUser(user)

    console.log("79 userInfo.email ", userInfo?.email)
    // setGUserEmail(userInfo?.email)
    setTimeout(() => {
      useRouteParams()
    }, 2000);
    // setCurrentUserEmail(userInfo?.email)


  }, [userInfo])


  useEffect(() => {

    setTimeout(() => {
      console.log(270, gAuth?.accessToken)
      !gAuth ? getUserData : () => promptAsync({ useProxy: false, showInRecents: true })
      if (!userInfo?.email) { getUserData() }
    }, 200);
  }, [gUserEmail])

  useEffect(() => {
    if (gAuth) {
      //all1109 console.log("promoOuverture", promoOuverture)
      getUserData()
    }
  }, [gAuth])

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      console.log("78 getPersistedAuth jsonValue ", jsonValue)
      if (jsonValue != null) {
        const authFromJson = JSON.parse(jsonValue);
        setGAuth(authFromJson);
         console.log("94 getPersistedAuth / authFromJson ", authFromJson);

        setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh({
          expiresIn: authFromJson.expiresIn,
          issuedAt: authFromJson.issuedAt
        }));
      }
    };
    getPersistedAuth();
  }, []);
  // =========================================================

  async function getUserData() {
    if (gAuth) {

      let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${gAuth?.accessToken}`
        }
      });

      userInfoResponse.json().then(data => {
        console.log(312, "userdata", "data");
        console.log(128, data, data?.email);

        //all1109 console.log("promoOuverture", promoOuverture)
        // data['promoOuverture'] = promoOuverture
        setUserInfo(data);
        // result.push(data);
        return data
      });

    }

  };


  async function useRouteParams() {
    setTimeout(() => {
    //   if (goBackToPanier) {
    //     // console.log(resultLogin['result']['user'].email)

    //     const thisParams = {
    //       typemenu: currentPdjType,
    //       goBackToPanier: true,
    //       PlatsToShowFilteredPanier: PlatsToShowFilteredPanier,
    //       menuN: currentMenuN,
    //       categoryName: categoryName,
    //       categoryIcon: categoryIcon,
    //       articlesList: articlesList,
    //       categoryNameList: arrayToObject(categoryNameList),
    //       categoryIconList: arrayToObject(categoryIconList),
    //       panierQte: panierQte
    //     }

    //     console.log("ARTI888 thisParams ", thisParams)

    //     navigation.navigate('HomeScreen',
    //       {
    //         thisParams: thisParams
    //       }
    //     )


    //     // setCurrentUserEmail(resultLogin['result']['user'].email)


    //   }
    }, 1000);

  }

  const showUserData = () => {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  };


  const logout = async () => {
    //all1109 console.log("logout", AuthSession)
    await AuthSession.revokeAsync({
      token: gAuth.accessToken
    }, {
      revocationEndpoint: "https://oauth2.googleapis.com/revoke"
    });

    setGAuth(undefined);
    setUserInfo(undefined);
    await AsyncStorage.removeItem("gAuth");
  };

  // const refreshToken = async () => {
  //   // const clientId : PlatfotmId;
  //   //all1109 console.log("125 gAuth = ", gAuth);
  //   const tokenResult = await AuthSession.refreshAsync({
  //     clientId: PlatfotmId,
  //     refreshToken: gAuth.refreshToken
  //   }, {
  //     tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token"
  //   });



  //   tokenResult.refreshToken = gAuth.refreshToken;

  //   setGAuth(tokenResult);
  //   await AsyncStorage.setItem("gAuth", JSON.stringify(tokenResult));
  //   setRequireRefresh(false);
  // };


  if (requireRefresh) {
    // return (
    //   <View style={styles.container}>
    //     <Text>Token requires refresh... </Text>
    //     <Button title="Refresh Token" onPress={refreshToken} />
    //     {gAuth && <Button title="Logout 0" onPress={logout} />}
    //   </View>
    // )
  }

  // const gAuthSession = [
  //  { 'gUser': gUser,
  //   'gAuth': gAuth,
  //   'reqAuthError': reqAuthError}
  // ]

  // return gUser

  return (
    // gUserEmail
    <View style={styles.authSessionContainer}>

      {
        reqAuthError !== '' &&
        <View>
          <Text>There was an error</Text>
          <Text>{JSON.stringify(reqAuthError, 'reqEr', 4)}</Text>
        </View>
      }
      <Text style={{ // titre
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: Colors.highlightBG,
        color: Colors.primaryText,
        fontSize: 20
      }}>
        Par bouton Google:
      </Text>

      <ButtonStd
        iconL={iconGoogle}
        iconR={iconSmartphone}
        label={' Connexion via Google3'}
        labelColor={Colors.accentBG}
        onPress={() => promptAsync()}
        onChange={undefined}
        bgButton={undefined}
      />
      {/* <Button title="Logout 0" onPress={logout} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  authSessionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 10,
    minWidth: 300,
    width: "90%",
    marginHorizontal: 'auto',
    marginVertical: 5

  },
  googleButton: {
    // backgroundColor: 'white',
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 22,
    marginTop: 10,
    borderColor: Colors.accentBG,
    borderStyle: 'solid',
    borderWidth: 5
  },
  textBlack: {
    fontSize: 22,
    color: 'black',
  },
  textWhite: {
    fontSize: 22,
    color: 'white',
  },

  textPrimary: {
    fontSize: 22,
    color: '#821e1e',
  },
  profilePic: {
    width: '90%',
    height: 50,
    // borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 5
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// /*
// // expo add expo-auth-session expo-random expo-dev-client
// // expo add @react-native-async-storage/async-storage


//   For testing expo-auth-session on iOS we need a standalone app 
//   which is why we install expo-dev-client

//   If you don't have eas installed then install using the following command:
//   npm install -g eas-cli

//   eas login
//   eas build:configure
//     ==> eas.json , ajouter dans build /development 
//   ios: {
//     simulator: true
//   }
//   Build for local development on iOS or Android:
//   eas build -p ios --profile development --local
//   OR
//   eas build -p android --profile development --local

//   May need to install the following to build locally (which allows debugging)
//   npm install -g yarn
//   brew install fastlane

//   After building install on your device:
//   For iOS (simulator): https://docs.expo.dev/build-reference/simulators/
//   For Android: https://docs.expo.dev/build-reference/apk/

//   Run on installed app:
//   expo start --dev-client

// npx expo export:web
// expo start --web --https



// */