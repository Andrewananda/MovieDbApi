import React, {Component} from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {moderateScale} from 'react-native-size-matters';
import {CommonActions} from '@react-navigation/native';
import Props from './types';

export default class Splash extends Component<Props> {
  componentDidMount() {
    let _this = this;
    this.timeout = setTimeout(function () {
      _this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        }),
      );
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/movie_image.png')}
          style={styles.imageStyle}
        />
        <ActivityIndicator
          color={'#fff'}
          size={moderateScale(20)}
          style={styles.activityIndicator}
        />
      </View>
    );
  }
}
