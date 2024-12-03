export function generateObjectToKeyAndNameWithDetail(thisArrayObject: any[]) {

    const thisObjectKey: any =[]
    const thisObjectName: any =[]
    const thisObjectIcon: any =[]
    const thisObjectDetail: any =[]
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
          thisObjectIcon.push((thisObject.key?.indexOf('pdj')>=0 && thisObject.key!='pdjs') ? 'E' : null)
      //   }
      //  }
  
     });
  //  console.log('1308 thisObjectKey ', thisObjectKey,  thisObjectName,thisObjectIcon)
  //    console.log('thisObjectName ', thisObjectName)
     return [ thisObjectKey,  thisObjectName, thisObjectIcon, thisObjectDetail]
  }
  export async function reduceCdeToUniqueList(objectToReduce: any[]){
    console.log("29 objectToReduce ",objectToReduce?.length > 0, objectToReduce)
     let i = 0
     const objectToReduceUnique: any[] = []
     if (objectToReduce?.length > 0) {
       objectToReduce?.forEach((objectToReduceElt: { ref: any; date: any; }) => {
        // console.log("34 objectToReduceElt ",objectToReduceElt)
         if (i == 0) {
           objectToReduceUnique.push(objectToReduceElt)
           //all29122023 console.log("317 objectToReduce ",objectToReduceUnique, objectToReduceElt)
    
         } else if (i > 0 && i <= objectToReduce.length) {
           console.log("40 objectToReduce.length ",objectToReduce?.length)
           if (objectToReduce[i - 1].ref != objectToReduceElt.ref
            //  && objectToReduce[i - 1].date != objectToReduceElt.date
           ) {
             objectToReduceUnique.push(objectToReduceElt)
              console.log("45 objectToReduce ",objectToReduceUnique?.length, objectToReduceElt)
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