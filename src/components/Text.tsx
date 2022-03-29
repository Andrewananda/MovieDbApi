import {View, Text} from 'react-native';
import colors from '../utilities/colors';
import React from 'react';

export const AppText = (props: any) => {
  return (
    <Text style={[props.style ? props.style : {}, {color: colors.white}]}>
      {props.children}
    </Text>
  );
};
