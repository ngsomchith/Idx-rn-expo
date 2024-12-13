
import { Colors } from '@/constants/Colors';
import ThisDevice from '@/constants/ThisDevice';
import React, { useRef, useContext, useEffect, useState } from 'react';
import { FlatList, View, Button, Text, ScrollView, Pressable } from 'react-native';
import RenderEachPanierElt from './RenderEachPanierElt';
import RenderEachArticleInHome from './RenderEachArticleInHome';

const FlatListScrollPanier = ({
    addToCart, removeFromCart, cart, ...otherprops
}) => {


    const myDevice = ThisDevice().device
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH
    const widthMobile = 650
    const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

    const [idxScrollTo, setIdxScrollTo] = useState(null)
    const device = ThisDevice()
    const flatListRef = useRef();


    useEffect(() => {
        //all console.log("FlatListScr", "77PlatsToShowFilteredPanier = ", PlatsToShowFilteredPanier)
    }, [])

    useEffect(() => {
        console.log("cart useEffect FlatListScrollPanier", cart)
    }, [cart])

    const renderItem = ({ item }) => (
        <Pressable
            onPress={() => { console.log("FlatListScr", 'wait and Scrollto item', item) }}
            style={{
                // height: "100%",
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }

            }>

            <RenderEachPanierElt
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                thiscategoryName={'categoryName'}
                todayfr10={'todayfr10'} menuN={item}
                menuNImg={item?.img} 
                // idx={undefined} 
                // navigation={navigation} 
                // route={route}
                // callbackFn={callbackFn} 
                // pdjType={pdjType}
                // PlatsToShowFilteredTemp={PlatsToShowFilteredTemp}
                // articlesListTemp={articlesListTemp}
                // fromPanier={undefined} 
                // callback={callbackFn}
                scrollY0={undefined} 
                scrollX0={undefined}
                // updateScrollValue={undefined}
                // zoomMenuN={undefined} 
                />

        </Pressable>
    );

    const getItemLayout = (data: any, index: any) => (
        { length: 350, offset: 350 * index, index }
    )


    return (
        <View style={{
            flexGrow: 1,
            width: '100%',
            flex: 1,
            justifyContent: 'flex-start',
            display: 'flex',
            minHeight: 200
        }} >


            <FlatList
                style={{
                    flex: 1,
                    maxWidth: 600,
                    borderColor: Colors.highlightBG,
                    borderRadius: 10,
                    marginHorizontal: 'auto',
                    height: '100%',
                }}
                ref={flatListRef}

                getItemLayout={getItemLayout}
                data={cart}
                renderItem={renderItem}
                keyExtractor={item => item.ref}
            />

        </View>
    );
};

export default FlatListScrollPanier;