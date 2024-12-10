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
  const thisUseFB = useFb('articles/seller2/articlesList');
  const [articlesList, setArticlesList] = useState<Array<ArticleType>>([]);
  const [currentPdjType, setCurrentPdjType] = useState('');
  const [cart, setCart] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [pdjRayon, setPdjRayon] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const myDevice = ThisDevice().device;
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH;
  const widthMobile = 650;

  const addToCart = (article: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === article.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === article.id ? { ...item, qte: item.qte + 1 } : item
        );
      }
      return [...prevCart, { ...article, qte: 1 }];
    });
  };

  const removeFromCart = (article: any) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === article.id ? { ...item, qte: item.qte - 1 } : item
        )
        .filter((item) => item.qte > 0)
    );
  };

  useEffect(() => {
    if (articlesList.length === 0 && thisUseFB.articlesList) {
      setArticlesList(thisUseFB.articlesList);
    }
  }, [thisUseFB, articlesList]);

  const callBackFromPickerName = (data: any) => {
    setCategoryName(data[0]);
    if (data[1] && data[1].length > 0) {
      setPdjRayon(data[1]);
    }
  };

  const DropDownMenu = ({ pdjRayon }: { pdjRayon: any[] }) => {
    const items2: any = [];
    pdjRayon.forEach((element) => {
      if (element && element.key !== 'pdj') {
        items2.push({
          key: element.key,
          label: element.name,
          value: element.key,
        });
      }
    });

    useEffect(() => {
      if (value) {
        setCurrentPdjType(value);
      }
    }, [value, pdjRayon]);

    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items2}
        setOpen={setOpen}
        setValue={setValue}
        style={styles.dropdown}
        placeholder="Choisissez"
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.text}
        placeholderStyle={styles.placeholder}
        ArrowUpIconComponent={() => (
          <Icon name="keyboard-arrow-up" size={24} color="white" />
        )}
        ArrowDownIconComponent={() => (
          <Icon name="keyboard-arrow-down" size={24} color="white" />
        )}
      />
    );
  };

  const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
      maxWidth: '100%',
      padding: 10,
      height: '100%',
      backgroundColor: Colors.background,
    },
    headerRow: {
      width:'100%',
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      backgroundColor: Colors.primaryBG,
      zIndex: 9,
    },
    dropdown: {
      width: '52%',
      marginHorizontal:'1%',
      backgroundColor: Colors.highlightBG,
      // borderColor: Colors.primaryText,
      borderColor: 'green', borderStyle: 'solid', borderWidth: 2,
    },
    dropdownContainer: {
      width:'100%',
      backgroundColor: Colors.highlightBG,
      borderColor: Colors.primaryText,
    },
    placeholder: {
      width:'100%',
      fontSize: 16,
      color: '#888',
      textAlign: 'center',
    },
    text: {
      width:'100%',
      color: Colors.primaryText,
      fontSize: 18,
      // borderColor: 'white', borderStyle: 'solid',borderWidth: 2,
    }, iconStyle: {
      color: Colors.primaryText
    },
    headerContainer: {
      height: 100
    },
    header: {
      margin: 0,
      padding: 0
    }
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          articlesList={articlesList}
          cart={cart} navigation={undefined} />
      </View>
      <View style={styles.headerRow}>
        <PickerPageName callback={callBackFromPickerName} />
        {categoryName === 'Sushi' && <DropDownMenu pdjRayon={pdjTitleSushi} />}
        {categoryName === 'Traditionnels' && (
          <DropDownMenu pdjRayon={pdjTitleTradit} />
        )}
      </View>
      <ArticlesQteToShow
        articlesList={articlesList}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
        currentPdjType={currentPdjType}
      />
    </View>
  );
}

