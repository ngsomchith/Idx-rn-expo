import React, { useState, useEffect, useRef } from 'react';
import { Modal, Text, Pressable, View, StyleSheet, TouchableOpacity } from "react-native";
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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import ButtonStd from '../ButtonTypeStd';
import { useFocusEffect } from 'expo-router';
import { formeMyDateTable } from '../services/DataServices';
import { getItems, informClientvalidPanier, messagesToSellers, updateItemModel } from '@/firebase';
import { CommandeType } from '@/app/models/CommandeType';
import { Toaster } from 'react-native-toastboard';
import { ToasterContainer } from '../ToasterContainer';
import GestCodePromo from './GestCodePromo';

const ModalPanier = ({ cart, addToCart, removeFromCart }) => {

    // const {thisAuth} = useAuth();
    const {
        login, currentUser, auth, user,
        remiseObtenue, setRemiseObtenue,
        modalSignInVisible, setModalSignInVisible
    } = useAuth();
    const device = ThisDevice().device;
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH;
    const [totalPanier, setTotalPanier] = useState(0)
    const [totalQte, setTotalQte] = useState(0)
    const [modalPanierVisible, setModalPanierVisible] = useState(false);
    const [currentUserEmail, setCurrentUserEmail] = useState('');

    const [thisCollectionStr, setThisCollectionStr] = useState('');
    const [monthDocStr, setMonthDocStr] = useState('')
    const [dayDocStr, setDayDocStr] = useState('')
    const [dateFact, setdateFact] = useState('')
    const [todayfr10, setTodayfr10] = useState(undefined)
    const [numFact, setnumFact] = useState("")
    const [commandeRecu, setCommandeRecu] = useState(false)

    const newCommande0: any = new CommandeType();
    console.log(" modal48 newCommande0  ", newCommande0)
    const [currentCdeEnCours, setCurrentCdeEnCours] = useState(new CommandeType());
    // const [currentCdeEnCours, setCurrentCdeEnCours] = useState ( new CommandeType() );


    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    // Handle logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => console.log("Utilisateur déconnecté avec succès."))
            .catch((error) => console.error("Erreur lors de la déconnexion : ", error));
    };


    async function getTodayfr10() {
        console.log("getTodayfr63 ", monthDocStr, ':', todayfr10, '|', !todayfr10)
        const todayfr10TempResult: any = [];
        if (!todayfr10) {
            const res: any = await formeMyDateTable(new Date())
            console.log("todayfr10Temp ", res, res.dd, ':', res.mm, '/', res.yy)
            //   todayfr10Temp.then(x
            // (res: any) => {
            console.log("home89 res.fullDate6", res.thisDMY, res.thisDMY + '/' + res.hourMinSec, res)
            const dateFactTemp = res.thisDMY + '/' + res.hourMinSec
            const monthDocStrTemp = res.yy + res.mm
            const dayDocStrTemp = res.yy + res.mm + res.dd

            setdateFact(dateFactTemp)
            setMonthDocStr(monthDocStrTemp)
            setDayDocStr(dayDocStrTemp)
            // setTodayfr10(res.thisDMY)
            todayfr10TempResult[0] = res.thisDMY
            console.log("home80 ", dateFactTemp, ':', monthDocStrTemp, '/', dayDocStrTemp)
            return todayfr10TempResult[0]
        }
        //   )/
        // }
    }
    async function getNumFact(thisCollectionSt: any) {
        console.log("getNumFact useEffect", thisCollectionStr)
        let numFactTemp; // thisClone(numFact)
        if (thisCollectionStr != '') {
            console.log("Home", "============482 thisCollectionStr ", thisCollectionStr, numFactTemp)
            getItems(thisCollectionStr)
                .then((res) => {
                    console.log("Home", "getFactIndex", res, res.length)
                    numFactTemp = dayDocStr + res.length
                    console.log("Home", "numFactTemp", numFactTemp)
                    if (numFact != numFactTemp) {
                        setnumFact(numFactTemp)
                    }

                })
        } else {
            console.log("Home", "============482 numFact ", numFact)
        }
    }

    useEffect(() => {
        if(!remiseObtenue){
            setRemiseObtenue(0)
        }
        console.log(" remiseObtenue useEffect", remiseObtenue, totalPanier)
        const totalTemp:number = totalPanier - remiseObtenue
        setTimeout(() => {
            if (totalTemp != totalPanier) {
                console.log("totalTemp/remiseObtenue ", totalTemp)
                setTotalPanier(totalTemp)
            } else {
                console.log("totalTemp == ? totalPanier ", totalTemp, totalPanier)
            }
        }, 500);

    }, [remiseObtenue])

    useEffect(() => {
        if (thisCollectionStr) {
            console.log("============259 thisCollectionStr useEffect", thisCollectionStr)
            getNumFact(thisCollectionStr)
        } else {
            console.log("============262 thisCollectionStr useEffect", thisCollectionStr)
        }

    }, [thisCollectionStr])

    useEffect(() => {

        currentCdeEnCours && console.log(currentCdeEnCours.panier); // Accès sécurisé aux propriétés
        if (!currentCdeEnCours) {

            const newCommande = new CommandeType();
            setCurrentCdeEnCours(newCommande);
        } else {
            console.log("Aucune commande en cours");
        }
    }, [currentCdeEnCours])

    useEffect(() => {
        console.log("home ", 104, "todayfr10 ", todayfr10, dateFact.substring(0, 10))
        if (!todayfr10 || !dateFact || !monthDocStr) {
            console.log("home ", 106, "todayfr10 ", todayfr10, dateFact.substring(0, 10))
            const result = getTodayfr10()
            console.log('result ', result)
        }

        let thisCollectionRefTemp = '/dayListCde/' + monthDocStr + '/' + dayDocStr
        console.log("useFocusEffect490, thisCollectionRefTemp", thisCollectionRefTemp)
        setThisCollectionStr(thisCollectionRefTemp)
    }, [todayfr10, dateFact, dayDocStr])

    useEffect(() => {
        console.log("user useEffect166", user)
    }, [user])
    useFocusEffect(
        React.useCallback(() => {// Empêchez le retour à la page précédente en désactivant le geste de retour

            //all console.log("useFocusEffect488, monthDocStr, dayDocStr", monthDocStr, dayDocStr)
            // let thisCollectionRefTemp = '/dayListCde/' + monthDocStr + '/' + dayDocStr
            // console.log("useFocusEffect490, thisCollectionRefTemp", thisCollectionRefTemp)
            // setThisCollectionStr(thisCollectionRefTemp)


        }, [])
    );

    const saveCurrentCde = async () => {
        const sellerName = 'Delicatessen' // sellerName: any, sellerEmai: any
        const sellerEmail = 'delicatessen.cloud@gmail.com'
        //all202409    //All console.log("ARTI2241", "saveCurrentCde =", sellerName)
        const commandeTemp: any = CommandeType
        console.log(" saveCurrentCde ",)

        // ToasterContainer?.success('Merci pour votre commande ' + commandeTemp.id)

        // await getTotalPanier(panierQte, remiseSushi, remiseObtenue, setTotalPanier, setTotalPanierJap, setTotalPanierNoJap)
        let result = getItems(thisCollectionStr)
        result.then(res => {
            //all20102023 console.log("ARTI", "getFactIndex", res.length)
            //all20102023 console.log("ARTI", "numFact =", numFact)
            commandeTemp['id'] = numFact.toString()
            let panierQteTemp: any = []
            let i = 0
            cart?.forEach((panierElt: any) => {
                  console.log("ARTI", "1544panierElt ", panierElt)
                panierQteTemp[i] = []
                panierQteTemp[i].id = panierElt.id
                panierQteTemp[i].ref = panierElt.ref
                panierQteTemp[i].name = panierElt.name
                panierQteTemp[i].img = panierElt.img
                panierQteTemp[i].img2 = panierElt.img2
                panierQteTemp[i].prix = panierElt.prix
                panierQteTemp[i].pdjType = panierElt.pdjType
                panierQteTemp[i].date = panierElt.date
                panierQteTemp[i].qte = panierElt.qte

                i++;
            });

            commandeTemp.panier = cart

            commandeTemp.dateFact = dateFact
            commandeTemp.total = totalPanier

            commandeTemp.remise = 0.01 // remiseSushi + remiseObtenue
            // console.log("ARTI", "monthDocStr,today, commandeTemp ", monthDocStr, dayDocStr, commandeTemp['id'])
            console.log("modalPanier165", "thisCollectionStr, commandeTemp ", thisCollectionStr, commandeTemp)
            const sellerEmail = 'Delicatessen.cloud@gmail.com'
            const resultId = updateItemModel(thisCollectionStr, commandeTemp, commandeTemp.id)
            resultId.then((res: any) => {
                console.log("resultId = ", res)
                setCommandeRecu(true)
                // if (res === 'success') {
                //     ToasterContainer?.success('Merci pour votre commande ' + commandeTemp.id)
                // }
            })
            // updateItemFieldModel('shoppinUsers', currentUserEmail, 'promoAccord', 0)
            informClientvalidPanier(sellerName, sellerEmail, numFact, currentUserEmail, Number(totalPanier).toFixed(2))
            messagesToSellers(sellerName, sellerEmail, numFact + ' / ' + currentUserEmail, sellerEmail, totalPanier)

            // setCurrentCdeEnCours(commandeTemp) //erreurs
        })

    }

    // Get current user's email
    useEffect(() => {
        if (auth && auth.currentUser) {
            setCurrentUserEmail(auth.currentUser.email);
        }
    }, [auth]);

    useEffect(() => {
        console.log("monthDocStr ", monthDocStr)
    }, [monthDocStr])

    useEffect(() => {
        getTotalPanier(cart)
    }, [cart])

    useEffect(() => {
        console.log("totalPanier245 useEffet ", totalPanier)
    }, [totalPanier])

    const panierLigneLabel = () => {
        return (

            <View style={
                {
                width:'100%',
                maxWidth: 500,
                borderColor: 'white',
                borderStyle: 'solid',
                borderWidth: 2,
                paddingVertical: 5,
                marginHorizontal: 'auto',
                justifyContent:'space-between',
                alignItems:'flex-end',
                display:'flex',
                flexDirection:'row'
            }} >
                <Text style={{
                    color: 'white',
                    width: MAXWIDTH *0.4,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // borderColor: 'white',
                    // borderStyle: 'solid',
                    // borderWidth: 3,
                }

                } >
                    libellé
                    
                </Text>


                <Text style={[{ color: 'white', width: '10%',textAlign:'right' }]} >qté</Text>
                <Text style={[{ color: 'white', width: '17%',textAlign:'right' }]} >

                   P.U.
                 </Text>
                <Text style={[{ color: 'white' , width: '25%', textAlign: 'right' }]} >Prix/ligne </Text>
            </View>
        )
    }

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
        console.log("ModalPanier285", totalLigne)
        const totalTemp = totalLigne.reduce((a: any, b: any) => a + b, 0)

        const totalQteTemp = totalQte0.reduce((a: any, b: any) => a + b, 0)
        // - promoAccord
        //   - (remiseSushi ? remiseSushi : 0)
        //   - (remiseObtenue ? remiseObtenue : 0)

        // const totalJap = await totalLigneJap.reduce((a: any, b: any) => a + b, 0)
        // const totalPdjsja = await totalLignePdjsja.reduce((a: any, b: any) => a + b, 0)

        //All console.log("ARTI1490", "totalLigneNoJap ", totalLigneNoJap)
        // const totalNoJap = await totalLigneNoJap.reduce((a: any, b: any) => a + b, 0)

        if (totalTemp > 0 && totalTemp != totalPanier) {
            console.log("total280 ", typeof(totalTemp), totalTemp)
            setTotalQte(totalQteTemp)
            setTotalPanier(totalTemp ? totalTemp+0 : 0)
        }

        // if (totalJap >= 0) setTotalPanierJap(totalJap ? totalJap : 0)
        // if (totalNoJap >= 0) setTotalPanierNoJap(totalNoJap ? totalNoJap : 0)




    }
    const showTotalPanier = () => {
        return (
            <View style={{
                width: '100%',
                minHeight: 100,
                height: 100,
                // borderColor: 'white',
                // borderStyle: 'solid',
                // borderWidth: 2,
                padding:0
            }}>
                {/* <ThemedText type='title'> showTotalPanier </ThemedText> */}
                <View style={[
                    // styles.dbRow
                    , {

                        maxWidth: 500,
                        // borderColor: 'yellow',
                        // borderStyle: 'solid',
                        // borderWidth: 3,
                        marginHorizontal: 'auto',
                        width: '100%',
                        // maxWidth: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        // paddingVertical: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        marginVertical: 0,
                        padding:0
                    }]} 
                    >
                    <View style={{ 
                        flexDirection: 'row', 
                        // borderColor: 'white',
                        // borderStyle: 'solid',
                        // borderWidth: 3,
                        flexWrap: 'wrap', 
                        padding:5, 
                        backgroundColor: Colors.highlightBG,
                        width:'100%',margin:0 
                        }}>
                        <GestCodePromo totalPanier={totalPanier} />

                        <Text style={{ //Total à payer:
                            color: 'white',
                            width: MAXWIDTH * 0.4,
                            fontSize: 20,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontWeight: '600'
                            // borderColor: 'white',
                            // borderStyle: 'solid',
                            // borderWidth: 3,
                        }

                        } >
                            Total à payer:

                        </Text>
                        <Text style={[, { color: 'white', width: '20%', 
                        fontSize: 20,textAlign: 'left', fontWeight: '600' }]} > {totalQte}  </Text>
                        <Text style={[, { color: 'white',flex: 1,
                        fontSize: 20, textAlign: 'right', fontWeight: '600' }]} >{
                            // (totalPanier+0).toFixed(2)
                           typeof (totalPanier)=='number'  ? totalPanier *1 : 'N'
                        //    totalPanier+0 : Number(totalPanier+0)
                            }€ </Text>
                    </View>

                </View>


                {/* {warningToaster()} */}

                {user ?
                    <Pressable onPress={() => saveCurrentCde()}
                        style={{ padding: 10, backgroundColor: '#c3731d', marginVertical: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Valider votre commande</Text>
                    </Pressable>
                    :
                    <Pressable onPress={() => { window.alert('Connectez-vous pour valider') }}
                        style={{ padding: 10, backgroundColor: 'grey', marginVertical: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Valider votre commande</Text>
                    </Pressable>
                }

                {/* {commandeRecu &&
                    <View style={{ backgroundColor: Colors.highlightBG, padding: 10 }}>
                        <ThemedText>Merci pour votre commande </ThemedText>
                        <ThemedText>
                            Nous vous rappellons dnas peu de temps
                        </ThemedText>
                        <ThemedText>Si besoin, contactez nous au 07 43 30 12 34</ThemedText>
                    </View>
                } */}
            </View>


            // <Text style={{ color: 'white', width: '17%', textAlign: 'left' }} >total prix </Text>
        )
    }
    const warningToaster0 = () => { //success Toaster
        return (
            <View
                style={
                    // styles.container
                    { height: 50 }
                }
            >
                <ToasterContainer />
                <ButtonStd iconL={undefined} iconR={undefined}
                    label={'Valider'} labelColor={Colors.primaryText}
                    onPress={() => saveCurrentCde()} onChange={undefined}
                    bgButton={Colors.accentBG} />
            </View>
        )

    }

    const warningToaster = () => { //success Toaster
        return (
            <View
                style={
                    // styles.container
                    { height: 50 }
                }
            >
                <ToasterContainer />
                <TouchableOpacity
                    style={styles.button}

                    // onFocus={() => Toaster.error('This is error message')}
                    // onLayout={() => Toaster.error('This is error message')}
                    // onPress={() => Toaster.error('This is error message')}


                    onPress={() => ToasterContainer?.success('This is success message')}
                >
                    <Text style={{ color: Colors.primaryText }}>Show me error message</Text>
                </TouchableOpacity>
            </View>
        )

    }

    // --------------------------------- 
    return (
        <View style={styles.mainContainer}>
            <Pressable //open modal
                style={styles.openModalButton}
                onPress={() => setModalPanierVisible(true)}
            >
                <View style={{
                    // left: -15, top: -10,
                    width: 50,
                    // borderWidth: 1, borderColor: 'pink', borderStyle: 'solid',
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
                        {/* {iconBasket}  */}

                        <FontAwesomeIcon icon={faBasketShopping} size={32} color="white" />
                    </Text>
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
                            // borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
                            display: 'flex',
                            flexDirection: 'row'
                        }]}>
                            <Header articlesList={undefined} cart={undefined} removeFromCart={undefined} addToCart={undefined} navigation={undefined} />
                        </View>
                        <Pressable style={styles.closeButton} onPress={() => {
                            setModalPanierVisible(false)
                            setRemiseObtenue(0)
                            }}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </Pressable>
                    </View>



                    <View>



                        <View style={{ width: '100%' }}>
                            {user ? (
                                <View style={styles.userInfo} //ModalProfile
                                >
                                    <Text style={styles.connectedText}>Connecté : {currentUserEmail}
                                        {/* <Pressable style={styles.logoutButton} onPress={handleLogout}>
                                        <Text style={styles.logoutText}>Déconnexion</Text>
                                        </Pressable> */}

                                    </Text>
                                    <ModalProfile myImage={undefined} />
                                </View>) : (
                                <View style={styles.containerColumn} //ModalSignIn
                                >
                                    <ModalSignIn myImage={undefined} />

                                </View>
                            )}
                            {/* <View></View> */}
                            {panierLigneLabel()}

                            <FlatListScrollPanier
                                cart={cart}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart} />

                            {showTotalPanier()}
                            {/* {getTotalPanier(cart)} */}
                        </View>


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
        // backgroundColor: Colors.primary || '#4caf50',
        borderRadius: 10,
        marginVertical: 10,
        // borderColor: 'yellow', borderStyle: 'solid', borderWidth: 2,
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
