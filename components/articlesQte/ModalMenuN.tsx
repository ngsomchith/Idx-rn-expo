import React, { useEffect, useState } from "react";
import { Modal, Text, Pressable, View, TextInput, StyleSheet } from "react-native";
import { A } from "@expo/html-elements";
import ThemedListItem from "react-native-elements/dist/list/ListItem";
import ThisDevice from "@/constants/ThisDevice";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { ThemedTitle } from "../ThemedTitle";
// import { myStyles } from "../myStyle";
import { Colors } from "@/constants/Colors";
import { iconSearchPlus } from "@/icons";
import ImageViewer from "../ImageViewer";
import RenderEachArticleFullPage from "./RenderEachArticleFullPage";
import Header from "../Header";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

interface ModalMenuNProps {

  // Ici, vous pourriez définir un type plus précis pour `menuN`

}

const ModalMenuN = ({
  articlesFilteredToWrap,
  buttonGoToMenu,
  maxHeightArticle,
  cart,
  addToCart,
  removeFromCart,
  menuN,
  scrollY0,
  scrollX0,
  updateScrollValue,
}) => {

  const [modalMenuNVisible, setModalMenuNVisible] = useState(false);
  const [qte, setQte] = useState(menuN?.qte || 0);
  const [jour, setJour] = useState(menuN?.date || "date ../../..");
  const [image, setImage] = useState(menuN?.img || "../assets/imagesArticle/Banh-canh.jpg");

  const device = ThisDevice().device;
  const MAXWIDTH = device.width - 5;
  const myWidth = ThisDevice().MAXWIDTH;
  const myHeight = device.height * 1.3;

  // const styles00 = myStyles;

  const openModal = () => (
    <Pressable
      style={styles.openModalButton}
      onPress={() => setModalMenuNVisible(true)}
    >
      {renderMenuContent()}
    </Pressable>
  );

  const renderMenuContent = () => (
    <View style={styles.menuContainer}>
      <Text style={styles.menuTitle}>{menuN?.name}</Text>
      <View style={styles.imageContainer}>
        {/* <Text style={styles.icon}>{iconSearchPlus}</Text> */}
        <ImageViewer placeholderImageSource={menuN?.img} />
      </View>
      <View style={styles.figCaption}>
        <Text style={styles.description}>{menuN?.description}</Text>
        {renderDateContent()}
      </View>
    </View>
  );

  const renderDateContent = () => {
    if (menuN?.pdjType !== "tlj" && menuN?.date !== "") {
      return (
        <View style={styles.dateContainer}>
          {renderDateText(menuN?.date)}
        </View>
      );
    }
    return null;
  };

  const renderDateText = (date: string) => (
    <Text style={styles.dateText}>{date}</Text>
  );

  const LienGoToUrl = () => {
    return (
      <View style={styles.lienContainer}>
        <View style={styles.lienContent}>
          <Text style={styles.lienTitle}>Contenu de {menuN?.name}</Text>
        </View>
        <View style={styles.lienButtonContainer}>
          <A style={styles.lienButton} href="https://delicatessen.cloud">
            Continuer (buttonHTML href)
          </A>
        </View>
      </View>
    );
  };


const styles = StyleSheet.create({

  logoHeader: {
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    // borderWidth: 5,
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  containerColumn: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    // borderWidth: 5,
  },
  mainContainer: {
    display:'flex',
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'blue',//Colors.background || '#f5f5f5',
    // borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
  },
  openModalButton: {
    width:'100%',
    maxWidth:'100%',
    display:'flex',
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.primary || '#4caf50',
    borderRadius: 10,
    marginVertical: 10,
    // borderColor: 'pink', borderStyle: 'solid', borderWidth: 2,
  },
  modalContainer: {
    flex: 1,
    // backgroundColor: Colors.background || '#ffffff',
    backgroundColor: Colors.primaryBG || '#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    // borderColor: 'red', borderStyle: 'solid', borderWidth: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    // borderColor: Colors.border || '#e0e0e0',
    // paddingBottom: 10,
    // backgroundColor: Colors.primaryBG || '#ffffff',
    // borderColor: 'pink', borderStyle: 'solid', borderWidth: 2,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.primaryText || '#000000',
    // borderColor: 'purple', borderStyle: 'solid', borderWidth: 2,
  },
  closeButton: {
    padding: 8,
    backgroundColor: Colors.closeButton || '#ff4d4d',
    borderRadius: 50,
    position: 'relative',
    left: -25,
    height: 40,
    width: 40,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    // borderColor: 'red', borderStyle: 'solid', borderWidth: 2,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    // marginTop: 20,
    // borderColor: 'turquoise', borderStyle: 'solid', borderWidth: 2,
  },
  userInfo: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    padding: 5,
    // backgroundColor: Colors.userInfoBackground || '#e0f7fa',
    borderRadius: 10,
    // borderColor: 'pink', borderStyle: 'solid', borderWidth: 2,
  },
  connectedText: {
    flex: 1,
    fontSize: 16,
    color: Colors.primaryText || '#00796b',
    // backgroundColor: Colors.userInfoBackground || '#e0f7fa',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: 'black', borderStyle: 'solid', borderWidth: 4,
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
  menuContainer: {
    flexWrap: 'nowrap',
    width: '100%',
    // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 3,
  },
  menuTitle: {
    color: Colors.primaryText,
    fontSize: 16,
    width: '100%',
    margin: 0,
    textAlign: 'left',
    overflow: 'hidden',
    padding: 0,
    height: 40,
  },
  imageContainer: {
    width: '100%',
    height: 90,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  icon: {
    position: 'absolute',
    color: 'white',
    fontWeight: '600',
    right: 0,
    zIndex: 999,
  },
  figCaption: {
    width: '100%',
    minHeight: 60,
    flex: 1,
    display: 'flex',
    maxHeight: 60,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: -60,
    backgroundColor: Colors.highlightBG,
    marginVertical: 10,
  },
  description: {
    maxWidth: '90%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'hidden',
    color: 'white',
    fontSize: 14,
    height: 64,
    // minHeight:50,
    maxHeight: 64,
    margin: 0,
    padding: 0
  },
  dateContainer: {
    width: '100%',
    marginVertical: 5,
  },
  dateText: {
    backgroundColor: Colors.highlightBG,
    color: Colors.primaryText,
    fontSize: 16,
  },
  lienContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ecf0f1',
    marginVertical: 10,
    borderRadius: 10,
    // borderColor: 'gold',
    // borderWidth: 5,
    // borderStyle: 'solid',
    // minHeight: device.heightBody,
    justifyContent: 'space-around',
  },
  lienContent: {
    height: '80%',
    width: '100%',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: 'white',
  },
  lienTitle: {
    color: 'white',
    fontSize: 26,
  },
  lienButtonContainer: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 18,
    width: '80%',
    alignItems: 'center',
  },
  lienButton: {
    color: 'white',
    fontSize: 26,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    // borderWidth: 5,
    // borderColor: 'pink',
    // borderStyle: 'solid',
  },
});

  return (
    // <View style={styles.modalContainer}>
    //   {openModal()}

    //   <Modal animationType="slide" transparent={true} visible={modalVisible}>
    //     <ThemedView style={styles.modalHeader}>
    //       <ThemedTitle style={styles.modalTitle}>Modal menuN</ThemedTitle>
    //       <Pressable onPress={() => setModalMenuNVisible(false)}>
    //         <ThemedText>X</ThemedText>
    //       </Pressable>
    //     </ThemedView>


    //   </Modal>
    // </View

    <View style={styles.mainContainer}>

      {/* <Pressable //open modal
        style={styles.openModalButton}
        onPress={() => setModalMenuNVisible(true)}
      >
        <View style={{
          // left: -15, top: -10,
          width: 50,
          borderWidth: 1, borderColor: 'pink', borderStyle: 'solid',
        }}>
          <Text style={{
            position: 'absolute',
            width: 25, height: 25,
            top: -15, left: 20,
            color: Colors.primaryText,
            backgroundColor: 'green',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}>{cart?.length}</Text>
          <Text style={{ position: 'relative', top: 0, left: 0 }}>
            

            <FontAwesomeIcon icon={faBasketShopping} size={32} color="white" />
          </Text>
        </View>
      </Pressable> */}
      {openModal()}

      <Modal animationType="slide" transparent={true} visible={modalMenuNVisible}>
        <ThemedView style={styles.modalContainer}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <View style={[{ //ModalGoHome
              // width: 50,
              // height: '50%',
              // margin: 10,
              maxWidth: '100%',
              // borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
              display: 'flex',
              flexDirection: 'row'
            }]}>
              <Header articlesList={undefined} cart={undefined} removeFromCart={undefined} addToCart={undefined} navigation={undefined} />
            </View>
            <Pressable style={styles.closeButton} onPress={() => setModalMenuNVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
          </View>



          <View>
            <View style={styles.modalContent}>
             
              <RenderEachArticleFullPage articlesFilteredToWrap={undefined}
                addToCart={addToCart} removeFromCart={removeFromCart}
                buttonGoToMenu={undefined}
                menuN={menuN} scrollY0={undefined}
                scrollX0={undefined} updateScrollValue={undefined} />

            </View>




          </View>
        </ThemedView>
      </Modal>
    </View>
  );
};



export default ModalMenuN;
