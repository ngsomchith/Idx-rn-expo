// // Importez Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword as webSignInWithEmailAndPassword } from 'firebase/auth';
import { Persistence, ReactNativeAsyncStorage, browserSessionPersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Platform, useWindowDimensions } from 'react-native';
import { getAnalytics } from 'firebase/analytics';  // Importez votre instance Firebase Analytics
import firebase from '@react-native-firebase/app';

// for mobil app
import auth from '@react-native-firebase/auth';
import { getFunctions } from "firebase/functions";


// Obtenez l'instance Auth
// export const FirebaseInit = () => {

//     // // add firebase config
//     const firebaseConfig = {
//         // apiKey: Constants.manifest.extra.apiKey,
//         // authDomain: Constants.manifest.extra.authDomain,
//         // projectId: Constants.manifest.extra.projectId,
//         // storageBucket: Constants.manifest.extra.storageBucket,
//         // messagingSenderId: Constants.manifest.extra.messagingSenderId,
//         // appId: Constants.manifest.extra.appId,

//         // apiKey: "AIzaSyAWuUVjxWHsUuY3zBM5px-sD1qCwYDqJgI",
//         // authDomain: "betmode-3ab24.firebaseapp.com",
//         // databaseURL: "https://betmode-3ab24-default-rtdb.europe-west1.firebasedatabase.app",
//         // projectId: "betmode-3ab24",
//         // storageBucket: "betmode-3ab24.appspot.com",
//         // messagingSenderId: "160947168617",
//         // appId: "1:160947168617:web:2ff4a2d5c930b6af6509f8",
//         // measurementId: "G-B0MXBN2MK6"


//         //  unjour-unplat
//         // apiKey: 'AIzaSyCWhHdZncBWj1JcokpyQDsrYyQC58RGTGo',
//         // authDomain: 'jour1plat.firebaseapp.com',
//         // projectId: 'jour1plat',
//         // storageBucket: 'jour1plat.appspot.com',
//         // messagingSenderId: '964852376005',
//         // appId: '1:964852376005:web:85d5ccce837aea31a8abac',
//         // measurementId: 'G-JY8Z4J3RKB'

//         // delicatessencloud
//         // apiKey: "AIzaSyAyu1gY_pBqNZbYJgd9KQ4vjfD-iVhx4I0",
//         // authDomain: "delicatessencloud.firebaseapp.com",
//         // projectId: "delicatessencloud",
//         // storageBucket: "delicatessencloud.appspot.com",
//         // messagingSenderId: "1033002245945",
//         // appId: "1:1033002245945:web:32bd20fb838ae15a8092e8",
//         // measurementId: "G-G0VG6KNE8Y"

//         // udexalgo = proxicourses
//         // apiKey: "AIzaSyBJ5K5dpOeg4dGWmJoFpidoJh_D0iH3ONE",
//         // authDomain: "udexalgo.firebaseapp.com",
//         // databaseURL: "https://udexalgo-default-rtdb.europe-west1.firebasedatabase.app",
//         // projectId: "udexalgo",
//         // storageBucket: "udexalgo.appspot.com",
//         // messagingSenderId: "350509971155",
//         // appId: "1:350509971155:web:a6cc1171331a9da7554626",
//         // measurementId: "G-0074EQTBRN"

//         // delicatessen
//         apiKey: "AIzaSyAyu1gY_pBqNZbYJgd9KQ4vjfD-iVhx4I0",
//         authDomain: "delicatessencloud.firebaseapp.com",
//         projectId: "delicatessencloud",
//         storageBucket: "delicatessencloud.appspot.com",
//         messagingSenderId: "1033002245945",
//         appId: "1:1033002245945:web:32bd20fb838ae15a8092e8",
//         measurementId: "G-G0VG6KNE8Y"

//         // delicatessen-cloud
//         // apiKey: "AIzaSyAU6LamQ8wYn6IBD3AY3lyGVFQLq48gVok",
//         // authDomain: "delicatessen-cloud.firebaseapp.com",
//         // projectId: "delicatessen-cloud",
//         // storageBucket: "delicatessen-cloud.firebasestorage.app",
//         // messagingSenderId: "1000499986663",
//         // appId: "1:1000499986663:web:394ee6d11726026f0ae242",
//         // measurementId: "G-C1T5MT1GGZ"

//     };


//     // Function to initialize Firebase
//     // const initializeFirebase = () => {
//     const firebaseApp: any = [];

//     if (typeof window !== "undefined" && Platform.OS === "web") {
//         // Initialization for web
//         firebaseApp[0] = initializeApp(firebaseConfig);

//         if ( firebaseApp[0]) {
//             firebaseApp[1] = getAuth( firebaseApp[0]);
//             firebaseApp[2] = getFunctions( firebaseApp[0]);
//             firebaseApp[3] = getFirestore( firebaseApp[0]);
//             firebaseApp[4] = getAnalytics( firebaseApp[0]);
//         }
//     } else {
//         // Initialization for mobile
//         if (!firebase.apps.length) {
//              firebaseApp[0] = firebase.initializeApp(firebaseConfig); // Initialize for mobile
//         } else {
//              firebaseApp[0] = firebase.app(); // Reuse existing instance
//         }

//         if ( firebaseApp[0]) {
//             firebaseApp[1] =  firebaseApp[0].auth();
//             firebaseApp[2] =  firebaseApp[0].functions();
//             firebaseApp[3] =  firebaseApp[0].firestore();
//             firebaseApp[4] =  firebaseApp[0].analytics ?  firebaseApp[0].analytics() : null; // Analytics may not be available on all environments
//         }
//     }

//     // initializeFirebase();
//     return firebaseApp;
// };

export const FirebaseInit = () => {

    // // add firebase config
    const firebaseConfig = {
        // apiKey: Constants.manifest.extra.apiKey,
        // authDomain: Constants.manifest.extra.authDomain,
        // projectId: Constants.manifest.extra.projectId,
        // storageBucket: Constants.manifest.extra.storageBucket,
        // messagingSenderId: Constants.manifest.extra.messagingSenderId,
        // appId: Constants.manifest.extra.appId,

        // apiKey: "AIzaSyAWuUVjxWHsUuY3zBM5px-sD1qCwYDqJgI",
        // authDomain: "betmode-3ab24.firebaseapp.com",
        // databaseURL: "https://betmode-3ab24-default-rtdb.europe-west1.firebasedatabase.app",
        // projectId: "betmode-3ab24",
        // storageBucket: "betmode-3ab24.appspot.com",
        // messagingSenderId: "160947168617",
        // appId: "1:160947168617:web:2ff4a2d5c930b6af6509f8",
        // measurementId: "G-B0MXBN2MK6"


        //  unjour-unplat
        // apiKey: 'AIzaSyCWhHdZncBWj1JcokpyQDsrYyQC58RGTGo',
        // authDomain: 'jour1plat.firebaseapp.com',
        // projectId: 'jour1plat',
        // storageBucket: 'jour1plat.appspot.com',
        // messagingSenderId: '964852376005',
        // appId: '1:964852376005:web:85d5ccce837aea31a8abac',
        // measurementId: 'G-JY8Z4J3RKB'

        // delicatessencloud
        // apiKey: "AIzaSyAyu1gY_pBqNZbYJgd9KQ4vjfD-iVhx4I0",
        // authDomain: "delicatessencloud.firebaseapp.com",
        // projectId: "delicatessencloud",
        // storageBucket: "delicatessencloud.appspot.com",
        // messagingSenderId: "1033002245945",
        // appId: "1:1033002245945:web:32bd20fb838ae15a8092e8",
        // measurementId: "G-G0VG6KNE8Y"

        // udexalgo = proxicourses
        // apiKey: "AIzaSyBJ5K5dpOeg4dGWmJoFpidoJh_D0iH3ONE",
        // authDomain: "udexalgo.firebaseapp.com",
        // databaseURL: "https://udexalgo-default-rtdb.europe-west1.firebasedatabase.app",
        // projectId: "udexalgo",
        // storageBucket: "udexalgo.appspot.com",
        // messagingSenderId: "350509971155",
        // appId: "1:350509971155:web:a6cc1171331a9da7554626",
        // measurementId: "G-0074EQTBRN"

        // delicatessen
        apiKey: "AIzaSyAyu1gY_pBqNZbYJgd9KQ4vjfD-iVhx4I0",
        authDomain: "delicatessencloud.firebaseapp.com",
        projectId: "delicatessencloud",
        storageBucket: "delicatessencloud.appspot.com",
        messagingSenderId: "1033002245945",
        appId: "1:1033002245945:web:32bd20fb838ae15a8092e8",
        measurementId: "G-G0VG6KNE8Y"

        // delicatessen-cloud
        // apiKey: "AIzaSyAU6LamQ8wYn6IBD3AY3lyGVFQLq48gVok",
        // authDomain: "delicatessen-cloud.firebaseapp.com",
        // projectId: "delicatessen-cloud",
        // storageBucket: "delicatessen-cloud.firebasestorage.app",
        // messagingSenderId: "1000499986663",
        // appId: "1:1000499986663:web:394ee6d11726026f0ae242",
        // measurementId: "G-C1T5MT1GGZ"

    };

    // Initialisez Firebase
    const firebaseApp: any = [];
    if (Platform.OS === 'web') {
        firebaseApp[0] = initializeApp(firebaseConfig); // Initialisation pour le web
        if(firebaseApp[0]){
            firebaseApp[1] = getAuth(initializeApp(firebaseConfig));
            firebaseApp[2] = getFunctions(initializeApp(firebaseConfig));
            firebaseApp[3] = getFirestore(initializeApp(firebaseConfig));
            // console.log("auth 96 ", firebaseApp[1])
        }
    } else {
        if (!firebase.apps.length) {
            firebaseApp[0] = firebase.app(); // Initialisation pour mobile

        } else {
            firebaseApp[0] = firebase.app(); // Recyclage de l'instance existante
        }
    }

    // console.log("auth 104")
    // const auth = getAuth(firebaseApp[0]);
    // console.log("auth 105 ", firebaseApp)

    return (firebaseApp)

};

export const signInWithEmailAndPassword = async (firebaseApp: any, email: any, password: any) => {
    // info firebaseApp = undefined if mobile-app

    const _signInWithEmailAndPassword: any = []
    if (Platform.OS === 'web') {
        // console.log("signInWithEmailAndPassword 115", firebaseApp, email, password)

        const authInstance = firebaseApp[1]; // Instance Firebase pour le web

        _signInWithEmailAndPassword[0] = webSignInWithEmailAndPassword(authInstance, email, password);
    } else {
        _signInWithEmailAndPassword[0] = auth().signInWithEmailAndPassword(email, password); // Instance Firebase pour mobile
    }

    return _signInWithEmailAndPassword[0]
};


