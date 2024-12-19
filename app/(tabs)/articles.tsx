import { StyleSheet, Image, Platform, View, Text, TextInput, Pressable, FlatList } from 'react-native';
import ArticlesQteToShow from '@/components/articlesQte/ArticlesQteToShow';
import ThisDevice from '@/constants/ThisDevice';
import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
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
import FlatListArticles from '@/components/articlesQte/FlatListArticles';
import { takeOffAccent } from '@/components/services/DataServices';
import SearchableList from '@/components/articlesQte/SearchableList';
import { useAuth } from '../AuthContext';

export default function TabTwoScreen() {
  const [currentPdjType, setCurrentPdjType] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [pdjRayon, setPdjRayon] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const myDevice = ThisDevice().device;
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH;
  const widthMobile = 650;

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<Array<ArticleType>>([]);

  const {articlesList, setArticlesList, thisUseFB, cart,setCart,addToCartFn,removeFromCartFn} = useAuth()

  // const [cart, setCart] = useState([]);
  const addToCart = addToCartFn ;


  const removeFromCart = removeFromCartFn ;



  useEffect(() => {
    if (articlesList.length === 0 && thisUseFB.articlesList) {
      setArticlesList(thisUseFB.articlesList);
      setFilteredData(thisUseFB.articlesList); // Initialiser filteredData
    }
  }, [thisUseFB, articlesList]);

  useEffect(() => {
    filteredData.length > 0 && console.log("articles70 filteredData mise à jour:", filteredData);
  }, [filteredData]);

  useEffect(() => {
    if (search === '') {
      setFilteredData(articlesList);
    } else {
      console.log("articlesList / filter ", articlesList)
      const resultFilter = articlesList.filter((item) => {
        const itemData = item.name?.toUpperCase() || "";
        const textData = takeOffAccent(search.toUpperCase());
        console.log("itemData.includes(textData) ", itemData.includes(textData))
        return itemData.includes(textData);
      });
      setFilteredData(resultFilter);
    }
  }, [search, articlesList]);

  const callBackFromPickerName = (data: any) => {
    console.log("articles89 callBackFromPickerName data =", data)
    console.log("data[0] =", data[0])
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
      flex: 1,
      backgroundColor: Colors.background,
      borderColor: 'yellow', borderStyle: 'solid', borderWidth: 1,
    },
    headerContainer: {
      height: 100,
    },
    headerRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      backgroundColor: Colors.primaryBG,
      zIndex: 9,
    },
    dropdown: {
      width: '58%',
      backgroundColor: Colors.highlightBG,
    },
    dropdownContainer: {
      width: '100%',
      backgroundColor: Colors.highlightBG,
      borderColor: Colors.primaryText,
    },
    placeholder: {
      width: '100%',
      fontSize: 16,
      color: '#888',
      textAlign: 'center',
    },
    text: {
      width: '100%',
      color: Colors.primaryText,
      fontSize: 18,
    },
    container: {
      flex: 1,
      // backgroundColor: 'grey',
    },
    searchBar: {
      height: 60,
      minHeight: 40,
      backgroundColor: '#294e80',
      borderRadius: 10,
    },
    // ... autres styles
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          articlesList={articlesList}
          cart={cart}
          navigation={undefined}
        />
      </View>
      <View style={styles.headerRow}>
        <PickerPageName callback={callBackFromPickerName} />
        {categoryName === 'Sushi' && <DropDownMenu pdjRayon={pdjTitleSushi} />}
        {categoryName === 'Traditionnels' && <DropDownMenu pdjRayon={pdjTitleTradit} />}
      </View>
      {categoryName !== 'Tout' ? (

        // <View>
        //   <Text style={{ color: 'white' }}>ArticlesQteToShow</Text>
        // </View>
        <ArticlesQteToShow
          articlesList={articlesList}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
          currentPdjType={currentPdjType} //pdjType résulté par DropDownMenu
        />

      ) : (
        // <View>
        //   <Text style={{ color: 'white' }}>SearchableList</Text>
        // </View>
        <SearchableList
          search={search}
          setSearch={setSearch}
          filteredData={filteredData}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}
    </View>
  );
}
