import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Button, Pressable, TextInput as RNTextInput, View } from 'react-native';

// import { View } from './View';
// import { Button } from './Button';
// import { Colors } from '../config';
// import { Icon } from './Icon';

export const TextInput = ({
  // width = '100%',
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}) => {
  const Icon = ({ name, size, color, style }) => {
    return (
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        style={style}
      />
    );
  };
  
  return (
    <View
      style={{
        // backgroundColor: 'transparent',
        backgroundColor: Colors.primaryBG,
        borderRadius: 0,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 12,
        marginVertical: 2,
        width:'100%',
        maxWidth:'100%',
        paddingHorizontal:0,
        height:60,
        // borderStyle: 'solid',
        // borderColor: 'turquoise',
        // borderWidth: 2,
        // marginHorizontal:'auto',

        ...otherProps
      }}
    >
      {leftIconName ? (
        <Icon
          name={leftIconName}
          size={22}
          color={Colors.primaryText}
          style={{ marginRight: 10 }}
        />
      ) : null}
      <RNTextInput
        style={{
          // color: Colors.primaryText,
          color: 'yellow',
          // backgroundColor: Colors.primaryBG,
          flex: 1,
          width: '100%',
          fontSize: 18,
          textAlign: 'center',
          // borderBottomWidth: 5,
          // borderColor: Colors.primaryText,
          // borderStyle: 'solid',
          // borderColor: 'turquoise',
          // borderWidth: 5,
          // borderStyle: 'solid',
        }}

        placeholderTextColor={Colors.primaryText}
        {...otherProps}
      />
      {rightIcon ? (
        <Pressable onPress={handlePasswordVisibility}>
          <Icon
            name={rightIcon}
            size={22}
            color={Colors.primaryText}
            style={{ marginLeft: 10 }}
          />
        </Pressable>
      ) : null}
    </View>
  );
};
