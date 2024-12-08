import React, { useEffect, useState } from "react";
import { Modal, Text, Pressable, View, TextInput, StyleSheet } from "react-native";
import { A } from "@expo/html-elements";
import ThemedListItem from "react-native-elements/dist/list/ListItem";
import ThisDevice from "@/constants/ThisDevice";
import { ThemedView } from "../ThemedView";
import { ThemedTitle } from "../ThemedTitle";
import { ThemedText } from "../ThemedText";
import { iconLogin, iconUser, iconUsers } from "@/icons";
import { LoginScreen } from "./LoginScreen";
import { useAuth } from "../../app/AuthContext";
import ProfileScreen from "./ProfileScreen";


function ModalSignin({ myImage }) {

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
  const { user,
    modalSignInVisible, setModalSignInVisible
   } = useAuth();

  useEffect(() => {
    console.log("ModalSignin31 value ", value, //Number(value.montantCB).toFixed(2)
      
    )
  }, [value])

  useEffect(() => {
    console.log("ModalSignin36 user ", user)
    if (user) {
      console.log("ModalSignin36 user ", user.email)
    }
  }, [user])

  const openModal = () => {
    return (
      <Pressable
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center', alignItems: 'center',
          //allborder borderWidth: 3, borderColor: 'blue', borderStyle: 'solid',
        }}
        onPress={() => setModalSignInVisible(true)}>
        {/* <View style={{
      flexDirection: 'row', height: 50, width: 50,
      //allborder borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',

    }}> */}
        <ThemedText style={{ display: 'flex', flexDirection: 'row', height: '100%', minWidth: 300 }}>
          {!user ? iconLogin : iconUser}
        </ThemedText>



      </Pressable>
    )
  }

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        // borderWidth: 3, borderColor: 'pink', borderStyle: 'solid',
      }
      }
    >
      { openModal()}

      <Modal // Modal-in
        animationType="slide" transparent={true} visible={modalSignInVisible}>

        <ThemedView style={{ //headerTitle Modal  with close button Close
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 5, borderColor: 'pink', borderStyle: 'solid',
          marginVertical: 10
        }}>
          <ThemedTitle style={{ fontSize: 30 }}> Modal Connexion</ThemedTitle>

          <Pressable onPress={() => { setModalSignInVisible(false) }}>
            <ThemedText>X</ThemedText>
          </Pressable>

        </ThemedView>

        <View //mondal Content
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
          
          {!user ?
            <LoginScreen />
            :
            <ProfileScreen />
          }
        </View>
      </Modal>
    </View>
  );

}

export default ModalSignin;
