import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ScrollView, Pressable, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';

import { Key, useContext, useEffect, useRef, useState } from 'react';



import { Formik } from 'formik';
import { thisClone } from '../services/DataServices';
import { Colors } from '@/constants/Colors';
import { FormErrorMessage } from '../FormErrorMessage';
import ButtonStd from '../ButtonTypeStd';
import { iconClick } from '@/icons';
import { TextInput } from '../TextInput';

const GestCodePromo = (totalPanier: any) => {
    console.log("GestCodePromo ", totalPanier)


    const [remiseObtenue, setRemiseObtenue] = useState(0)
    const [periodPromo, setperiodPromo] = useState(false)
    const [errorState, setErrorState] = useState('');

    const handleCalculRemise = async (values: any) => {
        let periodPromoTemp = thisClone(periodPromo)
        periodPromoTemp = true

        // setperiodPromo(periodPromoTemp)
        console.log('values : ', values, "totalPanier : ", totalPanier)
        console.log('values : ', values.codepromo.length, ' : ', values.codepromo.substr(10, 2))
        if (periodPromoTemp) {
            //   // ----------------  "moins80"
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

                setRemiseObtenue(totalPanier * 0.2)
                setperiodPromo(periodPromoTemp)
                //all202409    //All console.log("693totalPanier , periodPromoTemp ", totalPanier, periodPromoTemp)
            } else if (totalPanier < 30 && periodPromoTemp && values.codepromo === "KMSP30-20%") {

                setRemiseObtenue(0)

                setErrorState('code pour commande minimum : 30€')
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
                //all202409    //All console.log("code pour commande minimum : 30€ ", totalPanier, periodPromoTemp)
            }


            //   // ----------------
        } else {
            setErrorState('code Non Valide')
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
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        width: '100%',
                        height: 100
                    }}
                >

                    <View style={[styles.textInputContainer, { //codepromo 
                        // minHeight: 270,
                        width: 350,
                        paddingHorizontal: 0,
                        minWidth: '50%',
                        maxWidth: '100%',
                        flex: 1,
                        marginHorizontal: 0,
                        marginVertical: 10,
                        alignSelf: 'flex-end',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        // borderWidth: middleWidthBorder,
                        // borderWidth: 5,
                        // borderColor: 'turquoise',
                        // borderColor: 'white',
                        // borderStyle: 'solid',
                        borderBottomColor: 'grey'
                    }]}>


                        {/* <Text style={{
                                    color: Colors.primaryText,
                                    fontSize: 20,
                                    width: '40%',
                                    textAlign: 'left'
                                }}> Remise : </Text> */}


                        <View // TextInput codepromo
                            style={{
                                maxHeight: 30,
                                width: '35%',
                                // borderWidth: 2,
                                // borderColor: 'green',
                                // borderStyle: 'solid',
                                // alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center'
                            }} >


                            <TextInput //codepromo
                                style={{
                                    MAXWIDTH: '80%',
                                    color: Colors.primaryText,
                                    borderWidth: 2, borderColor: Colors.primaryBG, borderStyle: 'solid',
                                    textDecorationLine: 'underline',
                                }}
                                name='codepromo'
                                placeholder={`codepromo`} // ${commande?.remise} 
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

                        </View>


                        <FormErrorMessage
                            error={errors.codepromo}
                            visible={touched.codepromo}
                        />


                        {/* Display Screen Error Mesages */}
                        {errorState !== '' ? (
                            <FormErrorMessage error={errorState} visible={true} />
                        ) : null}


                        <View // button iconClick
                            style={{
                                width: '15%',
                                maxWidth: 40,
                                height: 60,
                                // borderWidth: 2, borderColor: 'pink',borderStyle: 'solid',
                                minWidth: 50
                            }}>




                            <ButtonStd iconR={undefined}
                                label={iconClick}
                                onPress={handleSubmit}
                                onChange={undefined} bgButton={Colors.accentBG} labelColor={Colors.primaryText} icon1={undefined} iconL={undefined} />



                        </View>


                        {/* <ModalMessageCuisine myImage={undefined} commande={commande} /> */}
                    </View>
                </View>

            )}
        </Formik>
    )
};

export default GestCodePromo;