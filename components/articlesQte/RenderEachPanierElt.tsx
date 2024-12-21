
import { Image, StyleSheet, Platform, FlatList } from 'react-native';
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

    addToCart,
    removeFromCart,
    thiscategoryName,
    todayfr10,
    menuN,
    menuNImg, 

    // addToCart, removeFromCart, menuN,
    // thiscategoryName,
    // articlesListTemp, PlatsToShowFilteredTemp,
    // todayfr10, menuNImg, idx, pdjType,
    // navigation, route, callbackFn,
    scrollY0, scrollX0, 
    // updateScrollValue,
    // zoomMenuN,


    ...otherprops }) => {


    const myDevice = ThisDevice().device
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH
    const widthMobile = 650
    const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'
    const [scrollXLastVal, setScrollXLastVal] = useState(0)
    const [scrollYLastVal, setScrollYLastVal] = useState(0)
    const iconSearchMinus = <FontAwesome name="search-minus" size={24} color="#821e1e" />
    const [chooseDayTime, setChooseDayTime] = useState(false)
    const [remiseObtenue, setRemiseObtenue] = useState(0)
    const [totalAPayer, setTotalAPayer] = useState(0)
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




    const panierLigne = (item: any) => {
        return (

            <View style={[styles.dbRow, {
                // paddingHorizontal: 5,
                // width: MAXWIDTH,
                width:'100%',
                maxWidth: 500,
                // borderColor: 'white',
                // borderStyle: 'solid',
                // borderWidth: 1,
                marginHorizontal: 'auto',
                justifyContent:'space-between',
                alignItems:'flex-end',
                // borderColor: 'red',
                // borderStyle: 'solid',
                // borderWidth: 10,
                display:'flex'
            }]} >
                <Text style={{
                    color: 'white',
                    width: MAXWIDTH *0.4,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // borderColor: 'white',
                    // borderStyle: 'solid',
                    // borderWidth: 3,
                }

                } >{item.name}
                    {item &&
                        item.pdjType == 'promo' && item.qte >= 1
                        // menuN.prixbarre && Number(menuN.prixbarre) > 0
                        &&
                        <Text style={[styles.texteArticlePrix, {
                            fontSize: 20,
                            // width: MAXWIDTH < 400 || myCoeffScreen < 1 ? '40%' : '100%',
                            // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
                            display: 'flex', justifyContent: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 5,
                            alignItems: 'center',
                            color: Colors.primaryText,
                            // borderColor: 'yellow',
                            // borderStyle: 'solid',
                            // borderWidth: 1,
                            width: 50,
                            // position: 'absolute',
                            backgroundColor: 'green',
                            marginHorizontal: 5,
                            flexWrap: 'nowrap',
                            // left: 115,
                            // top: +18,
                            borderRadius: 5
                        }]}>
                            +{item.qte}
                        </Text>

                    }

                </Text>


                <Text style={[styles0.Text,{ color: 'white', width: '10%',textAlign:'right' }]} >{item.qte} </Text>
                <Text style={[styles0.Text,{ color: 'white', width: '17%',textAlign:'right' }]} >{

                    Number(item.prix).toFixed(2) + ' €'
                } </Text>
                <Text style={[styles0.Text,{ color: 'white' , width: '25%', textAlign: 'right' }]} >{(item.qte * item.prix).toFixed(2) + ' €'} </Text>
            </View>
        )
    }

    const styles0 = StyleSheet.create({
        Text: {
            // borderColor: 'yellow',
            // borderStyle: 'solid',
            // borderWidth: 1,
        },
        buttonAddRemove: {

            width: 40,
            // height: '100%',
            backgroundColor: 'transparent',
            borderRadius: 50,
            display: 'flex',
            maxHeight: 50,
            justifyContent: 'center',
            alignItems: 'center',
            // borderColor: 'yellow',
            // borderStyle: 'solid',
            // borderWidth: 2,
            position: 'relative'
        },

    });

    return ( //global

        <View style={{
            backgroundColor: Colors.primaryBG,
            // marginVertical: 20,
            paddingVertical: 5,
            // borderWidth: 2, borderColor: Colors.highlightBG, borderStyle: 'solid',
            width:'100%'
        }}>

            {panierLigne(menuN)}

            {/* <View style={undefined}>

                <View style={[styles.dbRow, { paddingHorizontal: 20 }]} >
                    <Text style={[{ color: 'white' }, { width: '50%' }, { textAlign: 'right' }]} >Remise : </Text>

                    <Text style={[{ color: 'white' }, { width: '25%' }, { textAlign: 'right' }]} >{
                        (
                            // Number(promoAccord) + 
                            Number(remiseObtenue)).toFixed(2) + ' €'
                    }</Text>
                </View>
            <View style={[styles.dbRow, {
                // paddingHorizontal: 5,
                // width: MAXWIDTH,
                width:'100%',
                maxWidth: '100%',
                justifyContent:'flex-end',
                alignItems:'flex-end',
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: 3,
                display:'flex'
            }]} >
                    <Text style={[{ color: 'white' }, { width: '50%' }, { textAlign: 'right' }]} >Total à payer : </Text>
                    
                    <Text style={[{ color: 'white' }, { width: '10%' }]} >qte</Text> 
                    
                    <Text style={[{ color: 'white' }, { width: '25%' }, { textAlign: 'right' }]} >{
                        (Number(totalAPayer) - Number(remiseObtenue)).toFixed(2) + ' €'
                    }</Text>
                </View>
            </View> */}

        </View>
    );
};



export default RenderEachPanierElt;
