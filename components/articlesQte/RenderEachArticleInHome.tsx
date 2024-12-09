import { Image, StyleSheet, Platform } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { ArticleType } from '@/app/models/ArticleType';
import { myStyles } from '../myStyle';
import ThisDevice from '@/constants/ThisDevice';
import ImageViewer from '../ImageViewer';
import { Colors } from '@/constants/Colors';
import { iconSearchPlus } from '@/icons';
import ModalMenuN from './ModalMenuN';


const RenderEachArticleInHome = ({
    addToCart, removeFromCart,
    thiscategoryName,
    articlesListTemp, PlatsToShowFilteredTemp,
    todayfr10, menuN, menuNImg, idx, pdjType,
    navigation, route, callbackFn,
    scrollY0, scrollX0, updateScrollValue,
    zoomMenuN,
    ...otherprops }) => {


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

    const MAXWIDTH = ThisDevice().device.width - 5
    // const LEFTGLOBAL = myPLatform.OS == 'web' ? 0 : 0
    const invitedEmail = 'udex.invited@gmail.com'

    const myWidth = ThisDevice().MAXWIDTH
    const myHeight = ThisDevice().device.height * 1.3
    const myCoeffScreen = myWidth / myHeight

    const maxHeightArticle = 230
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

    function onPlusUn(menuN: any
        //, user: any,idx: any, userEmail: string
    ) {
        menuN.qte++
        addToCart(menuN)
        console.log("onPlusUn RenderEachArticleInHome 72 clicked ", menuN.qte, menuN)
        setQte(menuN.qte)
    }

    function onMoinsUn(menuN: any,
        // user: any,  idx: any, userEmail: string
    ) {
        menuN.qte--
        removeFromCart(menuN)
        console.log("onMoinsUn  RenderEachArticleInHome 81 clicked ", menuN.qte, menuN)
        setQte(menuN.qte)
    }

    function barrePrix(menuN: any) {
        return (
            <View style={[ //barre prix qte 
                // panierView ? styles.dbCol : styles.dbRow,
                {
                    maxWidth: 340,
                    // width: MAXWIDTH < 400 || myCoeffScreen < 1 ? '98%' : '31%',
                    width: '100%',
                    marginHorizontal: 'auto',
                    // margin: 'auto', 
                    paddingVertical: 5,
                    marginVertical: 0,
                    position: 'relative',
                    paddingHorizontal: 0,
                    backgroundColor: 'transparent',
                    borderColor: 'green',
                    borderStyle: 'solid',
                    borderWidth: 8,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    borderRadius: 10,
                    height: 80,
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                }]} >

                {menuN &&
                    (menuN.pdjType == 'promoSnack' || menuN.pdjType == 'promoSushi')
                    // menuN.prixbarre && Number(menuN.prixbarre) > 0
                    &&
                    <Text style={[styles.texteArticlePrix, {
                        fontSize: 24,
                        display: 'flex', justifyContent: 'flex-end',
                        paddingHorizontal: 5,
                        alignItems: 'flex-end',
                        color: Colors.primaryText,
                        // borderColor: 'red',
                        // borderStyle: 'solid',
                        // borderWidth: 3,
                        position: 'absolute',
                        backgroundColor: 'red',
                        textDecorationLine: 'line-through',
                        left: 0,
                        top: 0
                    }]}>
                        {Number(menuN.prixbarre).toFixed(2) + '€'}
                    </Text>

                }

                {menuN &&
                    menuN.pdjType === 'promo'
                    && menuN.qte >= 1
                    &&
                    <Text style={[styles.texteArticlePrix, {
                        fontSize: 20,
                        width: 100,
                        // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
                        display: 'flex', justifyContent: 'flex-end',
                        paddingHorizontal: 5,
                        alignItems: 'flex-end',
                        color: Colors.primaryText,
                        position: 'absolute',
                        backgroundColor: 'green',
                        left: 0,
                        top: -20,
                        borderRadius: 5
                    }]}>
                        + {menuN.qte} gratuit
                    </Text>
                }

                {menuN &&
                    (menuN.pdjType === 'promo' || menuN.pdjType === 'promoSushi' || menuN.pdjType === 'promoSnack')
                    && menuN.qte == 0
                    &&
                    <View style={{
                        // position:'absolute',
                        width: 50,
                        height: 50,
                        // borderColor: 'white',
                        // borderStyle: 'solid',
                        // borderWidth: 5,
                        position: 'absolute',
                        left: 135,
                        top: -25,
                        flexDirection: 'row',
                        marginHorizontal: 10

                    }}
                    >
                        <Text>
                            {menuN.pdjType === 'promo' && '(pp)'}
                            {menuN.pdjType === 'promoSushi' && '(SS)'}
                            {menuN.pdjType === 'promoSnack' && '(TT)'}
                            {/* <ImageViewer placeholderImageSource={'buy_and_gift2'} /> */}
                        </Text>
                    </View>
                }

                {menuN && menuN.prix && Number(menuN.prix) > 0 && // prix
                    <Text style={[styles.texteArticlePrix, {
                        fontSize: 20,
                        // width: MAXWIDTH < 400 || myCoeffScreen < 1 ? '40%' : '100%',
                        width: '40%',
                        // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
                        height: 30,
                        display: 'flex', justifyContent: 'flex-start',
                        flexWrap: 'nowrap',
                        paddingHorizontal: 0,
                        marginVertical: 0,

                        alignItems: 'flex-end',
                        // color: panierView ? Colors.primaryText : Colors.primaryText,
                        // borderColor: 'green', borderStyle: 'solid', borderWidth: 3,
                    }]}>
                        {Number(menuN.prix).toFixed(2) + '€'}
                    </Text>
                }

                <View style={{ // row buttons  (-) prix (+)
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    // width: panierView ? '50%' : '100%',
                    // height: MAXWIDTH < 400  || myCoeffScreen <1 ? '100%' : '30%',
                    width: '60%',
                    height: 60,
                    margin: 0,
                    alignItems: 'flex-end',
                }}>

                    <View style={ //onMoins
                        styles0.buttonAddRemove
                    } >
                        <Pressable
                            onPress={() => onMoinsUn(menuN)}

                        >
                            <Text style={{
                                height: 30,
                                color: 'white',
                                display: 'flex',
                                fontSize: 30,
                                fontWeight: 700,
                            }}> {'-'}
                            </Text>
                        </Pressable>
                    </View>

                    <TextInput //qte
                        style={[styles.input, {
                            width: '40%',
                            borderBottomWidth: 10,
                            color: Colors.primaryText,
                            // color: 'white',
                            // borderColor: Colors.primaryText,
                            borderStyle: 'solid',
                            // height: 30,
                            height: '70%',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            borderColor: 'white',
                            // borderStyle: 'solid',
                            // borderWidth: 1,
                        }]}
                        editable={false}
                        value={qte > 0 ? qte.toString() : '0'}
                        onChangeText={(value) => {
                            setQte(value)
                            // console.log(value)
                        }}
                    />


                    <View style={ //onPlus
                        styles0.buttonAddRemove
                    } >
                        <Pressable
                            onPress={() => onPlusUn(menuN)}

                        >
                            {/* <Text style={{ color:'white'
                                // position: 'absolute', 
                            }}> {'BK'}</Text> */}

                            <Text style={{
                                // position: 'absolute',
                                // left: 23,
                                // top: 15,
                                // borderColor: 'white',
                                // borderStyle: 'solid',
                                // borderRadius: '50%',
                                // borderWidth: 3,
                                height: 30,
                                color: 'white',
                                display: 'flex',
                                fontSize: 30,
                                fontWeight: 700,
                            }}> {'+'}
                            </Text>
                        </Pressable>

                    </View>
                </View>

            </View>
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
        <View style={{
            display: 'flex', flexDirection: 'row',
            justifyContent: 'flex-start', alignItems: 'flex-start',
            width: '100%',
            maxHeight: '100%',
            height: maxHeightArticle,
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
        }}>

            <View  // 
                style={[, {

                    flexDirection: 'column',
                    backgroundColor: menuN.qte > 0 ? Colors.highlightBG : Colors.accentBG,
                    // borderColor: menuN.qte > 0 ? Colors.highlightBG : Colors.accentBG,
                    width: '96%',
                    marginHorizontal: '1%',
                    paddingHorizontal: 5,
                    height: '100%',
                    minHeight: '100%',
                    // maxHeight:maxHeightArticle,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    borderRadius: 10,
                    display: 'flex',
                    flexWrap: 'nowrap',
                    borderColor: 'pink', borderStyle: 'solid', borderWidth: 10,

                }]
                }  >
                <ModalMenuN menuN={menuN} />
                {barrePrix(menuN)}

            </View>

        </View>
    );

   
};

export default RenderEachArticleInHome;