import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform } from 'react-native';

import { FirebaseInit, signInWithEmailAndPassword } from './constants/firebaseConfig';
import { addDoc, collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import { ThemedView } from './components/ThemedView';
import { ThemedTitle } from './components/ThemedTitle';
import { ThemedText } from './components/ThemedText';
import { ThemedInput } from './components/ThemedInput';
import { formeMyDatefr, formeMyDateTable, get_all_dates } from './components/services/DataServices';
import { PanierType } from './app/models/PanierType';


export const myApp = FirebaseInit()

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    console.log('handleSignIn')
    try {
      const userCredential = await signInWithEmailAndPassword(myApp, email, password);
      console.log(userCredential)
      console.log('Connexion réussie', `Bienvenue ${userCredential.user.email}`);
    } catch (error) {
      Alert.alert('Erreur', error.message);
    }
  };
  const styles = StyleSheet.create({
    containerColumn: { flex: 1, justifyContent: 'flex-start', padding: 20, backgroundColor: 'white' },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 },
  });


  return (
    <ThemedView
    // style={styles.containerColumn}
    >
      <ThemedTitle style={styles.title}>Connexion Firebase</ThemedTitle>
      {/* <ThemedText>  */}
      <ThemedInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <ThemedInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* </ThemedText> */}

      <Button title="Se connecter" onPress={handleSignIn} />
    </ThemedView>
  );
};



export default LoginScreen;

export async function updateItem(
  thisCollection: string,
  thisItem: Object,
  thisDoc: string
) {
  console.log("233 updateItem ", thisCollection, thisItem, "thisDoc:", thisDoc);

  const myApp = FirebaseInit()
  const db = myApp[3]
  if (thisDoc && thisItem) {
    let myRefDoc;

    myRefDoc = doc(db, thisCollection, thisDoc);
    //all0810 console.log("185 thisItem", myRefDoc, thisItem);
    await setDoc(myRefDoc, thisItem);
  }
}
export async function getItems(thisCollection: string) {
  // ++++++++++++++++++++++++++++++++++++++++++++++
  //model :  import { collection, query, where, getDocs } from "firebase/firestore";
  // const q = query(collection(db, "cities"), where("capital", "==", true));

  const db = myApp[3]
  let items: any = [];
  let i = 0;
  const querySnapshot = await getDocs(collection(db, thisCollection));
  querySnapshot.forEach((doc) => {
    // console.log(`175,${doc.id} => ${doc.data()}`);
    items.push(doc.data());
    i++;
  });
  return items;
}

export async function getItemsWhere(
  thisCollection: string,
  thisField: string,
  thisValue: string
) {
  const db = myApp[3]
  // console.log("getItemsWhere thisCollection", thisCollection);
  // console.log("getItemsWhere thisField", thisField);
  // console.log("getItemsWhere thisValue", thisValue);
  /*
    /// example
    import { collection, query, where, getDocs } from "firebase/firestore";
 
    const q = query(collection(db, "cities"), where("capital", "==", true));
 
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //all0810 console.log(doc.id, " => ", doc.data());
    });
  */
  // myDocs;
  const q = query(
    collection(db, thisCollection)
    // where(thisField, "==", thisValue)
  );
  const querySnapshot = await getDocs(q);
  let myDocs: any = [];
  // console.log("259 querySnapshot", querySnapshot);
  // console.log("getItemsWhere thisCollection", thisCollection);
  // console.log("getItemsWhere thisField", thisField);
  // console.log("getItemsWhere thisValue", thisValue);
  let i = 0
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //  console.log("myId", doc.id, " => ", doc.data());
    // console.log(254,i,thisField , doc.data()[thisField],thisValue ,doc.data()[thisField]==thisValue )
    if (doc.data()[thisField] == thisValue) {
      // console.log(253, thisField, doc.data()['email'],doc.data()[thisField]);
      myDocs.push(doc.data());
    } else {
      // console.log(
      //   257,
      //   thisField,
      //   doc.data()[thisField],
      //   thisValue,
      //   doc.data()[thisField] == thisValue
      // );
    }
    i++
  });

  console.log("266 getItemsWhere myDocs ", myDocs);

  return myDocs;
}
// =============================

export async function fbLoginUser(
  email: string,
  password: string,
  // codePromo: string
) {
  try {
    const result = await signInWithEmailAndPassword(myApp, email, password);
    //all0810 console.log(result);
    // return { result, codePromo };
    return { result };
  } catch (error) {
    //all0810 console.log(error);
    return false;
  }
}

// =============================
export async function updateItemModel(
  thisCollection: string,
  thisItemModel: any,
  thisDoc: string
) {
  if (thisItemModel["codePromo"] == undefined) {
    thisItemModel["codePromo"] = "";
  }
  console.log(
    "183updateItemModel ",
    thisItemModel,
    "thisCollection:",
    thisCollection,
    "thisDoc:",
    thisDoc
  );
  let myRefDoc;
  myRefDoc = docStrToRef(thisCollection + "/" + thisDoc);
  const myObject = [];
  myObject[0] = await createObjectFromModel(thisItemModel);
  console.log("359 myObject", myObject);
  console.log("360 myObject[0]", myObject[0]);
  //all0810 console.log("317 thisCollection, thisDoc", thisCollection, thisDoc);

  let result;
  try {
    await setDoc(myRefDoc, myObject[0]);
    result = "success";
    console.log("====================== result SUCCESS", result);
  } catch (error) {
    result = error;
    console.log("====================== result ERROR ", result);
  }

  // console.log("327 result", result);
  return result;
}

export function docStrToRef(docStr: string) {

  const myApp = FirebaseInit()
  const db = myApp[3]
  return doc(db, docStr);
}
export function colStrToColRef(collectionStr: string) {
  const myApp = FirebaseInit()
  const db = myApp[3]
  return doc(db, collectionStr);
}
export function createObjectFromModel(myObject: Object) {
  //all0810 console.log("myObject ", myObject)
  //all0810 console.log("425createObjectFromModel",Object.keys(myObject).length, Number(objectLength(myObject) ));
  if (Number(Object.keys(myObject).length) > 0) {
    //all0810 console.log("426createObjectFromModel");
    let newObject: any = {};
    for (const [key, value] of Object.entries(myObject)) {
      //  //all0810 console.log(278,`${key}: ${value}`);
      newObject[key] = value;
    }
    //all0810 console.log("432createObjectFromModel",newObject);
    return newObject;
  } else {
    //all0810 console.log("436createObjectFromModel");
    return myObject;
  }
}
export function convertObjectToModel(myObject: Object, myModel: any) {
  let i = 0;
  for (const [key, value] of Object.entries(myObject)) {
    console.log(451, `${key}: ${value}`);
    myModel[key] = value;
    console.log("453myModel ", i, myModel);

    i++;
  }
}
export async function addItemAndSetId(collectionStr: string, thisItem: any) {

  const myApp = FirebaseInit()
  const db = myApp[3]
  //all0810 console.log("746addItemAndSetId ", collectionStr, thisItem);
  // myCollectionRef =  collection(firestore, 'articles/'+sellerId+'/articlesList')
  let myCollectionRef = collection(db, collectionStr);
  const myResult: any = [];

  const result = addDoc(myCollectionRef, createObjectFromModel(thisItem));
  result.then((res) => {
    thisItem.id = res.id;
    myResult[0] = res.id;

    updateItemModel(collectionStr, thisItem, thisItem.id);
  });


  return myResult;
}
export async function informClientvalidPanier(
  sellerName: string,
  sellerEmail: string,
  numFact: any,
  userEmail: string,
  thisPanier: any
) {
  console.log("1070 informClientvalidPanier panier", thisPanier);
  //all0810 console.log(sellerName, sellerEmail, numFact, userEmail); // ok Chez Tao seller0@yahoo.fr 202206251 sg83auc@gmail.com
  let emailOptions = {
    // data need in index.ts functions
    emailFrom: sellerEmail,
    emailTo: `${userEmail}`,
    subject: `Commande de:${userEmail}`,
    isHtml: `nous vous remercions, ${userEmail}, pour votre commande n°:${numFact} pour : ${thisPanier} €, toute l'équipe  de ${sellerName} s'active pour vous offrir le meilleur service `,
    // isHtml:"true string",
  };
  let thisCollection = "submissions";
  let thisDoc = "mesageToBuyer";
  //all0810 console.log("emailOptions = ", emailOptions);

  updateItem(thisCollection, emailOptions, thisDoc);
}

export async function messagesToSellers(
  sellerName: string,
  sellerEmail: string,
  numFact: any,
  userEmail: string,
  thisPanier: any
) {
  console.log("1134 messagesToSellers ", thisPanier);
  console.log(sellerName, sellerEmail, numFact, userEmail); // ok Chez Tao seller0@yahoo.fr 202206251 sg83auc@gmail.com
  let emailOptions = {
    // data need in index.ts functions
    emailFrom: sellerEmail,
    emailTo: `${userEmail}`,
    subject: `Commande de:${userEmail}`,
    content: `1119Commande n°:${numFact} validée pour : ${thisPanier} €,    de ${userEmail} à préparer `,
    // isHtml:"true string",
  };
  let thisCollection = "messagesToSeller";
  let thisDoc = "seller2"
  // let thisDoc = "${sellerId}";
  console.log("emailOptions = ", emailOptions);

  updateItemModel(thisCollection, emailOptions, thisDoc);
}
export async function informClientCdeRecu(
  sellerName: string,
  sellerEmail: string,
  numFact: any,
  userEmail: string
) {
  //all0810 console.log("informClientCdeRecu");
  //all0810 console.log(sellerName, sellerEmail, numFact, userEmail); // ok Chez Tao seller0@yahoo.fr 202206251 sg83auc@gmail.com
  let emailOptions = {
    // data need in index.ts functions
    emailFrom: sellerEmail,
    emailTo: `${userEmail}`,
    subject: `Commande de:${userEmail}`,
    isHtml: `nous vous remercions pour votre commande n°:${numFact}/${userEmail} , toute l'équipe  de ${sellerName} s'active pour vous offrir le meilleur service`,
    // isHtml:"true string",
  };
  let thisCollection = "submissions";
  let thisDoc = "mesageToBuyer";
  //all0810 console.log("emailOptions = ", emailOptions);

  updateItem(thisCollection, emailOptions, thisDoc);
}

export async function getCdeEnCoursPlatsCde() {
  const myDocs: Array<PanierType> = new Array();
  try {
    await getItems("platsCde/").then((res) => {
      res.forEach((element: any) => {
        myDocs.push(element);
        // console.log(244, element.plat.id, element.plat.name, element.dayCde)
      });
      // console.log("286 getCdeEnCours  = ", myDocs)
    });
  } catch (error) {
    //all console.log("error =", error)
  }
  return myDocs;
}

export async function getTwoMonths(dayDocStr: any) {
  if (dayDocStr) {
    // console.log("getTwoMonths ", dayDocStr);
    let monthDocStr = dayDocStr.substring(0, 6);
    let thisMonth = [];

    let year = Number(monthDocStr?.substring(0, 4));
    let month = Number(monthDocStr?.substring(4));
    // console.log("832 monthDocStr,year, month =", monthDocStr,year, month)
    thisMonth[0] = await get_all_dates(year, month);
    // console.log("thisMonth[0] = ", thisMonth[0])

    let lastMonth = (month + 11) % 12;
    if (lastMonth == 0) {
      lastMonth = 12;
      year = year - 1;
    }
    // console.log("841 year, lastMonth ", year, lastMonth)

    thisMonth[1] = await get_all_dates(year, lastMonth);
    //  console.log("thisMonth[1] = ", thisMonth[1])

    const this2Months = thisMonth[0]?.concat(thisMonth[1]);
    // console.log("855this2Months = ", this2Months);
    return this2Months;
    // return ;
  }
}

export async function getCdeEnCoursByDay(monthDocStr: string, eachDay: string) {
  let collectionStr = "/dayListCde/" + monthDocStr + "/" + eachDay;
  //  console.log("FB873 collectionStr" , collectionStr)

  const myDocs = [];
  const todayfr = formeMyDatefr(new Date());
  let resultGetCdeEnCoursByDay;
  resultGetCdeEnCoursByDay = await getItems(collectionStr);

  if (resultGetCdeEnCoursByDay.length > 0) {
    // console.log("FB-880 eachDay" , eachDay, resultGetCdeEnCoursByDay)
  }
  return resultGetCdeEnCoursByDay;
}

export async function getNextNDays(startDay: Date, nbJours: number) {
  //all0810 console.log("getNewDate : construire articlesList avec date startDay, nbJours", startDay, nbJours);

  let menuIdx: number;
  let article: any = [];

  menuIdx = 0;
  // let nbJours = 30;
  const newDate: any[] = [];
  const newDateStr: any[] = [];
  let thisTempArticlesList: any = [];

  let calendar: any = [];
  calendar["row"] = [];
  let eachDay = [];
  for (let index = 0; index < nbJours; index++) {
    // const element = index;

    // calendar[index.toString()] = new Date(startDay.setDate((startDay.getDate() + 1))).toString();

    eachDay[index] = new Date(startDay.setDate(startDay.getDate() + 1));

    calendar[index.toString()] = await formeMyDateTable(eachDay[index]);
    //all0810 console.log("848calendar index, calendar[index.toString()]",index, calendar[index.toString()] )
  }
  // console.log("1073calendar", calendar)
  return calendar; // format Date
}
