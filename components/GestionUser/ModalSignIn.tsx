import React, { useEffect, useState } from "react";
import { Modal, Text, Pressable, View, TextInput, StyleSheet } from "react-native";
import { A } from "@expo/html-elements";
import ThemedListItem from "react-native-elements/dist/list/ListItem";
import ThisDevice from "@/constants/ThisDevice";
import { ThemedView } from "../ThemedView";
import { ThemedTitle } from "../ThemedTitle";
import { ThemedText } from "../ThemedText";
import LoginScreen from "@/firebase";
import { iconLogin, iconUser, iconUsers } from "@/icons";


function ModalSignin({ myImage }) {
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

  useEffect(() => {
    console.log("ModalSignin31 value ", value, //Number(value.montantCB).toFixed(2)
    )
  }, [value])

  const openModal = () => {
    return (
      <Pressable
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center', alignItems: 'center',
          //allborder borderWidth: 3, borderColor: 'blue', borderStyle: 'solid',
        }}
        onPress={() => setModalVisible(true)}>
        {/* <View style={{
      flexDirection: 'row', height: 50, width: 50,
      //allborder borderWidth: 3, borderColor: 'yellow', borderStyle: 'solid',

    }}> */}
        <ThemedText style={{ display: 'flex', flexDirection: 'row', height: '100%', minWidth: 300 }}>
          {iconLogin}
        </ThemedText>
       


      </Pressable>
    )
  }

  // const buttonCancel = () => {


  //   return (
  //     <View style={[
  //       // styles.container
  //       , {
  //         // maxHeight: 60,
  //         // width: 50,
  //         // marginHorizontal: '10%',
  //         marginVertical: 10,
  //         backgroundColor: 'transparent',
  //         borderRadius: 10,
  //         borderColor: 'gold',
  //         borderWidth: 5,
  //         borderStyle: 'solid',
  //         minHeight: device.heightBody,
  //         justifyContent: 'space-around'
  //       }]}>
  //       <View style={{
  //         height: '80%',
  //         width: '100%',
  //         justifyContent: 'space-around',
  //         // borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
  //       }}>
  //         <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
  //           <ButtonStd // soit Annuler , soit bouton suivant
  //             iconL={undefined} iconR={'X'}
  //             label={'Annuler'}
  //             labelColor={'yellow'}

  //             onPress={() => setModalVisible(false)}
  //             onChange={undefined} bgButton={'red'} />
  //         </View>


  //       </View>


  //       <View style={{
  //         marginVertical: 20, padding: 10, borderRadius: 18, width: '80%',
  //         // backgroundColor: Colors.accentBG, 
  //         alignItems: 'center',
  //         //allborder borderWidth: 5, borderColor: Colors.accentBG, borderStyle: 'solid',
  //       }}>
  //         <A style={{
  //           color: 'white', fontSize: 26
  //         }}
  //           // href="https://g.page/r/CcNuu3z19jslEB0/review"

  //           href="https://delicatessen.cloud"

  //         >Continuer </A>
  //       </View>
  //     </View>

  //   );
  // };

  const LienGoToUrl = () => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        // backgroundColor: 'transparent',
      },
    });

    return ( //golbal
      <View style={[styles.container, {
        // maxHeight: 60,
        // width: 50,
        // marginHorizontal: '10%',
        marginVertical: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'gold',
        borderWidth: 5,
        borderStyle: 'solid',
        minHeight: device.heightBody,
        justifyContent: 'space-around'
      }]}>
        <View style={{
          height: '80%',
          width: '100%',
          justifyContent: 'space-around',
          borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
        }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
           
            <Text style={{
              color: 'white', fontSize: 26
            }} > contenu du Modal</Text>
          </View>


        </View>


        <View style={{
          marginVertical: 20, padding: 10, borderRadius: 18, width: '80%',
          // backgroundColor: Colors.accentBG, 
          alignItems: 'center',
          //allborder borderWidth: 5, borderColor: Colors.accentBG, borderStyle: 'solid',
        }}>
          <A style={{
            color: 'white', fontSize: 26
          }}
            // href="https://g.page/r/CcNuu3z19jslEB0/review"

            href="https://delicatessen.cloud"

          >Continuer (buttonHTML href) </A>
        </View>
      </View>

    );
  };

  return (
    <View
      style={{
          backgroundColor: 'transparent',
          width: '100%',
          // borderWidth: 3, borderColor: 'pink', borderStyle: 'solid',
        }
      }
    >



      {openModal()}

      <Modal // Modal-in
        animationType="slide" transparent={true} visible={modalVisible}>

        <ThemedView style={{ //headerTitle Modal  with close button Close
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 5, borderColor: 'pink', borderStyle: 'solid',
          marginVertical: 10
        }}>
          <ThemedTitle style={{ fontSize: 30 }}> Modal Connexion</ThemedTitle>

          <Pressable onPress={() => { setModalVisible(false) }}>
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
          {/* <LienGoToUrl /> */}
          <LoginScreen />
        </View>
      </Modal>
    </View>
  );

}

export default ModalSignin;
