import React, {Component} from 'react';
import {
  FlatList,
  Image,
  TextInput as Search,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container} from '../../../components/Container';
import {AppText} from '../../../components/Text';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../utilities/colors';
import constants from '../../../utilities/constants';
import Props from './types';
import StarRating from 'react-native-star-rating';

export default class Dashboard extends Component<Props> {
  state = {
    showSearch: false,
    data: [
      {
        poster_path: '/kVr5zIAFSPRQ57Y1zE7KzmhzdMQ.jpg',
        video: false,
        id: 505026,
        overview:
          'Belgian sleuth Hercule Poirot boards a glamorous river steamer with enough champagne to fill the Nile. But his Egyptian vacation turns into a thrilling search for a murderer when a picture-perfect couple’s idyllic honeymoon is tragically cut short.',
        release_date: '2022-02-09',
        vote_count: 682,
        adult: false,
        backdrop_path: '/lRbDyjI7HEaXxflFQbYpqHRGFBJ.jpg',
        vote_average: 6.6,
        genre_ids: [80, 18, 9648],
        title: 'Death on the Nile',
        original_language: 'en',
        original_title: 'Death on the Nile',
        popularity: 419.929,
        media_type: 'movie',
        starCount: 5,
      },
    ],
  };

  showSearch = () => {
    this.setState({showSearch: !this.state.showSearch});
  };

  renderItems = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('MovieDetails', {item: item})
        }>
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
              backgroundColor: colors.secondary,
              marginEnd: moderateScale(10),
              width: '70%',
              borderBottomRightRadius: moderateScale(10),
              borderTopRightRadius: moderateScale(10),
            }}>
            <AppText
              style={{
                marginTop: moderateScale(10),
                marginStart: moderateScale(10),
              }}>
              Top Movie this week
            </AppText>
            <AppText
              style={{
                marginStart: moderateScale(10),
                fontSize: moderateScale(16),
                fontWeight: 'bold',
                marginTop: moderateScale(10),
              }}>
              {item.original_title}
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
              {new Date(item.release_date).getFullYear()}
            </AppText>
          </View>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={3}
            fullStarColor={'#f3db40'}
            iconSet={'FontAwesome'}
            selectedStar={(rating) => console.log('Count', rating)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Container>
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(20),
            marginBottom: moderateScale(20),
            marginHorizontal: moderateScale(10),
            justifyContent: 'space-between',
          }}>
          <AppText style={{fontSize: moderateScale(30), fontWeight: 'bold'}}>
            Top Movies
          </AppText>

          <View>
            {!this.state.showSearch && (
              <Icon
                name={'search1'}
                style={{marginHorizontal: moderateScale(10)}}
                size={moderateScale(20)}
                color={colors.white}
                onPress={this.showSearch}
              />
            )}
            {this.state.showSearch && (
              <View style={{flexDirection: 'row'}}>
                <Search
                  onChangeText={text => console.log(text)}
                  value={'number'}
                  placeholder="useless placeholder"
                />
                <Icon
                  color={colors.white}
                  style={{marginHorizontal: moderateScale(10)}}
                  name={'close'}
                  size={moderateScale(20)}
                  onPress={this.showSearch}
                />
              </View>
            )}
          </View>
        </View>

        <FlatList data={this.state.data} renderItem={this.renderItems} />
      </Container>
    );
  }
}
