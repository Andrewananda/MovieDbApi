import React from 'react';
import {SafeAreaView, View} from 'react-native';
import colors from '../utilities/colors';

export const Container = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <View
        style={[
          props.style ? props.style : {},
          {flex: 1, backgroundColor: colors.primary},
        ]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};
