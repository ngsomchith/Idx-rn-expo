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
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { number } from 'yup';

const RenderEachArticleInHome = ({
  articlesFilteredToWrap,
  cart,
  addToCart,
  removeFromCart,
  menuN,
  scrollY0,
  scrollX0,
  updateScrollValue,
}) => {
  const [scrollXLastVal, setScrollXLastVal] = useState(0);
  const [scrollYLastVal, setScrollYLastVal] = useState(0);
  const [qte, setQte] = useState(menuN.qte);

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

  const incrementQuantity = (menuN: any) => {
    menuN.qte++;
    console.log("RInHome incrementQuantity menuN.qte = ", menuN.qte, " :: qte = ", qte)
    addToCart(menuN);
    setQte(typeof (qte) == 'number' ? qte + 1 : Number(qte) + 1);
  };

  const decrementQuantity = (menuN: any) => {
    console.log("RInHome decrementQuantity menuN.qte = ", menuN.qte, " :: qte = ", qte)
    if (qte > 0) {
      menuN.qte--;
      removeFromCart(menuN);
      setQte(typeof (qte) == 'number' ? qte - 1 : Number(qte) - 1);
    }
  };

  useEffect(() => {

    menuN.qte > 0 && console.log("RinHome63 qte ", qte, menuN.qte)
    if (menuN.qte > 0) {
      setQte(menuN.qte)
      console.log("RinHome63 qte ", menuN.qte)
    }
  }, [menuN])

  useEffect(() => {
    console.log("RinHome73 qte ", qte, menuN.qte)
    // menuN.qte > 0 // && console.log("RinHome67 qte ", qte, menuN.qte)
    // setQte(menuN.qte)

  }, [qte, menuN])

  const renderPriceSection = (menuN: any) => (
    <ThemedView style={styles.priceSection}>
      {menuN?.prixbarre > 0 && (
        <Text style={[styles.strikethroughPrice, {
          position: 'absolute', top: -20
        }]}>
          {Number(menuN.prixbarre).toFixed(2)}€
        </Text>
      )}
      {menuN?.prix > 0 && (
        <ThemedText style={styles.price}>{Number(menuN.prix).toFixed(2)}€</ThemedText>
      )}
      <ThemedView style={styles.quantityControls}>
        <Pressable style={styles.quantityButton} onPress={() => decrementQuantity(menuN)}>
          <ThemedText style={styles.quantityButtonText}>-</ThemedText>
        </Pressable>
        <TextInput
          style={styles.quantityInput}
          editable={false}
          // value={menuN.qte}
          value={String(qte)}
        />
        {/* <Text style={{color:'yellow'}}>{menuN.qte}/{qte} </Text> */}
        <Pressable style={styles.quantityButton} onPress={() => incrementQuantity(menuN)}>
          <ThemedText style={styles.quantityButtonText}>+</ThemedText>
        </Pressable>
      </ThemedView>
      {/* {buttonGoToMenu} */}
    </ThemedView>
  );



  return (
    <View style={styles.articleContainer}>
      <View
        style={[
          styles.articleContent,
          { backgroundColor: menuN.qte > 0 ? Colors.highlightBG : Colors.accentBG },
        ]}
      >
        <ModalMenuN menuN={menuN}
          articlesFilteredToWrap={undefined}
          buttonGoToMenu={undefined} maxHeightArticle={maxHeightArticle}
          cart={cart} addToCart={addToCart}
          removeFromCart={removeFromCart}
          scrollY0={undefined} scrollX0={undefined}
          updateScrollValue={undefined} />

        {renderPriceSection(menuN)}
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
    // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
  },
  articleContent: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 5,
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: Colors.accentBG, borderStyle: 'solid', borderWidth: 3,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    maxHeight: 40, // Limiter la hauteur
    // borderWidth: 2,
    // borderStyle:'solid',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryText,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10
    // borderColor: 'pink', borderStyle: 'solid', borderWidth: 3,
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