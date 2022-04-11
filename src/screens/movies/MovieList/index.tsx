import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TextInput as Search,
  View,
} from 'react-native';
import {Container} from '../../../components/Container';
import {AppText} from '../../../components/Text';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../utilities/colors';
import Props from './types';
import {withNetwork} from '../../../utilities';
import {fetchMovies} from '../../../network';
import styles from './styles';
import {MovieCard} from '../components/MovieCard';
import Message from '../../../components/Message';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addMovieList, addSelectedMovie} from '../../../redux/action';
import {Result} from '../../../redux/type';

class Dashboard extends Component<Props> {
  state = {
    showSearch: false,
    data: [],
    loading: true,
    searchValue: '',
  };

  componentDidMount() {
    //fetch trending movies list
    this.getData();
  }

  getData() {
    //set loading to true
    this.setState({loading: true});
    //assign context to variable
    let _this = this;
    //check if there is network before performing call to the api
    withNetwork(
      function () {
        fetchMovies()
          .then(response => {
            let filteredMovies = response.data.results;
            filteredMovies.unshift(
              filteredMovies.splice(
                filteredMovies.findIndex(
                  item => (item.vote_average / 2).toFixed() === '5',
                ),
                1,
              )[0],
            );
            _this.arrayholder = filteredMovies;
            _this.setState({data: filteredMovies, loading: false});
          })
          .catch(error => {
            _this.message.showDialog(
              'An error occurred while fetching trending movies kindly try again later',
              () => {
                _this.getData();
                _this.message.dismiss();
                _this.setState({loading: false});
              },
            );
          });
      },
      function (error: any) {
        _this.message.showDialog(
          'No internet, kindly check your connectivity and try again',
          () => {
            _this.getData();
            _this.message.dismiss();
            _this.setState({loading: false});
          },
        );
      },
    );
  }

  //filter movies
  searchFilterFunction(text: string) {
    const newData = this.arrayholder.filter((data: any) => {
      const itemData = `${data.original_title}
    ${data.original_name} ${data.title} ${data.media_type} ${data.release_date} ${data.first_air_date}`;

      const textData = text;

      return itemData.indexOf(textData) > -1;
    });

    this.setState({data: newData, searchValue: text});
  }

  showSearch = () => {
    this.setState({showSearch: !this.state.showSearch, searchValue: ''}, () => {
      this.searchFilterFunction('');
    });
  };

  //render movies in card
  renderItems = ({item}: any) => {
    return (
      <MovieCard
        movieList={this.state.data}
        navigation={() => {
          this.props.addSelectedMovie(item);
          this.props.addMovieList(this.state.data);
          this.props.navigation.navigate('MovieDetails');
        }}
        item={item}
      />
    );
  };

  //render empty view when there are no movies
  renderEmptyComponent = () => {
    return (
      <View style={styles.emptyListContainer}>
        <AppText style={styles.txtNoMoviesFound}>No movies found</AppText>
      </View>
    );
  };

  render() {
    return (
      <Container>
        {/*Add message component reference*/}
        <Message ref={ref => (this.message = ref)} />
        <View style={styles.content}>
          {/*App header view*/}
          <AppText style={styles.txtTopMovies}>Top Movies</AppText>
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
                  onChangeText={text => this.searchFilterFunction(text)}
                  value={this.state.searchValue}
                  placeholder="Search"
                  placeholderTextColor={colors.white}
                  style={{
                    borderWidth: 1,
                    borderColor: colors.white,
                    color: colors.white,
                    height: moderateScale(40),
                    width: moderateScale(150),
                  }}
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
        {/*When status is loading display this view*/}
        {this.state.loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              color={colors.white}
              style={{alignSelf: 'center'}}
              size={moderateScale(20)}
            />
          </View>
        ) : (
          <FlatList
            data={this.state.data}
            renderItem={this.renderItems}
            ListEmptyComponent={this.renderEmptyComponent}
          />
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      addSelectedMovie: (result: Result) => addSelectedMovie(result),
      addMovieList: (movieList: Result[]) => addMovieList(movieList),
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(Dashboard);
