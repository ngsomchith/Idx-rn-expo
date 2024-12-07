import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Si vous utilisez Firestore
import { myApp } from '@/firebase';
import { FirebaseInit } from '@/constants/firebaseConfig';
import { getAuth } from 'firebase/auth';

const AuthContext = createContext('AuthContext0');

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          // Mettre à jour l'état avec les données utilisateur
          setCurrentUser({ ...user, ...userDoc.data() });
        }else{
            window.alert ("create user")
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};