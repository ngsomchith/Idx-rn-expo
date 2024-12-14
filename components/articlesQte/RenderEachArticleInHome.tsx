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

const RenderEachArticleInHome = ({
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


  // const incrementQuantity = () => {
  //   menuN.qte++;
  //   addToCart(menuN);
  //   const updatedMenuN = { ...menuN, qte:( Number(menuN.qte + 1)).toString() };
  //   // Assurez-vous que `addToCart` accepte le nouvel objet
  //   setQte(updatedMenuN.qte);
  //   console.log("updatedMenuN ", menuN.qte, menuN)
  //   console.log("updatedMenuN ", updatedMenuN)
  // };
  
  // const decrementQuantity = () => {
  //   if (menuN.qte > 0) {
  //     menuN.qte--;
  //     removeFromCart(menuN);
  //     const updatedMenuN = { ...menuN, qte: menuN.qte - 1 };
  //     removeFromCart(menuN);
  //     setQte(updatedMenuN.qte);
  //   }
  // };
  


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

  return (
    <View style={styles.articleContainer}>
      <View
        style={[
          styles.articleContent,
          { backgroundColor: menuN.qte > 0 ? Colors.highlightBG : Colors.accentBG },
        ]}
      >
        <ModalMenuN menuN={menuN} />
        {renderPriceSection()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    articleContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%', // maxHeightArticle,
    },
    articleContent: {
      flexDirection: 'column',
      width: '100%',
      paddingHorizontal: 5,
      height: '100%',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    priceSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      backgroundColor:'white',
      padding:3,
      fontSize: 16,
      transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
    },
    rotatedText: {
      fontSize: 18,
      color: '#333',
      transform: [{ rotate: '-30deg' }], // Rotation de 45 degrés
    },
    price: {
      fontSize: 16,
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
  });
  

export default RenderEachArticleInHome;
