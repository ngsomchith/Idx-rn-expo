import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RenderEachArticleInHome from './RenderEachArticleInHome';
import ThisDevice from '@/constants/ThisDevice';
import { Colors } from '@/constants/Colors';

const FlatListArticles = ({ articlesToWrapper,addToCart, removeFromCart }) => {

    const [articlesMenu, setArticlesMenu] = useState([]);
    const [categoryNameList, setCategoryNameList] = useState([]);
    const [categoryIconList, setCategoryIconList] = useState([]);
    const [pdjTitleName, setPdjTitleName] = useState([]);
    const [pdjTitleObject, setPdjTitleObject] = useState([]);
    const [categoryDetail, setCategoryDetail] = useState([]);
    const [pdjTitleObject2, setPdjTitleObject2] = useState(null);
    const [articlesListByCatLength, setArticlesListByCatLength] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        console.log("FlatListArticles21 : articlesToWrapper = ", articlesToWrapper)
        console.log("FlatListArticles22 : articlesMenu = ", articlesMenu)
        // if(!articlesToWrapper ){
        //     setArticlesMenu(articlesToWrapper)
        // }
    }, [articlesToWrapper, articlesMenu])

    const renderItem = (item: any, index: any) => {
        return (
            <View style={styles.articleContainer}>
                <RenderEachArticleInHome
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    menuN={item} scrollY0={undefined} scrollX0={undefined}
                    updateScrollValue={undefined}
                />
            </View>
        );
    };


    const myFlatListRow = (_articlesMenu: any) => {


        // if (_articlesMenu !== articlesToWrapper) {
        //     setArticlesMenu(articlesToWrapper);
        // }

        return (
            <View style={styles.rowContainer}>
                {articlesToWrapper?.length > 0 &&
                    articlesToWrapper?.map((item: any, index: any) => (
                        <View key={index} style={styles.articleWrapper}>
                            {renderItem(item, index)}
                        </View>
                    ))}
            </View>
        );
    };



    return (
        <>
            {myFlatListRow(articlesMenu)}
        </>
    )

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        maxWidth: '100%',
        flexWrap: 'wrap',
        backgroundColor: Colors.primaryBG,
        borderWidth: 3,
        borderColor: 'red',
        minHeight: 200,
        height: ThisDevice().device.heightBody,
        maxHeight: 300,
        borderStyle:'solid'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        maxHeight: ThisDevice().device.heightBody - 100,
        backgroundColor: Colors.primaryBG,
        borderColor: 'turquoise',
        borderWidth: 2,
        overflow: 'scroll',
    },
    articleWrapper: {
        marginBottom: 2,
        maxWidth: 174,
        minWidth: 174,
        marginHorizontal: 0,
        marginVertical: 10,
        minHeight: 160,
        maxHeight: 240,
        height: 240,
        borderRadius: 10,
        justifyContent: 'center',
        overflow: 'scroll',
        // borderWidth: 1,
        // borderColor: 'white',
    },
    articleContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'yellow',
    },
});

export default FlatListArticles;