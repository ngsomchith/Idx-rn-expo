import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, ScrollView, Pressable, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';

import { Key, useContext, useEffect, useRef, useState } from 'react';



import { Formik } from 'formik';
import { thisClone } from '../services/DataServices';
import { Colors } from '@/constants/Colors';
import { FormErrorMessage } from '../FormErrorMessage';
import ButtonStd from '../ButtonTypeStd';
import { iconClick, iconhandPointer, iconLogin, iconUser } from '@/icons';
import { TextInput } from '../TextInput';
import { ThemedText } from '../ThemedText';
import { useAuth } from '@/app/AuthContext';
import ThisDevice from '@/constants/ThisDevice';
import ModalMessageCuisine from '../ModalMessageCuisine';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

const GestCodePromo = ({ totalPanier }) => {
    const {
        login, currentUser, auth, user,
        remiseObtenue, setRemiseObtenue,
        modalSignInVisible, setModalSignInVisible
    } = useAuth();

    console.log("GestCodePromo ", totalPanier)
    // const iconhandPointer = <FontAwesomeIcon icon={faHandPointer}  size ={24} color="brown"/>
    const device = ThisDevice().device;
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH;

    const [periodPromo, setperiodPromo] = useState(true)
    const [errorState, setErrorState] = useState('');
    const [commande, setCommande] = useState(null);
    useEffect(() => {
        console.log("remiseObtenue ", remiseObtenue)
    }, [remiseObtenue])
    const handleCalculRemise = async (values: any) => {
        let periodPromoTemp = thisClone(periodPromo)
        periodPromoTemp = true

        // setperiodPromo(periodPromoTemp)
        console.log('values30 : ', values, "totalPanier : ", totalPanier)
        console.log('values values.codepromo.length: ', values.codepromo.length, ' : ', values.codepromo.substr(10, 2))
        if (periodPromoTemp) {
            //   // ----------------  "moins80"
            console.log("periodPromoTemp =", periodPromoTemp, 'values30 : ', values, "totalPanier : ", totalPanier)
            if (totalPanier >= 80 && values.codepromo == "moins80") {

                setRemiseObtenue(15)
                setperiodPromo(periodPromoTemp)
                //all202409    //All console.log("677totalPanier , periodPromoTemp ", totalPanier, periodPromoTemp)
            } else if (totalPanier < 80 && periodPromoTemp && values.codepromo === "moins80") {

                setRemiseObtenue(0)

                setErrorState('code pour commande minimum : 80€')
                //all202409    //All console.log("code pour commande minimum : 80€ ", totalPanier, periodPromoTemp)
                setTimeout(() => {
                    setErrorState('')
                }, 3000);
            }

            // ----------------  "50moins10"
            else if (totalPanier >= 50 && values.codepromo === "50moins10") {

                setRemiseObtenue(10)
                setperiodPromo(periodPromoTemp)
                console.log("693totalPanier, setRemiseObtenue(10) , periodPromoTemp ", totalPanier, periodPromoTemp)
            } else if (totalPanier < 50 && periodPromoTemp && values.codepromo === "50moins10") {

                setRemiseObtenue(0)

                setErrorState('code pour commande minimum : 50€')
                setTimeout(() => {
                    setErrorState('')
                }, 3000);
                //all202409    //All console.log("code pour commande minimum : 50€ ", totalPanier, periodPromoTemp)
            }


            // ----------------  "KMSP30-20%"
            else if (totalPanier >= 30 && values.codepromo === "KMSP30-20%") {

                setRemiseObtenue(Math.round(totalPanier * 0.2 * 100) / 100)
                setperiodPromo(periodPromoTemp)
                console.log("693totalPanier , periodPromoTemp ", totalPanier, periodPromoTemp)
            } else if (totalPanier < 30 && periodPromoTemp && values.codepromo === "KMSP30-20%") {

                setRemiseObtenue(0)

                setErrorState('code pour commande minimum : 30€')
                setTimeout(() => {
                    setErrorState('')
                }, 3000);
                //all202409    //All console.log("code pour commande minimum : 30€ ", totalPanier, periodPromoTemp)
            }

            // -------------------new ----------------  "KMSP30-20%"
            else if (values.codepromo.length == 12 && values.codepromo.substr(10, 2) === "10") {

                setRemiseObtenue(totalPanier * 0.1)
                setperiodPromo(periodPromoTemp)
                console.log("1027 values.codepromo.sybstr(11,2) ", values.codepromo.sybstr(11, 2))
            } else if (values.codepromo.length != 12) {

                setRemiseObtenue(0)

                setErrorState('code invalide')
                setTimeout(() => {
                    setErrorState('')
                }, 3000);
                //all202409    //All console.log("code pour commande minimum : 30€ ", totalPanier, periodPromoTemp)
            } else {
                console.log('codePromo ? ', values)
            }


            //   // ----------------
        } else {
            setErrorState('code Non Valide') 
            setTimeout(() => {
                setErrorState('')
            }, 3000);
        }


        // ----------------=============        



        // ----------------=============  

    };

    const styles = StyleSheet.create({
        textInputContainer: {

        },

    });


    return (

        <Formik
            initialValues={{
                codepromo: '',
                noteCuisine: ''
            }}
            // validationSchema={loginValidationSchema}
            onSubmit={values => handleCalculRemise(values)}
        >
            {({
                values,
                touched,
                errors,
                handleChange,
                handleSubmit,
                handleBlur
            }) => (
                <View

                    style={{
                        // borderWidth: 5,
                        // borderColor: 'pink',
                        // borderStyle: 'solid',
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        flexWrap: 'nowrap',
                        width: '100%',
                        height: '70%',
                        padding: 0
                    }}
                >

                    <View style={[styles.textInputContainer, { //codepromo 
                        // minHeight: 270,
                        width: 350,
                        backgroundColor: Colors.highlightBG,
                        paddingHorizontal: 0,
                        minWidth: '50%',
                        maxWidth: '100%',
                        flex: 1,
                        marginHorizontal: 0,
                        // marginVertical: 10,
                        height:'100%',
                        alignSelf: 'flex-start',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        margin: 0,
                        // borderWidth: 5,
                        // borderColor: 'turquoise',
                        // borderStyle: 'solid',
                        borderBottomColor: 'grey'
                    }]}>


                        {
                            // periodPromo || 
                            remiseObtenue > 0
                                ?

                                <Text style={{ //remiseObtenue >0
                                    color: Colors.primaryText,
                                    fontSize: 20,
                                    width: '100%',
                                    textAlign: 'right',
                                    // borderWidth: 2,
                                    // borderColor: 'turquoise',
                                    // borderStyle: 'solid',
                                }}> Remise : -{remiseObtenue.toFixed(2)}€ </Text>

                                :
                                <View // TextInput codepromo
                                    style={{
                                        maxHeight: 100,
                                        width: '85%',
                                        minHeight: '100%',
                                        // borderWidth: 2,
                                        // borderColor: 'yellow',
                                        // borderStyle: 'solid',
                                        alignItems: 'flex-start',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start'
                                    }} >


                                    <TextInput //codepromo
                                        style={{
                                            MAXWIDTH: '50%',
                                            fontSize: 20,
                                            color: Colors.primaryText,
                                            // borderWidth: 5, borderColor: 'red', borderStyle: 'solid',
                                            textDecorationLine: 'underline',
                                        }}
                                        name='codepromo'
                                        placeholder={`code-remise`} // ${commande?.remise} 
                                        autoCapitalize='none'
                                        keyboardType='codepromo-address'
                                        textContentType='codepromoAddress'
                                        autoFocus={true}
                                        value={values.codepromo}
                                        onChangeText={handleChange('codepromo')}
                                        onBlur={handleBlur('codepromo')}
                                        rightIcon={undefined} handlePasswordVisibility={undefined}
                                        leftIconName={undefined}
                                    />
                                    {values.codepromo.length >0 && 
                                    <View // button iconClick
                                        style={{
                                            width: '15%',
                                            maxWidth: 0,
                                            height: '100%',
                                            justifyContent:'center',
                                            alignItems:'center',
                                            // borderWidth: 5, borderColor: 'red', borderStyle: 'solid',
                                            minWidth: 50
                                        }}>



                                        <ButtonStd iconR={undefined}
                                            label={iconhandPointer}
                                            onPress={handleSubmit}
                                            onChange={undefined} bgButton={undefined} labelColor={Colors.primaryText} icon1={undefined} iconL={undefined} />


                                    </View>}


                                </View>
                        }

                        <FormErrorMessage
                            error={errors.codepromo}
                            visible={touched.codepromo}
                        />


                        {/* Display Screen Error Mesages */}
                        {errorState !== '' ? (
                            <FormErrorMessage error={errorState} visible={true} />
                        ) : null}


                        {/* <View // button iconClick
                            style={{
                                width: '15%',
                                maxWidth: 40,
                                height: 60,
                                // borderWidth: 2, borderColor: 'pink', borderStyle: 'solid',
                                minWidth: 50
                            }}>




                        </View> */}


                        <ModalMessageCuisine myImage={undefined} commande={undefined} />
                    </View>
                </View>

            )}
        </Formik>
    )
};

export default GestCodePromo;