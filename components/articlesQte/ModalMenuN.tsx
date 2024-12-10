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

interface ModalMenuNProps {
  menuN: any; // Ici, vous pourriez définir un type plus précis pour `menuN`
}

const ModalMenuN: React.FC<ModalMenuNProps> = ({ menuN }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
      onPress={() => setModalVisible(true)}
    >
      {renderMenuContent()}
    </Pressable>
  );

  const renderMenuContent = () => (
    <View style={styles.menuContainer}>
      <Text style={styles.menuTitle}>{menuN?.name}</Text>
      <View style={styles.imageContainer}>
        <Text style={styles.icon}>{iconSearchPlus}</Text>
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


  return (
    <View style={styles.modalContainer}>
      {openModal()}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ThemedView style={styles.modalHeader}>
          <ThemedTitle style={styles.modalTitle}>Modal menuN</ThemedTitle>
          <Pressable onPress={() => setModalVisible(false)}>
            <ThemedText>X</ThemedText>
          </Pressable>
        </ThemedView>

        <View style={styles.modalContent}>
          <LienGoToUrl />
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  openModalButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 5,
    // borderColor: 'blue',
    // borderStyle: 'solid',
  },
  menuContainer: {
    flexWrap: 'nowrap',
    width: '100%',
    // borderColor: 'yellow',
    // borderWidth: 3,
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
    display:'flex',
    justifyContent:'flex-start',
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
  modalTitle: {
    fontSize: 30,
  },
  modalContent: {
    width: '100%',
    height: '100%',
    minWidth: 100,
    minHeight: 50,
    justifyContent: "flex-start",
    backgroundColor: 'coral',
    alignItems: "center",
    padding: 10,
    // borderWidth: 3,
    // borderColor: 'yellow',
  },
});

export default ModalMenuN;
