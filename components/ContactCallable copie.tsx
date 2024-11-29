import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { getFunctions, httpsCallable } from "firebase/functions";
import { initializeApp } from "firebase/app";
import { FirebaseInit } from "@/constants/firebaseConfig";
// import { myApp } from "@/constants/firebaseConfig";

// Configuration Firebase
// const firebaseConfig = {
//   apiKey: "VOTRE_API_KEY",
//   authDomain: "VOTRE_AUTH_DOMAIN",
//   projectId: "VOTRE_PROJECT_ID",
//   storageBucket: "VOTRE_STORAGE_BUCKET",
//   messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
//   appId: "VOTRE_APP_ID",
// };

// const app = initializeApp(firebaseConfig);

// const app = myApp ;
// const functions = getFunctions(app);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const myApp = FirebaseInit()
  
  const handleSubmit = async () => {
    if (!name || !email || !message) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    try {
        
      const contactMessage = httpsCallable(myApp[2], "contactMessage");
      const response = await contactMessage({ name, email, message });

      if (response ) {
        console.log(response,  'response?.data.success')
        window.alert("Succès : Votre message a été envoyé !");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      window.alert(
        "Erreur : Une erreur est survenue lors de l'envoi de votre message."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulaire de Contact</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 500,
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textarea: {
    height: 100,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ContactForm;
