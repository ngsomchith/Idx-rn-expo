import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Si vous utilisez Firestore
import { getItems, myApp } from '@/firebase';
import { FirebaseInit } from '@/constants/firebaseConfig';
import { getAuth } from 'firebase/auth';
import { UserType } from '@/app/models/UserType';
import { thisClone } from './services/DataServices';

// Type de données utilisateur
// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// Type des valeurs du contexte
interface AuthContextType {
  user: UserType | null; // null si non connecté
  currentUser:  UserType | null; // null si non connecté
  login: (user: UserType) => void; // Fonction pour connecter un utilisateur
  logout: () => void; // Fonction pour déconnecter
  loading: boolean
  auth :any
}

// Crée le contexte avec une valeur par défaut
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);


  const login = (userData: UserType) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };


  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  let currentUSerTemp = thisClone(currentUser)

  const firebase = myApp[0]
  const auth = getAuth(firebase)
  const firestore = myApp[3]

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
      currentUser, login, logout , user, loading, auth
      
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