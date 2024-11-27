import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
// import { myPLatform } from './firebase';
import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { myPLatform } from "../config/firebase";

const ThisDevice = () => {
  // const  [device, setDevice] =useState({})

  // function ThisDeviceFn () {
  // Appel du Hook en dehors de useEffect
  // const { height, width } = useWindowDimensions();

  // Utilisation des valeurs dans le reste du composant
  const device = {
    height: useWindowDimensions().height,
    width: useWindowDimensions().width,
    header: 100,
    bottom: 70,
    footer: 70,
    heightBody: useWindowDimensions().height - 200,
    myCoeffScreen : useWindowDimensions().width / useWindowDimensions().height,
    myMAXWIDTH : useWindowDimensions().width, 
    myMAXWIDTH1_3 : useWindowDimensions().width / 3
  };

  // const MAXWIDTH = useWindowDimensions().height - 10;
  // const LEFT_GLOBAL = myPLatform.OS === "web" ? 0 : 0;


  // const myWidth = device.width
  // const myHeight = device.height * 1.3
  // const myCoeffScreen = myWidth / myHeight
  // const MAXWIDTH1_3 = ThisDevice().device.width / 3
  // const MAXWIDTH1_3 = ThisDevice().device.width

  // const MAXWIDTH = myCoeffScreen < 1 ? myWidth : MAXWIDTH1_3
  // const NBCOLUMN = myCoeffScreen < 1 ? 1 : 3

  // setDevice(thisDevice)

  const styles0 = StyleSheet.create({
    bgColor: {
      flex: 1,
      backgroundColor: "red",
      //border:'5px blue solid',
      // padding:5
    },
    containerPage: {
      height: device.height * 0.9,
      // minWidth: MAXWIDTH,
      maxWidth: "100%",
      // width: device.width *.90,
      marginVertical: 0,
      minHeight: device.height,
      maxHeight: device.height,
      display: "flex",
      // backgroundColor: Colors.primaryBG,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",

      overflow: "hidden",
      // borderColor: 'yellow',
      // borderWidth: 10,
      // borderStyle: 'solid',
      // position:'absolute',
      // left: LEFTGLOBAL,
      alignSelf: "center",
      paddingHorizontal: 0,
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: device.width,
    },
    header: {
      width: device.width * 0.96,
      marginHorizontal: "2%",
      // marginTop: 20,
      height: 120,
      // backgroundColor: "lightblue"
    },
    body: {
      width: device.width * 0.96,
      marginHorizontal: "2%",
      height: device.heightBody,
      //border: '5px red solid',
      // backgroundColor: "pink",
      // margin: 10
      // borderColor: 'green',
      // borderWidth: 5,
      // //24112023 borderStyle: 'dashed',
      display: "flex",
      flexDirection: "column",
      // justifyContent:'flex-start',
      // // alignItems:'flex-start',
      // paddingVertical:5
    },
    footer: {
      width: device.width * 0.96,
      marginHorizontal: "2%",
      height: device.footer, // + Tab = (70) = 140
      // backgroundColor: "lightgrey",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",

      // overflow:'scroll',
      // borderColor: 'yellow',
      // borderWidth: 3,
      // borderStyle: 'solid',
    },
  });

  // useEffect(() => {
  //   getDevice()
  //   console.log("ThisDeviceFn ", device)
  //   // Utilisation de device dans le Hook d'effet si nécessaire
  //   // console.log("19 device useEffect", device);
  // }, [device]);

  // ... le reste du code

  return {
    // device0: 'device'
    // ThisDeviceFn
    styles0: styles0,
    device: device,
    MAXWIDTH: device.myMAXWIDTH, 
    // LEFTGLOBAL: LEFTGLOBAL
  };
};

// return(
//   ThisDeviceFn()
// )

// };

export default ThisDevice;
