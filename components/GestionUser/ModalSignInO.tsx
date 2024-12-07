import React, { useEffect, useState } from "react";
import { Modal, Text, Pressable, View, TextInput, StyleSheet } from "react-native";

import { A } from "@expo/html-elements";
import ThemedListItem from "react-native-elements/dist/list/ListItem";
import ThisDevice from "@/constants/ThisDevice";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { ThemedTitle } from "../ThemedTitle";
import LoginScreen, { myApp } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";



function ModalSignIn({ myImage }) {
  const [modalVisible, setModalVisible] = useState(false);
  const device = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.width - 5
  const [value, setValue] = useState({
    email: ' ',
    name: ' ',
    date: ' ',
    plat: '',
    // phone: "",
    details: "",
    error: "",
  });
const auth = myApp[1]

  const openModal = () => {
    return (
      <Pressable
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center', alignItems: 'center',
          borderWidth: 3, borderColor: 'blue', borderStyle: 'solid',
        }}
        onPress={() =>{ setModalVisible(true)} }>


        <ThemedText style={{ display: 'flex', flexDirection: 'row', height: '100%', minWidth: 300 }}>
          Open  Modal Signin 
        </ThemedText>

      </Pressable>
    )
  }

  const thisAuth = onAuthStateChanged(myApp[1], (user) => {
    if (user) {
      // L'utilisateur est connecté
      console.log("Utilisateur connecté 53 : ", user);
      // Afficher le contenu réservé aux utilisateurs connectés
      setModalVisible(false)
    } else {
      // L'utilisateur est déconnecté
      console.log("Utilisateur déconnecté");
      // Rediriger vers la page de connexion
    }
  });



  useEffect(() => {
    console.log("ModalSignIn31 value ", value, //Number(value.montantCB).toFixed(2)
    )
  }, [value])

  // useEffect(() => {
  //   console.log("ModalSignIn 72 currentUserEmail", currentUserEmail)
  //      //Number(value.montantCB).toFixed(2)
  // }, [currentUserEmail])
  
  useEffect(() => {
    console.log("thisAuth ", thisAuth)
  }, [thisAuth])

  useEffect(() => {
    console.log("auth 82 ", auth)
  }, [auth])

  return (
    <View
      style={
        {
          backgroundColor: 'transparent',
          width: '100%',
          height:'100%',
          borderWidth: 3, borderColor: 'pink', borderStyle: 'solid',
        }
      }
    >



      {openModal()}

      <Modal // Modal-in
        animationType="slide" transparent={true} visible={modalVisible}>

        <ThemedView style={{ //headerTitle Modal  wttonith close bu
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 5, borderColor: 'pink', borderStyle: 'solid',
          marginVertical: 10
        }}>
          <ThemedTitle style={{ fontSize: 30 }}> ModalSignIn :  Connexion </ThemedTitle>

          <Pressable onPress={() => { setModalVisible(false) }}>
            <ThemedText>X</ThemedText>
          </Pressable>

        </ThemedView>

        {/* <View
          style={{
            width: '100%',
            height: '100%',
            minWidth: 100,
            minHeight: 50,
            justifyContent: "flex-start",
            // backgroundColor: 'transparent',
            backgroundColor: 'coral',// Colors.primaryBG,
            alignItems: "center",
            padding: 10,
            borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
          }}
        >
          <LoginScreen />
        </View> */}
      </Modal>
    </View>
  );

}

export default ModalSignIn;
