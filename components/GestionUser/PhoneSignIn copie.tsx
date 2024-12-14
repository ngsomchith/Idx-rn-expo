
import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, TextInput, Button, Text, Pressable } from 'react-native';
// import { auth } from './firebaseConfig';
import { PhoneAuthProvider, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useAuth } from '@/app/AuthContext';
import { addItemAndSetId, getItemsWhere } from '@/firebase';
import { UserType } from '@/app/models/UserType';
import { Colors } from '@/constants/Colors';
import { iconSmartphone } from '@/icons';
import ButtonStd from '../ButtonTypeStd';
import { FirebaseInit } from '@/constants/firebaseConfig';


const PhoneSignIn = () => {


  // const {
  //   user, setUser,
  //   viewModal, setViewModal,
  //   currentUserEmail, setCurrentUserEmail,
  //   // currentUserEmailNew, setCurrentUserEmailNew,
  //   userInfo, setUserInfo,
  //   articlesList, setArticlesList,
  //   articlesListByCat, setArticlesListByCat,
  //   currentMenuN, setcurrentMenuN,
  //   newArticlesList, setNewArticlesList,
  //   panier, setPanier,
  //   panierQte, setPanierQte,
  //   // callPanier,setcallPanier,
  //   panierView, setpanierView,
  //   totalPanier, setTotalPanier,
  //   totalPanierJap, setTotalPanierJap,
  //   totalPanierNoJap, setTotalPanierNoJap,
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
  //   categoryBeforePanier, setcategoryBeforePanier,
  //   navAdminState, setNavAdminState,
  //   // user, setUser,
  //   arrayUser, lastFixtures,
  //   lastDateFixtures, currentDateFixtures,
  //   dateSaisie, setDateSaisie,
  //   datePush, setDatePush,
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
  //   categoryNameList, setcategoryNameList,
  //   categoryIconList, setcategoryIconList,
  //   allCdeEnCours, setAllCdeEnCours,
  //   currentcategoryNameAndIcon, setcurrentcategoryNameAndIcon,
  //   idx, setIdx,
  //   promoAccord, setPromoAccord,
  //   remiseSushi, setRemiseSushi,
  //   notConnected, setNotConnected


  // } = useContext(AuthenticatedUserContext);

  // const auth = myAuth
  
  const {auth, user
  } = useAuth()
  auth.languageCode = 'fr';


      const myApp = FirebaseInit()
      const phoneProvider =  myApp[4]  
const [currentUserEmail, setCurrentUserEmail] =useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const recaptchaVerifier = useRef(null);
  const [thisSignInByPhoneChoosed, setThisSignInByPhoneChoosed] = useState(false);

  const thisCollection = 'shoppinUsers'
  useEffect(() => {
    console.log("124auth = ", auth)


    // const result = codePaysToChiffres()
    // console.log("codePaysToChiffres = ", result)
    // const result2 = tel10chiffresToCodePays()
    // console.log("tel10chiffresToCodePays = ", result2)

    // pour test
    // setPhoneNumber('+33637374799')
    // setPhoneNumber('+33616817426')

    console.log("phoneNumber136 user = ", user)
    // checkUserByPhoneExist(phoneNumber) // ne pas lancer check ici , car action à chaque changement

  }, [auth, user])

  useEffect(() => {
    console.log("phoneNumber134 = ", phoneNumber)
  }, [phoneNumber])
  


  useEffect(() => {
    console.log("recaptchaVerifier = ", recaptchaVerifier)
  }, [recaptchaVerifier])

  async function checkUserByPhoneExist(thisValue: string) {

    const thisField = 'phonehand'
    console.log("result148 checkUserByPhoneExist / thisCollection, thisField, thisValue", thisCollection, thisField, thisValue)
    if (Number(thisValue) > 99999999) {
      const result = await getItemsWhere(thisCollection, thisField, thisValue)

      if (result?.length > 0) { //user exist after PhoneSignin
        const emailTemp = result[0].email
        console.log("result 153 checkUserByPhoneExist", emailTemp, result[0])

        // setTimeout(() => {

        //   setCurrentUser(result[0])
        //   console.log("setCurrentUserEmail ")
        //   setCurrentUserEmail(emailTemp)
        //   setpanierView(true)
        // }, 500);

        // createUserProfile(result[0])
      } else { // user does not exist after PhoneSignin
        console.log("result 149 new User checkUserByPhoneExist = null = nouvel user")
        const userTemp = new UserType()
        userTemp.phonehand = thisValue
        userTemp.email = '0' + thisValue?.substring(1)
        // setTimeout(() => {
        //   console.log("setCurrentUserEmail ", '0' + thisValue?.substring(1))

        //   if (thisValue && thisValue != 'udex.invited@gmail.com') {
        //     setCurrentUserEmail('0' + thisValue?.substring(1))
        //     setCurrentUser(userTemp)
        //     setpanierView(true)
        //   }
        // }, 500);
        addItemAndSetId(thisCollection, userTemp)
        // createUserProfile(userTemp)

      }
    } else {
      console.log('Not de phoneNumber ! =', thisValue)
    }

  }
  useEffect(() => {

    if (currentUserEmail && currentUserEmail != '' && currentUserEmail != 'udex.invited@gmail.com') {
      console.log("phoneSIGNIn160 currentUserEmail =", currentUserEmail)
      if (currentUserEmail != 'udex.invited@gmail.com') {
        checkUserByPhoneExist(currentUserEmail) // currentUserEmail = phoneNumber
      }
    }
  }, [currentUserEmail])

  function codePaysToChiffres() {
    let tel33 = '+33616817424'
    const result = '0' + tel33.substring(3)
    console.log(result)
    return result
  }
  function tel10chiffresToCodePays(tel10chiffres:any) {
    // let tel10chiffres = '0616817427'
    const result = ('+33' + tel10chiffres.substring(1))
    console.log(result)
    return result
  }

  const db = getFirestore();

  // const createUserProfile = async (user) => {
  //   console.log("187createUserProfiler", user)
  //   console.log("188auth", auth)
  //   if(user){
  //     const userRef = doc(db, thisCollection, user?.id);
  //     console.log("54createUserProfiler user?.id", user?.id)
  //     const userProfile = {
  //       uid: user?.id,
  //       phoneNumber:  phoneNumber,
  //       createdAt: new Date(),
  //       // Ajoutez d'autres informations utilisateur si nécessaire
  //     };
  //     setCurrentUserEmail(user.email)
  //     console.log('createUserProfile68 = ', user, user.email)

  //     await setDoc(userRef, userProfile);
  //   }
  // };

  auth.onAuthStateChanged((user:any) => {
    if (user) {
      // createUserProfile(user);
      console.log("auth.onAuthStateChanged", auth.onAuthStateChanged)
      console.log("auth.onAuthStateChanged : user ", user)
    }
  });

  const sendVerification = async () => {
    try {
      // const phoneProvider = new PhoneAuthProvider(auth); // voir en haut

      const id = recaptchaVerifier && recaptchaVerifier.current != null && phoneProvider.verifyPhoneNumber(tel10chiffresToCodePays(phoneNumber), recaptchaVerifier.current);
      setVerificationId(id);
    } catch (error) {
      console.error(error);
    }

  };

  const confirmCode = async () => {
    try {

      const credential =verificationId && PhoneAuthProvider.credential(verificationId, verificationCode);
      // await signInWithPhoneNumber(auth, credential);


      //  #################    désactiver la ligne suivante pour forcer test
      recaptchaVerifier && recaptchaVerifier.current != null && await signInWithPhoneNumber(auth, tel10chiffresToCodePays(phoneNumber), recaptchaVerifier.current);

      console.log('sign in auth :', auth)
      console.log('sign in credential :', credential)
      alert('Phone authentication successful');
      console.log("setCurrentUserEmail ", phoneNumber)
      if (phoneNumber && phoneNumber != ''
        && currentUserEmail !='udex.invited@gmail.com' 
      ) {
        console.log("© currentUserEmail =", phoneNumber)
        // checkUserByPhoneExist(currentUserEmail) // currentUserEmail = phoneNumber
        setCurrentUserEmail(phoneNumber)
        if (phoneNumber != 'udex.invited@gmail.com') {
          checkUserByPhoneExist(phoneNumber) // currentUserEmail = phoneNumber
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  // =======================================


  return (
    // <></>
    <View style={{
      borderColor: Colors.accentBG,
      borderStyle: 'solid',
      borderWidth: 5,
      borderRadius: 10,
      padding: 3,
      height: 100
      // backgroundColor: Colors.highlightBG
    }}>
      <Pressable
        style={{ flexDirection: 'row', flexWrap: 'nowrap' }}
        onPress={() => {
          setThisSignInByPhoneChoosed(!thisSignInByPhoneChoosed)
        }}
      >
        <Text style={{
          backgroundColor: Colors.highlightBG,
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {iconSmartphone}
        </Text>
        
        <Text style={{ // iconSmartphone
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          backgroundColor: Colors.highlightBG,
          color: Colors.primaryText,
          fontSize: 20,
          flex: 1
        }}>
          Par Téléphone:
        </Text>
      </Pressable>

      {verificationId == null &&
        thisSignInByPhoneChoosed &&
        <View style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          // backgroundColor:Colors.accentBG,
          backgroundColor: 'transparent',
          borderBottomColor: Colors.accentBG,
          // borderWidth:1,
          borderStyle: 'solid',
          marginVertical: 10

        }}>
          <Text style={{ // iconSmartphone
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}>
            {iconSmartphone}
          </Text>

          <TextInput
            style={{
              color: Colors.primaryText,
              height: 40,
              // backgroundColor: Colors.accentBG,
              backgroundColor: "transparent",
              borderColor: 'transparent',
              borderBottomColor: Colors.primaryText,
              borderWidth: 3,
              borderStyle: 'solid',
              paddingHorizontal: 10,
              marginVertical: 10,
              fontSize: 16
            }}
            placeholder="tel ? : 0612345678"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoComplete="tel"
          />
          {/* <Button title="Send Verification Code" onPress={sendVerification} /> */}
          <ButtonStd iconL={undefined} iconR={undefined}
            label={"Connexion / Tel"}
            labelColor={Colors.primaryText}
            onPress={sendVerification}
            onChange={undefined}
            bgButton={Colors.accentBG}
          />

        </View>
      }

      {/* <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.app.options}
      /> */}
      {/* {verificationId != null &&
        <>
          <TextInput
            style={{
              color: Colors.primaryText,
              height: 40,
              backgroundColor: Colors.accentBG,
              paddingHorizontal: 10
            }}
            placeholder="Code Vérif / sms"
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
          />
          <Button title="Vérifiez votre code" onPress={confirmCode} />
          <ButtonStd iconL={undefined} iconR={undefined}
            label={"Confirmez votre code"}
            labelColor={Colors.primaryText}
            onPress={confirmCode}
            onChange={undefined}
            bgButton={Colors.accentBG}
          />
        </>
      } */}
    </View>
  );
};

export default PhoneSignIn;