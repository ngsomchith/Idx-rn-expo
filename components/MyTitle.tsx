'use dom';
import { useCallback } from 'react';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { H1 } from '@expo/html-elements';
import { myStyles } from './myStyle';
import ThisDevice from '@/constants/ThisDevice';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

// SplashScreen.preventAutoHideAsync();

export default function MyTitle() {

    // const {

    //     user, setUser,
    //     viewModal, setViewModal,
    //     currentUserEmail, setCurrentUserEmail,
    //     currentUserEmailNew, setCurrentUserEmailNew,
    //     userInfo, setUserInfo,
    //     articlesList, setArticlesList,
    //     currentCdeEnCours, setCurrentCdeEnCours,
    //     cdeEnCours, setCdeEnCours,
    //     cdeEnCoursList, setCdeEnCoursList,
    //     filteredDataSource, setFilteredDataSource,
    //     MyModalPageVisible, setMyModalPageVisible,
    //     PlatsToShowFiltered, setPlatsToShowFiltered,
    //     PlatsToShowFilteredPanier, setPlatsToShowFilteredPanier,

    //     currentMenuN, setcurrentMenuN,
    //     newArticlesList, setNewArticlesList,
    //     panier, setPanier,
    //     panierQte, setPanierQte,
    //     // callPanier,setcallPanier,
    //     panierView, setpanierView,
    //     totalPanier, setTotalPanier,
    //     currentPdjType, setCurrentPdjType,
    //     myDaysList, setMyDaysList,
    //     currentUser, setCurrentUser,
    //     masterDataSource, setMasterDataSource,
    //     search, setSearch,
    //     searchAble, setSearchAble,
    //     gAuth, setGAuth,
    //     currentScreen, setCurrentScreen,
    //     promoOuverture, setpromoOuverture,
    //     stateBar, setstateBar,


    // } = useContext(AuthenticatedUserContext);
    const styles = myStyles


    const device = ThisDevice().device

    const myWidth = device.width
    const myHeight = device.height * 1.3
    const myCoeffScreen = myWidth / myHeight

    const styles0 = ThisDevice().styles0

    // const [isLoading, setIsLoading] = useState(true);
    const FULLWIDTH = ThisDevice().device.width
    const MAXWIDTH1_3 = ThisDevice().device.width / 3

    const MAXWIDTH = myCoeffScreen < 1 ? myWidth : MAXWIDTH1_3
    const NBCOLUMN = myCoeffScreen < 1 ? 1 : 3

    const [fontsLoaded] = useFonts({
        'Babylonica-Regular': require('../assets/fonts/Babylonica-Regular.ttf'),
        'BrushScript': require('../assets/fonts/BrushScript.ttf')
    });

    // let customFonts = {
    //     'Babylonica-Regular': require('@assets/fonts/Babylonica-Regular.ttf')
    //     // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    // };
    // const [fontsLoaded] = useFonts(customFonts)

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync(i);
    //     }
    // }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    // Afficher un indicateur de chargement si les polices ne sont pas encore chargées
    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (//global

        <h1 style={{
            margin: 0,
            width: '75%',
            // borderColor: 'pink',
            // borderWidth: 2,
            // borderStyle: 'solid',
            maxHeight: '100%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        }}>
           
                    <Text style={{
                        fontFamily: 'Babylonica-Regular',
                        fontSize: 44,
                        color: 'white',
                        height: '100%',
                        maxHeight: '100%',
                        display: 'flex',
                        fontWeight: '600',
                        position: 'relative',
                        top: 10,
                    }}>

                        Délicatessen

                    </Text>



                <Text style={{
                    width: MAXWIDTH,
                    height: 60,
                    fontSize: 22,
                    color:'white',
                    // color: Colors.primaryText,
                    fontFamily: 'BrushScript',
                    position: 'absolute',
                    left: 10,
                    top: 65,
                    // borderColor: 'green',
                    // borderWidth: 5,
                    // borderStyle: 'solid',
                }}>
                    Plats Vietnamien et Sushi
                </Text>
        </h1>


        // <ThemedView
        // >
        //     <ThemedText // Délicatessen
        //         type='title'
        //         style={{
        //             maxHeight: '90%',
        //             fontFamily: 'Babylonica-Regular',
        //         }}

        //     >


        //         Délicatessen
        //         <ThemedText type='defaultSemiBold'
        //             style={{
        //                 width: MAXWIDTH,
        //                 height: 60,
        //                 fontSize: 22,
        //                 color: 'white',
        //                 // color: Colors.primaryText,
        //                 fontFamily: 'BrushScript',
        //                 position: 'absolute',
        //                 left: -45,
        //                 top: 65,
        //                 borderColor: 'green',
        //                 borderWidth: 3,
        //                 borderStyle: 'solid',
        //             }}>
        //             Plats Vietnamien et Sushi
        //         </ThemedText>

        //     </ThemedText>



        // </ThemedView>
    )
}