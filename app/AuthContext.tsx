import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Si vous utilisez Firestore
import { getItems, myApp } from '@/firebase';
import { FirebaseInit } from '@/constants/firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
import { UserType } from '@/app/models/UserType';
import { thisClone } from '../components/services/DataServices';
import { useFb } from '@/hooks/useFb';
import { ArticleType } from './models/ArticleType';



// Type des valeurs du contexte
interface AuthContextType {
  user: UserType | null; // null si non connecté
  setUser: any
  currentUser: UserType | null; // null si non connecté
  setCurrentUser: any
  login: (user: UserType) => void; // Fonction pour connecter un utilisateur
  logout: () => void; // Fonction pour déconnecter
  loading: boolean
  auth: any
  closeModalSignIn: boolean
  modalSignInVisible: any, setModalSignInVisible: any
  gAuth: any, setGAuth: any,
  userInfo: any, setUserInfo: any
  articlesList: any, setArticlesList: any
  cart: any, setCart: any
  addToCartFn: any
  removeFromCartFn: any
  thisUseFB: any
}

// Crée le contexte avec une valeur par défaut
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalSignInVisible, setModalSignInVisible] = useState(false)

  const [gAuth, setGAuth] = useState(); // getPersistedAuth
  const login = (userData: UserType) => {
    setUser(userData);
  };

  const [articlesList, setArticlesList] = useState<Array<ArticleType>>([]);
  const thisUseFB = useFb('articles/seller2/articlesList');

  const [cart, setCart] = useState([]);
  const addToCartFn = (article: any) => {
    setCart((prevCart: any) => {
      const existingItem = prevCart.find((item: any) => item.id === article.id);
      if (existingItem) {
        return prevCart.map((item: any) =>
          item.id === article.id ? { ...item, qte: item.qte + 1 } : item
        );
      }
      return [...prevCart, { ...article, qte: 1 }];
    });
  };
  const removeFromCartFn = (article: any) => {
    setCart((prevCart: any) =>
      prevCart
        .map((item: any) =>
          item.id === article.id ? { ...item, qte: item.qte - 1 } : item
        )
        .filter((item: any) => item.qte > 0)
    );
  };

  
  // useEffect(()=>{
  //   console.log("thisUseFB ", thisUseFB)
  // }[thisUseFB, articlesList])


  useEffect(() => {
    console.log("thisUseFB 87 ", thisUseFB)
    console.log("useFb useEffect 88 articlesList = ", articlesList)
    if (thisUseFB.articlesList != articlesList) {
      setArticlesList(thisUseFB.articlesList)
    }
  }, [thisUseFB, articlesList])


  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  let currentUSerTemp = thisClone(currentUser)

  const firebase = myApp[0]

  const [auth, setAuth] = useState(getAuth() || null || undefined);

  const [userInfo, setUserInfo] = useState({})
  const firestore = myApp[3]

  const logout = () => {
    console.log("logOut")
    // setAuth(getAuth(undefined))
    // setAuth(getAuth())
    // if(auth){
    //   setAuth(undefined)
    // }
    setCurrentUser(null)
    setUser(null)
    setGAuth(undefined)
    signOut(auth)
    setUser(null);
  };

  useEffect(() => {
    console.log("auth ", auth)
  }, [auth])
  useEffect(() => {
    setAuth(getAuth(firebase))
  }, [])
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {

      setTimeout(() => {
        console.log('user AuthContext', user)
      }, 2000);
      setCurrentUser(user);

      if (user) {

        // Récupérer les données utilisateur supplémentaires depuis Firestore (si nécessaire)
        // const userDoc = await firestore.collection('users').doc(user.uid).get();
        const userDoc = await getItems('users');
        if (userDoc.exists) {
          // Mettre à jour l'état avec les données utilisateur
          setCurrentUser({ ...user, ...userDoc.data() });
        } else {
          user = new UserType()
          // window.alert ("No user connected")
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser, setCurrentUser,
      login, logout,
      user, setUser,
      loading, auth,
      modalSignInVisible, setModalSignInVisible,
      userInfo, setUserInfo,
      gAuth, setGAuth,
      cart, setCart,
      addToCartFn, removeFromCartFn,
      articlesList, setArticlesList,
      thisUseFB
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l’intérieur d’un AuthProvider.');
  }
  return context;
};