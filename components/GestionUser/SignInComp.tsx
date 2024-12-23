

import React, { useEffect, useContext, useState } from 'react';
// import { Colors, auth, bigWidthBorder, iconBack, iconEmail, iconSmartphone, widthBorder } from '../config';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, Platform } from 'react-native';
import { Formik } from 'formik';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import * as AuthSession from 'expo-auth-session';

import { SimpleLineIcons } from '@expo/vector-icons';
import ThisDevice from '@/constants/ThisDevice';
import { myStyles } from '../myStyle';
import { useAuth } from '@/app/AuthContext';
import { useTogglePasswordVisibility } from '@/hooks/useTogglePasswordVisibility';
import { fbLoginUser, getItemsWhere, updateItemModel } from '@/firebase';
import { createUserWithEmailAndPassword, FirebaseInit, signInWithEmailAndPassword } from '@/constants/firebaseConfig';
import { TextInput } from '../TextInput';
import { Colors } from '@/constants/Colors';
import { FormErrorMessage } from '../FormErrorMessage';
import { iconBack, iconEmail } from '@/icons';
import ButtonStd from '../ButtonTypeStd';
import { thisClone } from '../services/DataServices';
import { AuthSessionSignIn } from '../AuthSessionSignIn';
import { UserType } from '@/app/models/UserType';
import PhoneSignIn from './PhoneSignIn';
// import AuthSessionSignIn from '../AuthSessionSignIn';
// import ModalSignUp from '../components/ModalSignUp';



WebBrowser.maybeCompleteAuthSession();


const SignInComp = ({
    // navigation, route, showPanierViewModal, 
    // setModalSignInVisible, scrollY0, scrollX0, 
    // commande 
}) => {

    const {
        login, currentUser, setCurrentUser,
        auth, user, setUser,
        modalSignInVisible, setModalSignInVisible,
        userInfo, setUserInfo,
        gAuth, setGAuth
    } = useAuth();

    let currentUserTemp = thisClone(currentUser)
    const myApp = FirebaseInit()

    const device = ThisDevice().device
    const styles0 = ThisDevice().styles0
    const styles = myStyles

    // const routeParams0 = route?.params;
    // const [routeParams, setRouteParams] = useState(routeParams0?.thisParams)
    const myWidth = device.width
    const myHeight = device.height
    const myCoeffScreen = myWidth / myHeight
    const MAXWIDTH = ThisDevice().device.width - 5

    const [goBackToPanier, setGoBackToPanier] = useState(false)
    const [togglePromo, settogglePromo] = React.useState(true);
    const [errorState, setErrorState] = useState('');
    // const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    //     useTogglePasswordVisibility();


    const [formikSignInVisible, setFormikSignInVisible] = useState(true)
    const [formikSignUpVisible, setFormikSignUpVisible] = useState(!formikSignInVisible)

    const [reqAuthError, setReqAuthError] = useState(''); // getGoogleUser
    const [gUser, setGUser] = useState(null); //// getGoogleUser
    const [currentUserEmail, setCurrentUserEmail] = useState('')
    // const thisCollection = 'shoppinUsers/test/phoneSignIn'
    const thisCollection = 'shoppinUsers'
    const [requireRefresh, setRequireRefresh] = useState(false);
    const [gUserEmail, setGUserEmail] = useState(null); //// getGoogleUser

    const iconGoogle = <SimpleLineIcons name="social-google" style={{ fontSize: 24 }} color="white" />

    const [thisSignInByEmailChoosed, setThisSignInByEmailChoosed] = useState(false);

    const [thisSignInByPhoneChoosed, setThisSignInByPhoneChoosed] = useState(false);
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

    const { passwordVisibility, handlePasswordVisibility, rightIcon } =
        useTogglePasswordVisibility();

    useEffect(() => {
        console.log("signinComp125 response Google.useAuthRequest", response);
        if (response?.type === "success") {
            setGAuth(response.authentication);
            const persistAuth = async () => {
                await AsyncStorage.setItem("auth", JSON.stringify(response.authentication));
            };
            persistAuth();
        }
    }, [response]);


    const getGoogleUser = async (accessToken: any) => {
        try {
            console.log(50, "getGoogleUser ", getGoogleUser)
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
        catch (error) {
            //all1109 console.log('GoogleUserReq error: ', error);
            setReqAuthError(error);
        }
        // console.log("72  gUserReq.data", gUserReq.data)
    }

    //     useEffect(() => {
    //         objectLength(routeParams).then(() => {
    // })
    //     }, [route, routeParams])

    useEffect(() => {
        //all console.log("294 currentUserEmail, panierQte, panierView ", currentUserEmail, panierQte, panierView)
        if (currentUserEmail == 'udex.invited@gmail.com' || currentUserEmail == ''
            // && panierQte == 0
        ) {
            console.log('============= seconnecter plus tard ???', currentUserEmail)
            // setCurrentScreen('HomeScreen')
            // setgoToHomeScreen(true)

            // navigation?.navigate('HomeScreen')
        } else {
            // setpanierView(true)
            // const thisParams = {
            //     typemenu: currentPdjType,
            //     goBackToPanier: true,
            //     PlatsToShowFilteredPanier: PlatsToShowFilteredPanier,
            //     menuN: currentMenuN,
            //     categoryName: categoryName,
            //     categoryIcon: categoryIcon,
            //     articlesList: articlesList,
            //     // remiseObtenueVar: commande,
            //     commandeVar:commande,
            //     categoryNameList: arrayToObject(categoryNameList),
            //     categoryIconList: arrayToObject(categoryIconList),
            //     panierQte: panierQte
            // }

            //all console.log("ARTI309 navigation ", navigation)

            // console.log("ARTI319 thisParams ", thisParams)
            // navigation?.navigate('HomeScreen',
            //     {
            //         thisParams: thisParams
            //     }
            // )
        }
    }, [currentUserEmail])

    useEffect(() => {

        setUser(user)


        console.log("79 userInfo.email ", userInfo?.email)
        setGUserEmail(userInfo?.email)
        // setTimeout(() => {
        //     useRouteParams()
        // }, 2000);
        // setCurrentUserEmail(userInfo?.email)
        // if (userInfo && userInfo?.email != undefined && userInfo?.email != '' && userInfo?.email != 'udex.invited@gmail.com') {
        //     //all console.log(" userInfo?.email  ", userInfo?.email)
        //     setpanierView(true)
        // }
        checkUserEmailExist(userInfo?.email)

        // autoSignUpSocialUser(userInfo?.email)

    }, [userInfo])

    useEffect(() => {
        console.log(" SignInComp302 currentUser useEffect", currentUser)

    }, [currentUser])


    useEffect(() => {

        setTimeout(() => {
            console.log(89, gAuth?.accessToken)
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
                //all1109 console.log("94 getPersistedAuth / authFromJson ", authFromJson);

                setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh({
                    expiresIn: authFromJson.expiresIn,
                    issuedAt: authFromJson.issuedAt
                }));
            }
        };


        getPersistedAuth();
    }, []);

    // =========================================================


    // =========================================================


    async function getUserData() {
        if (gAuth) {

            let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
                headers: {
                    Authorization: `Bearer ${gAuth?.accessToken}`
                }
            });

            userInfoResponse.json().then(data => {
                console.log(127, "userdata", data);
                //all1109 console.log(128, data, data?.email);

                //all1109 console.log("promoOuverture", promoOuverture)
                // data['promoOuverture'] = promoOuverture
                setUserInfo(data);
                // result.push(data);
                return data
            });

        }

    };

    const {
        handleConfirmPasswordVisibility,
        confirmPasswordIcon,
        confirmPasswordVisibility
    } = useTogglePasswordVisibility();

    // ========================
    // const handleSignIn = async (values: any) => {
    //     console.log("SIGNIN230 setCurrentUserEmail")
    //     const { email, password } = values;


    //     let resultLogin: any = await fbLoginUser(email, password
    //         // , promoOuverture
    //     )
    //     //all console.log("200resultLogin =", resultLogin)
    //     if (resultLogin) { // user exist after email sign in

    //         checkUserEmailExist(email)


    //         // if (!userInfo || !userInfo?.email &&
    //         //     (currentUser.codePromo == ''
    //         //         || currentUser.codePromo == 'noCode'
    //         //         || !currentUser.codePromo
    //         //     )
    //         // ) {
    //         //     //all08112023 console.log ("128currentUser ", currentUser)
    //         //     let currentUserTemp = thisClone(currentUser)
    //         //     const result = promoOuverture ? 'promoOuverture' : 'noCode138'

    //         // }


    //     }
    //     //all console.log("271resultLogin =", resultLogin['codePromo'])
    //     // setpromoOuverture(resultLogin['codePromo'])
    //     setTimeout(() => {
    //         if (goBackToPanier && resultLogin) {
    //             console.log("279resultLogin =", resultLogin)

    //             // if (resultLogin && resultLogin['result']) {
    //             //     setCurrentUserEmail(resultLogin['result']['user'].email)
    //             // }
    //         }
    //     }, 1000);

    //     // if (!userInfo || !userInfo?.email &&
    //     //     (currentUser.codePromo == ''
    //     //         || currentUser.codePromo == 'noCode'
    //     //         || !currentUser.codePromo
    //     //     )
    //     // ) {
    //     //     //all08112023 console.log ("128currentUser ", currentUser)
    //     //     let currentUserTemp = thisClone(currentUser)
    //     //     const result = promoOuverture ? 'promoOuverture' : 'noCode138'

    //     // }


    // };

    const handleSignIn = async (values: any) => {
        console.log("SIGNIN230 setCurrentUserEmail")
        const { email, password } = values;
        try {
            const userCredential = await signInWithEmailAndPassword(myApp, email, password);
            console.log(userCredential)
            console.log('Connexion réussie', `Bienvenue ${userCredential.user.email}`);

            currentUserTemp = userCredential.user
            console.log("user ProfileScreen 24", currentUserTemp)
            setModalSignInVisible(false)
            login(userCredential.user)

            if (userCredential && userCredential.user && userCredential.user.email) { // user exist after email sign in

                checkUserEmailExist(email)


                if (!userInfo || !userInfo?.email
                    // && (currentUser.codePromo == ''
                    //     || currentUser.codePromo == 'noCode'
                    //     || !currentUser.codePromo
                    // )
                ) {
                    console.log("128currentUser ", currentUser)
                    console.log("userInfo ", userInfo)
                    let currentUserTemp = thisClone(currentUser)
                    // const result = promoOuverture ? 'promoOuverture' : 'noCode138'

                }


            }
            //all console.log("271resultLogin =", resultLogin['codePromo'])
            // setpromoOuverture(resultLogin['codePromo'])




        } catch (error) {

            window.alert('Erreur' + error?.message);
        }
    };

    async function checkUserEmailExist(thisValue: string) {

        if (thisValue?.indexOf('@') > 0) {

            const thisField = 'email'
            //all console.log("result595  / thisCollection, thisField, thisValue", thisCollection, thisField, thisValue)
            const result = await getItemsWhere(thisCollection, thisField, thisValue)

            if (result?.length > 0) { //user exist after PhoneSignin
                const emailTemp = result[0].email
                console.log("result600 checkUserByEmail Exist", emailTemp, result)
                // checkUserEmailExist(emailTemp)
                // console.log("result590 checkUserByEmail Exist", emailTemp, result)

                setCurrentUser(result[0])
                if (currentUser) {

                    // login(userCredential.user)
                    login(currentUser)
                }
                // //all console.log("setCurrentUserEmail ")
                // setCurrentUserEmail(emailTemp)
                // setpanierView(true)
                // setNotConnected(false)
                // if (result[0]?.phonehand != '') { setPhoneKnown(true) }


                // createUserProfile(result[0])
            } else { // user does not exist after PhoneSignin
                //all console.log("result 149 new User checkUserByPhoneExist = null = nouvel user")
                const userTemp = new UserType()
                userTemp.email = thisValue

                setTimeout(() => {
                    //all console.log("setCurrentUserEmail ", thisValue)

                    if (thisValue && thisValue != 'udex.invited@gmail.com') {
                        console.log("thisValue != 'udex.invited@gmail.com' ", thisValue)
                        // setCurrentUserEmail(thisValue)
                        // setCurrentUser(userTemp)
                        // setpanierView(true),
                        //     setNotConnected(false)
                    }
                }, 500);
                if (thisValue && thisValue != 'udex.invited@gmail.com') {

                    // addItemAndSetId(thisCollection, userTemp)

                    updateItemModel(thisCollection, userTemp, thisValue); // thisValue = userTemp.email 
                }
                // createUserProfile(userTemp)

            }
        } else {
            //all console.log("not an email = ", thisValue)
        }

    }

    async function checkUserByPhoneExist(thisValue: string) {

        const thisField = 'phonehand'
        //all console.log("result148 checkUserByPhoneExist / thisCollection, thisField, thisValue", thisCollection, thisField, thisValue)
        if (Number(thisValue) > 99999999) {
            const result = await getItemsWhere(thisCollection, thisField, thisValue)

            if (result?.length > 0) { //user exist after PhoneSignin
                const emailTemp = result[0].email
                //all console.log("result 153 checkUserByPhoneExist", emailTemp, result[0])

                setTimeout(() => {

                    setCurrentUser(result[0])
                    //all console.log("setCurrentUserEmail ")
                    setCurrentUserEmail(emailTemp)
                    // setpanierView(true)
                }, 500);

                // createUserProfile(result[0])
            } else { // user does not exist after PhoneSignin
                //all console.log("result 149 new User checkUserByPhoneExist = null = nouvel user")
                const userTemp = new UserType()
                userTemp.phonehand = thisValue
                userTemp.email = '0' + thisValue?.substring(1)
                setTimeout(() => {
                    //all console.log("setCurrentUserEmail ", '0' + thisValue?.substring(1))

                    if (thisValue && thisValue != 'udex.invited@gmail.com') {
                        setCurrentUserEmail('0' + thisValue?.substring(1))
                        setCurrentUser(userTemp)
                        setpanierView(true)
                    }
                }, 500);
                addItemAndSetId(thisCollection, userTemp)
                // createUserProfile(userTemp)

            }
        } else {
            //all console.log('Not de phoneNumber ! =', thisValue)
        }

    }

    // ========================

    const thisFormikSignIn = () => {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                // validationSchema={loginValidationSchema}
                onSubmit={values => handleSignIn(values)}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleBlur
                }) => (
                    <View style={[styles.textInputContainer, { //email Pwd sign in
                        maxHeight: 270,
                        width: '100%',
                        // paddingHorizontal: 5,
                        minWidth: 300,
                        marginHorizontal: 0,
                        marginVertical: 10,
                        justifyContent: 'space-around',
                        // borderWidth: middleWidthBorder,
                        borderWidth: 5,
                        borderColor: Colors.accentBG,
                        // borderColor: 'turquoise',
                        borderStyle: 'solid',
                        borderBottomColor: 'grey',
                        borderRadius: 10
                    }]}>
                        <Pressable
                            style={{ width: '100%', flexDirection: 'row', flexWrap: 'nowrap' }}
                            onPress={() => {
                                setThisSignInByEmailChoosed(!thisSignInByEmailChoosed)
                            }}
                        >

                            <Text style={{
                                backgroundColor: Colors.highlightBG,
                                display: 'flex',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {iconEmail}
                            </Text>
                            <Text style={{ // e-mail
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                paddingVertical: 10,
                                backgroundColor: Colors.highlightBG,
                                color: Colors.primaryText,
                                fontSize: 18,
                                flex: 1,
                                width: '100%'
                            }}>
                                Par E-mail:
                            </Text>
                        </Pressable>


                        {thisSignInByEmailChoosed &&
                            <View style={{
                                width: '100%',

                                // borderWidth: 2,
                                // borderColor: 'yellow',
                                // borderStyle: 'solid',
                                maxHeight: 400
                            }}>

                                {/* <Text style={{
                                    color: Colors.primaryText,
                                    fontSize: 20,
                                    textDecorationLine: 'underline'
                                }}> Vous avez déjà un compte :</Text> */}

                                {/* Input fields */}
                                <View //Input  email 
                                    style={{ maxHeight: 100, width: '100%' }} >
                                    <TextInput
                                        style={{
                                            maxHeight: 40, flex: 1,
                                            // backgroundColor:'grey',
                                            color: Colors.primaryText,
                                            borderWidth: 2,
                                            borderColor: 'transparent',
                                            borderStyle: 'solid',
                                            borderBottomColor: Colors.primaryText
                                        }}
                                        name='email'
                                        leftIconName='email'
                                        placeholder='Email'
                                        autoCapitalize='none'
                                        keyboardType='email-address'
                                        textContentType='emailAddress'
                                        autoFocus={true}
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        rightIcon={undefined}
                                        handlePasswordVisibility={undefined} />
                                </View>
                                <FormErrorMessage
                                    error={errors.email}
                                    visible={touched.email}
                                />

                                <View //Input  password 
                                    style={{
                                        // maxHeight: 60,
                                        width: '100%',
                                        borderWidth: 2,
                                        borderColor: 'transparent',
                                        // borderBottomColor: 'white',
                                        borderStyle: 'solid',
                                        marginVertical: 15,

                                    }} >

                                    <TextInput // password
                                        // style = {{borderBottomwidht:2, borderColor: 'white', borderStyle: 'solid'}}
                                        style={{
                                            maxHeight: 40, flex: 1,
                                            // backgroundColor:'grey',
                                            color: Colors.primaryText,
                                            borderWidth: 2,
                                            borderColor: 'transparent',
                                            borderStyle: 'solid',
                                            borderBottomColor: Colors.primaryText
                                        }}
                                        name='password'
                                        leftIconName='key-variant'
                                        placeholder='Mot de passe'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        secureTextEntry={passwordVisibility}
                                        textContentType='password'
                                        rightIcon={rightIcon}
                                        handlePasswordVisibility={handlePasswordVisibility}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                    />
                                </View>
                                <FormErrorMessage
                                    error={errors.password}
                                    visible={touched.password}
                                />
                                {/* Display Screen Error Mesages */}
                                {errorState !== '' ? (
                                    <FormErrorMessage error={errorState} visible={true} />
                                ) : null}
                                {/* Login button */}
                                {/* <ButtonStd onPress={handleSubmit}
                        iconR={undefined}
                        label={'Connexion'} onChange={undefined}
                        bgButton={Colors.accentBG}
                        labelColor={Colors.primaryText} /> */}

                                <View style={{
                                    height: 40, width: '100%',
                                    backgroundColor: Colors.accentBG,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: Colors.accentBG,
                                    borderStyle: 'solid',
                                    borderWidth: 5,
                                }}>
                                    <ButtonStd iconR={undefined}
                                        label={'Connexion'}
                                        onPress={handleSubmit}
                                        onChange={undefined} bgButton={Colors.accentBG}
                                        labelColor={Colors.primaryText} icon1={undefined}
                                        iconL={undefined} />
                                </View>
                            </View>
                        }
                    </View>
                )}
            </Formik>
        )
    }

    const handleSignup = (values: any) => {
        const { email, password } = values;

        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log("createUserWithEmailAndPassword res =", res)

            // setPanierVisible(true)
            // setpanierView(true)
        })

            .catch(error =>
                setErrorState(error.message)
            );
    };

    const thisFormikSignUp = () => {
        return (

            <Formik
                style={{ marginVertical: 20 }}
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                // validationSchema={signupValidationSchema}
                onSubmit={values => handleSignup(values)}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleBlur
                }) => (
                    <>
                        {/* Input fields */}
                        <TextInput
                            name='email'
                            leftIconName='email'
                            placeholder='Enter email'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            autoFocus={true}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')} rightIcon={undefined} handlePasswordVisibility={undefined} />
                        <FormErrorMessage error={errors.email} visible={touched.email} />
                        <TextInput
                            name='password'
                            leftIconName='key-variant'
                            placeholder='Enter password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={passwordVisibility}
                            textContentType='newPassword'
                            rightIcon={rightIcon}
                            handlePasswordVisibility={handlePasswordVisibility}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        <FormErrorMessage
                            error={errors.password}
                            visible={touched.password}
                        />
                        <TextInput
                            name='confirmPassword'
                            leftIconName='key-variant'
                            placeholder='Enter password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={confirmPasswordVisibility}
                            textContentType='password'
                            rightIcon={confirmPasswordIcon}
                            handlePasswordVisibility={handleConfirmPasswordVisibility}
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                        />
                        <FormErrorMessage
                            error={errors.confirmPassword}
                            visible={touched.confirmPassword}
                        />
                        {/* Display Screen Error Mesages */}
                        {errorState !== '' ? (
                            <FormErrorMessage error={errorState} visible={true} />
                        ) : null}
                        {/* Signup button */}
                        <View style={{
                            height: 40, width: '100%',
                            backgroundColor: Colors.accentBG,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: Colors.accentBG,
                            borderStyle: 'solid',
                            borderWidth: 5,
                            marginVertical: 10,
                            borderRadius: 10
                        }}>

                            <ButtonStd style={styles.button}
                                onPress={handleSubmit} title={undefined}
                                iconL={undefined} iconR={undefined}
                                label={"S'enregistrer"} labelColor={Colors.primaryText}
                                onChange={undefined} bgButton={Colors.accentBG} />
                        </View>

                    </>
                )}
            </Formik>
        )
    }

    const buttonPasswordForget = () => {
        return (
            <View style={[styles.columnContainer, {// SignUP & Forgot
                width: '100%',
                paddingHorizontal: 0,
                marginHorizontal: '0%',
                alignItems: 'center',
                minHeight: 140,
                flexDirection: 'column',
                justifyContent: 'space-between'
            }]}  >

                {/* <ButtonStd iconR={undefined} //SignUpScreen
                    label={'Créer votre compte?'}
                    onPress={() => {
                        // goTo('SignUpScreen', undefined, undefined)
                        //all08112023 console.log ("379 navigation.navigate('SignUpScreen')")
                        navigation.navigate('SignUpScreen');

                        // setdebuteunefois(2)
                        // setCurrentScreen('SignUpScreen')
                    }}
                    onChange={undefined} bgButton={Colors.accentBG} labelColor={Colors.primaryText} icon1={undefined} iconL={undefined} /> */}
                {/* <ModalSignUp /> */}

                {/* <ButtonStd iconR={undefined} //Forgot Password
                    style={{
                        borderColor: '#white',
                        borderStyle: 'solid',
                        // borderWidth: widthBorder,
                    }}
                    label={'Mot de passe oublié'}
                    onPress={() => console.log(" navigation.navigate('ForgotPasswordScreen')")}
                    onChange={undefined} bgButton={Colors.accentBG} labelColor={Colors.primaryText} icon1={undefined} iconL={undefined} /> */}

            </View>
        )
    }
    function thisPromptAsync() {
        promptAsync()

        console.log("promptAsync GoogleSignIn Web commande ", 'commande')

        // if(commande?.remise >0 && remiseObtenue==0){
        //     console.log("setRemiseObtenue(commande.remise)")
        //     setRemiseObtenue(commande?.remise)
        //   }else{
        //     console.log("(commande???.remise)", commande)
        //   }

    }

    return (
        // <Text style={{ color: 'white' }}> Sign in Screen</Text>
        <View style={{

            // borderColor: 'green',
            // borderWidth: 5,
            // borderStyle: 'solid',
            paddingHorizontal : 10,
            minHeight: 40,
            width: MAXWIDTH,
            maxWidth: '100%',
            position: 'absolute',
            backgroundColor: 'transparent',
            flexDirection: 'column'
        }}>

            {
                auth ?
                    <View style=
                        {
                            { // total screen

                                height: '100%',
                                width: myWidth,
                                //   maxWidth: myWidth * .96,
                                maxWidth: '100%',

                                marginHorizontal: 'auto',
                                // borderColor: 'blue',
                                // borderWidth: 5,
                                // borderStyle: 'solid',
                                backgroundColor: Colors.primaryBG,
                                marginVertical: 10,
                                paddingVertical: 0,
                            }}
                    >
                        <PhoneSignIn />

                        {Platform.OS != "web" ?
                            <>

                                <AuthSessionSignIn
                                // navigation={undefined} routeParams={undefined}
                                // route={undefined} commande={commande}
                                //  routeParams={routeParams} route={route} 
                                />
                            </>

                            :

                            <View style={{
                                borderColor: Colors.accentBG,
                                borderStyle: 'solid',
                                borderWidth: 5,
                                borderRadius: 10,
                                padding: 3,
                                marginVertical: 30,
                                backgroundColor: Colors.accentBG
                            }}>

                                <ButtonStd
                                    iconL={iconGoogle}
                                    iconR={undefined}
                                    label={' Par Google-Web'}
                                    labelColor={Colors.primaryText}
                                    onPress={() => thisPromptAsync()}
                                    onChange={undefined}
                                    bgButton={Colors.accentBG}
                                />
                            </View>

                        }

                        {formikSignInVisible && thisFormikSignIn()}

                        {!formikSignInVisible &&

                            thisFormikSignUp()
                        }

                        {formikSignInVisible &&
                            <View style={{
                                height: 40, width: '100%',
                                backgroundColor: Colors.accentBG,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: Colors.accentBG,
                                borderStyle: 'solid',
                                borderWidth: 5,
                            }}>
                                <ButtonStd iconL={undefined} iconR={undefined}
                                    label={'Créer un Compte'} labelColor={Colors.primaryText}
                                    onPress={() => setFormikSignInVisible(false)}
                                    onChange={undefined} bgButton={Colors.accentBG}
                                />
                            </View>

                        }

                        {!formikSignInVisible &&

                            <View style={{
                                height: 40, width: '100%',
                                backgroundColor: Colors.accentBG,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: Colors.accentBG,
                                borderStyle: 'solid',
                                borderWidth: 5,
                            }}>
                                <ButtonStd iconL={undefined} iconR={undefined}
                                    label={'Compte déjà enregistré'} labelColor={Colors.primaryText}
                                    onPress={() => setFormikSignInVisible(true)}
                                    onChange={undefined} bgButton={Colors.accentBG}
                                />
                            </View>
                        }

                        {buttonPasswordForget()}


                    </View>
                    :
                    <View style={{
                        top: 20
                    }}>
                        {/* {showPanierViewModal && showPanierViewModal()} */}
                        <Text>
                            showpanier ?
                        </Text>
                    </View>
            }
        </View >
    );
};

export default SignInComp