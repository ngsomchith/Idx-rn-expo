import { FirebaseInit, signInWithEmailAndPassword } from "@/constants/firebaseConfig";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform } from 'react-native';
import { ThemedView } from "../ThemedView";
import { ThemedTitle } from "../ThemedTitle";
import { ThemedInput } from "../ThemedInput";
import { useAuth } from "../../app/AuthContext";
import { thisClone } from "../services/DataServices";

export const LoginScreen = () => {

  const { 
    login, currentUser,
    modalSignInVisible, setModalSignInVisible
} = useAuth();
    let currentUserTemp = thisClone(currentUser)
    const myApp = FirebaseInit()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        console.log('handleSignIn')
        try {
            const userCredential = await signInWithEmailAndPassword(myApp, email, password);
            console.log(userCredential)
            console.log('Connexion réussie', `Bienvenue ${userCredential.user.email}`);
             
                currentUserTemp = userCredential.user
                console.log("user ProfileScreen 24", currentUserTemp)
                setModalSignInVisible(false)
            login(userCredential.user)
        } catch (error) {
            window.alert('Erreur', error?.message);
        }
    };

    useEffect(() => {
        // window.alert("login :"+ login)
    }, [login])
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
                

            <Button title="Se connecter" onPress={handleSignIn} />
        </ThemedView>
    );
};
