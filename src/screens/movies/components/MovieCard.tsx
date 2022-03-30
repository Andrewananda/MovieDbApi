import {moderateScale} from 'react-native-size-matters';
import {Image, TouchableOpacity, View} from 'react-native';
import constants from '../../../utilities/constants';
import colors from '../../../utilities/colors';
import {AppText} from '../../../components/Text';
import StarRating from 'react-native-star-rating';
import React from 'react';
import Props from '../MovieList/types';

export const MovieCard = ({item, navigation}: Props) => {
  return (
    <TouchableOpacity
      style={{margin: moderateScale(10)}}
      onPress={() => navigation.navigate('MovieDetails', {item: item})}>
      <View
        style={{
          width: '90%',
          marginHorizontal: moderateScale(10),
          flexDirection: 'row',
        }}>
        <View style={{width: moderateScale(120)}}>
          <Image
            resizeMethod={'resize'}
            style={{
              borderTopLeftRadius: moderateScale(10),
              borderBottomLeftRadius: moderateScale(10),
              width: moderateScale(120),
              height: moderateScale(150),
            }}
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
            <AppText
              style={{
                marginTop: moderateScale(10),
                marginStart: moderateScale(10),
              }}>
              <Image
                source={require('../../../../assets/gold_badge.png')}
                style={{
                  width: moderateScale(20),
                  height: moderateScale(20),
                }}
              />
              Top Movie this week
            </AppText>
          )}
          <AppText
            style={{
              marginStart: moderateScale(10),
              fontSize: moderateScale(16),
              fontWeight: 'bold',
              marginTop: moderateScale(10),
            }}>
            {item.original_title ? item.original_title : item.original_name}
          </AppText>
          <AppText
            style={{
              marginStart: moderateScale(10),
              marginTop: moderateScale(5),
            }}>
            {item.media_type}
          </AppText>
          <AppText
            style={{
              marginTop: moderateScale(5),
              marginStart: moderateScale(10),
            }}>
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
              selectedStar={rating => console.log('Count', rating)}
            />
            <AppText>{(item.vote_average / 2).toFixed() + '/5'}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
