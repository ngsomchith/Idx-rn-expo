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
                <View style={{ position:'relative', left: -15, top: -10}}>
                <ThemedText style={{ position: 'absolute',
                    top: -20, left: 5,
                    backgroundColor:'green', borderRadius:50,
                    
                    }}>{cart?.length}</ThemedText>
                    <Text style={{ position: 'absolute',top: 0, left: 0 }}>{iconBasket} </Text>
                </View>
            </Pressable>

            <Modal animationType="slide" transparent={true} visible={modalPanierVisible}>
                <ThemedView style={styles.modalContainer}>
                    {/* Modal Header */}
                    <View style={styles.modalHeader}>
                        <ThemedTitle style={styles.modalTitle}>Modal Panier</ThemedTitle>
                        <Pressable style={styles.closeButton} onPress={() => setModalPanierVisible(false)}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </Pressable>
                    </View>

                    {/* Modal Content */}
                    <View style={styles.modalContent}>
                        {auth?.currentUser ? (
                            <View style={styles.userInfo}>
                                <Text style={styles.connectedText}>Connecté : {currentUserEmail}</Text>
                                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                                    <Text style={styles.logoutText}>Déconnexion</Text>
                                </Pressable>
                            </View>
                        ) : (
                            <ModalSignIn myImage={undefined} />
                        )}

                        <FlatListScrollPanier
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart} articlesListTemp={undefined} PlatsToShowFilteredTemp={undefined} menuN={undefined} menuNImg={undefined} pdjType={undefined} navigation={undefined} callbackFn={undefined} route={undefined} />
                    </View>
                </ThemedView>
            </Modal>
        </View>
    );
};

export default ModalPanier;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background || '#f5f5f5',
    },
    openModalButton: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary || '#4caf50',
        borderRadius: 10,
        marginVertical: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: Colors.modalBackground || '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.border || '#e0e0e0',
        paddingBottom: 10,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.textPrimary || '#000000',
    },
    closeButton: {
        padding: 10,
        backgroundColor: Colors.closeButton || '#ff4d4d',
        borderRadius: 15,
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContent: {
        flex: 1,
        marginTop: 20,
    },
    userInfo: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: Colors.userInfoBackground || '#e0f7fa',
        borderRadius: 10,
    },
    connectedText: {
        fontSize: 16,
        color: Colors.textSecondary || '#00796b',
        marginBottom: 10,
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
