import React from 'react';
import {View} from 'react-native';
import colors from '../utilities/colors';

export const Container = (props: any) => {
  return (
    <View
      style={[
        props.style ? props.style : {},
        {flex: 1, backgroundColor: colors.primary},
      ]}>
      {props.children}
    </View>
  );
};
