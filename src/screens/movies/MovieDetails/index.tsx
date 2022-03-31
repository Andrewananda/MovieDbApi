import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container} from '../../../components/Container';
import Props from '../MovieList/types';

export default class MovieDetails extends Component<Props> {
  state = {
    loading: true,
    item: {},
    trending: [],
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    let item = this.props.navigation;
    console.log('item', item);
  }

  render() {
    return (
      <Container>

      </Container>
    );
  }
}
