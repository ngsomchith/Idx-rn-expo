// Importations nécessaires
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { myApp } from './constants/firebaseConfig';

// Composant SignIn
const SignIn = ({ 
  // navigation 
}) => {
  // const [thisAuth,setThisAuth] = useState(undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  // const app0 = myApp
  // const thisAuth = myAuth;

//   useEffect(() => {if(myApp){
//     myAuth = getAuth(myApp);
//     console.log("myAuth ", myAuth)
//   }
// }, [myApp]);

  // if(myApp){
  //   const myAuth = getAuth(myApp);
  // }
  // Fonction de connexion avec Firebase
  const handleSignIn = async () => {
    // try {
    //   const userCredential = await signInWithEmailAndPassword(thisAuth, email, password);
    //   const user = userCredential.user;
    //   console.log('Utilisateur connecté:', user);
    //   // Redirigez l'utilisateur vers l'écran principal (par exemple, Dashboard)
    //   // navigation.navigate('Dashboard'); 
    // } catch (error) {
    //   setErrorMessage(error?.message); // Enregistrer l'erreur pour l'afficher
    //   console.log(error?.message);
    // }
  };

  return (
    <></>
    // <View style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     value={email}
    //     onChangeText={setEmail}
    //     keyboardType="email-address"
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Mot de passe"
    //     value={password}
    //     onChangeText={setPassword}
    //     secureTextEntry
    //   />
    //   {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    //   <Button title="Se connecter" onPress={handleSignIn} />
    // </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
});

export default SignIn;