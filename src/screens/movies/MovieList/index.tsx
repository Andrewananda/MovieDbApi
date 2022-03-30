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

export default class Dashboard extends Component<Props> {
  state = {
    showSearch: false,
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    let _this = this;
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
            _this.setState({data: filteredMovies, loading: false});
          })
          .catch(error => {
            console.log('Error', error);
          });
      },
      function (error: any) {
        console.log('Error', error);
      },
    );
  }

  showSearch = () => {
    this.setState({showSearch: !this.state.showSearch});
  };

  renderItems = ({item}: any) => {
    return <MovieCard navigation={this.props.navigation} item={item} />;
  };

  render() {
    return (
      <Container>
        <View style={styles.content}>
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

        {this.state.loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              color={colors.white}
              style={{alignSelf: 'center'}}
              size={moderateScale(20)}
            />
          </View>
        ) : (
          <FlatList data={this.state.data} renderItem={this.renderItems} />
        )}
      </Container>
    );
  }
}
