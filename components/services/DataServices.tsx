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
   console.log('1308 thisObjectKey ', thisObjectKey,  thisObjectName,thisObjectIcon)
     console.log('thisObjectName ', thisObjectName)
     return [ thisObjectKey,  thisObjectName, thisObjectIcon, thisObjectDetail]
  }