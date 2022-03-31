import {moderateScale} from 'react-native-size-matters';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import constants from '../../../utilities/constants';
import colors from '../../../utilities/colors';
import {AppText} from '../../../components/Text';
import StarRating from 'react-native-star-rating';
import React from 'react';
import Props from '../MovieList/types';

export const MovieCard = ({item, navigation, movieList}: Props) => {
  return (
    <TouchableOpacity
      style={{margin: moderateScale(10)}}
      onPress={() =>
        navigation.navigate('MovieDetails', {item: item, list: movieList})
      }>
      <View style={styles.container}>
        <View style={{width: moderateScale(120)}}>
          <Image
            resizeMethod={'resize'}
            style={styles.coverImage}
            source={{uri: constants.imageBaseUrl + item.poster_path}}
          />
        </View>
        <View
          style={{
            backgroundColor:
              (item.vote_average / 2).toFixed() == '5'
                ? colors.secondary
                : colors.gray2,
            marginEnd: moderateScale(10),
            width: '70%',
            borderBottomRightRadius: moderateScale(10),
            borderTopRightRadius: moderateScale(10),
          }}>
          {(item.vote_average / 2).toFixed() == '5' && (
            <AppText style={styles.txtTopMovie}>
              <Image
                source={require('../../../../assets/gold_badge.png')}
                style={styles.badgeImage}
              />
              Top Movie this week
            </AppText>
          )}
          <AppText style={styles.txtTitle}>
            {item.original_title ? item.original_title : item.original_name}
          </AppText>
          <AppText style={styles.txtMediaType}>{item.media_type}</AppText>
          <AppText style={styles.date}>
            {new Date(
              item.release_date ? item.release_date : item.first_air_date,
            ).getFullYear()}
          </AppText>
          <View style={{flexDirection: 'row', marginTop: moderateScale(10)}}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={(item.vote_average / 2).toFixed()}
              fullStarColor={'#f3db40'}
              emptyStarColor={'#f3db40'}
              starSize={moderateScale(15)}
              containerStyle={{
                justifyContent: 'center',
                width: moderateScale(90),
              }}
              iconSet={'FontAwesome'}
            />
            <AppText>{(item.vote_average / 2).toFixed() + '/5'}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
  },
  coverImage: {
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    width: moderateScale(120),
    height: moderateScale(150),
  },
  txtTopMovie: {
    marginTop: moderateScale(10),
    marginStart: moderateScale(10),
  },
  badgeImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  txtTitle: {
    marginStart: moderateScale(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
  },
  txtMediaType: {
    marginStart: moderateScale(10),
    marginTop: moderateScale(5),
  },
  date: {
    marginTop: moderateScale(5),
    marginStart: moderateScale(10),
  },
});
