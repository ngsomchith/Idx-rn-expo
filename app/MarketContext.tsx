// import React, { createContext, useContext, useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore'; // Si vous utilisez Firestore
// import { getItems, myApp } from '@/firebase';
// import { FirebaseInit } from '@/constants/firebaseConfig';
// import { getAuth, signOut } from 'firebase/auth';
// import { UserType } from '@/app/models/UserType';
// import { thisClone } from '../components/services/DataServices';

// // Type de données utilisateur
// // interface User {
// //   id: string;
// //   name: string;
// //   email: string;
// // }

// // Type des valeurs du contexte
// interface MarketType {
//   cart:any, setCart:any
//   addToCartFn:any
//   removeFromCartFn:any
// }

// // Crée le contexte avec une valeur par défaut
// const MarketContext = createContext<MarketType | undefined>(undefined);

// export const MarketProvider = ({ children }) => {

//   const [cart, setCart] = useState([]);
//   const addToCartFn = (article: any) => {
//     setCart((prevCart:any) => {
//       const existingItem = prevCart.find((item:any) => item.id === article.id);
//       if (existingItem) {
//         return prevCart.map((item:any) =>
//           item.id === article.id ? { ...item, qte: item.qte + 1 } : item
//         );
//       }
//       return [...prevCart, { ...article, qte: 1 }];
//     });
//   };
//   const removeFromCartFn = (article: any) => {
//     setCart((prevCart:any) =>
//       prevCart
//         .map((item:any) =>
//           item.id === article.id ? { ...item, qte: item.qte - 1 } : item
//         )
//         .filter((item:any) => item.qte > 0)
//     );
//   };

  

//   return (
//     <MarketContext.Provider value={{ 
//       cart, setCart,
//       addToCartFn, removeFromCartFn
  

//       }}>
//       {children}
//     </MarketContext.Provider>
//   );
// };



// // Hook personnalisé pour utiliser le contexte
// export const useMarket = () => {
//   const context = useContext(MarketContext);
//   if (!context) {
//     throw new Error('useMarket doit être utilisé à l’intérieur d’un MarketProvider.');
//   }
//   return context;
// };