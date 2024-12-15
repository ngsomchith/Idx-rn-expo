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
import ModalProfile from '../GestionUser/ModalProfile';

const ModalPanier = ({ cart, addToCart, removeFromCart }) => {
   
    // const {thisAuth} = useAuth();
    const { 
        login, currentUser, auth, user,
        modalSignInVisible, setModalSignInVisible
    } = useAuth();
    const device = ThisDevice().device;
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH;
    const [totalPanier, setTotalPanier] = useState(0)
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

    useEffect(() => {
        getTotalPanier(cart)
    }, [cart])

    useEffect(() => {
        console.log("totalPanier ", totalPanier)
    }, [totalPanier])


    const getTotalPanier = (cart: any
        // , remiseSushi: any, remiseObtenue:any, 
        // setTotalPanier:any, setTotalPanierJap:any, 
        // setTotalPanierNoJap:any
    ) => {
        const totalLigne: any = []
        const totalQte0: any = []
        // const totalLigneJap: any = []
        // const totalLigneNoJap: any = []
        // const totalLignePdjsja: any = []

        cart?.forEach((element: any) => {
            // console.log("ARTI", "510element.prix ", element.qte, ' * ', element.prix, Number(element.prix), Number('3,45')), Number('3.45')
            totalLigne.push(element.qte * Number(element.prix))
            totalQte0.push(element.qte)
            //   if (element.pdjType == 'jap') {
            //     totalLigneJap.push(element.qte * Number(element.prix))
            //   } else if (element.pdjType == 'pdjsja') {
            //     totalLignePdjsja.push(element.qte * Number(element.prix))
            //   }
            //   else {
            //     totalLigneNoJap.push(element.qte * Number(element.prix))
            //   }

        });
        // somme sum
        // console.log("ARTI", totalLigne)
        const total = totalLigne.reduce((a: any, b: any) => a + b, 0)
        const totalQte = totalQte0.reduce((a: any, b: any) => a + b, 0)
        // - promoAccord
        //   - (remiseSushi ? remiseSushi : 0)
        //   - (remiseObtenue ? remiseObtenue : 0)

        // const totalJap = await totalLigneJap.reduce((a: any, b: any) => a + b, 0)
        // const totalPdjsja = await totalLignePdjsja.reduce((a: any, b: any) => a + b, 0)

        //All console.log("ARTI1490", "totalLigneNoJap ", totalLigneNoJap)
        // const totalNoJap = await totalLigneNoJap.reduce((a: any, b: any) => a + b, 0)

        console.log("total ", total)
        if (total > 0 && total != totalPanier) {
            setTotalPanier(total ? total : 0)
        }

        // if (totalJap >= 0) setTotalPanierJap(totalJap ? totalJap : 0)

        // if (totalNoJap >= 0) setTotalPanierNoJap(totalNoJap ? totalNoJap : 0)


        return (

            <View style={[
                // styles.dbRow
                , {
                    // paddingHorizontal: 5,
                    // width: MAXWIDTH,
                    width: '100%',
                    maxWidth: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingVertical:10,
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    display: 'flex',
                    flexDirection: 'row'
                }]} >
                <Text style={{
                    color: 'white',
                    width: MAXWIDTH * 0.4,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight:'600'
                    // borderColor: 'white',
                    // borderStyle: 'solid',
                    // borderWidth: 3,
                }

                } >
                    Total à payer:

                </Text>


                <Text style={[, { color: 'white', width: '10%', textAlign: 'left',fontWeight:'600' }]} > {totalQte}  </Text>
                <Text style={[, { color: 'white', width: '17%', textAlign: 'left',fontWeight:'600' }]} >{total.toFixed(2)}€ </Text>
            </View>

            // <Text style={{ color: 'white', width: '17%', textAlign: 'left' }} >total prix </Text>
        )

    }

    // --------------------------------- 
    return (
        <View style={styles.mainContainer}>
            <Pressable //open modal
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
                            maxWidth: '100%',
                            // borderWidth: 5, borderColor: 'green', borderStyle: 'solid',
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
                    <View
                    // style={styles.modalContent}
                    >



                        {user? (
                            <View style={{ width: '100%' }}>
                                <View style={styles.userInfo}>
                                    <Text style={styles.connectedText}>Connecté : {currentUserEmail}
                                        {/* <Pressable style={styles.logoutButton} onPress={handleLogout}>
                                        <Text style={styles.logoutText}>Déconnexion</Text>
                                        </Pressable> */}

                                    </Text>
                                    <ModalProfile myImage={undefined} />
                                </View>

                                <FlatListScrollPanier
                                    cart={cart}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart} />

                                {getTotalPanier(cart)}
                            </View>
                        ) : (
                            <View style={styles.containerColumn}>
                                <ModalSignIn myImage={undefined} />
                                {/* <ThemedTitle style={styles.modalTitle}>Modal Panier</ThemedTitle> */}
                                <FlatListScrollPanier
                                    cart={cart}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart} />

                                {getTotalPanier(cart)}
                                {/*  //total */}
                            </View>
                        )}

                    </View>
                </ThemedView>
            </Modal>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',//Colors.background || '#f5f5f5',
        // borderColor: 'pink', borderStyle: 'solid', borderWidth: 5,
    },
    openModalButton: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary || '#4caf50',
        borderRadius: 10,
        marginVertical: 10,
        // borderColor: 'green', borderStyle: 'solid', borderWidth: 2,
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
});
export default ModalPanier;
