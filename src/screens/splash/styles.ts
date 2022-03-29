import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007CFF',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
    alignSelf: 'center',
  },
  activityIndicator: {
    marginTop: moderateScale(10),
  },
});
