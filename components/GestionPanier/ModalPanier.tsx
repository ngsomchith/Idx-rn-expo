
import React, { useRef, useContext, useEffect, useState } from 'react';
import { Modal, Text, Pressable, View, TextInput, StyleSheet, ScrollView, SafeAreaView } from "react-native";

// import CallCA from "./CallCA";
// import { Colors, iconBack, iconBasket, iconClose, iconEmail, iconEuro, iconInfo, iconMachineCB, iconUser, starHalf } from "../config";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { A } from "@expo/html-elements";

// import { getPanierQteNonNull, reduceCdeToUniqueList, sortObjectsDescent, thisClone } from './DataService';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ThisDevice from '@/constants/ThisDevice';
import { myStyles } from '../myStyle';
import AnalyticsTracker from '../AnalyticsTracker';
import Header from '../Header';
import ButtonStd from '../ButtonTypeStd';
import { Colors } from '@/constants/Colors';


function ModalPanier({ }) {


  const [modalSignInVisible, setModalSignInVisible] = useState(false);
  const [idxScrollTo, setIdxScrollTo] = useState(null)
  const flatListRef = useRef();

  // const LEFTGLOBAL = myPLatform.OS == 'web' ? 0 : 0


  const [totalAPayer, setTotalAPayer] = useState(0)

  const styles20 = ThisDevice().styles0

  const styles = myStyles


  const device = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.width - 5
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
    //all console.log(" scrollY ",  scrollY)
  }, [scrollY])




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
      // borderWidth: 2,
      padding: 10
    },
    header: {
      width: device?.width,
      // marginTop: 20,
      height: device?.header,
      backgroundColor: "#821e1e"
    },
    containerBody: {
      width: device?.width,
      maxWidth: '100%',
      height: device?.heightBody,
      backgroundColor: "#a13737",
      // borderColor: 'grey',
      // borderWidth: 5,
      // borderStyle: 'solid',
      // margin: 10,
      // padding: 5
    },
    footer: {
      width: device?.width,
      height: 70, // + Tab = (70) = 140
      backgroundColor: "lightgrey",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  })

  return (

    <View style={{
      width: '100%', // 50
      height: '100%', // 50

      // backgroundColor: 'blue',
      // minWidth:30,
      // minHeight:30,
      // borderRadius:50
    }}>

      {/* <AnalyticsTracker pageView={'ModalPanier'} /> */}
      <Pressable // button open Modal
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center', alignItems: 'center',
          // borderWidth: 3, borderColor: 'blue', borderStyle: 'solid',
        }}
        onPress={() => {
          // setModalSignInVisible(true)
          // ,
          //   setpanierView(true)

          // setScrollY(scrollY0)
           console.log("panier:Qte clicked , scrollY0 : ")
          // ,
          //all console.log("setModalSignInVisible(true)")
        }

        }
      >

          <Text style={{

            borderWidth: 15, borderColor: 'yellow', borderStyle: 'solid',
          }}
          
          >00
          </Text>
     
        {/* {!modalSignInVisiblePublic
          && !panierView
          && currentScreen === 'HomeScreen'
          &&
          <Text style={{ position: 'relative' }}>
            {iconBasket}
          </Text>
        } */}

      </Pressable>

      <Modal // Modal-in
        animationType="slide" transparent={true} 
        // visible={modalSignInVisible}
        >

        <GestureHandlerRootView
          style={ // total screen
            [styles0.containerPage, {
              // borderColor: 'turquoise',
              // borderWidth: 5,
              // borderStyle: 'solid',
            }]
          }
        >

          <SafeAreaView //safe area
            style={[
              // styles.container
              , {
                position: 'relative',
                width: MAXWIDTH,
                maxWidth: '100%',
                backgroundColor: Colors.primaryBG,
                // borderColor: 'turquoise',
                // borderWidth: 5,
                // borderStyle: 'solid',
                maxHeight: '90%'
              }
            ]} >

            <View style={[styles0.header, {
              width: '100%',
              // borderWidth: 1, borderColor: 'white', borderStyle: 'solid',
              height: 120,
              position: 'absolute'
            }]} >
              <Header 
              articlesList={undefined} cart={undefined} 
              removeFromCart={undefined} addToCart={undefined} 
              navigation={undefined} />



              <Text style={{ //left
                // position: 'absolute',
                minHeight: 70,
                display: 'flex',
                justifyContent: 'center',
                width: 70,
                color: 'white',
                borderWidth: 10,borderColor: 'yellow', borderStyle: 'solid',
              }}>
                back205
              </Text>

            </View>
            <ScrollView contentContainerStyle={{
              flexGrow: 1,
              width: MAXWIDTH,
              maxWidth: '100%',
              paddingHorizontal: 10,
              marginHorizontal: 'auto',
              display: 'flex',
              borderColor: 'white',
              borderWidth: 5,
              borderStyle: 'solid',
            }} >
              <View
                style={{
                  width: MAXWIDTH,
                  maxWidth: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: "flex-start",
                  // backgroundColor: 'grey',
                  alignItems: "center",
                  // marginVertical:5,
                  padding: 0,
                  borderWidth: 5, borderColor: 'red', borderStyle: 'solid',
                }}
              >

                <Text>
                SignInComp
                </Text>
                {/* <SignInComp navigation={navigation} route={route} showPanierViewModal={showPanierViewModal} setModalSignInVisible={setModalSignInVisible} scrollY0={scrollY0} scrollX0={scrollX0} commande={commande} /> */}

              </View>

            </ScrollView>
          </SafeAreaView>
        </GestureHandlerRootView>

      </Modal>
    </View>
  );
}

export default ModalPanier;


