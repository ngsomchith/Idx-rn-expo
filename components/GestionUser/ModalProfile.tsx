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
import { Colors } from "@/constants/Colors";


function ModalProfile({ myImage }) {
  const [modalProfileVisible, setModalProfileVisible] =useState(false)
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
    // 
   } = useAuth();

  useEffect(() => {
    console.log("ModalProfile31 value ", value, //Number(value.montantCB).toFixed(2)
      
    )
  }, [value])

  useEffect(() => {
    console.log("ModalProfile36 user ", user)
    if (user) {
      console.log("ModalProfile36 user ", user.email)
    }
  }, [user])

  const openModalButton = () => {
    return (
      <Pressable
        style={{
          width: '100%',
          // height: 100,
          flexDirection:'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          borderWidth: 3, borderColor: 'blue', borderStyle: 'solid',
        }}
        onPress={() => setModalProfileVisible(true)}>
        
        <Text style={{ 
          width:'100%',
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent:'flex-end',
          height: '100%', 
          minWidth: 300 }}>
          {!user ? iconLogin : iconUser}
        </Text>



      </Pressable>
    )
  }

  
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: 50,
        // borderWidth: 3, borderColor: 'pink', borderStyle: 'solid',
      }
      }
    >
      {/* { openModalButton()} */}
      <Pressable
                style={styles.openModalButton}
                onPress={() => {
                  console.log("ModalProfile80 setModalProfileVisible(true)")
                  setModalProfileVisible(true)
                }}
            >
                <View 
                // style={{ position: 'relative', left: -15, top: -10 }}
                >
                    
                    <Text 
                    style={{ 
                      display: 'flex',justifyContent: 'center', alignItems:'center'
                      // position: 'absolute', top: 0, left: 0 
                    }}
                    >{iconUser} </Text>
                </View>
            </Pressable>

      <Modal // Modal-in
        animationType="slide" transparent={true} visible={modalProfileVisible}>

        <ThemedView style={{ //headerTitle Modal  with close button Close
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 5, borderColor: 'pink', borderStyle: 'solid',
          // marginVertical: 10
        }}>
          <ThemedTitle style={{ fontSize: 30 }}> Votre Profil</ThemedTitle>

          <Pressable onPress={() => { setModalProfileVisible(false) }}>
            <ThemedText>X(P)</ThemedText>
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
            backgroundColor:  Colors.primaryBG,
            alignItems: "center",
            padding: 10,
            borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',
          }}
        >
          
          <ProfileScreen setModalProfileVisible = {setModalProfileVisible} />
        </View>
      </Modal>
    </View>
  );

}

const styles = StyleSheet.create({
  containerColumn: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      borderColor: 'white', borderStyle: 'solid', borderWidth: 2,
  },
  // mainContainer: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: 'blue',//Colors.background || '#f5f5f5',
  //     borderColor: 'yellow', borderStyle: 'solid', borderWidth: 2,
  // },
  openModalButton: {
      width: '80%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary || '#4caf50',
      borderRadius: 10,
      marginVertical: 10,
      borderColor: 'green', borderStyle: 'solid', borderWidth: 12,
  },
  // modalContainer: {
  //     flex: 1,
  //     // backgroundColor: Colors.background || '#ffffff',
  //     backgroundColor: Colors.primaryBG || '#f5f5f5',
  //     borderTopLeftRadius: 20,
  //     borderTopRightRadius: 20,
  //     padding: 20,
  //     borderColor: 'red', borderStyle: 'solid', borderWidth: 2,
  // },
  modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      // borderColor: Colors.border || '#e0e0e0',
      paddingBottom: 10,
      backgroundColor: Colors.background || '#ffffff',
      borderColor: 'pink', borderStyle: 'solid', borderWidth: 2,
  },
  modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.textPrimary || '#000000',
      borderColor: 'purple', borderStyle: 'solid', borderWidth: 2,
  },
  closeButton: {
      padding: 10,
      backgroundColor: Colors.closeButton || '#ff4d4d',
      borderRadius: 15,
      borderColor: 'red', borderStyle: 'solid', borderWidth: 2,
  },
  closeButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
  },
  modalContent: {
      flex: 1,
      marginTop: 20,
      borderColor: 'turquoise', borderStyle: 'solid', borderWidth: 2,
  },
  userInfo: {
      marginBottom: 20,
      padding: 10,
      // backgroundColor: Colors.userInfoBackground || '#e0f7fa',
      borderRadius: 10,
      borderColor: 'yellow', borderStyle: 'solid', borderWidth: 2,
  },
  connectedText: {
      fontSize: 16,
      color: Colors.textSecondary || '#00796b',
      marginBottom: 10,
      borderColor: 'coral', borderStyle: 'solid', borderWidth: 2,
  },
  logoutButton: {
      padding: 10,
      backgroundColor: Colors.primary || '#4caf50',
      borderRadius: 10,
      alignItems: 'center',
  },
  logoutText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});
export default ModalProfile;
