import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Si vous utilisez Firestore
import { getItems, myApp } from '@/firebase';
import { FirebaseInit } from '@/constants/firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
import { UserType } from '@/app/models/UserType';
import { thisClone } from '../components/services/DataServices';

// Type de données utilisateur
// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// Type des valeurs du contexte
interface AuthContextType {
  user: UserType | null; // null si non connecté
  setUser: any
  currentUser:  UserType | null; // null si non connecté
  setCurrentUser: any
  login: (user: UserType) => void; // Fonction pour connecter un utilisateur
  logout: () => void; // Fonction pour déconnecter
  loading: boolean
  auth :any
  closeModalSignIn: boolean
  modalSignInVisible:any, setModalSignInVisible:any
  gAuth:any, setGAuth: any,
  userInfo:any, setUserInfo:any
}

// Crée le contexte avec une valeur par défaut
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const  [modalSignInVisible, setModalSignInVisible] =  useState(false)

  const [gAuth, setGAuth] = useState(); // getPersistedAuth
  const login = (userData: UserType) => {
    setUser(userData);
  };



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
    const unsubscribe = auth.onAuthStateChanged(async (user:any) => {
        
        setTimeout(() => {
            console.log('user AuthContext', user )
        }, 2000);
      setCurrentUser(user);
     
      if (user) {

        // Récupérer les données utilisateur supplémentaires depuis Firestore (si nécessaire)
        // const userDoc = await firestore.collection('users').doc(user.uid).get();
        const userDoc = await getItems('users');
        if (userDoc.exists) {
          // Mettre à jour l'état avec les données utilisateur
          setCurrentUser({ ...user, ...userDoc.data() });
        }else{
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
      login, logout , 
      user, setUser,
      loading, auth,
      modalSignInVisible, setModalSignInVisible,
      userInfo, setUserInfo,
      gAuth, setGAuth
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