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
import LevelScreen from './src/screens/LevelScreen';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConceptScreen from './src/screens/ConceptScreen';
import ContentScreen from './src/screens/ContentScreen';
import TestScreen from './src/screens/TestScreen';

export interface RootStackParamList extends ParamListBase {
  Level: undefined;
  Concept: {levelId: number};
  Content: {content: string};
  Test: {testLink: string}
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Level'>
        <Stack.Screen name="Level" component={LevelScreen} />
        <Stack.Screen name="Concept" component={ConceptScreen} />
        <Stack.Screen name="Content" component={ContentScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
