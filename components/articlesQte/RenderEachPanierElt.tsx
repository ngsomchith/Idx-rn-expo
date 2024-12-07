
import { Image, StyleSheet, Platform } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import { Colors, '+', '-', iconSearchPlus, iconBasket, iconClick, iconCadeau, iconBuyAndGift2, iconPromoSushi, iconPromoTradit } from '../config';
import { ArticleType } from '@/app/models/ArticleType';
import { myStyles } from '../myStyle';
import ThisDevice from '@/constants/ThisDevice';
import ImageViewer from '../ImageViewer';
import { Colors } from '@/constants/Colors';
import ButtonStd from '../ButtonTypeStd';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';




const RenderEachPanierElt = ({
    addToCart, removeFromCart,
    thiscategoryName,
    articlesListTemp, PlatsToShowFilteredTemp,
    todayfr10, menuN, menuNImg, idx, pdjType,
    navigation, route, callbackFn,
    scrollY0, scrollX0, updateScrollValue,
    zoomMenuN,
    ...otherprops }) => {


    const myDevice = ThisDevice().device
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH
    const widthMobile = 650
    const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'
    const [scrollXLastVal, setScrollXLastVal] = useState(0)
    const [scrollYLastVal, setScrollYLastVal] = useState(0)
    const iconSearchMinus = <FontAwesome name="search-minus" size={24} color="#821e1e" />
    const [chooseDayTime, setChooseDayTime] = useState(false)
    const [PlatsToShow, setPlatsToShow] = useState(Array<ArticleType>)

    const styles = myStyles
    // const [viewModal, setViewModal] = useState(false)
    const [qte, setQte] = useState(menuN?.qte)
    const [jour, setJour] = useState(menuN?.date ? menuN?.date : 'date ../../..')
    const [thismage, setThisIage] = useState('../assets/imagesArticle/Banh-canh.jpg')



    const invitedEmail = 'udex.invited@gmail.com'

    const myWidth = ThisDevice().MAXWIDTH
    const myHeight = ThisDevice().device.height * 1.3
    const myCoeffScreen = myWidth / myHeight
    //===============================================

    useEffect(() => {
        //all console.log(" scrollYLastVal, scrollXLastVal ",  scrollYLastVal, scrollXLastVal)
    }, [scrollYLastVal, scrollXLastVal])


    useEffect(() => {
        //all console.log(" scrollY0, scrollYLastVal ", scrollY0, scrollYLastVal)
        if (scrollY0 > 0 && (scrollYLastVal == 0
            || scrollY0 != scrollYLastVal
        )) {
            setTimeout(() => {
                updateScrollValue && setScrollYLastVal(scrollY0)
                updateScrollValue && setScrollXLastVal(scrollX0)
                //all console.log("104scrollY0 ==0 ", scrollY0)
            }, 500);
        } else {
            //all console.log(" scrollY0 , scrollYLastVal ?  ", scrollY0, scrollYLastVal)
        }
    }, [scrollY0, scrollX0])



    // function onPlusUn(menuN: any
    //     //, user: any,idx: any, userEmail: string
    // ) {
    //     addToCart(menuN)
    //     setTimeout(() => {
    //         console.log("onPlusUn RenderEachArticleInHome 72 clicked ", menuN.qte, menuN)
    //     }, 1000);
    //     // setQte(menuN.qte)
    // }

    // function onMoinsUn(menuN: any,
    //     // user: any,  idx: any, userEmail: string
    // ) {

    //     removeFromCart(menuN)
    //     console.log("onMoinsUn  RenderEachArticleInHome 81 clicked ", menuN.qte, menuN)
    //     // setQte(menuN.qte)
    // }


    const panierLigne = (menuN: any) => {
        return (
            // <View
            //     style={[
            //         // styles.containerMenuNPdj
            //         ,
            //         {
            //             display: 'flex',
            //             flexDirection: 'row',
            //             // borderStyle: 'solid',
            //             // borderColor: 'green', //menuN.pdjType !='jap' ? 'lightgreen':'transparent',
            //             // borderWidth: 2,
            //             backgroundColor:'grey',
            //             width: MAXWIDTH,
            //             maxWidth: '88%',
            //             marginHorizontal: 'auto',
            //             minHeight: 70,
            //             maxHeight: '100%',
            //             marginVertical: 2,
            //             justifyContent: 'space-between',
            //             overflow: 'hidden',
            //             borderRadius: 10,
            //             borderColor: 'yellow', //menuN.pdjType != 'jap' && menuN.pdjType != 'pdjsja' ? 'lightgreen' : 'white',
            //             borderStyle: 'solid',
            //             borderWidth: 5,
            //         }]}>

            //     <View style={[
            //         // styles.dbRow
            //         , { //name 
            //             maxWidth: '55%',
            //             marginHorizontal: 0,
            //             marginVertical: 0,
            //             paddingHorizontal: 0,
            //             display: 'flex', flexWrap: 'wrap',
            //             // borderColor: menuN.pdjType != 'jap' && menuN.pdjType != 'pdjsja' ? 'lightgreen' : 'white',
            //             // borderStyle: 'solid',
            //             // borderWidth: 2,
            //             borderRadius: 10,
            //             height: '98%',
            //         }]} >
            //         <Text style={[ // styles.texteArticlePrix
            //             , { //prix
            //                 fontSize: 18, width: '100%', height: '100%', color: Colors.primaryText,

            //                 flexDirection: 'column',
            //                 justifyContent: 'center',
            //                 display: 'flex', alignItems: 'flex-start'
            //             }]}>{menuN.name}
            //             {menuN &&
            //                 menuN.pdjType == 'promo'
            //                 // menuN.prixbarre && Number(menuN.prixbarre) > 0
            //                 &&
            //                 <Text style={[styles.texteArticlePrix, {
            //                     fontSize: 20,
            //                     width: 100,
            //                     // width: MAXWIDTH < 400 || myCoeffScreen < 1 ? '40%' : '100%',
            //                     // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
            //                     display: 'flex', justifyContent: 'flex-end',
            //                     paddingHorizontal: 5,
            //                     alignItems: 'flex-end',
            //                     color: Colors.primaryText,
            //                     // borderColor: 'red',
            //                     // borderStyle: 'solid',
            //                     // borderWidth: 3,
            //                     // position: 'absolute',
            //                     backgroundColor: 'green',
            //                     // left: 115,
            //                     // top: +18,
            //                     borderRadius: 5
            //                 }]}>
            //                     + {menuN.qte} gratuit
            //                 </Text>

            //             }
            //         </Text>


            //     </View>



            // </View>
            <ThemedView style={{ flexDirection: 'row' }}>
                <ThemedText>{menuN.name} </ThemedText>
                <ThemedText>+ {menuN.qte} gratuuit </ThemedText>
                <ThemedText>{menuN.qte} </ThemedText>

            </ThemedView>
        )
    }

    const styles0 = StyleSheet.create({

        buttonAddRemove: {

            width: 40,
            // height: '100%',
            backgroundColor: 'transparent',
            borderRadius: 50,
            display: 'flex',
            maxHeight: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'yellow',
            borderStyle: 'solid',
            borderWidth: 2,
            position: 'relative'
        },

    });

    return ( //global
        <ThemedView style={{ flexDirection: 'row' }}>
            <ThemedText>{menuN.name} </ThemedText>
            <ThemedText>+ {menuN.qte} gratuuit </ThemedText>
            <ThemedText>{menuN.qte} </ThemedText>

        </ThemedView>
    );
};



export default RenderEachPanierElt;
