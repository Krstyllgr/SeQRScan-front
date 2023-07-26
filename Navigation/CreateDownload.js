import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Create from '../app/Create';
import DownloadScreen from '../app/DownloadScreen';

const Stack = createStackNavigator();

function CreateDownload() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Create" component={Create}/>
        <Stack.Screen name="DownloadScreen" component={DownloadScreen} />
      </Stack.Navigator>
  );
}

export default CreateDownload;