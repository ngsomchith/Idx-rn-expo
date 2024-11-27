
import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedTitle } from './ThemedTitle'; // Assurez-vous d'importer ThemedTitle
import { ThemedText } from './ThemedText'; // Assurez-vous d'importer ThemedText
import { Button } from 'react-native-elements'; // Ou votre composant Button préféré
import images from '../constants/images';
import ThisDevice from '../constants';
import { ExternalLink } from './ExternalLink';
export const ArticleCard = ({ title, imageUrl,url, slogan, courtPresentation, onActionPress }) => {


  const myDevice = ThisDevice
  let myImage = '../assets/images/image-1achete-1offert.png'

  useEffect(() => {
    console.log("imageUrl ", imageUrl)
  }, imageUrl)

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

const styles = {

  rowContainerWrap: {
    width: ThisDevice.MAXWIDTH,
    MAXWIDTH: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderColor: 'coral', borderStyle: 'solid', borderWidth: 5,
  },
  cardContainer: {

    width: '40%',
    padding: 20,
    margin: 10,
    display: 'flex',
    borderRadius: 10,
    borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
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


