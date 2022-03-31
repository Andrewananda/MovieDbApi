import React, {Component} from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Container} from '../../../components/Container';
import {connect} from 'react-redux';
import {AppState} from '../../../redux/store';
import {AppText} from '../../../components/Text';
import Props from './types';
import constants from '../../../utilities/constants';
import {moderateScale} from 'react-native-size-matters';
import StarRating from 'react-native-star-rating';
import {MovieCard} from '../components/MovieCard';
import {bindActionCreators} from 'redux';
import {Result} from '../../../redux/type';
import {addSelectedMovie} from '../../../redux/action';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../utilities/colors';

class MovieDetails extends Component<Props> {
  state = {
    loading: true,
    item: {},
    trending: [],
  };
  componentDidMount() {
    this.getData();
  }

  getData() {
    let item = this.props.navigation;
    console.log('item', item);
  }

  renderItems = ({item}: any) => {
    return (
      <MovieCard
        movieList={this.props.movieList}
        navigation={() => {
          this.props.addSelectedMovie(item);
        }}
        item={item}
      />
    );
  };

  render() {
    return (
      <Container>
        <ImageBackground
          resizeMode={'stretch'}
          style={{height: moderateScale(360)}}
          resizeMethod={'resize'}
          source={{
            uri: constants.imageBaseUrl + this.props.selectedItem.poster_path,
          }}>
          <View>
            <Icon
              name={'arrowleft'}
              color={colors.white}
              style={{margin: moderateScale(10)}}
              size={moderateScale(30)}
              onPress={() => this.props.navigation.goBack()}
            />
            <View
              style={{justifyContent: 'center', marginTop: moderateScale(90)}}>
              {(this.props.selectedItem.vote_average / 2).toFixed() == '5' && (
                <AppText
                  style={{
                    marginStart: moderateScale(10),
                    color: '#CDCED1',
                    fontSize: moderateScale(14),
                  }}>
                  Top movie of the week
                </AppText>
              )}
              <View style={{flexDirection: 'row'}}>
                {(this.props.selectedItem.vote_average / 2).toFixed() ==
                  '5' && (
                  <Image
                    source={require('../../../../assets/gold_badge.png')}
                    style={styles.badgeImage}
                    resizeMode={'contain'}
                    resizeMethod={'resize'}
                  />
                )}
                <AppText
                  style={{
                    fontSize: moderateScale(32),
                    width: '80%',
                    marginStart:
                      (this.props.selectedItem.vote_average / 2).toFixed() ==
                      '5'
                        ? 0
                        : moderateScale(50),
                  }}>
                  {this.props.selectedItem.original_title
                    ? this.props.selectedItem.original_title
                    : this.props.selectedItem.original_name}
                </AppText>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}} />
                <View style={{flex: 6}}>
                  <AppText>{this.props.selectedItem.overview}</AppText>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: moderateScale(10),
                    }}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={(
                        this.props.selectedItem.vote_average / 2
                      ).toFixed()}
                      fullStarColor={'#f3db40'}
                      emptyStarColor={'#f3db40'}
                      starSize={moderateScale(15)}
                      containerStyle={{
                        justifyContent: 'center',
                        width: moderateScale(90),
                      }}
                      iconSet={'FontAwesome'}
                    />
                    <AppText>
                      {(this.props.selectedItem.vote_average / 2).toFixed() +
                        '/5'}
                    </AppText>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{marginBottom: moderateScale(80)}}>
          <AppText
            style={{fontSize: moderateScale(24), margin: moderateScale(10)}}>
            Also Trending
          </AppText>
          <FlatList
            data={this.props.movieList.filter(
              item => item !== this.props.selectedItem,
            )}
            renderItem={this.renderItems}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  selectedItem: state.appState.selectedMovie,
  movieList: state.appState.movieList,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      addSelectedMovie: (result: Result) => addSelectedMovie(result),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

const styles = StyleSheet.create({
  badgeImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    margin: 0,
  },
});
