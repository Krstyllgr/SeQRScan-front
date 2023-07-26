import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ErrorScreen from '../app/ErrorScreen';
import SafeScreen from '../app/SafeScreen'
import TextScreen from '../app/TextScreen';
import ScanScreen from '../app/ScanScreen';

const Stack = createStackNavigator();

function ScanNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScanScreen" component={ScanScreen}/>
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
        <Stack.Screen name="SafeScreen" component={SafeScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
      </Stack.Navigator>
  );
}

export default ScanNavigator;