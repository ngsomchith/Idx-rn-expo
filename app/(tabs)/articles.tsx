import { StyleSheet, Image, Platform, View, Text, TextInput, Pressable, FlatList } from 'react-native';
import ArticlesQteToShow from '@/components/articlesQte/ArticlesQteToShow';
import ThisDevice from '@/constants/ThisDevice';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { ArticleType } from '../models/ArticleType';
import PickerPageName from '@/components/articlesQte/PickerPageName';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from "@/constants/Colors";
import { Icon } from 'react-native-elements';
import { pdjTitleObject0, pdjTitleSushi, pdjTitleTradit } from '@/components/articlesQte/pdjTitleObject0';
import { takeOffAccent } from '@/components/services/DataServices';
import SearchableList from '@/components/articlesQte/SearchableList';


import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../AuthContext';



export default function TabTwoScreen() {
  const { articlesList, setArticlesList, thisParams, setThisParams,
    thisUseFB, cart, setCart, currentUser,
    addToCartFn, removeFromCartFn } = useAuth()

  // Définir les routes et leurs paramètres
  type RootStackParamList = {
    Article: undefined;
    DestinationScreen: { thisParams: any }; // Remplacez `any` par le type réel si possible
  };

  // Type pour navigation
  type NavigationProps = StackNavigationProp<RootStackParamList, 'DestinationScreen'>;

  // Type pour route
  type RouteProps = RouteProp<RootStackParamList, 'DestinationScreen'>;

  // Props combinées pour le composant
  type Props = {
    navigation: NavigationProps;
    route: RouteProps;
  };
  const route = useRoute();
  // const { thisParams0 } = route?.params;
  useEffect(() => {
    setThisParams(route?.params)
  }, [])
  const navigation = useNavigation<NavigationProps>();
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
    setCart((prevCart: any) =>
      prevCart
        .map((item: any) =>
          item.id === article.id ? { ...item, qte: item.qte - 1 } : item
        )
        .filter((item: any) => item.qte > 0)
    );
  };
  useEffect(() => {
    callBackFromPickerName(['Tout', pdjTitleObject0])
  }, [])

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
    console.log("articles74 cart :", cart);
  }, [cart]);


  useEffect(() => {
    console.log("articles80 thisParams :", thisParams);
    if (thisParams && thisParams.articlesList?.length > 0)
      setFilteredData(thisParams.articlesList)
  }, [thisParams]);

  useEffect(() => {
    if (search === '') {
      setFilteredData(articlesList);
    } else {
      const resultFilter = articlesList.filter((item) => {
        const itemData = item.name?.toUpperCase() || "";
        const textData = takeOffAccent(search.toUpperCase());
        return itemData.includes(textData);
      });
      setFilteredData(resultFilter);
    }
  }, [search, articlesList]);

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
          <Icon name="keyboard-arrow-up" style={{ fontSize: 24 }} color="white" />
        )}
        ArrowDownIconComponent={() => (
          <Icon name="keyboard-arrow-down" style={{ fontSize: 24 }} color="white" />
        )}
      />
    );
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
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
      backgroundColor: 'grey',
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

        <ArticlesQteToShow
          articlesList={articlesList}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
          currentPdjType={currentPdjType} //pdjType résulté par DropDownMenu
        />
      ) : (
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
