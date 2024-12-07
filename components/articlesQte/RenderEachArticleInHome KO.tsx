import { Image, StyleSheet, Platform } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import { Colors, iconPlusUn, iconMinus, iconSearchPlus, iconBasket, iconClick, iconCadeau, iconBuyAndGift2, iconPromoSushi, iconPromoTradit } from '../config';
import { ArticleType } from '@/app/models/ArticleType';
import { myStyles } from '../myStyle';
import ThisDevice from '@/constants/ThisDevice';
import ImageViewer from '../ImageViewer';
import { Colors } from '@/constants/Colors';
import { iconBasket, iconPlusUn } from '@/icons';


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

    // function barrePrix(menuN:any) {
    //     return (
    //         <View style={[ //barre prix qte 
    //             // panierView ? styles.dbCol : styles.dbRow,
    //             {
    //                 maxWidth: 340,
    //                 // width: MAXWIDTH < 400 || myCoeffScreen < 1 ? '98%' : '31%',
    //                 width: '100%',
    //                 marginHorizontal: 'auto',
    //                 // margin: 'auto', 
    //                 paddingVertical: 5,
    //                 marginVertical: 0,
    //                 position: 'relative',
    //                 paddingHorizontal: 0,
    //                 backgroundColor: 'transparent',
    //                 // borderColor: 'yellow',
    //                 // borderStyle: 'solid',
    //                 // borderWidth: 3,
    //                 justifyContent: 'flex-start',
    //                 alignItems: 'flex-end',
    //                 borderRadius: 10,
    //                 // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? 60 : 180,
    //                 height: 80,
    //                 flexDirection: 'row',
    //                 flexWrap: 'nowrap',
    //                 // marginHorizontal: 0
    //             }]} >

    //             {/* {menuN &&
    //                 (menuN.pdjType == 'promoSnack' || menuN.pdjType == 'promoSushi')
    //                 // menuN.prixbarre && Number(menuN.prixbarre) > 0
    //                 &&
    //                 <Text style={[styles.texteArticlePrix, {
    //                     fontSize: 24,
    //                     // width: MAXWIDTH < 400 || myCoeffScreen < 1 ? '40%' : '100%',
    //                     // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
    //                     display: 'flex', justifyContent: 'flex-end',
    //                     paddingHorizontal: 5,
    //                     alignItems: 'flex-end',
    //                     color: Colors.primaryText,
    //                     // borderColor: 'red',
    //                     // borderStyle: 'solid',
    //                     // borderWidth: 3,
    //                     position: 'absolute',
    //                     backgroundColor: 'red',
    //                     textDecorationLine: 'line-through',
    //                     left: 0,
    //                     top: 0
    //                 }]}>
    //                     {Number(menuN.prixbarre).toFixed(2) + '€'}
    //                 </Text>

    //             } */}

    //             {menuN &&
    //                 menuN.pdjType === 'promo'
    //                 && menuN.qte >= 1
    //                 &&
    //                 <Text style={[styles.texteArticlePrix, {
    //                     fontSize: 20,
    //                     width: 100,
    //                     // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
    //                     display: 'flex', justifyContent: 'flex-end',
    //                     paddingHorizontal: 5,
    //                     alignItems: 'flex-end',
    //                     color: Colors.primaryText,
    //                     position: 'absolute',
    //                     backgroundColor: 'green',
    //                     left: 105,
    //                     top: -20,
    //                     borderRadius: 5
    //                 }]}>
    //                     + {menuN.qte} gratuit
    //                 </Text>
    //             }

    //             {menuN &&
    //                 (menuN.pdjType === 'promo' || menuN.pdjType === 'promoSushi' || menuN.pdjType === 'promoSnack')
    //                 && menuN.qte == 0
    //                 &&
    //                 <View style={{
    //                     // position:'absolute',
    //                     width: 50,
    //                     height: 50,
    //                     // borderColor: 'white',
    //                     // borderStyle: 'solid',
    //                     // borderWidth: 5,
    //                     position: 'absolute',
    //                     left: 135,
    //                     top: -25,
    //                     flexDirection: 'row',
    //                     marginHorizontal: 10

    //                 }}
    //                 >
    //                     <Text>
    //                         {menuN.pdjType === 'promo' && '(pp)'}
    //                         {menuN.pdjType === 'promoSushi' && '(SS)'}
    //                         {menuN.pdjType === 'promoSnack' && '(TT)'}
    //                         {/* <ImageViewer placeholderImageSource={'buy_and_gift2'} /> */}
    //                     </Text>
    //                 </View>
    //             }

    //             {menuN && menuN.prix && Number(menuN.prix) > 0 && // prix
    //                 <Text style={[styles.texteArticlePrix, {
    //                     fontSize: 20,
    //                     // width: MAXWIDTH < 400 || myCoeffScreen < 1 ? '40%' : '100%',
    //                     width: '40%',
    //                     // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
    //                     height: 30,
    //                     display: 'flex', justifyContent: 'flex-start',
    //                     flexWrap: 'nowrap',
    //                     paddingHorizontal: 0,
    //                     marginVertical: 0,

    //                     alignItems: 'flex-end',
    //                     // color: panierView ? Colors.primaryText : Colors.primaryText,
    //                     // borderColor: 'green', borderStyle: 'solid', borderWidth: 3,
    //                 }]}>
    //                     {Number(menuN.prix).toFixed(2) + '€'}
    //                 </Text>
    //             }

    //             <View style={{ // row buttons  (-) prix (+)
    //                 flexDirection: 'row',
    //                 justifyContent: 'flex-start',
    //                 // width: panierView ? '50%' : '100%',
    //                 // height: MAXWIDTH < 400  || myCoeffScreen <1 ? '100%' : '30%',
    //                 width: '60%',
    //                 height: 60,
    //                 margin: 0,
    //                 alignItems: 'flex-end',
    //             }}>

    //                 <View style={ //onMoins
    //                     styles0.buttonAddRemove
    //                 } >
    //                     <Pressable
    //                         onPress={() => onMoinsUn(menuN)}

    //                     >
    //                         <Text style={{
    //                             height: 30,
    //                             color: 'white',
    //                             display: 'flex',
    //                             fontSize: 30,
    //                             fontWeight: 700,
    //                         }}> {'-'}
    //                         </Text>
    //                     </Pressable>

    //                 </View>


    //                 {/* <Text //qte
    //                     style={[styles.input, {
    //                         width: '40%',
    //                         borderBottomWidth: 10,
    //                         color: Colors.primaryText,
    //                         borderStyle: 'solid',
    //                         // height: 30,
    //                         height: '70%',
    //                         justifyContent: 'flex-end',
    //                         alignItems: 'center',
    //                         borderColor: 'white',
    //                     }]}
    //                 >
    //                     {qte}
    //                 </Text> */}

    //                 <TextInput //qte
    //                     style={[styles.input, {
    //                         width: '40%',
    //                         borderBottomWidth: 10,
    //                         color: Colors.primaryText,
    //                         // color: 'white',
    //                         // borderColor: Colors.primaryText,
    //                         borderStyle: 'solid',
    //                         // height: 30,
    //                         height: '70%',
    //                         justifyContent: 'flex-end',
    //                         alignItems: 'center',
    //                         borderColor: 'white',
    //                         // borderStyle: 'solid',
    //                         // borderWidth: 1,
    //                     }]}
    //                     editable={false}
    //                     value={qte > 0 ? qte.toString() : '0'}
    //                     onChangeText={(value) => {
    //                         setQte(value)
    //                         // console.log(value)
    //                     }}
    //                 />


    //                 <View style={ //onPlus
    //                     styles0.buttonAddRemove
    //                 } >
    //                     <Pressable
    //                         onPress={() => onPlusUn(menuN)}

    //                     >
    //                         {/* <Text style={{ color:'white'
    //                             // position: 'absolute', 
    //                         }}> {'BK'}</Text> */}

    //                         <Text style={{
    //                             // position: 'absolute',
    //                             // left: 23,
    //                             // top: 15,
    //                             // borderColor: 'white',
    //                             // borderStyle: 'solid',
    //                             // borderRadius: '50%',
    //                             // borderWidth: 3,
    //                             height: 30,
    //                             color: 'white',
    //                             display: 'flex',
    //                             fontSize: 30,
    //                             fontWeight: 700,
    //                         }}> {'+'}
    //                         </Text>
    //                     </Pressable>

    //                 </View>

    //             </View>

    //         </View>
    //     )
    // }



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


    function barrePrix(menuN: any) {
        return (
            <View style={[ //barre prix qte 
                {
                    maxWidth: 340,
                    width: '100%',
                    // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
                    marginHorizontal: 'auto',
                    // paddingVertical: 5,
                    marginVertical: 0,
                    position: 'relative',
                    paddingHorizontal: 0,
                    backgroundColor: 'transparent',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    borderRadius: 10,
                    height: 80,
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                }]} >

                {menuN && //prix barre rouge
                    (menuN.pdjType == 'promoSnack' || menuN.pdjType == 'promoSushi')
                    // menuN.prixbarre && Number(menuN.prixbarre) > 0
                    &&
                    <Text style={[styles.rotatedText, {
                        fontSize: 18,
                        display: 'flex', justifyContent: 'flex-end',
                        paddingHorizontal: 5, maxHeight: 25,
                        alignItems: 'flex-end',
                        color: Colors.primaryText,
                        position: 'absolute',
                        backgroundColor: 'red',
                        textDecorationLine: 'line-through',
                        left: 0,
                        top: 15
                    }]}>
                        {Number(menuN.prixbarre).toFixed(2) + '€'}
                    </Text>

                }

                {menuN && //+1 gratuit
                    menuN.pdjType === 'promo'
                    && menuN.qte >= 1
                    &&
                    <Text style={[styles.texteArticlePrix, {
                        fontSize: 14,
                        width: 100,
                        maxHeight: 30,
                        display: 'flex', justifyContent: 'center',
                        paddingHorizontal: 5,
                        alignItems: 'flex-end',
                        color: Colors.primaryText,
                        position: 'absolute',
                        backgroundColor: 'green',
                        // left: 105,
                        top: -20,
                        borderRadius: 5
                    }]}>
                        {/* + {Math.round((menuN.qte / 2) - 0.5)} gratuit */}
                        + {menuN.qte} gratuit
                    </Text>
                }

                {/* {menuN && // icone image
                    (menuN.pdjType === 'promo' || menuN.pdjType === 'promoSushi' || menuN.pdjType === 'promoSnack')
                    && menuN.qte == 0
                    &&
                    <View style={{
                        width: 50,
                        height: 50,
                        // position: 'absolute',
                        // left: 135,
                        // top: -25,
                        flexDirection: 'row',
                        marginHorizontal: 10

                    }}
                    >

                        {menuN.pdjType === 'promo' && iconBuyAndGift2}
                        {menuN.pdjType === 'promoSushi' && iconPromoSushi}
                        {menuN.pdjType === 'promoSnack' && iconPromoTradit}
                        <ImageViewer placeholderImageSource={'buy_and_gift2'} />

                    </View>
                } */}

                {menuN && menuN.prix && Number(menuN.prix) > 0 && // prix
                    <Text style={[styles.texteArticlePrix, {
                        fontSize: 18,
                        width: '40%',
                        height: 30,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'nowrap',
                        paddingHorizontal: 0,
                        marginVertical: 0,
                        alignItems: 'flex-end',
                        color: panierView ? Colors.primaryText : Colors.primaryText,
                        // borderColor: 'green', borderStyle: 'solid', borderWidth: 3,
                    }]}>
                        {Number(menuN.prix).toFixed(2) + '€'}
                    </Text>
                }

                <View style={{ // row buttons  (-) prix (+)
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: '60%',
                    height: 60,
                    margin: 0,
                    alignItems: 'flex-end',
                }}>

                    {/* <View style={{ //onMoinsUn
                            width: 40,
                            height: '100%',
                            backgroundColor: 'transparent',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center'

                        }} >
                            <ButtonStd iconR={iconMinus} label={undefined}
                                onPress={() => {
                                    menuN.qte > 0 ?
                                        onMoinsUn(user, menuN, idx, user?.email)
                                        : undefined
                                }} onChange={undefined} bgButton={'transparent'}
                                labelColor={Colors.primaryBG} iconL={undefined} />
                        </View> */}

                    {qte > 0 ?
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
                            }]}
                            editable={false}
                            value={qte > 0 ? qte.toString() : '0'}
                            onChangeText={(value) => {
                                setQte(value)
                                // console.log(value)
                            }}
                        /> : <Text style={{ width: '40%' }}></Text>}

                    <View style={{ //onPlus
                        width: '60%',
                        // height: '100%',
                        backgroundColor: 'transparent',
                        borderRadius: 50,
                        display: 'flex',
                        maxHeight: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }} >
                        <Pressable
                            onPress={() => { onPlusUn(user, menuN, idx, user?.email); }}

                        >
                            <Text style={{
                                // position: 'absolute', 
                            }}> {iconBasket}</Text>

                            <Text style={{
                                position: 'absolute',
                                height: 30,
                                display: 'flex',
                                fontSize: 16,
                                left: 18,
                                top: -13
                            }}> {iconPlusUn}
                            </Text>
                        </Pressable>

                    </View>

                </View>

            </View>
        )
    }

    return ( //global
        <View style={{
            display: 'flex', flexDirection: 'row',
            justifyContent: 'flex-start', alignItems: 'flex-start',
            width: '100%',
            maxHeight: maxHeightArticle,
            height: maxHeightArticle,
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
        }}>

            {!zoomMenuN ?
                <View  // 
                    style={[, {

                        flexDirection: 'column',
                        backgroundColor: menuN.qte > 0 ? Colors.highlightBG : Colors.accentBG,
                        borderColor: menuN.qte > 0 ? Colors.highlightBG : Colors.accentBG,
                        width: '96%',
                        marginHorizontal: '1%',
                        paddingHorizontal: 5,
                        height: maxHeightArticle,
                        maxHeight: maxHeightArticle,
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        borderRadius: 10,
                        display: 'flex',
                        flexWrap: 'wrap',

                    }]
                    }  >

                    <Text style={[styles.titreArticle, { //name
                        color: Colors.primaryText,
                        width: '100%',
                        fontSize: 16,  //panierView ? 14 : 18,
                        margin: 0,
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        overflow: 'hidden',
                        alignItems: 'flex-start',
                        padding: 0,
                        maxHeight: 60,
                    }]}>
                        {/* {MAXWIDTH} :  */}
                        {menuN?.name}
                    </Text>

                    <View style={{ // container d' imageViewer & figCaption
                        width: '100%',
                        // marginHorizontal:10,
                        height: 90,
                        display: 'flex',
                        flexWrap: 'nowrap',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
                    }}>
                        <Pressable // imageViewer & figCaption
                            style={[styles.containerRowArticle, {
                                backgroundColor: Colors.accentBG,
                                width: '98%',
                                marginHorizontal: '1%',
                                marginVertical: 0,
                                borderRadius: 10,
                                height: 80,
                                display: 'flex',
                                flexWrap: 'nowrap',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start'
                            }]}
                            // onPress={() => callbackFn(true, menuN, idx, false)}

                            onPress={() => {
                                setViewModal(true),
                                    setcurrentMenuN(menuN)
                            }}
                        >

                            <View style={[styles.figure, { //ImageViewer
                                minHeight: 80,
                                marginVertical: 0,
                                maxWidth: '100%',
                                maxHeight: 50,
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative'
                            }]}>

                                <Text style={{
                                    position: 'absolute',
                                    color: 'white',
                                    fontWeight: '600',
                                    right: 0,
                                    zIndex: 999,
                                    // borderColor: 'yellow', borderStyle: 'solid',borderWidth: 2,
                                }}>
                                    {iconSearchPlus}
                                </Text>
                                <ImageViewer placeholderImageSource={menuNImg} />

                            </View>

                            <View style={[styles.figcaption, {
                                width: '100%',
                                minHeight: 30,
                                flex: 1,
                                display: 'flex',
                                maxHeight: 50,
                                overflow: 'hidden',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                position: 'absolute',
                                bottom: -40,
                                backgroundColor: Colors.highlightBG,
                                marginVertical: 10,
                            }]} >

                                <Text style={[
                                    styles.texteArticle, {
                                        maxWidth: '90%',
                                        flex: 1,
                                        overflow: 'hidden',
                                        color: 'white',
                                        justifyContent: 'flex-start',
                                        fontSize: 14,
                                    }
                                ]}>
                                    {/* + de détails */}
                                    {menuN?.description}
                                </Text>

                                {menuN?.pdjType != 'tlj' && menuN?.date != '' ? //|| varparam == 'prochainsjours'
                                    <View style={[styles.dbCol, {

                                    }]} >
                                        {/* <Text style={{color:'white'}}>221{menuN?.date} </Text> */}
                                        {(
                                            (menuN?.pdjType == 'pdj')
                                            && menuN?.date != null && menuN?.date != '' && menuN?.date != 'Jour ?' && menuN?.date != todayfr10
                                        ) &&
                                            <Text style={[styles.texteArticleRenderJour, {//date
                                                backgroundColor: Colors.highlightBG,
                                                color: Colors.primaryText
                                            }]}>
                                                {/* 312 */}
                                                {menuN?.date}
                                            </Text>
                                        }

                                        {(
                                            (menuN?.pdjType == 'pdjs') && menuN?.date != ''
                                            && menuN?.date != null && menuN?.date != 'Jour ?'
                                            && menuN?.date != todayfr10
                                        ) &&
                                            <Text style={[styles.texteArticleRenderJour, {
                                                backgroundColor: Colors.highlightBG,
                                            }]}>
                                                325
                                                {menuN?.date}
                                            </Text>
                                        }

                                        {(menuN?.pdjType == 'pdj' && menuN?.date && menuN?.date == todayfr10) &&


                                            <Text style={[styles.texteArticleRenderJour, {
                                                backgroundColor: Colors.highlightBG,
                                            }]}>
                                                {/* 336 */}
                                                {/* Plat Du Jour */}
                                                {/* {menuN?.date + '|'+todayfr10} */}
                                                {menuN?.date}
                                            </Text>

                                        }
                                        {/* {(menuN?.pdjType == 'pdj' && menuN?.date == null) &&
                                        <Text style={[styles.texteArticleRenderJour, {
                                            backgroundColor: Colors.highlightBG
                                        }]}>
                                            346
                                            {menuN.date = null ? '.. / .. / ..' : menuN?.date}
                                        </Text>
                                    } */}

                                        {
                                            menuN?.pdjType == 'pdjs' && menuN?.date == null &&
                                            !(menuN?.pdjType == 'pdj' && menuN?.date == todayfr10) &&
                                            <Text style={[styles.texteArticleRenderJour, {
                                                backgroundColor: Colors.highlightBG,
                                            }]}>
                                                386
                                                {menuN?.date} </Text>
                                        }

                                    </View>
                                    :

                                    <>
                                        {
                                            menuN?.date != null && menuN?.date != '' && menuN?.date != 'Jour ?' &&

                                            <Text style={[styles.texteArticle,
                                            { fontSize: 30 },
                                            { backgroundColor: Colors.highlightBG },
                                            { color: 'white' }]} >
                                                372
                                                {menuN?.date}
                                            </Text>
                                        }

                                    </>
                                }
                            </View>

                        </Pressable>
                    </View>

                    {barrePrix(menuN)}

                </View>
                :
                barrePrix(menuN)
            }
        </View>
    );
}
export default RenderEachArticleInHome;