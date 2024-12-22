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
import { ThemedTitle } from '../ThemedTitle';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

const RenderEachArticleFullPage = ({
  articlesFilteredToWrap,
  maxHeightArticle,
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

  const myDevice = ThisDevice().device
  const widthMobile = 450
  const sectionPriceHeight = 60
  const widthMobileOrWeb = MAX_WIDTH > widthMobile ? widthMobile * .4 : '100%'

  const padHorizNotMobile = MAX_WIDTH > widthMobile ? '10%' : 0

  const thisBackGround = menuN?.qte > 0 ? Colors.highlightBG : Colors.accentBG
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
    <ThemedView style={styles.menuContainer}>
      <View style={{//name
        height: 70, maxHeight: 70,
        // borderWidth: 5,
        // borderColor: 'green',
        // borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 0
      }}>
        <ThemedText type="subtitle" style={[styles.menuTitle, {

        }]}>{menuN?.name}
        </ThemedText>
      </View>
      <ThemedView style={styles.descriptionContainer}>
        <ThemedView //imageViewer
          style={[styles.imageContainer, {
            // width: widthMobileOrWeb,
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            backgroundColor: thisBackGround,
            // borderWidth: 5,
            // borderColor: 'blue',
            // borderStyle: 'solid',
            height: widthMobileOrWeb
          }]}>
          {/* <ThemedText style={styles.icon}>{iconSearchPlus}</ThemedText> */}
          <ImageViewer placeholderImageSource={menuN?.img} />
          {menuN &&
            menuN.pdjType === 'promo'
            // && menuN.qte >= 1
            &&
            <ThemedText style={[styles.texteArticlePrix, {
              fontSize: 20,
              width: 100,
              // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
              display: 'flex', justifyContent: 'flex-end',
              paddingHorizontal: 5,
              alignItems: 'flex-end',
              // color: Colors.primaryText,
              color: 'white',
              position: 'absolute',
              backgroundColor: 'green',
              left: '10%',
              top: '10%',
              borderRadius: 5,
              padding: 10,
              borderWidth: 5,
              borderColor: 'white',
              borderStyle: 'solid',
            }]}>
              {/* + {Math.round((menuN.qte / 2) - 0.5)} gratuit */}
              + 1 gratuit
            </ThemedText>
          }
        </ThemedView>
        <ThemedText type="default" style={[styles.imageDescription, {

          width: '100%',
          // color: 'white',
          fontSize: 16,
          // borderWidth: 5,
          // borderColor: 'green',
          // borderStyle: 'solid',

        }]}
        // style={styles.icon}
        >{menuN?.explication}
        </ThemedText>

      </ThemedView>

      {/* <ThemedView style={styles.figCaption}>
        <ThemedText style={styles.description}>{menuN?.description}</ThemedText>
        {renderDateContent()}
      </ThemedView> */}
    </ThemedView>
  );

  const renderPriceSection = () => (
    <ThemedView style={styles.priceSection}>
      {menuN?.prixbarre > 0 && (
        <ThemedText style={[styles.strikethroughPrice, {
          position: 'absolute', top: -20
        }]}>
          {Number(menuN.prixbarre).toFixed(2)}€
        </ThemedText>
      )}
      {menuN?.prix > 0 && (
        <ThemedText style={styles.price}>{Number(menuN.prix).toFixed(2)}€</ThemedText>
      )}
      <ThemedView style={styles.quantityControls}>
        <Pressable style={styles.quantityButton} onPress={decrementQuantity}>
          <ThemedText style={styles.quantityButtonText}>-</ThemedText>
        </Pressable>
        <TextInput
          style={styles.quantityInput}
          editable={false}
          value={String(qte)}
        />
        <Pressable style={styles.quantityButton} onPress={incrementQuantity}>
          <ThemedText style={styles.quantityButtonText}>+</ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );




  const styles = StyleSheet.create({
    articleContainer: {
      borderColor: thisBackGround, borderStyle: 'solid', borderWidth: 8,
      borderRadius: 18
    },
    articleContent: {
    },
    priceSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 8,
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
      height: sectionPriceHeight,
      borderRadius: 10,
      backgroundColor: thisBackGround, // Couleur de fond pour une meilleure visibilité
    },
    strikethroughPrice: {
      textDecorationLine: 'line-through',
      color: 'red',
      backgroundColor: 'white',
      padding: 3,
      position:'absolute',
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
      borderColor: Colors.primaryBG, borderStyle: 'solid', borderWidth: 3,
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
      // borderWidth: 5,
      // borderColor: 'yellow',
      // borderStyle: 'solid',
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
      backgroundColor: thisBackGround,
      justifyContent: 'flex-start',
      // flexWrap: 'nowrap',
      width: '100%',
      minHeight: maxHeightArticle - sectionPriceHeight,
      height: '100%',// maxHeightArticle - sectionPriceHeight, //MAX_WIDTH > widthMobile ? 400 : 350,

      // borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
      // backgroundColor: 'transparent'
    },

    descriptionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      flex: 1,
      maxWidth: '100%',
      backgroundColor: thisBackGround,
      // borderWidth: 5,
      // borderColor: 'pink',
      // borderStyle: 'solid',
      height: '80%',
      maxHeight:MAX_WIDTH > widthMobile ?  widthMobile *.8 : widthMobile * 1.5 ,
      overflow: 'hidden',  
    },
    menuTitle: {
      color: 'white',
      fontSize: 20,
      width: '100%',
      margin: 0,
      textAlign: 'center',
      overflow: 'hidden',
      backgroundColor:thisBackGround,
      padding: 0,
      height: 70,
      // minHeight: 70,
      maxHeight: 70,
      paddingVertical: 0,
      // backgroundColor:Colors.accentBG
    },
    imageContainer: {
      height: widthMobileOrWeb,
      width: widthMobile,
      maxHeight: widthMobile
    },
    imageDescription: {
      display: 'flex',
      height: widthMobile * .3,
      maxHeight: widthMobile * .3,
      overflow: 'hidden',
      backgroundColor: thisBackGround,
      // borderWidth: 10,
      // borderColor: 'white',
      // borderStyle: 'solid',
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
      // minHeight: 60,
      flex: 1,
      display: 'flex',
      // maxHeight: 60,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: -60,
      backgroundColor: thisBackGround,
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
      backgroundColor: thisBackGround,
      // minHeight:50,
      maxHeight: 64,
      margin: 0,
      padding: 0
    },
    // dateContainer: {
    //   width: '100%',
    //   marginVertical: 5,
    // },
    // dateText: {
    //   backgroundColor: Colors.highlightBG,
    //   color: Colors.primaryText,
    //   fontSize: 16,
    // },
    // lienContainer: {
    //   flex: 1,
    //   width: '100%',
    //   backgroundColor: '#ecf0f1',
    //   marginVertical: 10,
    //   borderRadius: 10,
    //   // borderColor: 'gold',
    //   // borderWidth: 5,
    //   // borderStyle: 'solid',
    //   // minHeight: device.heightBody,
    //   justifyContent: 'space-around',
    // },
    // lienContent: {
    //   height: '80%',
    //   width: '100%',
    //   justifyContent: 'space-around',
    //   // borderWidth: 3,
    //   // borderColor: 'white',
    // },
    // lienTitle: {
    //   color: 'white',
    //   fontSize: 26,
    // },
    // lienButtonContainer: {
    //   marginVertical: 20,
    //   padding: 10,
    //   borderRadius: 18,
    //   width: '80%',
    //   alignItems: 'center',
    // },
    // lienButton: {
    //   color: 'white',
    //   fontSize: 26,
    // },
    // modalHeader: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   marginVertical: 10,
    //   // borderWidth: 5,
    //   // borderColor: 'pink',
    //   // borderStyle: 'solid',
    // },
    // modalTitle: {
    //   fontSize: 30,
    // },
    // modalContent: {
    //   width: '100%',
    //   height: '100%',
    //   minWidth: 100,
    //   minHeight: '100%',
    //   maxHeight:'100%',
    //   display: 'flex',
    //   justifyContent: "flex-start",
    //   backgroundColor: 'coral',
    //   alignItems: "center",
    //   padding: 10,
    //   // borderWidth: 3,
    //   // borderColor: 'yellow',
    // },
  });

  return ( //global
    <ThemedView style={[styles.articleContainer, {
      minWidth: '100%',
      maxWidth: '100%',
      height: '100%',
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 10,
    }]}>
      <ThemedView
        style={[
          styles.articleContent,

          {
            backgroundColor: menuN?.qte > 0 ? Colors.highlightBG : Colors.accentBG,
            flexDirection: 'column',
            width: '100%',
            minWidth: '100%',
            minHeight: '100%',
            paddingHorizontal: 5,
            height: maxHeightArticle,//height of price section

            borderRadius: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            // borderColor: 'coral',
            // borderWidth: 5,
            // borderStyle: 'solid',
          },
        ]}
      >
        {/* <ModalMenuN menuN={menuN} /> */}
        {renderMenuContent()}
        {renderPriceSection()}
      </ThemedView>
    </ThemedView>
  );
};



export default RenderEachArticleFullPage;
