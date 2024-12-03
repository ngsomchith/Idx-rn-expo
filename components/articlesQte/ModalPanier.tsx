
import React, { useRef, useContext, useEffect, useState } from 'react';
import { Modal, Text, Pressable, View, TextInput, StyleSheet, ScrollView, SafeAreaView } from "react-native";
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
// import { myStyles } from './style';
// import SignInScreen from '../(tabs)/SignInScreen';
// import SignInComp from './SignInC

function ModalPaniee({ cart, addToCart, removeFromCart, navigation, route, showPanierViewModal, scrollY0, scrollX0, commande }) {


  const [idxScrollTo, setIdxScrollTo] = useState(null)
  const flatListRef = useRef();

  const [totalAPayer, setTotalAPayer] = useState(0)

  const styles20 = ThisDevice().styles0

  const styles = myStyles

  const [modalSignInVisible, setModalSignInVisible] = useState(false);

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
    console.log(" cart ",  cart)
  }, [cart])

  useEffect(() => {
    //all console.log(" scrollY ",  scrollY)
  }, [scrollY])


  useEffect(() => {
    console.log(" commande ", commande)
  }, [commande])



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
    }
  })
  useEffect(() => {
    console.log(" commande185 ", commande)
  }, [commande])

  return (

    <View style={{
      width: '100%', // 50
      height: '100%', // 50
      minWidth: 50,
      minHeight: 50
    }}>

      {/* <AnalyticsTracker pageView={'ModalSignIn'} /> */}
      <Pressable // button open Modal
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center', alignItems: 'center',
          // borderWidth: 3, borderColor: 'blue', borderStyle: 'solid',
        }}
        onPress={() => {
          setModalSignInVisible(true)
          // setpanierView(true)

        }

        }
      >
        <ThemedText>{cart ? cart?.length : 0} </ThemedText>


      </Pressable>

      <Modal // Modal-in
        animationType="slide" transparent={true} visible={modalSignInVisible}>

        <ThemedView>
          <ThemedText>Modal PAnier to Sign in</ThemedText>
          <FlatListScrollPanier
                      articlesListTemp={undefined} PlatsToShowFilteredTemp={cart}
                      menuN={undefined} menuNImg={undefined}
                      pdjType={undefined} navigation={undefined}
                      callbackFn={undefined} route={undefined}
                      addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}          />
          {/* <SignInComp navigation={navigation} route={route} showPanierViewModal={showPanierViewModal} setModalSignInVisible={setModalSignInVisible} scrollY0={scrollY0} scrollX0={scrollX0} commande={commande} /> */}
        </ThemedView>

        {/* <GestureHandlerRootView
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
              styles0.container, {
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
              <Header navigation={undefined}
              callback={undefined} PlatsToShow={undefined} route={undefined} showPanierViewModal={showPanierViewModal} scrollY0={scrollY0} scrollX0={scrollX0} commande={commande} articlesList={undefined} cart={undefined} />



              <Text style={{
                position: 'absolute',
                minHeight: '100%',
                display: 'flex',
                justifyContent: 'center',
                width: 70,
                // borderWidth: 10,borderColor: 'yellow', borderStyle: 'solid',
              }}>
                <ButtonStd //  iconBack : soit Annuler , soit bouton suivant
                  iconL={undefined} iconR={undefined}
                  label={commande?.remise?.toFixed(2).toString()}
                  labelColor={'transparent'}

                  onPress={() => {
                    setModalSignInVisible(false)
                  }}
                  onChange={undefined} bgButton={
                    // Colors.primaryBG
                    // 'transparent'
                    undefined
                  } />
              </Text>

            </View>
            <ScrollView contentContainerStyle={{
              flexGrow: 1,
              width: MAXWIDTH,
              maxWidth: '100%',
              paddingHorizontal: 10,
              marginHorizontal: 'auto',
              display: 'flex',
              // borderColor: 'white',
              // borderWidth: 5,
              // borderStyle: 'solid',
            }} >
              <View
                style={{
                  width: MAXWIDTH,
                  maxWidth: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: 0,
                  // borderWidth: 5, borderColor: 'white', borderStyle: 'solid',
                }}
              >

                <ThemedText>SignInComp</ThemedText>
                 <SignInComp navigation={navigation} route={route} showPanierViewModal={showPanierViewModal} setModalSignInVisible={setModalSignInVisible} scrollY0={scrollY0} scrollX0={scrollX0} commande={commande} />

              </View>

            </ScrollView>
          </SafeAreaView>
        </GestureHandlerRootView> */}

      </Modal>
    </View>
  );
}

export default ModalPaniee;