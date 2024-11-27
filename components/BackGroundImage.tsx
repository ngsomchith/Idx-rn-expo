import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import images from '../constants/images';
// import { myPLatform } from '../config/firebase';
// import { myStyles } from './style';
import ThisDevice from '../constants/ThisDevice';

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
     

      <ImageBackground source={images['livreursToulon']} 
      // <ImageBackground source={images['pub_Delicatessen']} 
      style={[
        styles.image, 
        {

      }]}
      >
        <Text style={styles.text}>Commander vos repas </Text>
        <Text style={styles.text}>Directement</Text>
        {/* <Text style={styles.text}>Background</Text> */}
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