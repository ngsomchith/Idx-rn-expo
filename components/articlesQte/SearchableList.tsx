import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import FlatListArticles from './FlatListArticles';
import { Colors } from '@/constants/Colors';

const SearchableList = ({ search, setSearch, filteredData, addToCart, removeFromCart }) => {
    const handleSearch = (text:any) => {
      console.log("Recherche pour:", text);
      setSearch(text);
    };
    const styles = StyleSheet.create({
      mainContainer: {
        // flex: 1,
        backgroundColor: Colors.background,
      },
      headerContainer: {
        height: 100,
      },
      headerRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: Colors.primaryBG,
        zIndex: 9,
      },
      dropdown: {
        width: '58%',
        backgroundColor: Colors.highlightBG,
      },
      dropdownContainer: {
        width: '100%',
        backgroundColor: Colors.highlightBG,
        borderColor: Colors.primaryText,
      },
      placeholder: {
        width: '100%',
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
      },
      text: {
        width: '100%',
        color: Colors.primaryText,
        fontSize: 18,
      },
      container: {
        flex: 1,
        backgroundColor: Colors.primaryBG,
      },
      searchBar: {
        height: 60,
        minHeight: 40,
        backgroundColor: '#294e80',
        borderRadius: 10,
      },
      // ... autres styles
    });
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.searchBar, { 
            color: 'white', 
            paddingHorizontal: 10, 
            fontSize: 16,
            marginHorizontal: '1%',
            width:'98%',
            height: 50,
            marginVertical: 5,
            // borderWidth: 5,
            // borderColor: 'yellow',
            // borderStyle: 'solid',
          }]}
          placeholder="Search items..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={handleSearch}
        />
        <FlatListArticles 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          articlesFilteredToWrap={filteredData} 
        />
      </View>
    );
  };


export default SearchableList;