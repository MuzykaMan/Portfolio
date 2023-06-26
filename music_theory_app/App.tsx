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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConceptScreen from './src/screens/ConceptScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Level'>
        <Stack.Screen name="Level" component={LevelScreen} />
        <Stack.Screen name="Concept" component={ConceptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
