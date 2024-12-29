import React, { useEffect, useState } from 'react';
import { thisClone } from './services/DataServices';
import { useAuth } from '@/app/AuthContext';

const ModalGetCdeEnCours = () => {
  const { articlesList, setArticlesList, thisParams, setThisParams,
    thisUseFB, cart, setCart, currentUser,

    allCurrentCde, setAllCurrentCde,
    addToCartFn, removeFromCartFn } = useAuth()
    
    const [my2Months, setmy2Months] = useState([])
    const [_cdeFrom2Months, set_CdeFrom2Months] = useState([])
    let allCurrentCdeTemp = thisClone(allCurrentCde)
    useEffect(() => {
        //all202409    //All console.log(" WELCOME1265 my2Months, dayDocStr", dayDocStr)
        fetchCdeEncours()
      }, [my2Months, dayDocStr]);
    
      const fetchCdeEncours = () => {
        let my2MonthsResult = getTwoMonths(dayDocStr)
    
        my2MonthsResult.then((res: any) => {
          //all202409    //All console.log("WELCOME1269 my2MonthsResult", dayDocStr, res, my2Months)
          if (my2Months && my2Months?.length == 0 && res) {
            setmy2Months(res)
            getCdeEnCoursByMonth(res, dayDocStr)
          } else {
    
          }
        })
      }
    return (
        <div>
            
        </div>
    );
};

export default ModalGetCdeEnCours;