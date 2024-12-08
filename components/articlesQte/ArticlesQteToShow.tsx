import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Pressable, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';

import { ArticleType } from '@/app/models/ArticleType';
import ThisDevice from '@/constants/ThisDevice';
import { Colors } from '@/constants/Colors';
import { generateObjectToKeyAndNameWithDetail } from '../services/DataServices';
import { pdjTitleSushi, pdjTitleTradit } from './pdjTitleObject0';
import RenderEachArticleInHome from './RenderEachArticleInHome';
const ArticlesQteToShow = ({articlesList, addToCart, removeFromCart, cart }) => {

  const myDevice = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.myMAXWIDTH
  const widthMobile = 650
  const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'


  const [articlesListByCat, setArticlesListByCat] = useState(Array<ArticleType>)

  const [categoryNameList, setcategoryNameList] = useState([])
  const [categoryIconList, setcategoryIconList] = useState([])
  const [pdjTitleName, setPdjTitleName] = useState([])
  const [pdjTitleObject, setPdjTitleObject] = useState([])
  const [categoryDetail, setcategoryDetail] = useState([])
  const [pdjTitleObject2, setPdjTitleObject2] = useState(null)
  const [articlesListByCatLength, setarticlesListByCatLength] = useState(0)
  const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   // articlesList.length > 0 && console.log("articlesList18 ", articlesList)
  //   if (articlesList.length === 0 && thisUseFB.articlesList) {
  //     setArticlesList(thisUseFB.articlesList)
  //   }
  // }, [thisUseFB, articlesList])

  useEffect(() => {
  //all console.log("categoryNameList useEffect", categoryNameList)
  }, [categoryNameList])

  useEffect(() => {
    // console.log("home41 ", "useEffect pdjTitleObject", pdjTitleObject)
    // console.log("home42 ", "useEffect pdjTitleObject2", pdjTitleObject2)
    if (!pdjTitleObject2 || pdjTitleObject2.length === 0) {
      const pdjTitleSushiTemp = pdjTitleSushi
    //all console.log("pdjTitleSushi 51 ", articlesListByCat, pdjTitleSushi)
      getPdjTitleList(pdjTitleSushiTemp)
      // setArticlesListByCat(pdjTitleTradit)
    } else if (!pdjTitleObject || pdjTitleObject.length === 0) {
    //all console.log("home45 ", "useEffect pdjTitleObject", pdjTitleObject)
    //all console.log("home42 ", "useEffect pdjTitleObject2", pdjTitleObject2)
      getPdjTitleList(pdjTitleObject2)
    } else if (pdjTitleObject2 && pdjTitleObject.length == 0) {
      // setPdjTitleObject2('pdjTitleSushi')
    }
  }, [pdjTitleObject2, pdjTitleObject])


  useEffect(() => {
    // console.log("home771 ", " pdjTitleObject", pdjTitleObject)
  //all console.log("home626 ", "useEffect pdjTitleObject2", pdjTitleObject2)

    if (!pdjTitleObject) {
      //all console.log("home744 ", "useEffect pdjTitleObject2", pdjTitleObject2)

      getPdjTitleList(pdjTitleObject2)
    } else if (pdjTitleObject2 && pdjTitleObject.length == 0) {
      setPdjTitleObject(pdjTitleObject2)
      //all08042024 console.log("home162 ", " pdjTitleObject", pdjTitleObject)
    } else if (pdjTitleObject.length > 0) {
      // console.log("home780 ", " pdjTitleObject2", pdjTitleObject)

    }
  }, [pdjTitleObject2, pdjTitleObject])



  useEffect(() => {
    articlesList.length > 0 && console.log("articlesListByCat ", articlesListByCat)
    if (articlesListByCat.length == 0 && articlesList?.length > 0) {

      getarticlesListByCat(articlesList)
    } else {
      // articlesListByCat.length != 0 && console.log("31 articlesList", articlesList)
      // articlesListByCat.length != 0 && console.log("31 articlesListByCat", articlesListByCat)
      setarticlesListByCatLength(Object.keys(articlesListByCat)?.length)
    }

    if (Object.keys(articlesListByCat)?.length > 0) {
      setIsLoading(false)
      //all console.log("home797 getPdjTitleList Object.keys(pdjTitle)?.length ", Object.keys(pdjTitleObject)?.length, pdjTitleObject)
      getPdjTitleList(pdjTitleObject2)
    }


  }, [articlesListByCat, articlesList])

  async function getarticlesListByCat(_articlesList) {
    if (_articlesList && _articlesList.length > 0) {
    //all console.log("521getarticlesListByCat +++++++++++++ TOP getarticlesListByCat ++++++++++++++++", _articlesList)

      // initArticlesListByCatTemp()
      groupedByPdjType(articlesList, setArticlesListByCat)


    }
  }
  async function getPdjTitleList(_pdjTitleObject: any) {
  //all console.log("getPdjTitleList pdjTitleObject ", _pdjTitleObject)
    if (_pdjTitleObject && _pdjTitleObject != null) {
      // console.log("home804 getPdjTitleList Object.keys(pdjTitle)?.length ", Object.keys(_pdjTitleObject)?.length, _pdjTitleObject)
      if (Object.keys(_pdjTitleObject)?.length > 0) {
        // console.log("home711 pdjTitle Object.keys(pdjTitle)?.length ", _pdjTitleObject)

        const result = await generateObjectToKeyAndNameWithDetail(_pdjTitleObject)

        // console.log("home117  generateObjectToKeyAndName ", result)

        const pdjTitleNameTemp: any = result[0]
        const categoryNameTemp: any = result[1]
        const categoryIconTemp: any = result[2]
        const categorytDetail: any = result[3]
        setPdjTitleName(pdjTitleNameTemp)
        setcategoryNameList(categoryNameTemp)
        setcategoryIconList(categoryIconTemp)
        setcategoryDetail(categorytDetail)

      }
    } else {
      //all console.log("home823 getPdjTitleList Object.keys(pdjTitle)?.length ",  pdjTitleObject2)
    }

  }


  function groupedByPdjType(_articlesList: any, _setArticlesListByCat: any) {
    return _articlesList.reduce((acc, article) => {
      const { pdjType } = article;

      // Si le type n'existe pas encore dans l'accumulateur, on l'initialise
      if (!acc[pdjType]) {
        acc[pdjType] = [];
      }

      // On ajoute l'article dans le tableau correspondant à son pdjType
      acc[pdjType].push(article);
      _setArticlesListByCat(acc)
      return acc;
    }, {});
  }
  const renderItem = (item, index) => {
    // console.log("renderItem158 ", index)
    return (
      <View style={styles.articleContainer}>

        <RenderEachArticleInHome
          addToCart={addToCart}
          removeFromCart = {removeFromCart}
          thiscategoryName={item.pdjType}
          todayfr10={undefined} menuN={item}
          menuNImg={item?.img} idx={undefined} navigation={undefined} route={undefined}
          callbackFn={undefined} pdjType={item.pdjType}
          PlatsToShowFilteredTemp={undefined}
          articlesListTemp={articlesList}
          scrollY0={scrollY}
          scrollX0={scrollX} updateScrollValue={undefined} zoomMenuN={undefined}
        />

      </View>
    );
  };


  function myFlatListRow(articlesMenu: any, pdjType: any, _categoryName: any, _categoryIcon: any) {
    // console.log("myFlatListRow / _categoryName, articlesMenu ", _categoryName, articlesMenu)
    return (


      <View
        style={[ //container row scroollable
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            // marginVertical: 5,
            borderColor: 'turquoise',
            borderStyle: 'solid',
            borderWidth: 5,
            width: '100%',
            height: articlesMenu?.length > 0 ? '100%' : 100,
            // maxHeight: device.heightBody - 120,
            maxHeight: '100%',
            backgroundColor: Colors.primaryBG,
          }

        ]}

      >

        {
          // !panierView && //this shows mainView
          articlesMenu?.length > 0 &&
          articlesMenu?.map((item: any, index: any) => {
            return (

              <View key={index} style=
                {
                  {
                    marginBottom: 2,
                    // width: MAXWIDTH * .45,
                    maxWidth: 180,
                    minWidth: 180,
                    margin: 0,
                    minHeight: articlesMenu?.length > 0 ? 160 : 0,
                    maxHeight: '100%',
                    height: articlesMenu?.length > 0 ? '100%' : 0,
                    display: 'flex',
                    flexDirection: 'row',
                    borderRadius: 10,
                    justifyContent: 'center',
                    // borderWidth: item.date == dateFact.substring(0, 10) ? 3 : 0,
                    borderWidth: 3,
                    borderColor: 'white',
                    borderStyle: 'solid'
                  }
                }>
                {renderItem(item, index)} 
              </View>
            );
          })


        }

      </View>
    );
  }

  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: '100%',
      // minHeight:400,

      borderRadius: 18,
    },
    articleContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      height: '100%',
    },
    articleDetails: {

    },
    articleName: {

    },
    articleDescription: {

    },
    articlePrice: {

    },
    articleQuantity: {

    },
    articleTotal: {

    },

    dbCol: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      minWidth: 300,
      height: '100%'
    }
  });

  return (

    <View style={{ //myFlatListRow
      flexDirection: 'column',
      overflow: 'scroll',
      // borderColor: 'transparent',
      backgroundColor: Colors.primaryBG,
      minHeight: myDevice.heightBody,
      borderStyle: 'solid',
      borderWidth: 10,
      borderColor: 'red',
      // minHeight: 300, 
      maxHeight: '100%'
      // maxHeight: articlesListByCat2[pdjTitleName[index]]?.length > 0 ? 400 : 0,
      // height: articlesListByCat2[pdjTitleName[index]]?.length > 0 ? 400 : 0
    }}
    >


      {
        // !viewModal && !panierView && // toutes les catégories
        categoryNameList && categoryNameList?.length > 0 &&
        categoryNameList?.map((categoryNameEach: any, index: any) => (

          <View key={index} style={[
            styles.dbCol
            , {

              minHeight: myDevice.heightBody,
              // maxHeight: index==0 ? 0 :myDevice.heightBody,
              maxHeight: myDevice.heightBody,
              display: index == 0 ? 'none' : 'flex',
              // maxHeight: index > 0 ? '100%' : 0,
              backgroundColor: 'grey',
              borderColor: 'coral', borderStyle: 'solid', borderWidth: 15,
              marginVertical: 10
            }]}

          >
            <Text style={{ color: 'white' }}>{categoryNameEach} :: {pdjTitleName[index]} :: {articlesListByCat[pdjTitleName[index]]?.length} </Text>
            {
              // index > 0 &&

              // articlesListByCat && articlesListByCat[pdjTitleName[index]]?.length > 0 &&
              articlesListByCat && articlesListByCat[pdjTitleName[index]] &&

              <View style={{ //myFlatListRow
                display: 'flex',
                flexDirection: 'row',
                overflow: 'scroll',
                // borderColor: 'transparent',
                backgroundColor: Colors.primaryBG,
                borderStyle: 'solid',
                borderWidth: 5,
                borderColor: 'pink',
                // minHeight: 300, 
                maxHeight: index == 0 ? 0 : '100%',
                minWidth: 300,
                // maxHeight: articlesListByCat[pdjTitleName[index]]?.length > 0 ? 400 : 0,
                // height: articlesListByCat[pdjTitleName[index]]?.length > 0 ? 400 : 0
              }}
              >

                {
                  articlesListByCat
                  && articlesListByCatLength > 0
                  && categoryNameList
                  && categoryIconList
                  // && !panierView

                  && myFlatListRow(
                    articlesListByCat && articlesListByCat[pdjTitleName[index]],

                    pdjTitleName[index],
                    categoryNameList[index],
                    categoryIconList[index])
                }

              </View>
            }
          </View>


        ))
      }

    </View>
  );

}

export default ArticlesQteToShow