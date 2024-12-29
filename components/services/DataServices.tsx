
export function formeMyDate(journee: Date) {
  // console.log("formeMyDate journee", journee);
  if (journee) {
    let thisYear;
    let thisMonth;
    let thisDate;
    thisYear = journee.getFullYear().toString();
    let zeroNeedMonth = 2 - Number(journee.getMonth().toString().length);

    thisMonth = '0'.repeat(zeroNeedMonth) + (journee.getMonth() + 1).toString();
    if (thisMonth.length > 2) {

      // alert("dataservice 85 " + thisMonth);
      thisMonth = thisMonth.substring(1, 2);
      // console.log("thisMonth", thisMonth);
    }

    let zeroNeedDate = 2 - Number(journee.getDate().toString().length);
    thisDate = '0'.repeat(zeroNeedDate) + journee.getDate().toString();
    // console.log(thisYear+thisMonth+thisDate);
    return thisYear + thisMonth + thisDate;
  }
}
export function formeMyDatefr(journee: Date) {
  // console.log("formeMyDate journee", journee);
  // if (journee) {
  //   let thisYear;
  //   let thisMonth;
  //   let thisDate;
  //   thisYear = journee.getFullYear().toString();
  //   let zeroNeedMonth = 2 - Number(journee.getMonth().toString().length);
  //   if (zeroNeedMonth > 0) {
  //     thisMonth = '0'.repeat(zeroNeedMonth) + (journee.getMonth() + 1).toString();
  //     if (thisMonth.length > 2) {

  //       // alert("dataservice 85 " + thisMonth);
  //       thisMonth = thisMonth.substring(1, 2);
  //       // console.log("thisMonth", thisMonth);
  //     }


  //     let zeroNeedDate = 2 - Number(journee.getDate().toString().length);

  //     thisDate = '0'.repeat(zeroNeedDate) + journee.getDate().toString();

  //     // console.log(thisYear+thisMonth+thisDate);
  //   }
  //   return thisYear + thisMonth + thisDate;
  // }
  let result0
  const result = formeMyDateTable(journee)
  result.then((res:any) => {
    //all console.log("result ",res.yy+res.mm+res.dd, res) 
    return res.yy + res.mm + res.dd
    result0 = res.yy + res.mm + res.dd
  })
  return result0
}

export async function get_all_dates(year: number, month: number) {
  // console.log(475, "get_all_dates ",year, month)

  if (year > 0) {
    let date = new Date(year, month - 1, 1);
    // console.log(481, "date ",month, date)
    let dates = [];
    let thisMonth
    let thisDay
    let result
    let i = 0;
    const myDocs = [];
    while (date.getMonth() === month - 1) {

      let zeroNeedMonth = 2 - Number(month.toString().length);

      thisMonth = '0'.repeat(zeroNeedMonth) + (month).toString();

      let zeroNeedDay = 2 - Number(date.getDate().toString().length);

      thisDay = '0'.repeat(zeroNeedDay) + (date.getDate()).toString();

      result = year.toString() + thisMonth + thisDay
      // console.log(500,i,result)
      dates.push(result);
      date.setDate(date.getDate() + 1);
      // console.log(546,dates[i]);

      myDocs.push(dates[i])
      i++;
    }
    return myDocs
  } else {
    // console.log(512, "get_all_dates ",year, month)
    return
  }

}


export async function formeMyDateTable(journee: Date) {
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  
  const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  
  if (journee) {
    let thisYear;
    let thisMonth;
    let thisDate;
    let thisDow;
    let thisHours;
    let thisMinutes;
    let thisSecondes;

    // Récupérer l'année, le mois, le jour, les heures, minutes, secondes
    thisYear = journee.getFullYear().toString();
    thisMonth = (journee.getMonth() + 1).toString();  // Mois en format '1' -> '12'
    
    // Ajouter un zéro devant le mois si nécessaire
    if (thisMonth.length === 1) {
      thisMonth = '0' + thisMonth;
    }

    thisDate = journee.getDate().toString();
    
    // Ajouter un zéro devant le jour si nécessaire
    let zeroNeedDate = 2 - thisDate.length;
    if (zeroNeedDate > 0) {
      thisDate = '0'.repeat(zeroNeedDate) + thisDate;
    }

    thisMinutes = journee.getMinutes();
    thisHours = journee.getHours();
    thisSecondes = journee.getSeconds();
    thisDow = journee.getDay();  // Jour de la semaine (0-6)
    
    // La journée commence à 0 (dimanche), donc il faut ajuster l'index de `jours`
    if (thisDow === 0) thisDow = 6;  // Dimanche (0) doit être le dernier jour de la semaine

    return {
      yy: thisYear,
      mm: thisMonth,
      dd: thisDate,
      dow: thisDow,
      dowChaine: jours[thisDow],
      mmText: mois[Number(thisMonth) - 1],
      hh: thisHours,
      min: thisMinutes,
      sec: thisSecondes,
      dayMonth: thisDate + '/' + thisMonth,
      hourMin: thisHours + ':' + thisMinutes,
      fullDate6: thisDate + '-' + thisMonth + '-' + thisYear,
      frenchDate: jours[thisDow] + ' ' + thisDate + ' ' + mois[Number(thisMonth) - 1] + ' ' + thisYear
    };
  }
}

export function getCurrentDate() {
  const thisDate = formeMyDateTable(new Date)
  //all0810 console.log("thisDate ", thisDate)
  return thisDate
}
export async function convertToFormeDatefr(eltDateVenteFr: string) {
  // let eltDateVenteFr = element.dateVente
//all console.log("91eltDateVenteFr ", eltDateVenteFr)
  let eltDateVenteEn = eltDateVenteFr.substr(6, 4) + '-' + eltDateVenteFr.substr(3, 2) + '-' + eltDateVenteFr.substr(0, 2)
  let thisDate:any = new Date(eltDateVenteEn)
  if ((thisDate)) {
    thisDate = await formeMyDatefr(thisDate)
  }
//all console.log("thisDate /formeMyDatefr", thisDate)
  return thisDate

}

export function jourIndexToDate(jourIndex: string) {
  // console.log("68 jourIndexToDate : yyyymmaa --> new Date(yyyy-mm-aa)", jourIndex)
  let thisYear;
  let thisMonth;
  let thisDate;
  thisYear = jourIndex.substring(0, 4);
  //console.log(thisYear)
  let thisMonthIndex = jourIndex.substring(4);
  //console.log(71,thisMonthIndex)
  thisMonth = thisMonthIndex.substring(0, 2);
  //console.log(73,thisMonth)
  thisDate = thisMonthIndex.substring(2);
  //console.log(75,thisDate)
  let myDate = thisYear + '-' + thisMonth + '-' + thisDate;
  //console.log(myDate)
  return new Date(myDate);
}
export function convertDatefrToDayDocStrIndex(dateFr: string) {
  let resultFinal = ''
  if (dateFr && (dateFr.indexOf('-') > 0 || dateFr.indexOf('/') > 0)) {

    // let result = dateFr.replace('-', '')
    // resultFinal=result
    // console.log("resultFinal", resultFinal)
    let thisYear;
    let thisMonth;
    let thisDate;

    thisDate = dateFr.substring(0,2);
    //all console.log(75,thisDate)
    

    let thisMonthIndex = dateFr.substring(3);
    //all console.log(188,thisMonthIndex)
    thisMonth = thisMonthIndex.substring(0, 2);
    //all console.log(190,thisMonth)



    let thisYearIndex = dateFr.substring(6);
    //all console.log(71,thisMonthIndex)
    thisYear = thisYearIndex.substring(0, 4);
    // thisYear = dateFr.substring(5, 4);
    //all console.log(198,thisYear)

    resultFinal = thisYear+thisMonth+thisDate
  }

  //all console.log("resultFinal", resultFinal)
  return resultFinal
}

export function date_From_dd_mm_yyyy(jourIndex: string) {
  // console.log("68 jourIndexToDate : yyyymmaa --> new Date(yyyy-mm-aa)", jourIndex)
  let thisYear;
  let thisMonth;
  let thisDate;
  let posTiret = jourIndex.indexOf('-')
  //all0810 console.log(posTiret)
  thisDate = jourIndex.substring(0, posTiret);
  //all0810 console.log("thisDate ", thisDate)
  let thisMonthIndex = jourIndex.substring(posTiret + 1);
  //all0810 console.log("thisMonthIndex", thisMonthIndex)
  thisMonth = thisMonthIndex.substring(0, posTiret);
  //all0810 console.log("thisMonth ", thisMonth)
  thisYear = thisMonthIndex.substring(posTiret + 1);
  //all0810 console.log("thisYear ", thisYear)
  let myDate = thisYear + '-' + thisMonth + '-' + thisDate;
  //console.log(myDate)
  return new Date(myDate);
}

export function timestamp2time(element: any) {

  let ts = element

  //allconsole.log(ts)


  return (new Date(ts.seconds * 1000)).toString()
}
export function timestamp2timeD(element: any) {
  // console.log("85 timestamp2timeD ",element)
  let ts = element
  return (new Date(ts?.seconds * 1000))
}

export function timeFromTimeStampOrDate(elementTime: any) {
  //allconsole.log(93, elementTime)
  //allconsole.log(94, elementTime['seconds'])
  //allconsole.log(95, elementTime['nanoseconds'])

  if (elementTime['seconds'] > 0 || elementTime['nanoseconds'] > 0) {
    //all0403 console.log(97,timestamp2timeD(elementTime) )
    return timestamp2timeD(elementTime)
  } else {
    //all0403 console.log(100,typeof(elementTime), elementTime)
    return (elementTime)
  }
}

export function generateObjectToKeyAndNameWithDetail(thisArrayObject: any[]) {

  const thisObjectKey: any = []
  const thisObjectName: any = []
  const thisObjectIcon: any = []
  const thisObjectDetail: any = []
  // console.log("1297 thisArrayObject =", thisArrayObject)
  thisArrayObject?.forEach((thisObject: { [x: string]: any; }) => {
    // console.log(1299, thisObject)

    // for (const key in thisObject) {
    //   if (Object.prototype.hasOwnProperty.call(thisObject, key)) {
    //     const element = thisObject[key];

    //     console.log(1322, key, element)
    thisObjectKey.push(thisObject.key)
    thisObjectName.push(thisObject.name)
    thisObjectDetail.push(thisObject.detail)
    thisObjectIcon.push((thisObject.key?.indexOf('pdj') >= 0 && thisObject.key != 'pdjs') ? 'E' : null)
    //   }
    //  }

  });
  //  console.log('1308 thisObjectKey ', thisObjectKey,  thisObjectName,thisObjectIcon)
  //    console.log('thisObjectName ', thisObjectName)
  return [thisObjectKey, thisObjectName, thisObjectIcon, thisObjectDetail]
}
export async function reduceCdeToUniqueList(objectToReduce: any[]) {
  console.log("29 objectToReduce ", objectToReduce?.length > 0, objectToReduce)
  let i = 0
  const objectToReduceUnique: any[] = []
  if (objectToReduce?.length > 0) {
    objectToReduce?.forEach((objectToReduceElt: { ref: any; date: any; }) => {
      // console.log("34 objectToReduceElt ",objectToReduceElt)
      if (i == 0) {
        objectToReduceUnique.push(objectToReduceElt)
        //all29122023 console.log("317 objectToReduce ",objectToReduceUnique, objectToReduceElt)

      } else if (i > 0 && i <= objectToReduce.length) {
        console.log("40 objectToReduce.length ", objectToReduce?.length)
        if (objectToReduce[i - 1].ref != objectToReduceElt.ref
          //  && objectToReduce[i - 1].date != objectToReduceElt.date
        ) {
          objectToReduceUnique.push(objectToReduceElt)
          console.log("45 objectToReduce ", objectToReduceUnique?.length, objectToReduceElt)
        }
      }

      i++
    });
    //all29122023 console.log("332 objectToReduceUnique ",i, objectToReduceUnique)
    //  if (objectToReduceUnique.length != cdeEnCoursAllEmail.length) {
    //    setCdeEnCoursAllEmail(objectToReduceUnique)
    //    //all29122023 console.log("334 objectToReduceUnique ",i, objectToReduceUnique)
    //  }
    return objectToReduceUnique

  }
}

export function getPanierQteNonNull(panierQte: any) {
  //all console.log("Panier", "85 getPanierQteNonNull, panierQte?.length = ", panierQte?.length)
  let result = panierQte?.filter((panierElt: any, idx: any, panierQte: any) => {
    return panierElt.qte > 0
  })
  // console.log("Panier", "88 result getPanierQteNonNull ", result)
  return result
}

export function thisClone(something: any) {
  return something
}
export async function objectLength(myObject: Object) {
  //all06112023 console.log(956, "Object.keys(myObject).length)",':'+Object.keys(myObject).length +': à utiliser sans passer par function')
  //all06112023 console.log(956, (Object.keys(myObject).length))
  if (myObject) {
    return (Object.keys(myObject).length)
  } else {
    return 0
  }
}
export function takeOffAccent(word: string) {
  var accent = [
    /[\300-\306]/g, /[\340-\346]/g, // A, a
    /[\310-\313]/g, /[\350-\353]/g, // E, e
    /[\314-\317]/g, /[\354-\357]/g, // I, i
    /[\322-\330]/g, /[\362-\370]/g, // O, o
    /[\331-\334]/g, /[\371-\374]/g, // U, u
    /[\321]/g, /[\361]/g, // N, n
    /[\307]/g, /[\347]/g, // C, c
  ];
  var noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];

  var str = word;
  for (var i = 0; i < accent.length; i++) {
    str = str.replace(accent[i], noaccent[i]);
  }

  return str;
}
export function getTodayfr10 ( monthDocStr:any,setMonthDocStr:any,dayDocStr:any, setDayDocStr:any,dateFact:any, setdateFact:any) {
  const todayfr10TempResult:any = [];
  // if (!todayfr10) {
    let todayfr10Temp = formeMyDateTable(new Date())
    todayfr10Temp.then(
      (res:any) => {
        //all20102023 console.log("554 res.fullDate6", res.thisDMY, res.thisDMY + '/' + res.hourMinSec, res)
        setdateFact(res.thisDMY + '/' + res.hourMinSec)
        setMonthDocStr(res.yy + res.mm)
        setDayDocStr(res.yy + res.mm + res.dd)
        // setTodayfr10(res.thisDMY)
        todayfr10TempResult[0] = res.thisDMY
         //all console.log("DATASERVICE1026 ", todayfr10TempResult[0])
        return todayfr10TempResult[0]
      }
    )
  // }
}

export function groupedByPdjType(_articlesList: any, _setArticlesListByCat: any) {
  return _articlesList.reduce((acc: any, article: any) => {
    const { pdjType } = article;

    if (!acc[pdjType]) {
      acc[pdjType] = [];
    }

    acc[pdjType].push(article);
    _setArticlesListByCat(acc);
    return acc;
  }, {});
}
export async function sortObjectsDescent(objs: any[], fieldToSort: string | any[]) {
  // console.log("1132 sortObjectsDescent : fieldToSort,objs = ",fieldToSort, objs)
 
  // Define a couple of sorting callback functions, one with hardcoded sort key and the other with an argument sort key
  // const sorter1 = (a, b) => a.last_nom.toLowerCase() > b.last_nom.toLowerCase() ? 1 : -1;
  const sorter2 = (sortBy: any) => (a: { [x: string]: { toLowerCase: () => number; }; }, b: { [x: string]: { toLowerCase: () => number; }; }) => a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? 1 : -1;
  // const sorter2 = (sortBy: string | number) => (a: { [x: string]: { toLowerCase: () => number; }; }, b: { [x: string]: { toLowerCase: () => number; }; }) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
  if(Object.keys(objs)?.length == fieldToSort?.length){
    objs?.sort(sorter2(fieldToSort));
  }
  // console.log(`Using sorter2 - passed param sortBy=${fieldToSort}`, objs);
  return objs
}

export async function sortObjectsAscent(objs: any[], fieldToSort: string | any[]) {
console.log("425 sortObjectsAscent : fieldToSort,objs = ",fieldToSort, objs)
  //   var objs = [ 
  //     { first_nom: 'Lazslo', last_nom: 'Jamf'     },
  //     { first_nom: 'Pig',    last_nom: 'Bodine'   },
  //     { first_nom: 'Pirate', last_nom: 'Prentice' }
  // ];


  // Define a couple of sorting callback functions, one with hardcoded sort key and the other with an argument sort key
  // const sorter1 = (a, b) => a.last_nom.toLowerCase() > b.last_nom.toLowerCase() ? 1 : -1;
  const sorter2 = (sortBy: any) => (a: { [x: string]: { toLowerCase: () => number; }; }, b: { [x: string]: { toLowerCase: () => number; }; }) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;

  if(Object.keys(objs)?.length == fieldToSort?.length){
    objs?.sort(sorter2(fieldToSort));
  }
//all console.log(`Using sorter2 - passed param sortBy=${fieldToSort}`, objs);
  return objs
}

export async function sortObjectsAscentStr(objs: any[], fieldToSort: string) {
  console.log("425 sortObjectsAscent : fieldToSort, objs = ", fieldToSort, objs);

  // Vérification des entrées
  if (!Array.isArray(objs) || objs.length === 0) {
    console.error("Le tableau d'objets est vide ou invalide.");
    return objs;
  }

  if (typeof fieldToSort !== "string" || fieldToSort.trim() === "") {
    console.error("Le champ de tri est invalide.");
    return objs;
  }

  // Fonction de tri
  const sorter = (a: { [key: string]: any }, b: { [key: string]: any }) => {
    const valA = a[fieldToSort]?.toString().toLowerCase() || "";
    const valB = b[fieldToSort]?.toString().toLowerCase() || "";

    if (valA > valB) return 1;
    if (valA < valB) return -1;
    return 0;
  };

  // Application du tri
  const sortedObjs = [...objs]; // Crée une copie pour éviter de modifier l'original
  sortedObjs.sort(sorter);

  console.log(`Trié sur le champ "${fieldToSort}" :`, sortedObjs);
  return sortedObjs;
}


export function arrayUnique(arrayWithDuplicates: any[]) {
  if(arrayWithDuplicates && arrayWithDuplicates.length==0){
  // if(arrayWithDuplicates.length==0){
    arrayWithDuplicates = [1, 1, 2, 3, 4, 4, 4, 5, 1];   const distinctArray = arrayWithDuplicates.filter((n: any, i: any) => arrayWithDuplicates.indexOf(n) === i);
    console.dir(distinctArray);
    // output: [1, 2, 3, 4, 5]
    return distinctArray
  }else{
    return null
  }
 
}