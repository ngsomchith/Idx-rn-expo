import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform } from 'react-native';

import { FirebaseInit, signInWithEmailAndPassword } from './constants/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';


export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const myApp = FirebaseInit()

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
        container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'white' },
        title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
        input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 },
    });
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion Firebase</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="Se connecter" onPress={handleSignIn} />
        </View>
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

