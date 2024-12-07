
import React, { useRef, useContext, useEffect, useState } from 'react';
import { Modal, Text, Pressable, View, TextInput, StyleSheet, ScrollView, SafeAreaView, Button } from "react-native";
import Feather from "react-native-vector-icons/Feather";
// import CallCA from "./CallCA";
// import { Colors, iconBack, iconBasket, iconClose, iconEmail, iconEuro, iconInfo, iconMachineCB, iconUser, starHalf } from "../config";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { A } from "@expo/html-elements";

// import FactureComp from "./FactureComp";

// import { AuthenticatedUserContext } from '../providers';
// import { thisDevice } from '../hooks';
// import RenderEachAricle from './RenderEachArticle';
// import { getPanierQteNonNull, reduceCdeToUniqueList, sortObjectsDescent, thisClone } from './DataService';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ThisDevice from '@/constants/ThisDevice';
import { myStyles } from '../myStyle';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import FlatListScrollPanier from './FlatListScrollPanier';
import { Colors } from '@/constants/Colors';

import { ThemedTitle } from '../ThemedTitle';
import { signOut } from 'firebase/auth';
import { useAuth } from '../AuthContext';
import { myApp } from '@/constants/firebaseConfig';
import ModalModel from '../ModalModel';
import ModalSignIn from '../GestionUser/ModalSignIn';

function ModalPaniee({ cart, addToCart, removeFromCart, navigation, route, showPanierViewModal, scrollY0, scrollX0, commande }) {
    // ce modal appelle FlatListScrollPanier
    const thisAuth = useAuth

    const auth = myApp[1]

    const MAXWIDTH = ThisDevice().device.myMAXWIDTH
    const widthMobile = 650
    const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

    const [currentUserEmail, setCurrentUserEmail] = useState('')

    const [idxScrollTo, setIdxScrollTo] = useState(null)
    const flatListRef = useRef();

    const [totalAPayer, setTotalAPayer] = useState(0)

    const styles20 = ThisDevice().styles0

    const styles = myStyles

    const [modalPanierVisible, setModalPanierVisible] = useState(false);

    const device = ThisDevice().device
    const [value, setValue] = useState({
        email: ' ',
        name: ' ',
        date: ' ',
        plat: '',
        // phone: "",
        details: "",
        error: "",
    });


    useEffect(() => {
        console.log("ModalPanier useEffect cart ", cart)
    }, [cart])

    useEffect(() => {
        //all console.log(" scrollY ",  scrollY)
    }, [scrollY])


    useEffect(() => {
        console.log(" myApp ", myApp)
    }, [myApp])


    useEffect(() => {
        console.log(" thisAuth ", thisAuth)
    }, [thisAuth])

    useEffect(() => {
        console.log(" auth 80 ", auth)

        console.log("auth81?.currentUSer ===null   ???  ':',, auth.currentUSer  ", auth.currentUSer == null, ':', auth.currentUser)
        if (auth && auth.currentUser) { setCurrentUserEmail(auth.currentUser.email) }
        console.log(" auth.user 84 ", auth.user)
    }, [])
    useEffect(() => {
        console.log(" auth 87 ", auth)
        console.log(" auth.currentUSer 88 ", auth.currentUser)
        if (auth && auth.currentUser) { setCurrentUserEmail(auth.currentUser.email) }
        console.log(" auth.user 90 ", auth.user)
    }, [auth])

    // useEffect(() => {
    //     console.log(" commande ", commande)
    // }, [commande])



    const styles0 = StyleSheet.create({
        containerPage: {
            height: device?.height,
            width: device?.width,
            display: 'flex',
            backgroundColor: '#821e1e',
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            maxWidth: '100%',
            borderStyle: 'solid',
            padding: 10
        },
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
        },
        header: {
            // width: device?.width,
            // height: device?.header,
            // backgroundColor: "#821e1e"
        },
        panierText: {
            color: 'red'
        },
        containerBody: {
            width: device?.width,
            maxWidth: '100%',
            height: device?.heightBody,
            backgroundColor: "#a13737",
        },
        footer: {
            width: device?.width,
            height: 70, // + Tab = (70) = 140
            backgroundColor: "lightgrey",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        ModalModelButton: {
            width: 300,
            height: 50,
            display: 'flex',
            alignSelf: 'flex-end',
            justifyContent: 'flex-start',
            borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
        },
        Button50: {
            // width: 50,
            // height: 50,
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
        }
    })

    const openModalPanier = () => {
        return (
            <Pressable // button open Modal
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center', alignItems: 'center',
                    borderWidth: 5, borderColor: 'blue', borderStyle: 'solid',
                }}
                onPress={() => {
                    setModalPanierVisible(true)

                }

                }
            >
                <ThemedText>{cart?.length} </ThemedText>


            </Pressable>
        )
    }
    const gAuth: any = null

    // Fonction de déconnexion (log out)
    const handleLogout = () => {
        console.log("handleLogout")
        signOut(auth)
            .then(() => {
                // Le logout a réussi
                console.log("Utilisateur déconnecté avec succès.");
                // Vous pouvez rediriger ou mettre à jour l'UI ici
                // navigation.navigate('Login'); // Rediriger vers la page de connexion
            })
            .catch((error) => {
                // Gérer les erreurs de déconnexion
                console.error("Erreur lors de la déconnexion : ", error);
            });
    };

    return ( //global

        <View style={{
            width: '100%', // 50
            height: '100%', // 50
            minWidth: 50,
            minHeight: 50
        }}>

            {/* <AnalyticsTracker pageView={'ModalSignIn'} /> */}

            {openModalPanier()}

            <Modal // Modal-in
                animationType="slide" transparent={true} visible={modalPanierVisible}>

                <ThemedView style={{ //cadre principal modal
                    borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
                    backgroundColor: 'grey',
                    height: device.height,
                    width: MAXWIDTH,
                }}
                >
                    <View style={styles0.ModalModelButton}>
                        {auth.currentUSer == null ?
                            <ModalSignIn myImage={'image'} /> //non connecté
                            :
                            // <Text> Connecté</Text>

                            <View style={styles0.Button50}>
                                {/* <ButtonStd iconL={undefined} iconR={undefined}
                                        label={'log out'} labelColor={undefined}
                                        onPress={() => {handleLogout()}} onChange={undefined} bgButton={"coral"}
                                    /> 
                                */}
                                <Text style={{ color: 'white' }}> Connecté 227</Text>
                            </View>

                        }
                    </View>

                    <ThemedView style={{
                        backgroundColor: 'coral',// Colors.primaryBG,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }}>
                        <ThemedTitle style={{ fontSize: 30 }}> Modal Panier</ThemedTitle>

                        <Pressable onPress={() => { setModalPanierVisible(false) }}>
                            <ThemedText>X</ThemedText>
                        </Pressable>

                    </ThemedView>
                    {/* <ModalSignIn setModalPanierVisible = {setModalPanierVisible } cart={undefined} addToCart={undefined} removeFromCart={undefined} navigation={undefined} route={undefined} showPanierViewModal={undefined} scrollY0={undefined} scrollX0={undefined} commande={undefined} />  */}

                    <FlatListScrollPanier
                        articlesListTemp={undefined} PlatsToShowFilteredTemp={cart}
                        menuN={undefined} menuNImg={undefined}
                        pdjType={undefined} navigation={undefined}
                        callbackFn={undefined} route={undefined}
                        addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
                </ThemedView>


            </Modal>
        </View>
    );
}

export default ModalPaniee;