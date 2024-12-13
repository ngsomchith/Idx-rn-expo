import { StyleSheet, Image, Platform, View, Text, TextInput, Pressable, FlatList } from 'react-native';
import ArticlesQteToShow from '@/components/articlesQte/ArticlesQteToShow';
import ThisDevice from '@/constants/ThisDevice';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
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

  const [filteredData, setFilteredData] = useState(articlesList);

  const addToCart = (article: any) => {
    setCart((articlesList) => {
      const existingItem = articlesList.find((item) => item.id === article.id);
      if (existingItem) {
        return articlesList.map((item) =>
          item.id === article.id ? { ...item, qte: item.qte + 1 } : item
        );
      }
      return [...articlesList, { ...article, qte: 1 }];
    });
  };

  const removeFromCart = (article: any) => {
    setCart((articlesList) =>
      articlesList
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

  useEffect(() => {
    console.log("articles-67 :: filteredData ", filteredData)
  }, [filteredData])
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



  const SearchableList = ({ open }) => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(articlesList);

    const handleSearch = (text) => {
      setSearch(text);


      const resultFilter =
        articlesList.filter((item: any) => {
          console.log("item ", text, ':', item)
          const itemData = item.name?.toUpperCase() || "";
          const textData = takeOffAccent(text.toUpperCase());
          // console.log("textData 45 ", textData)
          // console.log("itemData ", itemData)
          return itemData.includes(textData);
        });
      console.log("resultFilter - filteredData ", resultFilter)
      setFilteredData(resultFilter)
    };


      // const resultFilter = articlesList
      //   .map((item, index) => {
      //     console.log("item ", text, ":", item);
      //     const itemData:any = item.name?.toUpperCase() || "";
      //     // const textData = (0, _DataServices.takeOffAccent)(text.toUpperCase());
      //     const textData = takeOffAccent(text.toUpperCase());
      //     // console.log("textData 45 ", textData)
      //     // console.log("itemData ", itemData)
      //     if (itemData.includes(textData)) {
      //       // return { item, index }; // Inclure l'élément et son index
      //       item.index=index
      //       return { item }; // Inclure l'élément et son index
      //     }
      //     return null; // Exclure les éléments non correspondants
      //   })
      //   .filter(Boolean); // Supprimer les valeurs nulles

      // console.log("resultFilter - filteredData ", resultFilter);
      // setFilteredData(resultFilter);

    return (
      <>
        {/* {!open && */}

        <View style={styles.container}>
          {/* <Text>{open ? 'opened':'not opened'} </Text> */}
          <TextInput
            style={[styles.searchBar, {color:'white', paddingHorizontal: 10,fontSize: 16}]}
            placeholder="Search items..." // {open ? 'opened':'not opened'} //
            value={search}
            onChangeText={handleSearch}
          />

          {/* <ArticlesQteToShow articlesList={filteredData} 
            addToCart={addToCart} removeFromCart={removeFromCart} 
            cart={cart} currentPdjType={currentPdjType}     
                   /> */}

          {/* <FlatList
              data={filteredData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            /> */}
          <FlatListArticles addToCart={addToCart} removeFromCart={removeFromCart} articlesFilteredToWrap={filteredData} />
        </View>
        {/* } */}
      </>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: 10,
      backgroundColor: 'grey'
    },
    searchBar: {
      height: 60,
      minHeight: 40,
      // marginVertical: 5,
      backgroundColor: '#294e80',
      borderRadius: 10,
      // paddingHorizontal: 10,
      // marginBottom: 10,
    },
    mainContainer: {
      width: '100%',
      maxWidth: '100%',
      // paddingVertical: 10,
      height: '100%',
      backgroundColor: Colors.background,
      borderColor: 'yellow', borderStyle: 'solid', borderWidth: 2,
    },
    headerRow: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      backgroundColor: Colors.primaryBG,
      zIndex: 9,
      // borderColor: 'pink', borderStyle: 'solid', borderWidth: 2,
    },
    dropdown: {
      width: '58%',
      // marginHorizontal: '1%',
      backgroundColor: Colors.highlightBG,
      // borderColor: Colors.primaryText,
      // borderColor: 'green', borderStyle: 'solid', borderWidth: 2,
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
    },
    searchBarContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    searchInput: {
      color: 'white',
    },
    searchContainerStyle: {
      flex: 1,
      maxWidth: "75%",
    },
    searchInputContainer: {
      height: "80%",
    },
    clearIcon: {
      // marginLeft: 10,
    },
    resultContainer: {
      // marginTop: 10,
    },
    filterContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
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
      {categoryName != 'Tout'
        // && open 
        ?
        <>
          {/* <Text style={{backgroundColor:Colors.primaryBG, color: 'white' }}>{categoryName} </Text> */}
          <ArticlesQteToShow
            articlesList={articlesList}
            // articlesList={filteredData}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
            currentPdjType={currentPdjType} //pdjType resulted by DropdownMenu
          />
        </>
        :
        <>
          {/* <Text style={{ color: 'white' }}>{categoryName} </Text> */}
          <SearchableList open={open} />
          {/* <MySearchBar open={open} /> */}
          {categoryName !='Tout' && 
          <FlatListArticles articlesFilteredToWrap={filteredData}
            addToCart={addToCart} removeFromCart={removeFromCart} />}
        </>


      }
    </View>
  );
}



