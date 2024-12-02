import React, { useEffect, useState, useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
// import $ from "jquery";
//source: https://icons.expo.fyi/
// source: https://www.npmjs.com/package/@expo/vector-icons
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Image } from 'react-native';

// import { A } from '@expo/html-elements';
// import ModalGoHome from './ModalGoHome';
import ThisDevice from '../constants/ThisDevice';
import ButtonStd from './ButtonTypeStd';
import Panier from './articlesQte/Panier';
import { Colors } from '@/constants/Colors';

// interface ContainerProps {
//     PlatsToShow: Array<ArticleType> | null; //alimenté par panier2
//     navigation: any;

// }
// ../config/device
const Header = ({ articlesList, cart
    , PlatsToShow, navigation, route, callback, showPanierViewModal, scrollY0, scrollX0, commande 
}) => {


    useEffect(() => {
        console.log("Header articlesList = ", articlesList)
    }, [articlesList])

    const device = ThisDevice().device
    const myWidth = device.width
    const myHeight = device.height
    const myCoeffScreen = myWidth / myHeight

  


  useEffect(() => {
    console.log("Header : cart  ", cart)
  }, [cart])

    const iconUser = <Ionicons name="person-outline" size={24} color="white" />


    const [thisCanGoBack, setThisCanGoBack] = useState(navigation?.canGoBack() || null)

    const MAXWIDTH = ThisDevice().MAXWIDTH

    // const callbackPanier = (data: any) => {
    //     console.log("97 callbackPanier = ", data)
    //     callback(data)
    // }


    const styles00 =
        StyleSheet.create({
            bgColor: {
                backgroundColor: '#821e1e',
            },
            container: {
                display: 'flex',
                height: 120,
                width: myWidth - 10,
                margin: 'auto',
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                backgroundColor: '#821e1e',
                // borderColor: 'yellow',
                // borderWidth: 2,
                // borderStyle: 'solid',
                // padding: 5
            },
            dbRow: {
                display: 'flex',
                width: '70%',
                flexWrap: 'nowrap',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                // overflow: 'scroll',

                // borderColor: 'white',
                // borderStyle: 'solid',
                // borderWidth: 5,
            },
            dbCol15: {
                display: 'flex',
                width: 50,
                height: 50,
                flexWrap: 'nowrap',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                // borderColor: 'yellow',
                // borderStyle: 'solid',
                // borderWidth: widthBorder,
                // borderWidth: 3,
            },
            dbCol25: {
                display: 'flex',
                width: '25%',
                height: '100%',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                // borderColor: 'yellow',
                // borderStyle: 'solid',
                // borderWidth: 1,
            },
            dbCol70: {
                display: 'flex',
                width: '60%',
                flexWrap: 'nowrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            image: {
                // borderColor: 'red',
                // borderStyle: 'solid',
                // borderWidth: 5,
                width: 50,
                height: 50,
                borderRadius: 50,
            }
        })

    // const myImage = <Image source={Images.logo} style={styles00.image} />

    return ( //global

        <View
            style={[styles00.container, {
                // backgroundColor: 'transparent',
                // backgroundColor:'#0000ff54',
                width: MAXWIDTH,
                maxWidth: '100%',
                height: 100,
                paddingHorizontal: MAXWIDTH > 700 ? '15%' : 0,
                // display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',alignItems:'flex-start',
                //  borderWidth: 2, borderColor: 'turquoise', borderStyle: 'solid',
            }]} >

            <View style={[styles00.dbCol25, { //A gauche //relative
                width: 100,
                height: '100%',
                backgroundColor: 'transparent',
                //  borderWidth: 5, borderColor: 'green', borderStyle: 'solid',
            }]}>
                {/* {thisCanGoBack && currentScreen != 'WelcomeScreen'
                    // && currentScreen != 'HomeScreen'
                    // && !viewModal 
                    ? */}
                    <Text style={{
                        position: 'absolute',
                        top: 25,
                        left: 10,
                        width: 35,
                        height: 35,
                        borderColor: 'turquoise',
                        borderStyle: 'solid',
                        borderWidth: 5,
                    }}>
                        {/* {
                            !viewModal && */}
                            <ButtonStd //button GO BAck
                            // iconR={currentScreen != 'WelcomeScreen' ? iconBack : ''}
                            // iconR={ iconBack } 
                            label={thisCanGoBack} onPress={() => {
                            console.log(111, "navigation.canGoBack  == true ? ", navigation.canGoBack() == true);
                            if (navigation && navigation.canGoBack()) {
                                console.log(122, "navigation.canGoBack(), panierView", navigation.canGoBack() ? 'Y' : 'N', 'panierView');

                                // setpanierView(false)
                                // console.log(66, navigation.canGoBack() == true);
                                // if (panierView) {
                                //     console.log(118, " setpanierView(false)");
                                //     console.log("325Header ", " articlesList = ", articlesList)
                                //     console.log("325Header ", " articlesListByCat = ", articlesListByCat)
                                //     const thisParams = {
                                //         // typemenu: itemPdjType0,
                                //         // categoryName: _categoryName,
                                //         articlesList: articlesList,
                                //         articlesListByCat: articlesListByCat,
                                //         categoryNameList: categoryNameList,
                                //         // menuN: menuN,
                                //         // currentMenuN: menuN,
                                //         // pdjTitleObject: pdjTitleObject,
                                //         panierQte: panierQte ? panierQte : []
                                //     }
                                //     navigation.navigate('HomeScreen', {
                                //         thisParams
                                //     })
                                // } else {
                                //     callback('goBack');
                                //     console.log("navigation.goBack()");
                                //     // navigation.goBack() //=> error
                                //     const thisParams = {
                                //         // typemenu: itemPdjType0,
                                //         // categoryName: _categoryName,
                                //         articlesList: articlesList,
                                //         articlesListByCat: articlesListByCat,
                                //         categoryNameList: categoryNameList,
                                //         // menuN: menuN,
                                //         // currentMenuN: menuN,
                                //         // pdjTitleObject: pdjTitleObject,
                                //         panierQte: panierQte ? panierQte : []
                                //     }
                                //     navigation.navigate('WelcomeScreen', {
                                //         thisParams
                                //     })
                                // }
                            } else {
                                console.log(80, '!!navigation.canGoBack()', navigation.canGoBack);
                            }
                        } } onChange={undefined} bgButton={'transparent'} labelColor={undefined} iconL={undefined} iconR={undefined} />
                        {/* } */}
                        
                        </Text>
                    {/* 
                    :
                    <></>
                } */}

            </View>
            <View style={[styles00.dbCol70, {  //myTitle
                height: '100%',
                // width: myWidth - 100,
                paddingHorizontal: 10,
                marginHorizontal: 'auto',
                // display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',alignItems:'flex-start',
                borderWidth: 2, borderColor: 'yellow', borderStyle: 'solid',
            }]}>
                <View style={[{ //ModalGoHome
                    width: 50,
                    height: '50%',
                    margin: 10,
                    // borderWidth: 5, borderColor: 'green', borderStyle: 'solid',
                    display: 'flex'
                }]}>
                    {/* <ModalGoHome myImage={myImage} /> */}
                    <Text style={{color: 'white'}}>MyTitle</Text>
                </View>
                {/* <MyTitle /> */}
            </View>

            <View style={[ //A droite
                styles00.dbCol15,
                {
                    // borderColor: 'white',
                    // borderWidth: 2,
                    // borderStyle: 'solid',
                    zIndex: 999
                }
            ]}>

                    <Text style={{color: 'white'}}>{cart.length} </Text>
                {/* <Text style={{ color: 'yellow' }}> {scrollY0}</Text> */}
                {/* <Panier articlesList={articlesList}                // callback={callbackPanier} PlatsToShow={PlatsToShow} navigation={navigation} route={route} showPanierViewModal={showPanierViewModal} scrollY0={scrollY0} scrollX0={scrollX0} commande={commande} 
                /> */}

            </View>

        </View>

    );
};

export default Header;

