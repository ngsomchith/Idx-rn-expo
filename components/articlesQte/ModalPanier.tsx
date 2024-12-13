import React, { useState, useEffect, useRef } from 'react';
import { Modal, Text, Pressable, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { signOut } from 'firebase/auth';
import ThisDevice from '@/constants/ThisDevice';
import { Colors } from '@/constants/Colors';
import FlatListScrollPanier from './FlatListScrollPanier';
import ModalSignIn from '../GestionUser/ModalSignIn';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { ThemedTitle } from '../ThemedTitle';
import { useAuth } from '../../app/AuthContext';
import { myApp } from '@/constants/firebaseConfig';
import { iconBasket } from '@/icons';
import MyTitle from '../MyTitle';
import ImageViewer from '../ImageViewer';
import Header from '../Header';

const ModalPanier = ({ cart, addToCart, removeFromCart }) => {
    const auth = myApp[1];
    const thisAuth = useAuth();
    const device = ThisDevice().device;
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH;

    const [modalPanierVisible, setModalPanierVisible] = useState(false);
    const [currentUserEmail, setCurrentUserEmail] = useState('');

    // Handle logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => console.log("Utilisateur déconnecté avec succès."))
            .catch((error) => console.error("Erreur lors de la déconnexion : ", error));
    };

    // Get current user's email
    useEffect(() => {
        if (auth && auth.currentUser) {
            setCurrentUserEmail(auth.currentUser.email);
        }
    }, [auth]);

    return (
        <View style={styles.mainContainer}>
            <Pressable
                style={styles.openModalButton}
                onPress={() => setModalPanierVisible(true)}
            >
                <View style={{ position: 'relative', left: -15, top: -10 }}>
                    <ThemedText style={{
                        position: 'absolute',
                        top: -20, left: 5,
                        backgroundColor: 'green', borderRadius: 50,

                    }}>{cart?.length}</ThemedText>
                    <Text style={{ position: 'absolute', top: 0, left: 0 }}>{iconBasket} </Text>
                </View>
            </Pressable>

            <Modal animationType="slide" transparent={true} visible={modalPanierVisible}>
                <ThemedView style={styles.modalContainer}>
                    {/* Modal Header */}
                    <View style={styles.modalHeader}>
                        <View style={[{ //ModalGoHome
                            // width: 50,
                            // height: '50%',
                            // margin: 10,
                            maxWidth:'100%',
                            borderWidth: 5, borderColor: 'green', borderStyle: 'solid',
                            display: 'flex',
                            flexDirection: 'row'
                        }]}>
                        <Header articlesList={undefined} cart={undefined} removeFromCart={undefined} addToCart={undefined} navigation={undefined} />
                        </View>
                        <Pressable style={styles.closeButton} onPress={() => setModalPanierVisible(false)}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </Pressable>
                    </View>



                    {/* Modal Content */}
                    <View style={styles.modalContent}>

                        {/* {auth?.currentUser ? (
                            <View style={styles.userInfo}>
                                <Text style={styles.connectedText}>Connecté : {currentUserEmail}</Text>
                                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                                    <Text style={styles.logoutText}>Déconnexion</Text>
                                </Pressable>
                            </View>
                        ) : (
                            <ModalSignIn myImage={undefined} />
                        )} */}

                        {auth?.currentUser ? (
                            <View style={styles.userInfo}>
                                <Text style={styles.connectedText}>Connecté : {currentUserEmail}</Text>
                                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                                    <Text style={styles.logoutText}>Déconnexion</Text>
                                </Pressable>
                            </View>
                        ) : (
                            <View style={styles.containerColumn}>
                                <ModalSignIn myImage={undefined} />
                                <ThemedTitle style={styles.modalTitle}>Modal Panier</ThemedTitle>
                                <FlatListScrollPanier
                                    cart={cart}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                />
                            </View>
                        )}

                    </View>
                </ThemedView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    logoHeader:{
        // borderColor: 'yellow',
        // borderStyle: 'solid',
        // borderWidth: 5,
        margin:10,
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    containerColumn: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        borderColor: 'white', borderStyle: 'solid', borderWidth: 2,
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',//Colors.background || '#f5f5f5',
        borderColor: 'yellow', borderStyle: 'solid', borderWidth: 2,
    },
    openModalButton: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary || '#4caf50',
        borderRadius: 10,
        marginVertical: 10,
        borderColor: 'green', borderStyle: 'solid', borderWidth: 2,
    },
    modalContainer: {
        flex: 1,
        // backgroundColor: Colors.background || '#ffffff',
        backgroundColor: Colors.primaryBG || '#f5f5f5',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        borderColor: 'red', borderStyle: 'solid', borderWidth: 2,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        // borderColor: Colors.border || '#e0e0e0',
        // paddingBottom: 10,
        // backgroundColor: Colors.primaryBG || '#ffffff',
        borderColor: 'pink', borderStyle: 'solid', borderWidth: 2,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center',
        marginVertical:10,
        color: Colors.primaryText || '#000000',
        borderColor: 'purple', borderStyle: 'solid', borderWidth: 2,
    },
    closeButton: {
        padding: 8,
        backgroundColor: Colors.closeButton || '#ff4d4d',
        borderRadius:50,
        position: 'relative',
        left: -25,
        borderColor: 'red', borderStyle: 'solid', borderWidth: 2,
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContent: {
        flex: 1,
        // marginTop: 20,
        borderColor: 'turquoise', borderStyle: 'solid', borderWidth: 2,
    },
    userInfo: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: Colors.userInfoBackground || '#e0f7fa',
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
export default ModalPanier;
