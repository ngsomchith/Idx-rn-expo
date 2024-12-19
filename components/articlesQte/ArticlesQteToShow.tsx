import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { ArticleType } from '@/app/models/ArticleType';
import ThisDevice from '@/constants/ThisDevice';
import { Colors } from '@/constants/Colors';
import { generateObjectToKeyAndNameWithDetail, groupedByPdjType, takeOffAccent } from '../services/DataServices';
import { pdjTitleSushi, pdjTitleTradit } from './pdjTitleObject0';
import RenderEachArticleInHome from './RenderEachArticleInHome';
import SearchableList from './SearchableList';

const ArticlesQteToShow = ({ articlesList, addToCart, removeFromCart, cart, currentPdjType }) => {
  const myDevice = ThisDevice().device;
  const MAXWIDTH = myDevice.myMAXWIDTH;
  const widthMobile = 650;
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%';

  const [articlesListByCat, setArticlesListByCat] = useState<Array<ArticleType>>([]);
  const [articlesMenu, setArticlesMenu] = useState([]);
  const [categoryNameList, setCategoryNameList] = useState([]);
  const [categoryIconList, setCategoryIconList] = useState([]);
  const [pdjTitleName, setPdjTitleName] = useState([]);
  const [pdjTitleObject, setPdjTitleObject] = useState([]);
  const [categoryDetail, setCategoryDetail] = useState([]);
  const [pdjTitleObject2, setPdjTitleObject2] = useState(null);
  const [articlesListByCatLength, setArticlesListByCatLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<Array<ArticleType>>([]);
  const [articlesListByPdj, setArticlesListByPdj]= useState<Array<ArticleType>>([]);
  const { device } = ThisDevice()

  const myWidth = device.width
  const myHeight = device.height
  const maxHeightScrollable = device.heightBody - 10

  const maxHeightArticle = 240

  useEffect(() => {
    if (!pdjTitleObject2 || pdjTitleObject2?.length === 0) {
      const pdjTitleSushiTemp = pdjTitleSushi;
      getPdjTitleList(pdjTitleSushiTemp);
    } else if (!pdjTitleObject || pdjTitleObject.length === 0) {
      getPdjTitleList(pdjTitleObject2);
    }
  }, [pdjTitleObject2, pdjTitleObject]);



  useEffect(() => {
    console.log('ArticlesQteToShow48 articlesList', articlesList);
    if (articlesListByCat.length === 0 && articlesList.length > 0) {
      getArticlesListByCat(articlesList);
    } else {
      setArticlesListByCatLength(Object.keys(articlesListByCat).length);
    }

    if (Object.keys(articlesListByCat).length > 0) {
      setIsLoading(false);
      getPdjTitleList(pdjTitleObject2);
    }
  }, [articlesListByCat, articlesList]);

  useEffect(() => {
    console.log('ArticlesQteToShow62  articlesListByCat', articlesListByCat);
  }, [articlesListByCat]);

  async function getArticlesListByCat(_articlesList: any) {
    if (_articlesList && _articlesList.length > 0) {
      groupedByPdjType(articlesList, setArticlesListByCat);
    }
  }

  async function getPdjTitleList(_pdjTitleObject: any) {
    if (_pdjTitleObject) {
      const result = await generateObjectToKeyAndNameWithDetail(_pdjTitleObject);
      const [pdjTitleNameTemp, categoryNameTemp, categoryIconTemp, categoryDetailTemp] = result;

      setPdjTitleName(pdjTitleNameTemp);
      setCategoryNameList(categoryNameTemp);
      setCategoryIconList(categoryIconTemp);
      setCategoryDetail(categoryDetailTemp);
    }
  }

  // function groupedByPdjType(_articlesList: any, _setArticlesListByCat: any) {
  //   return _articlesList.reduce((acc: any, article: any) => {
  //     const { pdjType } = article;

  //     if (!acc[pdjType]) {
  //       acc[pdjType] = [];
  //     }

  //     acc[pdjType].push(article);
  //     _setArticlesListByCat(acc);
  //     return acc;
  //   }, {});
  // }

  const renderItem = (item: any, index: any) => {
    return (
      <View style={styles.articleContainer}>
        <RenderEachArticleInHome
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          // thisCategoryName={item.pdjType}
          menuN={item} articlesFilteredToWrap={undefined}
          scrollY0={undefined} scrollX0={undefined}
          updateScrollValue={undefined}
        // menuNImg={item?.img}
        // todayfr10={undefined}
        // idx={undefined}
        // navigation={undefined}
        // route={undefined}
        // callbackFn={undefined}
        // pdjType={item.pdjType}
        // PlatsToShowFilteredTemp={undefined}
        // articlesListTemp={articlesList}
        // scrollY0={undefined}
        // scrollX0={undefined}
        // updateScrollValue={undefined}
        // zoomMenuN={undefined} thiscategoryName={undefined}        
        />
      </View>
    );
  };

  // useEffect(() => {
  //   if (articlesList.length === 0 && thisUseFB.articlesList) {
  //     setArticlesList(thisUseFB.articlesList);
  //     setFilteredData(thisUseFB.articlesList); // Initialiser filteredData
  //   }
  // }, [thisUseFB, articlesListByPdj]);

  useEffect(() => {
    console.log("ArticlesQteToShow137 articlesListByPdj ", articlesListByPdj)
    if (search === '') {
      setFilteredData(articlesListByPdj);
    } else {
      console.log("ArticlesQteToShow140 search, articlesListByPdj ",search ,':/:', articlesListByPdj)
      const resultFilter = articlesListByPdj.filter((item) => {
        const itemData = item.name?.toUpperCase() || "";
        const textData = takeOffAccent(search.toUpperCase());
        console.log("itemData.includes(textData) ", itemData.includes(textData))
        return itemData.includes(textData);
      });
      console.log( "ArticlesQteToShow148 resultFilter ", resultFilter)
      setFilteredData(resultFilter);
    }
  }, [search, articlesListByPdj]);

  const myFlatListRow = (_articlesMenu: any, pdjType: any, _categoryName: any, _categoryIcon: any) => {
    console.log("ArticlesQteToShow152 _articlesMenu", _articlesMenu)
    if ( _articlesMenu !== articlesListByPdj) {
      setArticlesListByPdj(_articlesMenu);
      // setFilteredData(_articlesMenu)
    }else{
      console.log("ArticlesQteToShow157 articlesListByPdj ",articlesListByPdj)
    }

 


    return (
      <SearchableList
        search={search}
        setSearch={setSearch}
        filteredData={filteredData}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    );
  };



  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      maxWidth: '100%',
      flexWrap: 'wrap',
      overflow: 'scroll',
      backgroundColor: Colors.primaryBG,
      // borderWidth: 5,
      // borderColor: 'red',
      // borderStyle: 'solid',
      minHeight: 300,
      height: ThisDevice().device.heightBody,
      // maxHeight: myDevice.,
    },
    rowContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
      backgroundColor: Colors.primaryBG,
      // borderColor: 'turquoise',
      // borderWidth: 2,
    },
    articleWrapper: {
      marginBottom: 2,
      maxWidth: 174,
      minWidth: 174,
      marginHorizontal: 0,
      marginVertical: 10,
      minHeight: 160,
      maxHeight: 260,
      height: 260,
      borderRadius: 10,
      justifyContent: 'space-between',
      // borderWidth: 1,
      // borderColor: 'white',
    },
    articleContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      // borderWidth: 10,
      // borderColor: 'yellow',
    },
  });

  return (
    <View style={styles.container}>
      {articlesListByCat && articlesListByCatLength > 0 && currentPdjType !== '' && myFlatListRow(
        articlesListByCat[currentPdjType],
        pdjTitleName[0],
        categoryNameList[0],
        categoryIconList[0]
      )}
    </View>
  );
};


export default ArticlesQteToShow;
