import React, { useEffect, useState } from "react";
import { Modal, Text, Pressable, View, TextInput, StyleSheet } from "react-native";
import { A } from "@expo/html-elements";
import ThemedListItem from "react-native-elements/dist/list/ListItem";
import ThisDevice from "@/constants/ThisDevice";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { ThemedTitle } from "../ThemedTitle";
import { myStyles } from "../myStyle";
import { Colors } from "@/constants/Colors";
import { iconSearchPlus } from "@/icons";
import ImageViewer from "../ImageViewer";


function ModalMenuN({ menuN }) {
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



  const styles = myStyles
  // const [viewModal, setViewModal] = useState(false)
  const [qte, setQte] = useState(menuN?.qte)
  const [jour, setJour] = useState(menuN?.date ? menuN?.date : 'date ../../..')
  const [thismage, setThisIage] = useState('../assets/imagesArticle/Banh-canh.jpg')



  // const LEFTGLOBAL = myPLatform.OS == 'web' ? 0 : 0
  const invitedEmail = 'udex.invited@gmail.com'

  const myWidth = ThisDevice().MAXWIDTH
  const myHeight = ThisDevice().device.height * 1.3
  const myCoeffScreen = myWidth / myHeight



  const maxHeightArticle = 230



  useEffect(() => {
    console.log("ModalMenuN31 value ", value, //Number(value.montantCB).toFixed(2)
    )
  }, [value])

  const openModal0 = () => {
    return (
      <Pressable
        onPress={() => {
          setModalVisible(true)
        }}
      >

        {/* <View style={{
          flexWrap: 'nowrap', width: '100%',
          borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
        }}>
          <Text style={[styles.titreArticle, { //name
            color: Colors.primaryText,
            width: '100%',
            fontSize: 16,  //panierView ? 14 : 18,
            margin: 0,
            justifyContent: 'flex-start',
            textAlign: 'left',
            overflow: 'hidden',
            alignItems: 'flex-start',
            padding: 0,
            maxHeight: 60,
          }]}>
            {menuN?.name}
          </Text>

          <View style={{ // container d' imageViewer & figCaption
            width: '100%',
            // marginHorizontal:10,
            height: 90,
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
          }}>
            <Pressable // imageViewer & figCaption
              style={[styles.containerRowArticle, {
                backgroundColor: Colors.accentBG,
                width: '98%',
                marginHorizontal: '1%',
                marginVertical: 0,
                borderRadius: 10,
                height: 80,
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }]}
              // onPress={() => callbackFn(true, menuN, idx, false)}

              onPress={() => {
                // setViewModal(true),
                //     setcurrentMenuN(menuN)
              }}
            >

              <View style={[styles.figure, { //ImageViewer
                minHeight: 80,
                marginVertical: 0,
                maxWidth: '100%',
                maxHeight: 50,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                display: 'flex',
                position: 'relative'
              }]}>

                <Text style={{
                  position: 'absolute',
                  color: 'white',
                  fontWeight: '600',
                  right: 0,
                  zIndex: 999,
                  // borderColor: 'yellow', borderStyle: 'solid',borderWidth: 2,
                }}>
                  {iconSearchPlus}
                </Text>
                <ImageViewer placeholderImageSource={menuN.img} />

              </View>

              <View style={[styles.figcaption, {
                width: '100%',
                minHeight: 30,
                flex: 1,
                display: 'flex',
                maxHeight: 50,
                overflow: 'hidden',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                position: 'absolute',
                bottom: -40,
                backgroundColor: Colors.highlightBG,
                marginVertical: 10,
              }]} >

                <Text style={[
                  styles.texteArticle, {
                    maxWidth: '90%',
                    flex: 1,
                    overflow: 'hidden',
                    color: 'white',
                    justifyContent: 'flex-start',
                    fontSize: 14,
                  }
                ]}>
                  {menuN?.description}
                </Text>

                {menuN?.pdjType != 'tlj' && menuN?.date != '' ? //|| varparam == 'prochainsjours'
                  <View style={[styles.dbCol, {

                  }]} >
                    {(
                      (menuN?.pdjType == 'pdj')
                      && menuN?.date != null && menuN?.date != '' && menuN?.date != 'Jour ?' && menuN?.date != 'todayfr10'
                    ) &&
                      <Text style={[styles.texteArticleRenderJour, {//date
                        backgroundColor: Colors.highlightBG,
                        color: Colors.primaryText
                      }]}>
                        {menuN?.date}
                      </Text>
                    }

                    {(
                      (menuN?.pdjType == 'pdjs') && menuN?.date != ''
                      && menuN?.date != null && menuN?.date != 'Jour ?'
                      && menuN?.date != 'todayfr10'
                    ) &&
                      <Text style={[styles.texteArticleRenderJour, {
                        backgroundColor: Colors.highlightBG,
                      }]}>
                        325
                        {menuN?.date}
                      </Text>
                    }

                    {(menuN?.pdjType == 'pdj' && menuN?.date && menuN?.date == 'todayfr10') &&


                      <Text style={[styles.texteArticleRenderJour, {
                        backgroundColor: Colors.highlightBG,
                      }]}>
                        {menuN?.date}
                      </Text>

                    }

                    {
                      menuN?.pdjType == 'pdjs' && menuN?.date == null &&
                      !(menuN?.pdjType == 'pdj' && menuN?.date == 'todayfr10') &&
                      <Text style={[styles.texteArticleRenderJour, {
                        backgroundColor: Colors.highlightBG,
                      }]}>
                        386
                        {menuN?.date} </Text>
                    }

                  </View>
                  :

                  <>
                    {
                      menuN?.date != null && menuN?.date != '' && menuN?.date != 'Jour ?' &&

                      <Text style={[styles.texteArticle,
                      { fontSize: 30 },
                      { backgroundColor: Colors.highlightBG },
                      { color: 'white' }]} >
                        372
                        {menuN?.date}
                      </Text>
                    }

                  </>
                }
              </View>

            </Pressable>
          </View>
        </View> */}


      </Pressable>

    )
  }
  function thisMenuN() {
    return (<View style={{
      flexWrap: 'nowrap', width: '100%',
      borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
    }}>
      <Text style={[styles.titreArticle, { //name
        color: Colors.primaryText,
        width: '100%',
        fontSize: 16,  //panierView ? 14 : 18,
        margin: 0,
        justifyContent: 'flex-start',
        textAlign: 'left',
        overflow: 'hidden',
        alignItems: 'flex-start',
        padding: 0,
        maxHeight: 60,
      }]}>
        {menuN?.name}
      </Text>

      <View style={{ // container d' imageViewer & figCaption
        width: '100%',
        // marginHorizontal:10,
        height: 90,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
      }}>
        {/* <Pressable // imageViewer & figCaption
          style={[styles.containerRowArticle, {
            backgroundColor: Colors.accentBG,
            width: '98%',
            marginHorizontal: '1%',
            marginVertical: 0,
            borderRadius: 10,
            height: 80,
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }]}
          // onPress={() => callbackFn(true, menuN, idx, false)}

          onPress={() => {
            // setViewModal(true),
            //     setcurrentMenuN(menuN)
          }}
        > */}

          <View style={[styles.figure, { //ImageViewer
            minHeight: 80,
            marginVertical: 0,
            maxWidth: '100%',
            maxHeight: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            display: 'flex',
            position: 'relative'
          }]}>

            <Text style={{
              position: 'absolute',
              color: 'white',
              fontWeight: '600',
              right: 0,
              zIndex: 999,
              // borderColor: 'yellow', borderStyle: 'solid',borderWidth: 2,
            }}>
              {iconSearchPlus}
            </Text>
            <ImageViewer placeholderImageSource={menuN.img} />

          </View>

          <View style={[styles.figcaption, {
            width: '100%',
            minHeight: 30,
            flex: 1,
            display: 'flex',
            maxHeight: 50,
            overflow: 'hidden',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            position: 'absolute',
            bottom: -40,
            backgroundColor: Colors.highlightBG,
            marginVertical: 10,
          }]} >

            <Text style={[
              styles.texteArticle, {
                maxWidth: '90%',
                flex: 1,
                overflow: 'hidden',
                color: 'white',
                justifyContent: 'flex-start',
                fontSize: 14,
              }
            ]}>
              {menuN?.description}
            </Text>

            {menuN?.pdjType != 'tlj' && menuN?.date != '' ? //|| varparam == 'prochainsjours'
              <View style={[styles.dbCol, {

              }]} >
                {(
                  (menuN?.pdjType == 'pdj')
                  && menuN?.date != null && menuN?.date != '' && menuN?.date != 'Jour ?' && menuN?.date != 'todayfr10'
                ) &&
                  <Text style={[styles.texteArticleRenderJour, {//date
                    backgroundColor: Colors.highlightBG,
                    color: Colors.primaryText
                  }]}>
                    {menuN?.date}
                  </Text>
                }

                {(
                  (menuN?.pdjType == 'pdjs') && menuN?.date != ''
                  && menuN?.date != null && menuN?.date != 'Jour ?'
                  && menuN?.date != 'todayfr10'
                ) &&
                  <Text style={[styles.texteArticleRenderJour, {
                    backgroundColor: Colors.highlightBG,
                  }]}>
                    325
                    {menuN?.date}
                  </Text>
                }

                {(menuN?.pdjType == 'pdj' && menuN?.date && menuN?.date == 'todayfr10') &&


                  <Text style={[styles.texteArticleRenderJour, {
                    backgroundColor: Colors.highlightBG,
                  }]}>
                    {menuN?.date}
                  </Text>

                }

                {
                  menuN?.pdjType == 'pdjs' && menuN?.date == null &&
                  !(menuN?.pdjType == 'pdj' && menuN?.date == 'todayfr10') &&
                  <Text style={[styles.texteArticleRenderJour, {
                    backgroundColor: Colors.highlightBG,
                  }]}>
                    386
                    {menuN?.date} </Text>
                }

              </View>
              :

              <>
                {
                  menuN?.date != null && menuN?.date != '' && menuN?.date != 'Jour ?' &&

                  <Text style={[styles.texteArticle,
                  { fontSize: 30 },
                  { backgroundColor: Colors.highlightBG },
                  { color: 'white' }]} >
                    372
                    {menuN?.date}
                  </Text>
                }

              </>
            }
          </View>

        {/* </Pressable> */}
      </View>
    </View>)
  }

  const openModal = () => {
    return (
      <Pressable // button open Modal
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center', alignItems: 'center',
          borderWidth: 5, borderColor: 'blue', borderStyle: 'solid',
        }}
        onPress={() => {
          setModalVisible(true)

        }

        }
      >

        {/* <Text> Open</Text> */}
            {thisMenuN()}
      </Pressable>
    )
  }


  const LienGoToUrl = () => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
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
            }} > contenu de {menuN.name} </Text>
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
      style={
        {
          backgroundColor: 'transparent',
          width: '100%',
          // borderWidth: 3, borderColor: 'pink', borderStyle: 'solid',
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
          <ThemedTitle style={{ fontSize: 30 }}> Modal menuN</ThemedTitle>

          <Pressable onPress={() => { setModalVisible(false) }}>
            <ThemedText>X</ThemedText>
          </Pressable>

        </ThemedView>

        <View
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
          <LienGoToUrl />
        </View>
      </Modal>
    </View>
  );

}

export default ModalMenuN;
