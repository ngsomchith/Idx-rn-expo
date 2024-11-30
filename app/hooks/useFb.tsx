import React, { useEffect, useState } from 'react';
import { ArticleType } from '../models/ArticleType';
import { collection, getDocs } from 'firebase/firestore';
import { getItems, myApp } from '@/firebase';
// collectionStr='articles/seller2/articlesList'
export const useFb = (collectionStr:any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [articlesList, setArticlesList] = useState(Array<ArticleType>); // État pour stocker les chaînes
  const [loading, setLoading] = useState(true); // État pour le chargement

  const fetchData2 = async () => {
    console.log("collectionStr = ", collectionStr)
    const db = myApp[3]
    try {
      // const querySnapshot = await getDocs(collection(db, collectionStr)); // Récupère les documents
      const querySnapshot = await getItems(collectionStr)
      console.log("querySnapshot = ", querySnapshot)
      const loadedArticles = querySnapshot?.docs?.map(doc => doc.data().value); // Extrait les valeurs
      setArticlesList(loadedArticles); // Met à jour l'état
    } catch (error) {
      console.error('Erreur lors du chargement des chaînes :', error);
    } finally {
      setLoading(false); // Fin du chargement
    }
  };

  useEffect(() => {
    // fetchData();
    fetchData2()
  }, []);



  useEffect(() => {
    // console.log('46 useEffect getArticles' , data)
  }, [data]);



  const refetch = () => {
    setIsLoading(true);
    fetchData2();
  };

  return { data, isLoading, error, refetch };

};



// ==============================



// import React, { useEffect, useState, useContext } from 'react';
// import { ArticleType } from '../models/ArticleType';
// import { getItems } from '../services/Firebase';
// import { AuthenticatedUserContext } from '../../context/auth';


// // collectionStr='articles/seller2/articlesList'
// export async function useFb (collectionStr: string) {
//   console.log("useFb9 collectionStr +", collectionStr)
//   const {

//     user, setUser,
//     viewModal, setViewModal,
//     currentUserEmail, setCurrentUserEmail,
//     // currentUserEmailNew, setCurrentUserEmailNew,
//     userInfo, setUserInfo,
//     articlesList, setArticlesList,
//     articlesListByCat, setArticlesListByCat,
//     currentMenuN, setcurrentMenuN,
//     newArticlesList, setNewArticlesList,
//     panier, setPanier,
//     panierQte, setPanierQte,
//     // callPanier,setcallPanier,
//     panierView, setpanierView,
//     totalPanier, setTotalPanier,
//     currentPdjType, setCurrentPdjType,
//     myDaysList, setMyDaysList,
//     currentUser, setCurrentUser,
//     currentUserFinal, setCurrentUserFinal,
//     todayfr10, setTodayfr10,
//     cdeEnCours, setCdeEnCours,
//     currentCdeEnCours, setCurrentCdeEnCours,
//     cdeEnCoursList, setCdeEnCoursList,
//     cdeEnCoursAllEmail, setCdeEnCoursAllEmail,
//     filteredDataSource, setFilteredDataSource,
//     masterDataSource, setMasterDataSource,
//     search, setSearch,
//     searchAble, setSearchAble,
//     MyModalPageVisible, setMyModalPageVisible,
//     PlatsToShowFiltered, setPlatsToShowFiltered,
//     PlatsToShowFilteredPanier, setPlatsToShowFilteredPanier,
//     gAuth, setGAuth,
//     pdjTypeList, setPdjTypeList,
//     promoOuverture, setpromoOuverture,

//     navAdminState, setNavAdminState,
//     // user, setUser,
//     arrayUser, lastFixtures,
//     lastDateFixtures, currentDateFixtures,
//     dateSaisie, setDateSaisie,
//     datePush, setDatePush,
//     newFixtureAble, setNewFixtureAble,
//     chooseDateAble, setChooseDateAble,
//     addFixtureState, setAddFixtureState,
//     chooseTimeAble, setChooseTimeAble,
//     updateFixtureAble, setUpdateFixtureAble,
//     fixtureAdd, setFixtureAdd,
//     fixtureEdit, setFixtureEdit,
//     fixture2Update, setFixture2Update,
//     selectedDate, setSelectedDate,
//     selectedTime, setSelectedTime,
//     currentNavIdx, setCurrentNavIdx,
//     fixturesForOdds, setFixturesForOdds,
//     fixturesImport, setFixturesImport,
//     currentIndex, setCurrentIndex,
//     nextIndex, setNextIndex,
//     newState, setNewState,
//     dayDocStr, setDayDocStr,
//     startState, setStartState,
//     cancelState, setCancelState,
//     updateState, setUpdateState,
//     MyModalAuthPageVisible, setMyModalAuthPageVisible,
//     deleteState, setDeleteState,
//     fixtures2Months, setFixtures2Months,
//     saveAble, setSaveAble,
//     screenBt, setScreenBt,
//     goToHomeScreen, setgoToHomeScreen,
//     debuteunefois, setdebuteunefois,
//     fixtViewed, setfixtViewed,
//     fixturesListData, setfixturesListData,
//     currentScreen, setCurrentScreen,
//     // isLoading, setIsLoading,
//     stateBar, setstateBar,
//     monthDocStr, setMonthDocStr,
//     dateFact, setdateFact,
//     chooseDay, setChooseDay,
//     chooseDayTime, setChooseDayTime,
//     scrollTo, setscrollTo,
//     categoryName, setcategoryName,
//     categoryIcon, setcategoryIcon,
//     allCdeEnCours, setAllCdeEnCours,
//     currentcategoryNameAndIcon, setcurrentcategoryNameAndIcon,
//     idx, setIdx,
//     notConnected

//   } = useContext(AuthenticatedUserContext);

//   const [data, setData] = useState([]);


//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("useFb106 data useEffect =", data)

//   }, [data])


//   const fetchData = async () => {
//     setIsLoading(true);
//     const myDocs: any []=[]
//     let i:number =0;
//     try {
//       let articleTemp = new ArticleType()
//       // console.log("18articleTemp", new ArticleType())
//       myDocs.push(articleTemp)
//       const response = await getItems(collectionStr)
//         .then(res => {
//           // console.log(18, "articlesList res =", res)

//           if (res.length > 0) {
//             res.forEach(async (element: any) => {
//                articleTemp = new ArticleType()

//               // console.log("17articleTemp ", articleTemp)
//               // for (let key in articleTemp) {
//               //   if (articleTemp.hasOwnProperty(key)) {
//               //     articleTemp[key] = element[key]
//               //     console.log(20,key, articleTemp[key]);
//               //   }
//               // }
//               let result = await setArticleType(articleTemp,element)
//               // console.log(i, result)
//               myDocs.push(result)

//               // modifier les champs si besoiin

//               // src/assets/images/seller2/banh-canh.jpg
//               // element.img="../assets/images/seller2/" + element.img.toLowerCase()

//               // element.img=element.img.substring(0,element.img.length-4)
//               // element.img2=element.img2.substring(0,element.img2.length-4)

//               // element.img="./stade.jpg"
//               // myDocs.push(element)
//               i++;
//             });

//           } else {
//             console.log(57, " ECHEC ? :::> NO articlesList / res =", res)
//           }
//         })
//         // console.log("useFb151 articlesList BY myDocs +", myDocs)
//       setData(myDocs);
//       setIsLoading(false);
//     }
//     catch (error) { 
//       setError(error);
//       console.log(error)
//     }
//     finally {
//       setIsLoading(false);
//     }
//   };

//   async function setArticleType(articleTemp:ArticleType,objectElt:any){
//     // articleTemp = new ArticleType()
//     // console.log("17articleTemp ", articleTemp)
//     for (let key in articleTemp) {
//       if (articleTemp.hasOwnProperty(key) && objectElt[key]) {
//         articleTemp[key] = objectElt[key]
//         // console.log("75key ",key, articleTemp[key]);
//       }
//     }


//     // console.log("77 articleTemp =",articleTemp)
//     return articleTemp
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);


//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };

// };
