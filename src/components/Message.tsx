import React, {Component} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../utilities/colors';

export default class Message extends Component {
  state = {
    visible: false,
    message: '',
    callback: () => {},
  };

  showDialog = (message: string, callback = () => {}) => {
    this.setState({visible: true, message: message, callback});
  };

  dismiss = () => {
    this.setState({
      visible: false,
      message: '',
      callback: () => {},
    });
  };

  render() {
    return (
      <Modal visible={this.state.visible}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: moderateScale(100),
          }}>
          <Image
            source={require('../../assets/message_image.png')}
            resizeMethod={'resize'}
            style={{
              height: moderateScale(200),
              width: '100%',
              alignSelf: 'center',
            }}
          />
          <Text style={{textAlign: 'center'}}>{this.state.message}</Text>
          <TouchableOpacity
            onPress={this.state.callback}
            style={{
              borderRadius: moderateScale(10),
              width: moderateScale(200),
              height: moderateScale(30),
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: colors.secondary,
              marginVertical: moderateScale(15),
            }}>
            <Text
              style={{
                color: colors.white,
                textAlign: 'center',
                fontSize: moderateScale(15),
              }}>
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
