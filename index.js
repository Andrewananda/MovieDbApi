/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as StoreProvider} from 'react-redux';
import appStore from './src/redux/store';
import {createStore} from 'redux';

const store = createStore(appStore);

export default function Main() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
