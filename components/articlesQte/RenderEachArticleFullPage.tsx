import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { ArticleType } from '@/app/models/ArticleType';
import { myStyles } from '../myStyle';
import ThisDevice from '@/constants/ThisDevice';
import ImageViewer from '../ImageViewer';
import { Colors } from '@/constants/Colors';
import ModalMenuN from './ModalMenuN';
import images from '@/constants/images';
import { iconSearchPlus } from '@/icons';

const RenderEachArticleFullPage = ({
  articlesFilteredToWrap,
  addToCart,
  removeFromCart,
  menuN,
  scrollY0,
  scrollX0,
  updateScrollValue,
}) => {
  const [scrollXLastVal, setScrollXLastVal] = useState(0);
  const [scrollYLastVal, setScrollYLastVal] = useState(0);
  const [qte, setQte] = useState(menuN?.qte || 0);

  const MAX_WIDTH = ThisDevice().device.width - 5;
  const maxHeightArticle = 230;

  const myDevice = ThisDevice().device
  const widthMobile = 650
  const widthMobileOrWeb = MAX_WIDTH > widthMobile ? '40%' : '100%'

  const padHorizNotMobile = MAX_WIDTH > widthMobile ? '10%' : 0

  useEffect(() => {
    if (scrollY0 > 0 && scrollY0 !== scrollYLastVal) {
      setTimeout(() => {
        if (updateScrollValue) {
          setScrollYLastVal(scrollY0);
          setScrollXLastVal(scrollX0);
        }
      }, 500);
    }
  }, [scrollY0, scrollX0]);

  const incrementQuantity = () => {
    menuN.qte++;
    addToCart(menuN);
    setQte(menuN.qte);
  };

  const decrementQuantity = () => {
    if (menuN.qte > 0) {
      menuN.qte--;
      removeFromCart(menuN);
      setQte(menuN.qte);
    }
  };

  const renderMenuContent = () => (
    <View style={styles.menuContainer}>
      <Text style={[styles.menuTitle, {
        color: Colors.primaryText,
        fontSize: 20,
        width: '100%',
        margin: 0,
        textAlign: 'center',
        overflow: 'hidden',
        padding: 0,
        height: 50,
      }]}>{menuN?.name}</Text>

<View style={styles.descriptionContainer}>
      <View style={[styles.imageContainer, {
        // width: widthMobileOrWeb,
        width: '100%',
        maxWidth:'100%',
        height: '80%',
        borderWidth: 5,
        borderColor: 'blue',
        borderStyle: 'solid',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
      }]}>
        <Text style={styles.icon}>{iconSearchPlus}</Text>
        <ImageViewer placeholderImageSource={menuN?.img} />
      </View>
      <Text style={[styles.imageDescription, {

        // width: widthMobileOrWeb,
        width: '100%',
        // height: '90%',
        color: 'white',
        
        borderWidth: 5,
        fontSize: 16,
        borderColor: 'green',
        borderStyle: 'solid',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
      }]}
      // style={styles.icon}
      >{menuN?.description}</Text>
</View>

      {/* <View style={styles.figCaption}>
        <Text style={styles.description}>{menuN?.description}</Text>
        {renderDateContent()}
      </View> */}
    </View>
  );

  const renderPriceSection = () => (
    <View style={styles.priceSection}>
      {menuN?.prixbarre > 0 && (
        <Text style={[styles.strikethroughPrice, {
          position: 'absolute', top: -20
        }]}>
          {Number(menuN.prixbarre).toFixed(2)}€
        </Text>
      )}
      {menuN?.prix > 0 && (
        <Text style={styles.price}>{Number(menuN.prix).toFixed(2)}€</Text>
      )}
      <View style={styles.quantityControls}>
        <Pressable style={styles.quantityButton} onPress={decrementQuantity}>
          <Text style={styles.quantityButtonText}>-</Text>
        </Pressable>
        <TextInput
          style={styles.quantityInput}
          editable={false}
          value={String(qte)}
        />
        <Pressable style={styles.quantityButton} onPress={incrementQuantity}>
          <Text style={styles.quantityButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );




  const styles = StyleSheet.create({
    articleContainer: {
    },
    articleContent: {
    },
    priceSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 8,
      maxHeight: 60, // Limiter la hauteur
      // borderWidth: 2,
      // borderColor: Colors.primaryText, // Couleur adaptée pour contraste
      borderRadius: 10,
      backgroundColor: Colors.background, // Couleur de fond pour une meilleure visibilité
    },
    strikethroughPrice: {
      textDecorationLine: 'line-through',
      color: 'red',
      backgroundColor: 'white',
      padding: 3,
      fontSize: 16,
      transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
    },
    rotatedText: {
      fontSize: 18,
      color: '#333',
      transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.primaryText,
    },
    quantityControls: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      backgroundColor: Colors.highlightBG, // Couleur plus visible
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: 30, // Augmentation pour une meilleure cliquabilité
      height: 34,
      marginHorizontal: 5,
      elevation: 3, // Ombre pour plus de profondeur
    },
    quantityButtonText: {
      fontSize: 20, // Texte plus grand
      fontWeight: 'bold',
      color: 'white',
    },
    quantityInput: {
      width: 26,
      textAlign: 'center',
      // borderColor: 'gray',
      // borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 5,
      fontSize: 18,
      backgroundColor: Colors.accentBG,
    },

    modalContainer: {
      backgroundColor: 'transparent',
      width: '100%',
      borderWidth: 5,
      borderColor: 'yellow',
      borderStyle: 'solid',
    },
    openModalButton: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 5,
      // borderColor: 'blue',
      // borderStyle: 'solid',
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'space-around',
      // flexWrap: 'nowrap',
      width: '100%',

      height: 500, //MAX_WIDTH > widthMobile ? 400 : 350,
      borderColor: 'pink',
      borderWidth: 3,
    },

    descriptionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      maxWidth: '100%',

      height: MAX_WIDTH > widthMobile ? 450 : 350,
      borderColor: 'red',
      borderWidth: 3,
    },
    menuTitle: {
    },
    imageContainer: {
    },
    imageDescription: {
    },
    icon: {
      position: 'absolute',
      color: 'white',
      fontWeight: '600',
      right: 0,
      zIndex: 999,
    },
    figCaption: {
      width: '100%',
      minHeight: 60,
      flex: 1,
      display: 'flex',
      maxHeight: 60,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: -60,
      backgroundColor: Colors.highlightBG,
      marginVertical: 10,
    },
    description: {
      maxWidth: '90%',
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      overflow: 'hidden',
      color: 'white',
      fontSize: 14,
      height: 64,
      // minHeight:50,
      maxHeight: 64,
      margin: 0,
      padding: 0
    },
    dateContainer: {
      width: '100%',
      marginVertical: 5,
    },
    dateText: {
      backgroundColor: Colors.highlightBG,
      color: Colors.primaryText,
      fontSize: 16,
    },
    lienContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: '#ecf0f1',
      marginVertical: 10,
      borderRadius: 10,
      // borderColor: 'gold',
      // borderWidth: 5,
      // borderStyle: 'solid',
      // minHeight: device.heightBody,
      justifyContent: 'space-around',
    },
    lienContent: {
      height: '80%',
      width: '100%',
      justifyContent: 'space-around',
      borderWidth: 3,
      borderColor: 'white',
    },
    lienTitle: {
      color: 'white',
      fontSize: 26,
    },
    lienButtonContainer: {
      marginVertical: 20,
      padding: 10,
      borderRadius: 18,
      width: '80%',
      alignItems: 'center',
    },
    lienButton: {
      color: 'white',
      fontSize: 26,
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
      // borderWidth: 5,
      // borderColor: 'pink',
      // borderStyle: 'solid',
    },
    modalTitle: {
      fontSize: 30,
    },
    modalContent: {
      width: '100%',
      height: '100%',
      minWidth: 100,
      minHeight: 50,
      justifyContent: "flex-start",
      backgroundColor: 'coral',
      alignItems: "center",
      padding: 10,
      // borderWidth: 3,
      // borderColor: 'yellow',
    },
  });

  return (
    <View style={[styles.articleContainer, {
      minWidth: '100%',
      maxWidth:'100%'
    }]}>
      <View
        style={[
          styles.articleContent,

          {
            backgroundColor: menuN?.qte > 0 ? Colors.highlightBG : Colors.accentBG,
            flexDirection: 'column',
            width: '100%',
            minWidth: '100%',
            paddingHorizontal: 5,
            height: '100%',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderColor: 'coral',
            borderWidth: 15,
            borderStyle: 'solid',
          },
        ]}
      >
        {/* <ModalMenuN menuN={menuN} /> */}
        {renderMenuContent()}
        {renderPriceSection()}
      </View>
    </View>
  );
};



export default RenderEachArticleFullPage;
