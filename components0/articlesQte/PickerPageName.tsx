import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { pdjTitleObject0, pdjTitleSushi, pdjTitleTradit } from "./pdjTitleObject0";
import { Colors } from "@/constants/Colors";
import { Icon } from 'react-native-elements';
import { iconSearchPlus } from "@/icons";

export default function PickerPageName({ callback }) {
    // DropDown state
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Traditionnels", value: "table1" },
        { label: "Sushi", value: "table2" },
        { label: `Tout`, value: "table3" },
    ]);

    useEffect(() => {
        // callback(value)
        // if( value ==='table1'){
        //     console.log('table1', 'Traditionnels')
        //     callback['Traditionnels']
        // }
        switch (value) {
            case 'table1':
                console.log('table1', 'Traditionnels')
                // const data = []
                callback(['Traditionnels', pdjTitleTradit])
                break;

            case 'table2':
                console.log('table2', 'Sushi')
                callback(['Sushi', pdjTitleSushi])
                break;

            case 'table3':
                console.log('table3', 'Tout')
                callback(['Tout', pdjTitleObject0])
                break;
            default:
                break;
        }
    }, [value, items])

    // Choix des données en fonction de la sélection
    const selectedData = value === "table1" ? pdjTitleTradit : value === "table2" ? pdjTitleSushi : [];

    const styles = StyleSheet.create({
        container: {
            zIndex: 9,
            height: 40,
            // width: '44%',
            width: '40%',
            marginHorizontal: '1%',
            // padding: 20,
            backgroundColor: Colors.highlightBG,
        },
        dropdown: {
            // width: 130,
            marginBottom: 20,
            backgroundColor: Colors.highlightBG,
            top: -5
        },
        dropdownContainer: {
            backgroundColor: Colors.highlightBG,
        },
        dataContainer: {
            flex: 1,
            marginTop: 20,
        },
        item: {
            padding: 10,
            fontSize: 16,
            backgroundColor: "#ffffff",
            borderBottomWidth: 1,
            borderBottomColor: "#eeeeee",
        },
        placeholder: {
            fontSize: 16,
            color: "#888888",
            textAlign: "center",
        },
        text: {
            color: Colors.primaryText,
            fontSize: 18,
            // borderColor: 'white', borderStyle: 'solid',borderWidth: 2,
        }, iconStyle: {
            color: Colors.primaryText
        }
    });

    return (
        <View
            style={styles.container}
        >
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropdown} placeholder="Rayon :"
                dropDownContainerStyle={styles.dropdownContainer}
                textStyle={styles.text}
                placeholderStyle={styles.placeholder}
                ArrowUpIconComponent={({ style }) => (
                    <Icon
                        name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                        size={24}
                        color={open ? "white" : "white"} // Change de couleur selon l'état
                    // style={style}
                    />
                )} ArrowDownIconComponent={({ style }) => (
                    <Icon
                        name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                        size={24}
                        color={open ? "white" : "white"} // Change de couleur selon l'état
                    // style={style}
                    />
                )}
            />
        </View>
    );
}


