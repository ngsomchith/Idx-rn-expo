import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword as webSignInWithEmailAndPassword } from 'firebase/auth';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Configuration Firebase (remplacez par vos propres clés)
const firebaseConfig = {
  // apiKey: 'YOUR_API_KEY',
  // authDomain: 'YOUR_AUTH_DOMAIN',
  // projectId: 'YOUR_PROJECT_ID',
  // storageBucket: 'YOUR_STORAGE_BUCKET',
  // messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  // appId: 'YOUR_APP_ID',
   // delicatessen
   apiKey: "AIzaSyAyu1gY_pBqNZbYJgd9KQ4vjfD-iVhx4I0",
   authDomain: "delicatessencloud.firebaseapp.com",
   projectId: "delicatessencloud",
   storageBucket: "delicatessencloud.appspot.com",
   messagingSenderId: "1033002245945",
   appId: "1:1033002245945:web:32bd20fb838ae15a8092e8",
};

// Initialisation conditionnelle de Firebase
const firebaseApp0:any = [];
const authInstance0 :any =[];


if (Platform.OS === 'web') {
  firebaseApp0[0] = initializeApp(firebaseConfig); // Initialisation pour le web
} else {
  if (!firebase.apps.length) {
    firebaseApp0[0] = firebase.app(); // Initialisation pour mobile
  } else {
    firebaseApp0[0] = firebase.app(); // Recyclage de l'instance existante
  }
}

// Méthode universelle de connexion

export const getAuthSession = async (email:any, password:any) => {


  if (Platform.OS === 'web') {
     authInstance0[0] = getAuth(firebaseApp0[0]); // Instance Firebase pour le web
     authInstance0[1] = await webSignInWithEmailAndPassword(authInstance0[0], email, password);
     console.log("getAuthSession 47 signin Web ", authInstance0[1])
  } else {
     authInstance0[1] = auth().signInWithEmailAndPassword(email, password); // Instance Firebase pour mobile
     console.log("getAuthSession 50 signin Mobil ", authInstance0[1])
  }

};

export  {authInstance0} 
// Export d'une instance Firebase Auth

