
import { UserType } from '@/app/models/UserType';
import ThisDevice from '@/constants/ThisDevice';
import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useContext, useState, useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, SafeAreaView, Pressable } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import { ToasterContainer } from '../ToasterContainer';
import { iconEmail, iconSmartphone, iconSmartphoneneeded, iconStreetView } from '@/icons';
import { Colors } from '@/constants/Colors';
import ButtonStd from '../ButtonTypeStd';
import { myStyles } from '../myStyle';
import { useAuth } from '@/app/AuthContext';



let thisCurrentUser : UserType | null | undefined 


const yellow2 = '#ffe38d'
const white = "#fff"
const black = '#000'

export const EditUser = ({  }) => {
    const device = ThisDevice().device
    // console.log("device ", device)
    // const {


    //     user, setUser,
    //     viewModal, setViewModal,
    //     currentUserEmail, setCurrentUserEmail,
    //     currentUserEmailNew, setCurrentUserEmailNew,
    //     userInfo, setUserInfo,
    //     articlesList,
    //     setArticlesList,
    //     currentMenuN, setcurrentMenuN,
    //     newArticlesList, setNewArticlesList,
    //     panier, setPanier,
    //     panierQte, setPanierQte,
    //     // callPanier,setcallPanier,
    //     panierView, setpanierView,
    //     isLoading, setIsLoading,
    //     totalPanier, setTotalPanier,
    //     currentPdjType, setCurrentPdjType,
    //     myDaysList, setMyDaysList,
    //     currentUser, setCurrentUser,
    //     cdeEnCours, setCdeEnCours,
    //     cdeEnCoursAllEmail, setCdeEnCoursAllEmail,

    //     currentCdeEnCours, setCurrentCdeEnCours,
    //     cdeEnCoursList, setCdeEnCoursList,
    //     currentScreen, setCurrentScreen,
    //     filteredDataSource, setFilteredDataSource,
    //     masterDataSource, setMasterDataSource,
    //     search, setSearch,
    //     searchAble, setSearchAble,
    //     MyModalPageVisible, setMyModalPageVisible,
    //     PlatsToShowFiltered, setPlatsToShowFiltered,
    //     PlatsToShowFilteredPanier, setPlatsToShowFilteredPanier,
    //     gAuth, setGAuth,
    //     stateBar, setstateBar,
    //     todayfr10, setTodayfr10,
    //     articlesListByCat, setArticlesListByCat,
    //     monthDocStr, setMonthDocStr,
    //     dayDocStr, setDayDocStr,
    //     pdjTypeList, setPdjTypeList,
    //     scrollTo, setscrollTo,
    //     allCdeEnCours, setallCdeEnCours,
    //     categoryName, setcategoryName,
    //     categoryIcon, setcategoryIcon,
    //     modalSignInVisiblePublic, setModalSignInVisiblePublic,
    //     promoAccordN, setPromoAccordN,
    //     categoryNameList, setcategoryNameList,
    //     categoryIconList, setcategoryIconList,
    //     categoryDetail, setcategoryDetail,
    //     currentcategoryNameAndIcon, setcurrentcategoryNameAndIcon,
    //     dateFact, setdateFact,
    //     showPanierForbidden, setShowPanierforbidden,
    //     phoneKnown, setPhoneKnown,
    //     notConnected

    // } = useContext(AuthenticatedUserContext);

    const {currentUser}=useAuth()
    const styles = myStyles

    const MAXWIDTH = ThisDevice().device.width - 5
    const styles0 = ThisDevice().styles0

    const iconVisitor = <MaterialIcons name="flight-takeoff" size={48} color={Colors.highlightBG} />
    const iconHome = <MaterialCommunityIcons name="home" size={48} color={Colors.highlightBG} />
    const iconInfo = <FontAwesome5 name="info-circle" size={48} color={Colors.highlightBG} />
    const iconClock = <Feather name="clock" size={48} color={Colors.highlightBG} />
    const iconClose = <AntDesign name="closecircle" size={24} color="red" />
    const iconCheck = <FontAwesome name="check" size={24} color={Colors.accentText} backgroundColor={Colors.accentBG} />

    const buttonTrigger = useRef(null);
    const [newEmailValid, setNewEmailValid] = useState(false)
    const [errorInput, setErrorInput] = useState('')
    const [resultCheckNewUser, setResultCheckNewUser] = useState(false)
    const [editorhasChanged, seteditorhasChanged] = useState(false)
    const [phoneKnown, setPhoneKnown] = useState(false)
    // const [currentUser, setCurrentUser] = useState(new UserType())

    const numericRegex = /^[0-9]+$/;
    const alphanumericRegex = /^[@.,a-zA-Z0-9 \s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const [userEdit, setUserEdit] = useState({
        name: "",
        email: "",
        phonehand: "",
        adresse: "",
        postalCode: '',
        ville: "",
    });
    // useEffect(() => {
    //     console.log("currentScreen = ", currentScreen)
    //     console.log("phoneKnown = ", phoneKnown)
    // }, [])
 

    function switchBackToPanier() {
        // setShowPanierforbidden(false) 

        setPhoneKnown(true)
        console.log(" phoneKnown" , phoneKnown)
    }

    function goBackFn(_currentUser:any) {
        console.log("goBackFn142 == ArticleScreen ", currentScreen,"_currentUser.goBackFn140?.length ", _currentUser.phonehand?.length, "panierView == panierView", panierView == panierView)

        if (_currentUser.phonehand?.length == 10) {
            console.log('goBackFn145 goBackFn140 = ', _currentUser.phonehand)
            if (currentScreen == 'HomeScreen' 
                // && panierView
            ) {
                console.log('goBackFn147 ')
                setPhoneKnown(true)
                // cas principal : venant de 'ArticleScreen avec avec PanierView
                // -> phoneKnown retour automatique
            } else {
                // cas appelé par tabs profile
                // setTimeout(async () => {
                console.log('goBackFn154 currentScreen, panierView = ', currentScreen, panierView)
                const thisParams = {
                    articlesList: articlesList,
                    articlesListByCat: articlesListByCat,
                    categoryNameList: categoryNameList,

                    panierQte: panierQte ? panierQte : []
                }

                // console.log('goBackFn155')
                // console.log('845thisParams ', thisParams)
                // setpanierView(false)
                navigation.navigate('HomeScreen', {

                    thisParams: thisParams

                });

            }
        } else {
            console.log("phonehand.length, phoneKnown = ", _currentUser.phonehand.length, ':', _currentUser.phonehand)
            setPhoneKnown(false)
            Toaster.error('10 DIGIT')
            setErrorInput("PHONE incorrect ")
            setTimeout(() => {
                setErrorInput('')
                // setUserEdit({ ...userEdit, email: '' }) //reset to inittial value
            }, 2000);
        }

    }
    function getPhoneKnown(_currentUser:any) {
        console.log("171getPhoneKnown ", _currentUser)

        // console.log("getPhoneKnown ",_currentUser, _currentUser.phonehand.lzngth)
        // console.log("174getPhoneKnown = ", phoneKnown)
        setTimeout(() => {
            console.log("getPhoneKnown+++ ", _currentUser.phonehand?.length)
            // console.log("getPhoneKnown+++= ", phoneKnown, ':', _currentUser.phonehand.length)
        }, 1000);
        return _currentUser.phonehand?.length
    }
    function handleEmailChange(email:any) {
        seteditorhasChanged(true)
        console.log("168alphanumericRegex / email : |", email.trim(), '|', alphanumericRegex.test(email))
        // console.log("169alphanumericRegex / email : ",email,alphanumericRegex.test('email#'))

        if (alphanumericRegex.test(email)) {
            console.log('172Saisie alphanumérique', 'La saisie est alphanumérique.');
            setUserEdit({ ...userEdit, email: email.trim() })
        } else {
            // window.alert('pas de caractères spéciaux, merci')
            setErrorInput('e-mail ou Tel Parrain Incorrect')
            // console.log('Saisie Email : erreur', 'La saisie n\'est pas de forme Email.');
            setTimeout(() => {
                setErrorInput('')
                setUserEdit({ ...userEdit, email: '' }) //reset to inittial value
            }, 2000);
        }

    }
    function handleAlphaNumeriqueChangeModel(code:any) {
        seteditorhasChanged(true)
        console.log("188alphanumericRegex / email : ", code, numericRegex.test(code))
        // console.log("169alphanumericRegex / email : ",email,alphanumericRegex.test('email#'))

        if (numericRegex.test(code)) {
            console.log('172Saisie alphanumérique', 'La saisie est alphanumérique.');
            //   setUserEdit({ ...userEdit, codeField: code })
        } else {
            // window.alert('pas de caractères spéciaux, merci')
            setErrorInput('code Incorrect')
            // console.log('Saisie non alphanumérique', 'La saisie n\'est pas alphanumérique.');
            setTimeout(() => {
                setErrorInput('')
                // setUserEdit({ ...userEdit, codeField: '' }) //reset to inittial value
            }, 2000);
        }

    }
    function handleAlphaNumeriqueChange(field:any, value:any) {
        seteditorhasChanged(true)
        console.log("188alphanumericRegex / email : ", value, numericRegex.test(value))
        // console.log("169alphanumericRegex / email : ",email,alphanumericRegex.test('email#'))

        if (numericRegex.test(value)) {
            console.log('172Saisie alphanumérique', 'La saisie est alphanumérique.');
            setUserEdit({ ...userEdit, [field]: value })
        } else {
            // window.alert('pas de caractères spéciaux, merci')
            setErrorInput('value  Incorrect')
            // console.log('Saisie non alphanumérique', 'La saisie n\'est pas alphanumérique.');
            setTimeout(() => {
                setErrorInput('')
                setUserEdit({ ...userEdit, [field]: '' }) //reset to inittial value
            }, 2000);
        }

    }

    function handlephonehandChange(phoneNumberField:any, phoneNumber:any) {

        seteditorhasChanged(true)
        // console.log("169alphanumericRegex / email : ",email,alphanumericRegex.test('email#'))

        if (numericRegex.test(phoneNumber)) {
            // console.log('172Saisie phoneNumber', 'La saisie est alphanumérique.');
            if (phoneNumber.length == 10) {
                console.log("252phoneNumber  : ", phoneNumber.length, phoneNumber, numericRegex.test(phoneNumber))
                setUserEdit({ ...userEdit, [phoneNumberField]: phoneNumber })

            } else {
                console.log("256 lphanumericRegex / email : ", phoneNumber.length, phoneNumber, numericRegex.test(phoneNumber))
                setUserEdit({ ...userEdit, [phoneNumberField]: phoneNumber })
                setErrorInput('phone Incorrect')
                setTimeout(() => {
                    setErrorInput('')
                }, 2000);
            }
        } else {
            // window.alert('pas de caractères spéciaux, merci')
            setErrorInput('phoneNumber Incorrect')
            console.log('Saisie non alphanumérique', 'La saisie n\'est pas alphanumérique.');
            setTimeout(() => {
                setErrorInput('code Incorrect')
                setUserEdit({ ...userEdit, [phoneNumberField]: '' }) //reset to inittial value
            }, 2000);
        }

    }

    // const alphanumericRegex = /^[@.a-zA-Z0-9 \s]+$/;

    function handleAdresseChange(adresseField:any, adresse:any) {

        seteditorhasChanged(true)
        console.log("188alphanumericRegex / email : ", adresse, alphanumericRegex.test(adresse))

        if (alphanumericRegex.test(adresse)) {
            console.log('172Saisie alphanumérique', 'La saisie est alphanumérique.');
            setUserEdit({ ...userEdit, [adresseField]: adresse })
        } else {
            // window.alert('pas de caractères spéciaux, merci')
            setErrorInput('adresse Incorrect')
            console.log('Saisie non alphanumérique', 'La saisie n\'est pas alphanumérique.');
            setTimeout(() => {
                setErrorInput('')
                setUserEdit({ ...userEdit, [adresseField]: '' }) //reset to inittial value
            }, 2000);
        }

    }
    // let userEditTemp = thisClone(currentUser)


    function handlepostalCodeChange(postalCodeField:any, postalCode:any) {

        seteditorhasChanged(true)
        console.log("188alphanumericRegex / email : ", postalCode, numericRegex.test(postalCode))
        // console.log("169alphanumericRegex / email : ",email,alphanumericRegex.test('email#'))

        if (numericRegex.test(postalCode)) {
            console.log('172Saisie alphanumérique', 'La saisie est alphanumérique.');
            setUserEdit({ ...userEdit, [postalCodeField]: postalCode })
        } else {
            // window.alert('pas de caractères spéciaux, merci')
            setErrorInput('postalCode Incorrect')
            console.log('Saisie non alphanumérique', 'La saisie n\'est pas alphanumérique.');
            setTimeout(() => {
                setErrorInput('')
                setUserEdit({ ...userEdit, [postalCodeField]: '' }) //reset to inittial value
            }, 2000);
        }

    }
    function handlevilleChange(villeField:any, ville:any) {

        seteditorhasChanged(true)
        console.log("188alphanumericRegex / email : ", ville, alphanumericRegex.test(ville))

        if (alphanumericRegex.test(ville)) {
            console.log('172Saisie alphanumérique', 'La saisie est alphanumérique.');
            setUserEdit({ ...userEdit, [villeField]: ville })
        } else {
            // window.alert('pas de caractères spéciaux, merci')
            setErrorInput('ville Incorrect')
            console.log('Saisie non alphanumérique', 'La saisie n\'est pas alphanumérique.');
            setTimeout(() => {
                setErrorInput('')
                setUserEdit({ ...userEdit, [villeField]: '' }) //reset to inittial value
            }, 2000);
        }

    }

    useEffect(() => {
        console.log("currentUser = ", currentUser)
    }, [currentUser])

    useEffect(() => {
        console.log("349currentUser/ userEdit =+++++++++++ ", userEdit)
        getPhoneKnown(userEdit)
    }, [userEdit])

    useEffect(() => {
        console.log("phoneKnown useEffect", phoneKnown)
    }, [phoneKnown])

    async function updateUser(currentUser:any) {
        seteditorhasChanged(false)
        console.log(249, "updateUser ", currentUser, currentUser.phonehand.length)

        if (currentUser) {
            currentUser.email = currentUserEmail
            console.log("189 updateItemFieldModel:  currentUser, currentUserEmail =", currentUser, currentUserEmail)


            //all0810 console.log("updateItemFieldModel: currentUser?.codePromo, currentUser =", currentUser?.codePromo, currentUser, currentUser?.email)
            if (currentUser && currentUser?.commande) {

                currentUser.commande = await createObjectFromModel(currentUser?.commande ? currentUser?.commande : [])

            }
            let thisCollectionStr = "shoppinUsers";
            let thisDocId = currentUserEmail
            let thisField = "codePromo";
            let ObjectModel = currentUser;

            console.log("updateItemModel", updateItemModel)
            updateItemModel(thisCollectionStr, createObjectFromModel(currentUser), thisDocId)
                .then(res => {
                    Toaster.success('This is success message')
                    // setErrorInput("updateItemModel =" + res)
                    console.log("287 res updateItemModel", res)
                    // setTimeout(() => {
                    //     setErrorInput('')
                    //     // setUserEdit({ ...userEdit, email: '' }) //reset to inittial value
                    // }, 2000);
                })
            // }, 1000);
            setCurrentUser(currentUser)

            console.log(293, "setCurrentScreen('HomeScreen')")
            // setCurrentScreen('HomeScreen')

        } else {
            console.log(293, "no currentUser", currentUser)
            // setCurrentScreen('SignInScreen')
        }
    }
  
    // useEffect(() => {
    //     if (thisCurrentUser) {
    //     // console.log("237 currentUser/ thisCurrentUser =+++++++++++ ", thisCurrentUser)
    //     setUserEdit(thisCurrentUser)
    //     setIsLoading(false)
    //     // }
    // }, [thisCurrentUser])
 
    const warningToaster = () => { //success Toaster
        return (
            <View
                style={
                    // styles.container
                    { height: 50 }
                }
            >
                <ToasterContainer />
                <TouchableOpacity
                    style={styles.button}

                    // onFocus={() => Toaster.error('This is error message')}
                    // onLayout={() => Toaster.error('This is error message')}
                    // onPress={() => Toaster.error('This is error message')}


                    onPress={() => ToasterContainer?.success('This is success message')}
                >
                    {/* <Text style={{ color: Colors.primaryText }}>Show me error message</Text> */}
                </TouchableOpacity>
            </View>
        )

    }

    const email = () => {
        return (
            <View //email bénéficaire = Container
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: MAXWIDTH,
                    maxWidth: '100%',
                    marginHorizontal: 0,
                    height: 40,
                    // borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
                }}>

                <Text style={{//icon Left
                    width: 40,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                }}>
                    {iconEmail}
                    {/* <ImageIconViewer placeholderImageSource={'iconEmail'} /> */}
                </Text>
                <View style={{// email  value
                    width: '100%',
                    flex: 1,
                    margin: 0,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'turquoise', borderStyle: 'solid'
                }}>
                    <TextInput
                        placeholder="E-mail "
                        value={userEdit?.email}
                        style={{
                            backgroundColor: Colors.primaryBG,
                            textDecorationLine: 'underline',
                            paddingHorizontal: 0,
                            color: Colors.primaryText,
                            height: '100%',
                            maxHeight: '100%',
                            margin: 0,
                            width: '100%',
                            // flex: 1,
                            // maxWidth: '50%',
                            // display: 'fles', 
                            verticalAlign: 'middle',
                            justifyContent: 'center',
                            alignItems: 'center',

                            // borderBottomWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                            // borderWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                        }}
                        onChangeText={(email) => {
                            handleEmailChange(email)
                        }}

                    // leftIconName={undefined}
                    // rightIcon={undefined}
                    // handlePasswordVisibility={undefined}
                    />
                </View>
                <Text style={{//icon close
                    width: 40,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                }}>
                    <Pressable onPress={() => { setUserEdit({ ...userEdit, email: '' }) }}>

                        {iconClose}
                        {/* <ImageIconViewer placeholderImageSource={'iconClose'} /> */}

                    </Pressable>
                </Text>

            </View>
        )
    }
    const adresse = () => {
        return (
            <View //adresse bénéficaire = Container
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    width: MAXWIDTH,
                    maxWidth: '100%',
                    marginHorizontal: 0,
                    height: 40,
                    // borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
                }}>


                <Text style={{//icon Left
                    width: 40,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                }}>
                    {iconStreetView}
                    {/* <ImageIconViewer placeholderImageSource={'iconadresse'} /> */}
                </Text>
                <View style={{// adresse  value
                    width: '100%',
                    flex: 1,
                    margin: 0,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'turquoise', borderStyle: 'solid'
                }}>
                    <TextInput
                        placeholder="num et nom de votre rue "
                        value={userEdit?.adresse}
                        style={{
                            backgroundColor: Colors.primaryBG,
                            textDecorationLine: 'underline',
                            paddingHorizontal: 0,
                            color: Colors.primaryText,
                            height: '100%',
                            maxHeight: '100%',
                            margin: 0,
                            width: '100%',
                            // flex: 1,
                            // maxWidth: '50%',
                            // display: 'fles', 
                            justifyContent: 'center',
                            alignItems: 'flex-end',

                            // borderBottomWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                        }}
                        onChangeText={(adresse) => {
                            handleAdresseChange('adresse', adresse)
                        }}

                    // leftIconName={undefined}
                    // rightIcon={undefined}
                    // handlePasswordVisibility={undefined}
                    />
                </View>
                <Text style={{//icon close
                    width: 40,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                }}>
                    <Pressable onPress={() => { setUserEdit({ ...userEdit, adresse: '' }) }}>

                        {iconClose}
                        {/* <ImageIconViewer placeholderImageSource={'iconClose'} /> */}

                    </Pressable>
                </Text>

            </View>
        )
    }

    const phonehand = () => {
        return (
            <View //phonehand bénéficaire = Container
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: MAXWIDTH,
                    maxWidth: '100%',
                    marginHorizontal: 0,
                    height: 40,
                    // borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
                }}>


                <Text style={{//icon Left
                    width: 40,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                }}>
                    {getPhoneKnown(currentUser) ? iconSmartphone : iconSmartphoneneeded}
                    {/* <ImageIconViewer placeholderImageSource={'iconphonehand'} /> */}
                </Text>
                <View style={{// phonehand  value
                    width: '100%',
                    flex: 1,
                    margin: 0,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'turquoise', borderStyle: 'solid'
                }}>
                    <TextInput
                        placeholder="phonehand ? "
                        value={userEdit?.phonehand}
                        style={{
                            backgroundColor: Colors.primaryBG,
                            textDecorationLine: 'underline',
                            paddingHorizontal: 0,
                            color: Colors.primaryText,
                            height: '100%',
                            maxHeight: '100%',
                            margin: 0,
                            width: '100%',
                            // flex: 1,
                            // maxWidth: '50%',
                            // display: 'fles', 
                            verticalAlign: 'middle',
                            justifyContent: 'center',
                            alignItems: 'center',

                            // borderBottomWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                            // borderWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                        }}
                        onChangeText={(phonehand) => {
                            handlephonehandChange('phonehand', phonehand)
                        }}

                    // leftIconName={undefined}
                    // rightIcon={undefined}
                    // handlePasswordVisibility={undefined}
                    />
                </View>
                <Text style={{//icon close
                    width: 40,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                }}>
                    <Pressable onPress={() => { setUserEdit({ ...userEdit, phonehand: '' }) }}>

                        {iconClose}
                        {/* <ImageIconViewer placeholderImageSource={'iconClose'} /> */}

                    </Pressable>
                </Text>

            </View>
        )
    }

    const postalCode = () => {
        return (
            <View //postalCode bénéficaire = Container
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: MAXWIDTH,
                    maxWidth: '37%',
                    marginHorizontal: 0,
                    height: 40,
                    // borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
                }}>

                <Text style={{//icon Left
                    width: 40,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    color: Colors.primaryText
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                }}>
                    CP
                </Text>
                <View style={{// postalCode  value
                    width: '100%',
                    flex: 1,
                    margin: 0,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'turquoise', borderStyle: 'solid'
                }}>
                    <TextInput
                        placeholder="postalCode ? "
                        value={userEdit?.postalCode}
                        style={{
                            backgroundColor: Colors.primaryBG,
                            textDecorationLine: 'underline',
                            paddingHorizontal: 0,
                            color: Colors.primaryText,
                            height: '100%',
                            maxHeight: '100%',
                            margin: 0,
                            width: '100%',
                            // flex: 1,
                            // maxWidth: '50%',
                            // display: 'fles', 
                            verticalAlign: 'middle',
                            justifyContent: 'center',
                            alignItems: 'center',

                            // borderBottomWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                            // borderWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                        }}
                        onChangeText={(postalCode) => {
                            handlepostalCodeChange('postalCode', postalCode)
                        }}

                    // leftIconName={undefined}
                    // rightIcon={undefined}
                    // handlePasswordVisibility={undefined}
                    />
                </View>
                <Text style={{//icon close
                    width: 40,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                }}>
                    <Pressable onPress={() => { setUserEdit({ ...userEdit, postalCode: '' }) }}>

                        {iconClose}
                        {/* <ImageIconViewer placeholderImageSource={'iconClose'} /> */}

                    </Pressable>
                </Text>

            </View>
        )
    }
    const ville = () => {
        return (
            <View //ville bénéficaire = Container
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    width: MAXWIDTH,
                    maxWidth: '63%',
                    marginHorizontal: 0,
                    height: 40,
                    // borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
                }}>

                {/* <Text style={{//icon Left
                    width: 40,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    color:Colors.primaryText
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                }}>
                    Ville :
                </Text> */}
                <View style={{// ville  value
                    width: '100%',
                    flex: 1,
                    marginHorizontal: 10,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'turquoise', borderStyle: 'solid'
                }}>
                    <TextInput
                        placeholder="Ville ?"
                        value={userEdit?.ville}

                        style={{
                            backgroundColor: Colors.primaryBG,
                            textDecorationLine: 'underline',
                            paddingHorizontal: 0,
                            color: Colors.primaryText,
                            height: '100%',
                            maxHeight: '100%',
                            margin: 0,
                            width: '100%',
                            // flex: 1,
                            // maxWidth: '50%',
                            // display: 'fles', 
                            verticalAlign: 'middle',
                            justifyContent: 'center',
                            alignItems: 'center',

                            // borderBottomWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                            // borderWidth: 1, borderColor: 'yellow', borderStyle: 'solid',
                        }}
                        onChangeText={(ville) => {
                            handlevilleChange('ville', ville)
                        }}

                    // leftIconName={undefined}
                    // rightIcon={undefined}
                    // handlePasswordVisibility={undefined}
                    />
                </View>
                <Text style={{//icon close
                    width: 40,
                    height: '100%',
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                }}>
                    <Pressable onPress={() => { setUserEdit({ ...userEdit, ville: '' }) }}>

                        {iconClose}
                        {/* <ImageIconViewer placeholderImageSource={'iconClose'} /> */}

                    </Pressable>
                </Text>

            </View>
        )
    }

    const errorInputFn = () => {
        return (
            <View //error input & iconShare
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: MAXWIDTH,
                    maxWidth: '100%',
                    marginHorizontal: 0,
                    marginTop: 10,
                    height: 40,
                    // borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
                }}>

                {errorInput ?
                    <Text
                        style={{//icon Left
                            width: '100%',
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            color: 'red',
                            backgroundColor: Colors.primaryText,
                            // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                        }}


                    >

                        {errorInput}
                        <Pressable onPress={() => { console.log(userEdit) }}

                        />
                    </Text>
                    :
                    <ButtonStd iconL={undefined}
                        iconR={undefined}
                        label={editorhasChanged ? 'Enregistrer' : 'Continuer'}
                        labelColor={Colors.primaryText}
                        onPress={() => { editorhasChanged ? updateUser(userEdit) : goBackFn(userEdit) }}
                        // onPress={() => { editorhasChanged ? updateUser(userEdit) : switchBackToPanier() }}
                        onChange={undefined}
                        bgButton={editorhasChanged ? 'green': Colors.accentBG} />
                    // <Text
                    //     style={{//icon Left
                    //         width: '100%',
                    //         height: 40,
                    //         fontSize: 20,
                    //         justifyContent: 'center',
                    //         alignItems: 'center',
                    //         display: 'flex',
                    //         color: Colors.primaryText,
                    //         backgroundColor: Colors.accentBG,
                    //         borderWidth: 3, 
                    //         borderColor: 'yellow', borderStyle: 'solid',
                    //     }}>
                    //     Envoyer
                    // </Text>
                }

                {/* <View style={{//iconShare
                    width: '10%',
                    backgroundColor: Colors.accentBG,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                }}>
                    {newEmailValid ?
                        <Text style={{ color: 'white', height: '100%', display: 'flex', margin: 10, justifyContent: 'center', alignItems: 'center' }}> {iconCheck}</Text>
                        :
                        <Pressable onPress={() => { checkIfEmailIsNewUser(value) }}>
                            <Text style={{ color: Colors.primaryText, margin: 10 }}>{iconShare} </Text>
                        </Pressable>
                    }

                </View> */}

            </View>
        )
    }
    const contentScrollView = () => {
        return (
            <View style={{
                paddingHorizontal: 0,
                height: '100%',
                minHeight: 200,
                // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                justifyContent: 'flex-start',
                display: 'flex',
            }}>




                {warningToaster() // message toaster
                }

                {email()}
                {phonehand()}
                {adresse()}
                <View style={{
                    // borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                }}>
                    {postalCode()}
                    {ville()}
                </View>
                {errorInputFn()}
                <Text style={{ minHeight: 150, width: '100%' }}></Text>

            </View>
        )
    }

    return (

        <SafeAreaView style=
            {[styles0.containerPage, {
                maxWidth: '100%',
                width: device.width,

                // borderColor: 'white',
                //all24112023 borderStyle: 'solid',
                // borderWidth: 5,

                maxHeight: '100%',
                minHeight: '50%',
                padding: 0,
            }]
            } >


            <button //placer pour trigger click
                style={{
                    width: '100%',
                    borderWidth: 5, borderColor: Colors.highlightBG, borderStyle: 'solid',
                }}
                ref={buttonTrigger}>
            </button>

            <View style=
                {
                    {
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        minHeight: 200,
                        maxWidth: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        // alignItems: 'flex-start',
                        // paddingHorizontal: 20
                        // borderWidth: 5, borderColor: 'green', borderStyle: 'solid',
                    }
                }
            >
                {contentScrollView()}


            </View>


        </SafeAreaView>

        // </View>


    );
};


