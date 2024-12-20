import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import images from '../constants/images';
// import { myPLatform } from '../config/firebase';
// import { myStyles } from './style';
import ThisDevice from '../constants/ThisDevice';
import { Colors } from '@/constants/Colors';

const BackgroundImage = () => {

  const device = ThisDevice().device
  const styles20 = ThisDevice().styles0

  const myTopBackgroundImage =ThisDevice().device.myCoeffScreen / 10
  return (
    <View style={[styles.container, {
      minWidth: device.width ,
      height: device.heightBody,
      position: 'absolute',
    }]}>
     

      <ImageBackground source={images['laCuisiniere']} 
      // <ImageBackground source={images['pub_Delicatessen']} 
      style={[
        styles.image, 
        {

      }]}
      >
        <View style = {{backgroundColor: '#294e807d', width: '84%',padding:5, margin:'auto'}}>
        <Text style={styles.text}>Vos repas préparés sur Commande </Text>
        <Text style={styles.text}>Vous ne serez pas déçus, c'est Promis .</Text>
        </View>
        {/* <Text style={styles.text}>Text upon Background</Text> */}
      </ImageBackground>
    </View>
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: 400,
    minHeight: 400
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000a0',
    backgroundColor: 'transparent',
  },
});

export default BackgroundImage;