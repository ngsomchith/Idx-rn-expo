import { StyleSheet, View, Pressable, Text, Button } from 'react-native';
import React, { useState } from 'react';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';

//source: https://icons.expo.fyi/
// source: https://www.npmjs.com/package/@expo/vector-icons
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
export default function ButtonStd({ iconL,iconR, label, labelColor, onPress, onChange, bgButton,
  ...otherProps }) {
  // console.log("21 actif , lessThanNavIdx" , actif , lessThanNavIdx )
  const thisIcon = <MaterialCommunityIcons name="monitor-screenshot" style={{ fontSize: 24 }} color={bgButton} />
  const yellow2 = '#ffe38d'
  const black = '#000'
  const white = '#fff'

  const styles = StyleSheet.create({
    buttonContainer: {
      width: '100%',
      height: 68,
      // marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    buttonContainerHalf: {
      width: 40,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    bodyContainer: {
      flex: 1,
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      padding: 3,
      //border: '5px green dashed'
    },
    buttonStd: {
      borderRadius: 10,
      backgroundColor: bgButton,
      height: 60,
      // minHeigh: 60,
      // maxHeight:  '100%',
      display: 'flex',
      color: Colors.primaryTextBG,
      flexDirection: 'row-reverse',
      marginHorizontal: 'auto',
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      // padding: 5,
      // margin:5,
      alignSelf: 'center',
      // minWidth:300,
      maxWidth: '100%',
      width: '100%',
      flexWrap: 'nowrap',
      borderWidth: label != '<-' && label != '->' ? 5 : 0,
      // textAlign:'center',   voir label
      borderColor: bgButton ? bgButton : labelColor,
      // borderStyle:'solid' 
    },
    buttonIcon: {
      // paddingRight: 8,
      alignSelf: 'center',
      justifyContent: 'center',
      marginHorizontal: 10
    },
    buttonLabelNoIcon: {
      // color: labelColor,
      color: labelColor,
      fontSize: 24,
      // width:'70%',
      // marginHorizontal:10,
      textAlign: 'center',
      // fontWeight: '800'
    },
    // buttonLabelWithIcon: {
    //   color: Colors.primaryText,
    //   fontSize: 24,
    //   width:'70%',
    //   marginHorizontal:10,
    //   textAlign:'center',
    //   // fontWeight: '800'
    // },
    // buttonLabelWhite: {
    //   color: white,
    //   fontSize: 16,
    // },
    // buttonOv: {
    //   textAlign: 'center',
    //   height: '100%',
    //   borderRadius: 25,
    //   padding: 0,
    //   color: white,
    //   backgroundColor: '#eeeeef',
    // },
    // buttonLabelYellow: {
    //   color: yellow2,
    //   fontSize: 18,
    // },
  });


  return (
    

      <Pressable style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        margin:0,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2, 
        borderColor: 'yellow',
        // borderStyle:'solid' ,
      }}
        onPress={onPress}>
        <Text style={{ marginHorizontal: 'auto', height: '100%',margin:0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {iconL}</Text>

        <Text style={[styles.buttonLabelNoIcon,{flex:1} ]}>{label}</Text>
        <Text style={{ marginHorizontal: 'auto', height: '100%',margin:0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {iconR}</Text>
      </Pressable>


  );

}


