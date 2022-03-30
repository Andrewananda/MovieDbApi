import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(10),
    justifyContent: 'space-between',
  },
  txtTopMovies: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  activityIndicatorContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
});
