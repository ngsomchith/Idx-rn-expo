
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
import ArticleCard from './ArticlesCard';



export const ArticleList = ({ articlesList }) => {
  console.log(" 96ArticleList device ", articlesList)
  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH

  const styles = {

    rowContainerWrap: {
      width: MAXWIDTH,
      maxWidth: '100%',
      padding: 0,
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
    <View style={{
      width: '100%',
      minHeight: 400,
      maxWidth: '100%',
      backgroundColor: 'pink',
      margin: 'auto'
    }}>
      <ScrollView
        contentContainerStyle={
          styles.rowContainerWrap
        }
      >

        {articlesList.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </ScrollView>
    </View >

  );
};




