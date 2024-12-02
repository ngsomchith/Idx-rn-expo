import { useFb } from '@/app/hooks/useFb';
import ThisDevice from '@/constants/ThisDevice';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { reduceCdeToUniqueList } from '../services/DataServices';

const Panier = function ({ }) {

    const myDevice = ThisDevice().device
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH
    const widthMobile = 650
    const widthMobileOrWeb = MAXWIDTH > widthMobile ? '40%' : '100%'

    const thisUseFB = useFb('articles/seller2/articlesList')
    const [articlesList, setArticlesList] = useState(Array<ArticleType>)
    const [articlesListByCat, setArticlesListByCat] = useState(Array<ArticleType>)

    const [categoryNameList, setcategoryNameList] = useState([])
    const [categoryIconList, setcategoryIconList] = useState([])
    const [pdjTitleName, setPdjTitleName] = useState([])
    const [pdjTitleObject, setPdjTitleObject] = useState([])
    const [categoryDetail, setcategoryDetail] = useState([])
    const [pdjTitleObject2, setPdjTitleObject2] = useState(null)
    const [articlesListByCatLength, setarticlesListByCatLength] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        console.log("Panier6 articlesList = ", articlesList)

    }, [articlesList])

    useEffect(() => {
        // articlesList.length > 0 && console.log("articlesList18 ", articlesList)
        if (articlesList.length === 0 && thisUseFB.articlesList.length > 0) {
            const articlesListTemp = reduceCdeToUniqueList(thisUseFB.articlesList)
            // console.log("Panier35 articlesListTemp = ", articlesListTemp)
            articlesListTemp.then(result => {
                // console.log("Panier37 result = ", result)
                setArticlesList(result)
            })

            //   setArticlesList())
        }
    }, [thisUseFB, articlesList])

    // const [articles, setArticles] = useState(articlesList
    //     // [
    //     //     { id: '1', name: 'Article 1', price: 10 },
    //     //     { id: '2', name: 'Article 2', price: 20 },
    //     //     { id: '3', name: 'Article 3', price: 30 },
    //     // ]
    // );

    const [cart, setCart] = useState([]);

    const addToCart = (article) => {
        setCart((prevCart) => [...prevCart, article]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <View style={{
            flex: 1, padding: 20,
            height: myDevice.height,
            width: MAXWIDTH,
            maxWidth: '100%'
        }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Articles</Text>
            <FlatList
                data={articlesList}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View style={{ marginVertical: 10, backgroundColor: 'grey' }}>
                        <Text>{item.name} - ${item.price}</Text>
                        <Button title="Add to Cart" onPress={() => addToCart(item)} />
                    </View>
                )} />
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Cart</Text>
            {/* <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item,index }) => (
                    <View style={{ marginVertical: 10 }}>
                        <Text>{item.id}</Text>
                        <Text>{item.name} - ${item.prix}</Text>
                        <Button title="Remove" onPress={() => removeFromCart(item.id)} />
                    </View>
                )} /> */}

            {cart.length >0 &&  <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()} // Assurez-vous que keyExtractor retourne une chaîne unique
                renderItem={({ item, index }) => (
                    <View key={item.id} style={{ marginVertical: 10 }}> {/* Ajout de key ici */}
                        <Text>{item.id}</Text>
                        <Text>{item.name} - ${item.prix.toString()}</Text>
                        <Button title="Remove" onPress={() => removeFromCart(item.id)} />
                    </View>
                )}
            />}

        </View>
    );
};

export default Panier;
