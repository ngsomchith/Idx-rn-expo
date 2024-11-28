import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import React, { useContext } from 'react';
// import { AuthContext } from './AuthContext';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  // livraison-de-repas-a-toulon
  //   apiKey: "AIzaSyDO60jvgdW5cC9UBt8mPuD5STZb05fnzHI",
  //   authDomain: "livraison-de-repas-a-toulon.firebaseapp.com",
  //   projectId: "livraison-de-repas-a-toulon",
  //   storageBucket: "livraison-de-repas-a-toulon.firebasestorage.app",
  //   messagingSenderId: "517125354909",
  //   appId: "1:517125354909:web:76c741870412035a81eb74",
  //   measurementId: "G-DRGQB84HZD"



  // apiKey: Constants.manifest.extra.apiKey,
  // authDomain: Constants.manifest.extra.authDomain,
  // projectId: Constants.manifest.extra.projectId,
  // storageBucket: Constants.manifest.extra.storageBucket,
  // messagingSenderId: Constants.manifest.extra.messagingSenderId,
  // appId: Constants.manifest.extra.appId,


  // delicatessen
  apiKey: "AIzaSyAyu1gY_pBqNZbYJgd9KQ4vjfD-iVhx4I0",
  authDomain: "delicatessencloud.firebaseapp.com",
  projectId: "delicatessencloud",
  storageBucket: "delicatessencloud.appspot.com",
  messagingSenderId: "1033002245945",
  appId: "1:1033002245945:web:32bd20fb838ae15a8092e8",


  // apiKey: "AIzaSyAWuUVjxWHsUuY3zBM5px-sD1qCwYDqJgI",
  // authDomain: "betmode-3ab24.firebaseapp.com",
  // databaseURL: "https://betmode-3ab24-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "betmode-3ab24",
  // storageBucket: "betmode-3ab24.appspot.com",
  // messagingSenderId: "160947168617",



  //  unjour-unplat
  // apiKey: 'AIzaSyCWhHdZncBWj1JcokpyQDsrYyQC58RGTGo',
  // authDomain: 'jour1plat.firebaseapp.com',
  // projectId: 'jour1plat',
  // storageBucket: 'jour1plat.appspot.com',
  // messagingSenderId: '964852376005',
  // appId: '1:964852376005:web:85d5ccce837aea31a8abac',


  // delicatessencloud
  // apiKey: "AIzaSyAyu1gY_pBqNZbYJgd9KQ4vjfD-iVhx4I0",
  // authDomain: "delicatessencloud.firebaseapp.com",
  // projectId: "delicatessencloud",
  // storageBucket: "delicatessencloud.appspot.com",
  // messagingSenderId: "1033002245945",
  // appId: "1:1033002245945:web:32bd20fb838ae15a8092e8",

  //   udexalgo = proxicourses
  //   apiKey: "AIzaSyBJ5K5dpOeg4dGWmJoFpidoJh_D0iH3ONE",
  //   authDomain: "udexalgo.firebaseapp.com",
  //   databaseURL: "https://udexalgo-default-rtdb.europe-west1.firebasedatabase.app",
  //   projectId: "udexalgo",
  //   storageBucket: "udexalgo.appspot.com",
  //   messagingSenderId: "350509971155",
  //   appId: "1:350509971155:web:a6cc1171331a9da7554626",

  // delicatessen-cloud
  // apiKey: "AIzaSyAU6LamQ8wYn6IBD3AY3lyGVFQLq48gVok",
  // authDomain: "delicatessen-cloud.firebaseapp.com",
  // projectId: "delicatessen-cloud",
  // storageBucket: "delicatessen-cloud.firebasestorage.app",
  // messagingSenderId: "1000499986663",
  // appId: "1:1000499986663:web:394ee6d11726026f0ae242",

};

// Initialize Firebase



// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// Initialize Firebase Authentication
// const myAuth = getAuth(myApp);
// export {myApp, myAuth}

function MyAuthComponent() {
  // const { auth } = useContext(AuthContext);

  // Use the `auth` object here to perform authentication actions
  // ...
}