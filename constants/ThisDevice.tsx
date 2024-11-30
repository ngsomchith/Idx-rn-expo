import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
// import { myPLatform } from './firebase';
import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { myPLatform } from "../config/firebase";

const ThisDevice = () => {
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
      display: "flex",
      flexDirection: "column",
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



  // ... le reste du code

  return {
    // device0: 'device'
    // ThisDeviceFn
    styles0: styles0,
    device,
    MAXWIDTH: device.myMAXWIDTH, 
    // LEFTGLOBAL: LEFTGLOBAL
  };
};


export default ThisDevice;
