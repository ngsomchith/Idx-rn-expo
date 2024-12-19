import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { I } from '@expo/html-elements';

export const RenderHtmlIcon = () => {
  return (
    <View>
      <I>
        <FontAwesome name="user" size={24} color="black" />
      </I>
    </View>
  );
};