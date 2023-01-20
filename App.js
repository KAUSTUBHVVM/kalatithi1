import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Funny from './screens/Funny';
import Math from './screens/Math';
import Nature from './screens/Nature';
import Science from './screens/Science';
import May from './screens/May';
import June from './screens/june';
import July from './screens/july';
import August from './screens/August';
import September from './screens/September';
import October from './screens/October';
import November from './screens/November';
import December from './screens/December';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Science: Science,
  Math: Math,
  Funny: Funny,
  Nature: Nature,
  May: May,
  June: June,
  July: July,
  August: August,
  September: September,
  October : October,
  November: November,
  December: December,
});

const AppContainer = createAppContainer(AppNavigator);
