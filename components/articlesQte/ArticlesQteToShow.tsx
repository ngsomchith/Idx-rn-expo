import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Pressable, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { useFb } from '@/app/hooks/useFb';
import { ArticleType } from '@/app/models/ArticleType';
import { ThemedView } from '../ThemedView';
import { ThemedTitle } from '../ThemedTitle';
import { ArticleList } from './ShowArticlesQte';

const ArticlesQteToShow = ({ }) => {

  const { data, error } = useFb('articles/seller2/articlesList')

  const [articlesList, setArticlesList] = useState(Array<ArticleType>)


  useEffect(() => {

    if (data.length > 0) {
      console.log("data 17, articlesList = ", data, articlesList)
      setArticlesList(data) //useFb


    } else if (data.length > 0) {
      console.log("data 22, articlesList = ", data, articlesList)
    }
  }, [data, articlesList]);


  return (

    <ThemedView>
      <View style={{
        width: '100%',
        minHeight: 400,
        maxWidth: '100%',
        backgroundColor: 'grey',
        margin: 'auto'
      }}>

        <ThemedTitle>ArticlesList</ThemedTitle>
        <ArticleList articlesList={articlesList} />
      </View>
    </ThemedView>
  );
};

export default ArticlesQteToShow;