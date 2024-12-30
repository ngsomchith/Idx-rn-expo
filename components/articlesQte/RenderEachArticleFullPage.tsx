import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
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
  buttonGoToMenu,
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
 
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
  
    const widthMobile = 450
    const sectionPriceHeight = 60
    const widthMobileOrWeb = MAX_WIDTH > widthMobile ? '40%' : '100%'
  
  
    const widthArticle = screenWidth > widthMobile ? screenWidth * 0.4 : widthMobile
    const heightArticle = screenHeight - 100
    const widthContainerArticle = screenWidth


  const padHorizNotMobile = MAX_WIDTH > widthMobile ? '10%' : 0

  const thisBackGround = menuN?.qte > 0 ? Colors.highlightBG : Colors.accentBG
  // useEffect(() => {
  //   if (scrollY0 > 0 && scrollY0 !== scrollYLastVal) {
  //     setTimeout(() => {
  //       if (updateScrollValue) {
  //         setScrollYLastVal(scrollY0);
  //         setScrollXLastVal(scrollX0);
  //       }
  //     }, 500);
  //   }
  // }, [scrollY0, scrollX0]);


    useEffect(() => {
      console.log("RFullPage62 qte ", qte)
    }, [qte])

  const incrementQuantity = () => {
    menuN.qte++;
    console.log("RFullPage67 incrementQuantity",menuN.qte )
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

        }]}>{menuN?.name.indexOf('Fondu')<0 ? menuN?.name :'Fondu pour 2' }
        </ThemedText>
      </View>
      <ThemedView style={styles.descriptionContainer}>
        <ThemedView //imageViewer
          style={[styles.imageContainer, {
            // width: widthMobileOrWeb,
            width: '100%',
            maxWidth: '100%',
            minHeight:MAX_WIDTH > widthMobile ? 300 : 200 ,
            maxHeight: MAX_WIDTH > widthMobile ? 300 : 200 ,
            position: 'relative',
            backgroundColor: thisBackGround,
            // borderWidth: 5,
            // borderColor: 'blue',
            // borderStyle: 'solid',
            height: widthMobileOrWeb
          }]}>
            
          <ImageViewer placeholderImageSource={menuN?.img} />
          {menuN &&
            menuN?.ref === "topV175"
            // && menuN.qte >= 1
            ?
            <Text style={[styles.texteArticlePrix, { //  + 1 gratuit
              fontSize: 20,
              width: 220,
              textAlign:'center',
              // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
              display: 'flex', justifyContent: 'center',
              paddingHorizontal: 5,
              alignItems: 'center',
              // color: Colors.primaryText,
              color: 'white',
              position: 'relative',
              backgroundColor: 'green',
              right: 0,
              top: -50,
              borderRadius: 5,
              padding: 10,
              borderWidth: 5,
              borderColor: 'white',
              borderStyle: 'solid',
              zIndex: 999
            }]}>
              {/* + {Math.round((menuN.qte / 2) - 0.5)} gratuit */}
              1 Acheté = 1 Offert
            </Text> :
            <></>
            // <Text style={[styles.texteArticlePrix, { //  + 1 gratuit
            //   fontSize: 20,
            //   width: 220,
            //   textAlign:'center',
            //   // height: MAXWIDTH < 400 || myCoeffScreen < 1 ? '100%' : '30%',
            //   display: 'flex', justifyContent: 'center',
            //   paddingHorizontal: 5,
            //   alignItems: 'center',
            //   // color: Colors.primaryText,
            //   color: 'white',
            //   position: 'relative',
            //   backgroundColor: 'green',
            //   left: 10,
            //   top: 50,
            //   borderRadius: 5,
            //   padding: 10,
            //   borderWidth: 5,
            //   borderColor: 'white',
            //   borderStyle: 'solid'
            // }]}
            //   >
            //   {menuN?.ref}
            // </Text>
          }
        </ThemedView>
        <ThemedText type="default" style={[styles.imageDescription, {

          width: '100%',
          fontSize: 16,

        }]}
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
      {buttonGoToMenu}
    </ThemedView>
  );




  const styles = StyleSheet.create({

    articleContainer: {
      // borderColor: thisBackGround, borderStyle: 'solid', borderWidth: 8,
      borderRadius: 18,
      width: widthContainerArticle,
      maxWidth: '100%',
      // height:heightArticle, // faut pas fixer la hauteur !!!
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 5,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
      backgroundColor: 'transparent',
      paddingHorizontal: 0
    },
    articleContent: {
      width: widthArticle,
      maxWidth: '100%',
      height: heightArticle,
      maxHeight: heightArticle,
      marginHorizontal: 0, //widthMobile *0.1,
      marginVertical: 0,
      paddingVertical: 0,
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: Colors.primaryBG,
      borderRadius: 18,
      // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
    },
    priceSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 2,
      marginVertical: 4,
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 3,
      height: sectionPriceHeight,
      minHeight: sectionPriceHeight,
      borderRadius: 10,
      backgroundColor: thisBackGround, // Couleur de fond pour une meilleure visibilité
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: thisBackGround,
      justifyContent: 'flex-start',
      width: '100%',
      maxHeight: heightArticle - 80,
      // height: heightBody *.8, // ne pas fixer hauteur !!!
      borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
    },
    quantityControls: {
      display: 'flex',
      flexDirection: 'row',
      width: 120,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      maxHeight: '100%',
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
    },
    quantityButton: {
      backgroundColor: Colors.highlightBG, // Couleur plus visible
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minHeight: 36,
      width: 30, // Augmentation pour une meilleure cliquabilité
      position: 'static',
      margin: 0,
      elevation: 3, // Ombre pour plus de profondeur
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 1,
    },
    quantityButtonText: {
      fontSize: 20, // Texte plus grand
      fontWeight: 'bold',
      color: 'white',
    },
    qteInputContainer: {
      maxWidth: 30,
    },
    quantityInput: {
      width: 26,
      textAlign: 'center',
      borderRadius: 5,
      paddingVertical: 5,
      fontSize: 18,
      backgroundColor: Colors.accentBG,
      // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 1,
    },



    texteArticlePrix: {
      borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
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
      height: MAX_WIDTH > widthMobile ?  widthMobile *.8 : widthMobile * 1,
      maxHeight:MAX_WIDTH > widthMobile ?  widthMobile *.8 : widthMobile * 1 ,
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
  });

  return ( //global
    <ThemedView style={[styles.articleContainer, {
      minWidth: '100%',
      maxWidth: '100%',
      height: '100%',
      // borderColor: 'white', borderStyle: 'solid', borderWidth: 5,
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
            paddingHorizontal: 0,
            height: maxHeightArticle,//height of price section
            maxHeight: '100%',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            // borderColor: 'yellow',
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
