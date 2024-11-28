import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { authInstance0, getAuthSession } from './constants/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authFirst = authInstance0
  const thissignInWithEmailAndPassword = getAuthSession(email, password)
  console.log("thissignInWithEmailAndPassword ", thissignInWithEmailAndPassword)
  console.log("authFirst ", authFirst)
  const handleSignIn = async () => {
    try {
      if(authFirst ){
        console.log("authFirst 14 ", authFirst)
        const userCredential =   signInWithEmailAndPassword(authFirst[0],email, password);
        console.log("userCredential ", userCredential)
        Alert.alert('Connexion réussie', `Bienvenue ${userCredential.user.email}`);
      }else{
        // setTimeout(() => {
          console.log("authFirst 19", authFirst)
        //   const userCredential = authFirst && signInWithEmailAndPassword(email, password);
        //   Alert.alert('Connexion réussie', `Bienvenue ${userCredential.user.email}`);
        // }, 500);
      }
    } catch (error) {
      Alert.alert('Erreur', error.message);
    }
  };

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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor:'white' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 },
});

export default LoginScreen;
