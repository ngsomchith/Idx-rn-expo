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
import PickerPageName from '@/components/articlesQte/PickerPageName';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from "@/constants/Colors";
import { Icon } from 'react-native-elements';
import { pdjTitleSushi, pdjTitleTradit } from '@/components/articlesQte/pdjTitleObject0';

export default function TabTwoScreen() {

  const thisUseFB = useFb('articles/seller2/articlesList')
  const [articlesList, setArticlesList] = useState(Array<ArticleType>)

  // État pour le panier
  const [cart, setCart] = useState([]);

  const addToCart = (article: any) => {
    setCart((prevCart: any) => {
      // Vérifie si l'article est déjà dans le panier
      const existingItem = prevCart.find((item: any) => item.id === article.id);

      if (existingItem) {
        // Augmente la quantité
        return prevCart.map((item: any) =>
          item.id === article.id ? { ...item, qte: item.qte + 1 } : item
        );
      }

      // Ajoute l'article avec une quantité initiale de 1
      return [...prevCart, { ...article, qte: 1 }];
    });
  };

  const removeFromCart = (article: any) => {
    setCart((prevCart: any) => {
      return prevCart
        .map((item: any) =>
          item.id === article.id ? { ...item, qte: item.qte - 1 } : item
        )
        .filter((item: any) => item.qte > 0); // Supprime les articles avec une quantité de 0
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


  const [categoryName, setcategoryName] = useState('')
  const [pdjRayon, setPdjRayon] = useState([])

  const callBackFromPickerName = (data: any) => {
    console.log('callBackFromPickerName articles 72', data)

    // const myDocs:any =[]
    // data.forEach((element:any) => {
    //   console.log("callBackFromPickerName ", element)
    //   myDocs.push(element)
    // });

    // console.log('myDocs', myDocs)
    console.log('setPdjRayon /  data[0]', data[0])
    setcategoryName(data[0])
    if(data[1] && data[1].length>0){
      console.log('setPdjRayon /  data[1]', data[1])
      setPdjRayon(data[1])
    }else{
      console.log('setPdjRayon length  /  data[1]', data[1].length)
    }


  }


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([])
  const DropDownMenu = ({ pdjRayon }) => {
    // const pdjRayon = pdjTitleSushi
    console.log("DropDownMenu", 'articlesListByCat ?')
    const items2: any = [];
    if (
      pdjRayon &&
      pdjRayon?.length > 0
    ) {
      pdjRayon.forEach((element: any) => {
        console.log("DropDownMenu 925 -------------------- ", element)

        if (element && element.key != 'pdj') {
          items2.push({
            key: element.key,
            label: element.name,
            items, element,
            value: element.key,
            details: element.details
          })
        }
      });
    }
    console.log("937DropDownMenu items2", items2)
    // setPdjRayon(items2)

    useEffect(() => {
      console.log("value ", value, pdjRayon)

      // console.log("categorySelected ", categorySelected)
      // if (value && value != '' && value != null) {
      //   setCategorySelected(true)
      // }
      // setCurrentPdjType('value')


      const getItemByValue = pdjRayon && pdjRayon.length > 0
        && pdjRayon.filter((item: any) => item.key === value);

      console.log("value, items? ", value, getItemByValue)
      // setcategoryName(getItemByValue && getItemByValue[0]?.name)
      // setcategoryDetail(getItemByValue && getItemByValue[0]?.detail)

    }, [value, pdjRayon])

    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items2}
        setOpen={setOpen}
        setValue={setValue}
        // setItems={setItems}
        style={styles.dropdown}
        placeholder= {"Choississez"} 
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.text}
        placeholderStyle={styles.placeholder}
        ArrowUpIconComponent={({ style }) => (
          <Icon
            name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color={open ? "white" : "white"} // Change de couleur selon l'état
          // style={style}
          />
        )} ArrowDownIconComponent={({ style }) => (
          <Icon
            name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color={open ? "white" : "white"} // Change de couleur selon l'état
          // style={style}
          />
        )}
      />

    )
  }
  const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        height:40,
        width: '50%',
        // padding: 20,
        backgroundColor: Colors.highlightBG,
    },
    dropdown: {
        width: '45%',
        marginBottom: 20,
        backgroundColor: Colors.highlightBG,
    },
    dropdownContainer: {
        backgroundColor: Colors.highlightBG,
    },
    dataContainer: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 10,
        fontSize: 16,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#eeeeee",
    },
    placeholder: {
        fontSize: 16,
        color: "#888888",
        textAlign: "center",
        marginTop: 20,
    },
    text: {
      color: Colors.primaryText,
      fontSize: 18,
      // borderColor: 'white', borderStyle: 'solid',borderWidth: 2,
    }, iconStyle: {
      color: Colors.primaryText
    }
});

  return ( // global


    <View style={{
      width: MAXWIDTH,
      maxWidth: '100%',
      margin: 0,
      padding: 0,
      height: myDevice.heightBody,
      borderColor: 'yellow', borderStyle: 'solid', borderWidth: 5,
      left: 0,
      position: 'relative',
      top: 0
    }}>

      <Header addToCart={addToCart} removeFromCart={removeFromCart}
        articlesList={articlesList} cart={cart}

        navigation={undefined} route={undefined} callback={undefined} showPanierViewModal={undefined} scrollY0={undefined} scrollX0={undefined} commande={undefined}
      />
      <View style={{width:'100%', flexDirection:'row', zIndex:9}}>
      <PickerPageName callback={callBackFromPickerName} />
     
      {/* {pdjRayon && pdjRayon.length>0 &&  <DropDownMenu pdjRayon={pdjRayon && pdjRayon.length>0} />} */}
      {categoryName ==='Sushi' && <DropDownMenu pdjRayon={pdjTitleSushi} />}
        {categoryName ==='Traditionnels' && <DropDownMenu pdjRayon={pdjTitleTradit} />}
      </View>
      <ArticlesQteToShow articlesList={articlesList} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
    </View>

  );
}
