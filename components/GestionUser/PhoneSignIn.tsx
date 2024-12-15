
import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { PhoneAuthProvider, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { UserType } from '@/app/models/UserType';
import { addItemAndSetId, getItemsWhere } from '@/firebase';
import { Colors } from '@/constants/Colors';
import { iconSend, iconSmartphone } from '@/icons';
import ButtonStd from '../ButtonTypeStd';
import { useAuth } from '@/app/AuthContext';


const PhoneSignIn = ({ }) => {
  let commande: any = []


  const { auth, user, setUser,
    setCurrentUser,
  } = useAuth()
  auth.languageCode = 'fr';

  // const auth = myAuth
  auth.languageCode = 'fr';
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const recaptchaVerifier = useRef(null);
  const [thisSignInByPhoneChoosed, setThisSignInByPhoneChoosed] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState('')

  // const [user, setUser] = useState(null)

  // const thisCollection = 'shoppinUsers/test/phoneSignIn'
  const thisCollection = 'shoppinUsers'
  useEffect(() => {
    console.log("124auth = ", auth)

    // checkUserByPhoneExist(phoneNumber) // ne pas lancer check ici , car action à chaque changement

  }, [auth])

  useEffect(() => {
    console.log("phoneNumber134 = ", phoneNumber)
  }, [phoneNumber])

  useEffect(() => {
    console.log("commande = ", phoneNumber)
  }, [commande])

  async function checkUserByPhoneExist(thisValue: string) {

    const thisField = 'phonehand'
    console.log("result148 checkUserByPhoneExist / thisCollection, thisField, thisValue", thisCollection, thisField, thisValue)
    if (Number(thisValue) > 99999999) {
      const result = await getItemsWhere(thisCollection, thisField, thisValue)

      if (result?.length > 0) { //user exist after PhoneSignin
        const emailTemp = result[0].email
        console.log("result 153 checkUserByPhoneExist", emailTemp, result[0])

        setTimeout(() => {

          setUser(result[0])
          setCurrentUser(result[0])
          console.log("setCurrentUserEmail ")
          setCurrentUserEmail(emailTemp)
          // setpanierView(true)
        }, 500);

        // createUserProfile(result[0])
      } else { // user does not exist after PhoneSignin
        console.log("result 149 new User checkUserByPhoneExist = null = nouvel user")
        const userTemp = new UserType()
        userTemp.phonehand = thisValue
        userTemp.email = '0' + thisValue?.substring(1)
        setTimeout(() => {
          console.log("setCurrentUserEmail ", '0' + thisValue?.substring(1))

          if (thisValue && thisValue != 'udex.invited@gmail.com') {
            setCurrentUserEmail('0' + thisValue?.substring(1))
            setCurrentUser(userTemp)
            // setpanierView(true)
          }
        }, 500);
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
  function tel10chiffresToCodePays(tel10chiffres: any) {
    // let tel10chiffres = '0616817427'
    const result = ('+33' + tel10chiffres.substring(1))
    console.log(result)
    return result
  }

  const db = getFirestore();


  auth.onAuthStateChanged((user: any) => {
    if (user) {
      console.log("auth.onAuthStateChanged", auth.onAuthStateChanged)
      console.log("createUserProfile ??? : user ", user)
    }
  });

  const sendVerification = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);

      const id = phoneProvider.verifyPhoneNumber(tel10chiffresToCodePays(phoneNumber), recaptchaVerifier?.current);
      setVerificationId(id);
      // setThisSignInByPhoneChoosed(!thisSignInByPhoneChoosed)
    } catch (error) {
      console.error(error);
    }

  };

  const confirmCode = async () => {
    console.log("confirmCode")
    try {

      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);

      console.log('sign in auth :', auth)
      console.log('sign in credential :', credential)
      alert('Phone authentication successful');
      console.log("setCurrentUserEmail ", phoneNumber)
      if (phoneNumber && phoneNumber != ''
        // && currentUserEmail !='udex.invited@gmail.com' 
      ) {
        console.log("© currentUserEmail =", phoneNumber)
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
    <View style={{
      borderRadius: 10,
      padding: 3,
    }}>
      <Pressable onPress={() => {
        setVerificationId(null),
          console.log("setVerificationId")
        setThisSignInByPhoneChoosed(!thisSignInByPhoneChoosed)
      }}>
        <Text style={{
          backgroundColor: Colors.highlightBG,
          paddingVertical: 10,
          color: Colors.primaryText,
          fontSize: 18,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          {iconSmartphone}
          <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>Par Téléphone</Text>
        </Text>
      </Pressable>

      {verificationId == null && (
        <View style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <TextInput
            style={{
              color: Colors.primaryText,
              height: 40,
              borderBottomColor: Colors.primaryText,
              borderBottomWidth: 2,
              paddingHorizontal: 10,
              marginVertical: 10,
            }}
            placeholder="Numéro de téléphone"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <View style={{
            width: 50,
            // borderWidth: 5,
            borderRadius: 10,
            backgroundColor: Colors.accentBG,
            padding: 3,
            borderWidth: 5, borderColor: Colors.accentBG, borderStyle: 'solid',
          }}>
            <ButtonStd
              label={iconSend}
              labelColor={Colors.primaryText}

              onPress={sendVerification}
              bgButton={Colors.accentBG} iconL={undefined}
              iconR={undefined} onChange={undefined} />
          </View>
        </View>
      )}

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.app.options}
      />

      {verificationId != null && (
        <>
          <TextInput
            style={{
              color: Colors.primaryText,
              height: 40,
              backgroundColor: Colors.accentBG,
              paddingHorizontal: 10,
            }}
            placeholder="Captcha ... puis Code vérification / sms"
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
          />
          <ButtonStd
            label="Confirmer le code"
            labelColor={Colors.primaryText}
            onPress={confirmCode}
            bgButton={Colors.accentBG} iconL={undefined} iconR={undefined} onChange={undefined} />
        </>
      )}
    </View>
  );
};

export default PhoneSignIn;