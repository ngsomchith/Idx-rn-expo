
import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedTitle } from '../ThemedTitle'; // Assurez-vous d'importer ThemedTitle
import { ThemedText } from '../ThemedText'; // Assurez-vous d'importer ThemedText
import { Button } from 'react-native-elements'; // Ou votre composant Button préféré
import images from '../../constants/images';
import { ExternalLink } from '../ExternalLink';
import ThisDevice from '@/constants/ThisDevice';
import { device } from '@/constants';


export const ArticleCard = ({ title, imageUrl,url, slogan, courtPresentation, onActionPress }) => {
  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH
  const widthMobile = 650
  const widthMobileOrWeb = MAXWIDTH >widthMobile ? '40%' : '100%'
  console.log("myDevice = ", myDevice)
  let myImage = '../assets/images/image-1achete-1offert.png'

  useEffect(() => {
    console.log("imageUrl ", imageUrl)
  }, [imageUrl])
  const styles = {

    // rowContainerWrap: {
    //   width: MAXWIDTH,
    //   MAXWIDTH: '100%',
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   flexWrap: 'wrap',
    //   borderColor: 'coral', borderStyle: 'solid', borderWidth: 5,
    // },
    cardContainer: {
  
      // minWidth: MAXWIDTH > 300 ? '100%' : '40%',
      width: widthMobileOrWeb ,
      maxWidth: '100%',
      padding: 20,
      marginVertical: 10,
      display: 'flex',
      borderRadius: 10,
      borderColor: MAXWIDTH < 650 ? 'red' : 'yellow', borderStyle: 'solid', borderWidth: 5,
      backgroundColor: 'white', // Couleur de fond par défaut
    },
    title: {
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    text: {
      marginBottom: 10,
      color: 'grey'
    },
    textCenter: {
      marginBottom: 10,
      color: 'grey',
      textAlign: 'center'
    },
    button: {
      // borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
      padding: 15,
      textAlign: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 10
    }
  };

  return (
    <ThemedView style={styles.cardContainer}>
      <ThemedTitle type="title" style={styles.text}>
        {title}
      </ThemedTitle>

      <ThemedText type="subtitle" style={styles.textCenter}>{slogan}</ThemedText>
      <ThemedText style={styles.text}>{courtPresentation}</ThemedText>
      <Image source={images[`${imageUrl}`]} style={styles.image} />

      {/* <Button title="En savoir plus" >/ */}
        <ExternalLink style={styles.button} href= {url}>
          <ThemedText type="link">En savoir Plus</ThemedText>
        </ExternalLink>
      {/* </Button> */}
    </ThemedView>
  );
};

export const ArticleList = ({ articles }) => {
  const myDevice = ThisDevice().device
  console.log("device ", device)
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH

  const styles = {

    rowContainerWrap: {
      width: MAXWIDTH,
      maxWidth: '100%',
      padding:0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      borderColor: 'coral', borderStyle: 'solid', borderWidth: 5,
    },
    // cardContainer: {
  
    //   width: '40%',
    //   padding: 20,
    //   margin: 10,
    //   display: 'flex',
    //   borderRadius: 10,
    //   borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
    //   backgroundColor: 'white', // Couleur de fond par défaut
    // },
    title: {
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    text: {
      marginBottom: 10,
      color: 'grey'
    },
    textCenter: {
      marginBottom: 10,
      color: 'grey',
      textAlign: 'center'
    },
    button: {
      // borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
      padding: 15,
      textAlign: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 10
    }
  };
  return (
    <ScrollView
      contentContainerStyle={
        styles.rowContainerWrap
      }
    >

      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </ScrollView>
  );
};




