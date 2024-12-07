import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform } from 'react-native';

import { FirebaseInit, signInWithEmailAndPassword } from './constants/firebaseConfig';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { ThemedView } from './components/ThemedView';
import { ThemedTitle } from './components/ThemedTitle';
import { ThemedText } from './components/ThemedText';
import { ThemedInput } from './components/ThemedInput';


export const myApp = FirebaseInit()

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        console.log('handleSignIn')
        try {
            const userCredential = await signInWithEmailAndPassword(myApp, email, password);
            console.log(userCredential)
            console.log('Connexion réussie', `Bienvenue ${userCredential.user.email}`);
        } catch (error) {
            Alert.alert('Erreur', error.message);
        }
    };
    const styles = StyleSheet.create({
        containerColumn: { flex: 1, justifyContent: 'flex-start', padding: 20, backgroundColor: 'white' },
        title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
        input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 },
    });


    return (
        <ThemedView
        // style={styles.containerColumn}
        >
            <ThemedTitle style={styles.title}>Connexion Firebase</ThemedTitle>
            {/* <ThemedText>  */}
                <ThemedInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <ThemedInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            {/* </ThemedText> */}

            <Button title="Se connecter" onPress={handleSignIn} />
        </ThemedView>
    );
};



export default LoginScreen;

export async function updateItem(
    thisCollection: string,
    thisItem: Object,
    thisDoc: string
) {
    console.log("233 updateItem ", thisCollection, thisItem, "thisDoc:", thisDoc);

    const myApp = FirebaseInit()
    const db = myApp[3]
    if (thisDoc && thisItem) {
        let myRefDoc;

        myRefDoc = doc(db, thisCollection, thisDoc);
        //all0810 console.log("185 thisItem", myRefDoc, thisItem);
        await setDoc(myRefDoc, thisItem);
    }
}


export async function getItems(thisCollection: string) {
    // ++++++++++++++++++++++++++++++++++++++++++++++
    //model :  import { collection, query, where, getDocs } from "firebase/firestore";
    // const q = query(collection(db, "cities"), where("capital", "==", true));

    const db = myApp[3]
    let items: any = [];
    let i = 0;
    const querySnapshot = await getDocs(collection(db, thisCollection));
    querySnapshot.forEach((doc) => {
        // console.log(`175,${doc.id} => ${doc.data()}`);
        items.push(doc.data());
        i++;
    });
    return items;
}