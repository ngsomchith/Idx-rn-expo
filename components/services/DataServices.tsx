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


