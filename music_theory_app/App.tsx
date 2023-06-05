/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  FlatList,
} from 'react-native';
import Level from './src/models/Level';
import LevelScreen from './src/screens/LevelScreen';




function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <LevelScreen></LevelScreen>
      </View>
    </SafeAreaView>
  );
}



export default App;
