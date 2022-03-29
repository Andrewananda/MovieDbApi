import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../utilities/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
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
