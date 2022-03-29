import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/screens/splash';
import Dashboard from './src/screens/movies/MovieList';
import MovieDetails from './src/screens/movies/MovieDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={'splash'}
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'Dashboard'}
          component={Dashboard}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'MovieDetails'}
          component={MovieDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
