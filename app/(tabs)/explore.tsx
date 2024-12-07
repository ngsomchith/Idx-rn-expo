import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ArticlesQteToShow from '@/components/articlesQte/ArticlesQteToShow';
import ThisDevice from '@/constants/ThisDevice';
import Panier from '@/components/articlesQte/Panier';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { ArticleType } from '../models/ArticleType';
import { useFb } from '@/hooks/useFb';

export default function TabTwoScreen() {

  const thisUseFB = useFb('articles/seller2/articlesList')
  const [articlesList, setArticlesList] = useState(Array<ArticleType>)
  
  // État pour le panier
  const [cart, setCart] = useState([]);
  
  const addToCart = (article:any) => {
    setCart((prevCart:any) => {
      // Vérifie si l'article est déjà dans le panier
      const existingItem = prevCart.find((item:any) => item.id === article.id);
  
      if (existingItem) {
        // Augmente la quantité
        return prevCart.map((item:any) =>
          item.id === article.id ? { ...item, qte: item.qte + 1 } : item
        );
      }
  
      // Ajoute l'article avec une quantité initiale de 1
      return [...prevCart, { ...article, qte: 1 }];
    });
  };
  
  const removeFromCart = (article:any) => {
    setCart((prevCart:any) => {
      return prevCart
        .map((item:any) =>
          item.id === article.id ? { ...item, qte: item.qte - 1 } : item
        )
        .filter((item:any) => item.qte > 0); // Supprime les articles avec une quantité de 0
    });
  };
 
  useEffect(() => {
    // articlesList.length > 0 && console.log("articlesList18 ", articlesList)
    if (articlesList.length === 0 && thisUseFB.articlesList) {
      setArticlesList(thisUseFB.articlesList)
    }
  }, [thisUseFB, articlesList])

  useEffect(() => {
    console.log("cart useEffect expplore56  ", cart)
  }, [cart])

  
  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH
  const widthMobile = 650
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

  return (

    <ParallaxScrollView
    
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
        // style={styles.headerImage}
        />
      }>

      <View style={{ 
        width: MAXWIDTH,
        maxWidth:'100%',
        margin:0,
        padding:0,
        height: myDevice.heightBody,
        borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
        left:0,
        position:'relative',
        top: 0
        }}>

      <Header addToCart = {addToCart} removeFromCart = {removeFromCart} 
        articlesList={articlesList} cart ={cart}

         navigation={undefined} route={undefined} callback={undefined} showPanierViewModal={undefined} scrollY0={undefined} scrollX0={undefined} commande={undefined}
      />
        <ArticlesQteToShow articlesList = {articlesList} addToCart = {addToCart} removeFromCart = {removeFromCart}  cart= {cart} />
      </View>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
